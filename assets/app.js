// BookedJA — shared client-side utilities (prototype)
// All state lives in localStorage under a single namespaced key.

const STORAGE_KEY = 'bookedja:v1';
const USD_TO_JMD = 158; // illustrative FX rate for the prototype
const PLATFORM_FEE = 0.18;               // BookedJA platform fee (single source of truth)
const OPERATOR_SHARE = 1 - PLATFORM_FEE; // share released to the operator
const PLATFORM_FEE_LABEL = Math.round(PLATFORM_FEE * 100) + '%';

// Per-booking payout helpers — use the fee rate snapshotted on the booking,
// falling back to the current platform constants for older records.
function bookingFeeRate(b) {
  return (b && typeof b.feeRate === 'number') ? b.feeRate : PLATFORM_FEE;
}
function bookingOperatorShare(b) { return 1 - bookingFeeRate(b); }
function bookingPayoutJMD(b) { return b.totalJMD * bookingOperatorShare(b); }
function bookingFeeLabel(b) { return Math.round(bookingFeeRate(b) * 100) + '%'; }

const STORE = {
  _read() { try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch { return {}; } },
  _write(data) { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); },
  get(key) { return this._read()[key]; },
  set(key, value) { const d = this._read(); d[key] = value; this._write(d); },
  reset() { localStorage.removeItem(STORAGE_KEY); }
};

function getBookings() { return STORE.get('bookings') || []; }
function saveBookings(arr) { STORE.set('bookings', arr); }
function addBooking(b) {
  const all = getBookings();
  all.push(b);
  saveBookings(all);
}
function getBooking(id) { return getBookings().find(b => b.id === id); }
function updateBooking(id, patch) {
  const all = getBookings();
  const idx = all.findIndex(b => b.id === id);
  if (idx === -1) return null;
  all[idx] = { ...all[idx], ...patch };
  saveBookings(all);
  return all[idx];
}
function bookingsForVendor(vendorId) {
  return getBookings().filter(b => b.vendorId === vendorId);
}

function generateBookingRef() {
  const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ'; // omit confusable 0/O/1/I
  let s = 'BJA-';
  for (let i = 0; i < 6; i++) s += chars[Math.floor(Math.random() * chars.length)];
  return s;
}

function fmtUSD(n) {
  return '$' + Number(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
function fmtJMD(n) {
  return 'J$' + Math.round(Number(n)).toLocaleString('en-JM');
}
function fmtDate(iso) {
  if (!iso) return '';
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
}
function fmtDateTime(iso) {
  if (!iso) return '';
  return new Date(iso).toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' });
}
function cleanText(value) {
  return String(value == null ? '' : value).replace(/\s+/g, ' ').trim();
}
function escapeHTML(value) {
  const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  return String(value == null ? '' : value).replace(/[&<>"']/g, ch => map[ch]);
}
function decodeHTML(value) {
  const el = document.createElement('textarea');
  el.innerHTML = String(value == null ? '' : value);
  return el.value;
}
function safeText(value) {
  return escapeHTML(decodeHTML(value));
}

// ---- Vendors: seed catalogue + host-created listings (low-friction onboarding) ----
function getCustomVendors() { return STORE.get('customVendors') || []; }
function saveCustomVendors(arr) { STORE.set('customVendors', arr); }
function getAllVendors() { return (window.VENDORS || []).concat(getCustomVendors()); }
// Patch a host-created listing in place (used by the admin verification console)
function updateCustomVendor(id, patch) {
  const all = getCustomVendors();
  const idx = all.findIndex(v => v.id === id);
  if (idx === -1) return null;
  all[idx] = Object.assign({}, all[idx], patch);
  saveCustomVendors(all);
  return all[idx];
}

function getVendor(id) {
  return getAllVendors().find(v => v.id === id);
}

// Default image / duration / time slots per category (for newly created host listings)
const CATEGORY_DEFAULTS = {
  Tour:      { image: './assets/images/green-hills.jpg',    durationHrs: 2,   times: ['09:00', '13:00'] },
  Food:      { image: './assets/images/pelican-bar.jpg',    durationHrs: 2.5, times: ['12:00', '17:00'] },
  Transport: { image: './assets/images/jamaica-road.jpg',   durationHrs: 1,   times: ['on request'] },
  Stay:      { image: './assets/images/treasure-beach.jpg', durationHrs: 0,   times: ['from 3:00 PM'] }
};

// ---- Host ACCOUNT profile (stored separately from listings) ----
function getHostProfile() { return STORE.get('hostProfile') || null; }
function saveHostProfile(p) { STORE.set('hostProfile', p); return p; }

// Create/refresh the host's account profile. Called once at registration —
// NOT when adding extra listings, so a returning host's details can't be overwritten.
function createHostProfile(data) {
  const existing = getHostProfile();
  const profile = {
    id: (existing && existing.id) || ('host-acct-' + Date.now().toString(36)),
    name: cleanText(data.name),
    phone: cleanText(data.phone),
    email: cleanText(data.email),
    town: cleanText(data.town || ''),
    createdAt: (existing && existing.createdAt) || new Date().toISOString()
  };
  return saveHostProfile(profile);
}

// Create a LISTING (asset) linked to the current host profile. Saved as a DRAFT
// (not public until verified). Never touches the account profile.
function createHostListing(data) {
  const profile = getHostProfile() || {};
  const def = CATEGORY_DEFAULTS[data.category] || CATEGORY_DEFAULTS.Tour;
  const id = 'host-' + Date.now().toString(36) + Math.floor(Math.random() * 1000);
  const listing = {
    id, custom: true, status: 'draft', hostId: profile.id || null,
    category: data.category,
    name: profile.name || 'New host',
    title: cleanText(data.title),
    town: profile.town || '',
    durationHrs: def.durationHrs,
    pricePerPersonUSD: Number(data.pricePerPersonUSD) || 0,
    rating: 0, trips: 0, tier: 'New',
    image: def.image,
    short: cleanText(data.short || ''),
    about: '', included: [], bring: [], itinerary: [], times: def.times,
    cancellation: 'To be set during verification.',
    verification: { identity: false, jtb: false, insured: false, tpdco: false, firstAid: false },
    reviews: [],
    host: { name: profile.name || '', phone: profile.phone || '', email: profile.email || '' },
    createdAt: new Date().toISOString()
  };
  const all = getCustomVendors();
  all.push(listing);
  saveCustomVendors(all);
  return listing;
}

function getQuery(key) {
  return new URLSearchParams(window.location.search).get(key);
}

// "Logged in" vendor (for the operator dashboard demo). Defaults to Ras Delroy.
function getCurrentVendorId() {
  return STORE.get('currentVendorId') || 'ras-delroy';
}
function setCurrentVendorId(id) { STORE.set('currentVendorId', id); }

// Booking status helpers
const BOOKING_STATUS = {
  confirmed: { label: 'Confirmed', tone: 'leaf' },
  in_progress: { label: 'In progress', tone: 'gold' },
  completed: { label: 'Completed', tone: 'ocean' },
  cancelled: { label: 'Cancelled', tone: 'coral' }
};

// Seed booking for demo (only if there are no bookings yet)
function seedDemoBookingsIfEmpty() {
  if (getBookings().length > 0) return;
  const today = new Date();
  const inTwoDays = new Date(today.getTime() + 2*86400e3).toISOString().slice(0,10);
  const inOneWeek = new Date(today.getTime() + 7*86400e3).toISOString().slice(0,10);
  const lastWeek = new Date(today.getTime() - 6*86400e3).toISOString().slice(0,10);
  const seeds = [
    {
      id: 'BJA-DEMO22', vendorId: 'ras-delroy',
      date: inTwoDays, time: '09:30', guests: 2,
      visitorName: 'Hannah Petersen', visitorEmail: 'hannah@example.com', visitorPhone: '+44 7700 900000',
      status: 'confirmed', createdAt: new Date().toISOString()
    },
    {
      id: 'BJA-DEMO47', vendorId: 'miss-cynthia',
      date: inOneWeek, time: '17:00', guests: 4,
      visitorName: 'The Aoki family', visitorEmail: 'aoki@example.com', visitorPhone: '+81 90 1234 5678',
      status: 'confirmed', createdAt: new Date().toISOString()
    },
    {
      id: 'BJA-DEMO15', vendorId: 'ras-delroy',
      date: lastWeek, time: '09:30', guests: 3,
      visitorName: 'Liam O’Connor', visitorEmail: 'liam@example.com', visitorPhone: '+353 87 000 0000',
      status: 'completed', createdAt: new Date(today.getTime() - 8*86400e3).toISOString()
    }
  ];
  // attach pricing snapshot from current vendor data
  seeds.forEach(s => {
    const v = getVendor(s.vendorId);
    if (!v) return;
    s.experienceTitle = v.title;
    s.town = v.town;
    s.durationHrs = v.durationHrs;
    s.pricePerPersonUSD = v.pricePerPersonUSD;
    s.totalUSD = v.pricePerPersonUSD * s.guests;
    s.totalJMD = s.totalUSD * USD_TO_JMD;
    s.feeRate = PLATFORM_FEE;
    s.vendorName = v.name;
    s.image = v.image;
  });
  saveBookings(seeds);
}

// ---- WhatsApp-first helpers (v2 redesign) ----
// Platform / BookedJA contact line. Currently the founder's WhatsApp so every
// "WhatsApp BookedJA" button resolves to a real chat during the pilot & demo.
// Swap for a dedicated BookedJA business number before a wider public launch.
const PLATFORM_WHATSAPP = '16132903791';

function waDigits(phone) {
  return String(phone == null ? '' : phone).replace(/[^\d]/g, '');
}
function waLink(phone, message) {
  const num = waDigits(phone) || PLATFORM_WHATSAPP;
  return 'https://wa.me/' + num + (message ? '?text=' + encodeURIComponent(message) : '');
}
// Best WhatsApp number for a vendor: seed data, host profile, or platform line
function vendorWhatsApp(v) {
  if (!v) return PLATFORM_WHATSAPP;
  return v.whatsapp || (v.host && v.host.phone) || PLATFORM_WHATSAPP;
}
// Return the first given name, skipping common titles/honorifics and "The",
// so prefilled greetings read "Hi Cynthia!" — not "Hi Miss!" or "Hi The!".
const NAME_TITLES = new Set([
  'mr', 'mr.', 'mrs', 'mrs.', 'ms', 'ms.', 'miss', 'master', 'mister',
  'sister', 'sis', 'brother', 'bro', 'captain', 'capt', 'capt.',
  'ras', 'dr', 'dr.', 'sir', 'madam', 'madame', 'auntie', 'aunty', 'uncle', 'the'
]);
function firstName(name) {
  const parts = cleanText(name).split(' ').filter(Boolean);
  for (let i = 0; i < parts.length; i++) {
    if (!NAME_TITLES.has(parts[i].toLowerCase())) return parts[i];
  }
  return parts[0] || '';
}
// Inline WhatsApp glyph for buttons
function waIcon(cls) {
  return '<svg class="' + (cls || 'wa-ico') + '" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 3.5A11.7 11.7 0 0 0 12 0C5.4 0 0 5.4 0 12c0 2.1.5 4.1 1.6 5.9L0 24l6.3-1.6A12 12 0 0 0 12 24c6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.5-8.5ZM12 22a10 10 0 0 1-5.1-1.4l-.4-.2-3.7 1 1-3.7-.2-.4A9.9 9.9 0 0 1 2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 7.1 2.9A9.9 9.9 0 0 1 22 12c0 5.5-4.5 10-10 10Zm5.5-7.5c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.1-.2.3-.8 1-.9 1.2-.2.2-.4.2-.7.1a8.2 8.2 0 0 1-2.4-1.5 9 9 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.3-.6.1-.2 0-.4 0-.6l-1-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4 0-.1-.2-.2-.5-.4Z"/></svg>';
}

// ---- Shared UI: toast, offline banner, mobile nav, service worker ----
function showToast(msg) {
  let t = document.getElementById('bjaToast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'bjaToast';
    t.className = 'toast hidden';
    t.setAttribute('role', 'status');
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.remove('hidden');
  clearTimeout(t._t);
  t._t = setTimeout(() => t.classList.add('hidden'), 2800);
}

function initOfflineBar() {
  let bar = document.getElementById('offlineBar');
  if (!bar) {
    bar = document.createElement('div');
    bar.id = 'offlineBar';
    bar.className = 'offline-bar';
    bar.textContent = 'No internet right now — no problem. Everything still works and is saved on this phone.';
    document.body.prepend(bar);
  }
  const sync = () => document.body.classList.toggle('is-offline', !navigator.onLine);
  window.addEventListener('online', () => { sync(); showToast('Back online ✓'); });
  window.addEventListener('offline', sync);
  sync();
}

function initNavToggle() {
  const btn = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return;
  if (!/^https?:$/.test(location.protocol)) return;
  navigator.serviceWorker.register('./sw.js').catch(() => { /* offline mode unavailable — app still works */ });
}

// Auto-seed + shared UI when app.js loads after vendors.js
window.addEventListener('DOMContentLoaded', () => {
  try { seedDemoBookingsIfEmpty(); } catch (e) { console.warn('seed failed', e); }
  try { initOfflineBar(); initNavToggle(); registerServiceWorker(); } catch (e) { console.warn('ui init failed', e); }
});
