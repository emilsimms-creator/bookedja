/* BookedJA service worker — offline-first for spotty rural connectivity.
   Strategy: precache the full app shell, then stale-while-revalidate so
   pages open instantly from cache and quietly refresh when signal allows. */

const CACHE = 'bookedja-v2.8.0';

const PRECACHE = [
  './index.html',
  './about.html',
  './why-bookedja.html',
  './experiences.html',
  './vendor-detail.html',
  './book.html',
  './pass.html',
  './my-bookings.html',
  './vendor-dashboard.html',
  './vendor-scan.html',
  './vendors.html',
  './become-a-host.html',
  './admin.html',
  './manifest.webmanifest',
  './assets/styles.css',
  './assets/fonts.css',
  './assets/app.js',
  './assets/qrcode.min.js',
  './assets/data/vendors.js',
  './assets/images/bookedja-icon.png',
  './assets/images/bookedja-mark-dark.png',
  './assets/images/bookedja-mark-light.png',
  './assets/images/bookedja-wordmark-dark.png',
  './assets/images/bookedja-wordmark-light.png',
  './assets/images/hero-coast.jpg',
  './assets/images/black-river.jpg',
  './assets/images/appleton-cane.jpg',
  './assets/images/treasure-beach.jpg',
  './assets/images/ys-falls.jpg',
  './assets/images/cliff-coast.jpg',
  './assets/images/green-hills.jpg',
  './assets/images/mangrove-river.jpg',
  './assets/images/pelican-bar.jpg',
  './assets/images/jamaica-road.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return; // never intercept wa.me etc.

  event.respondWith(
    caches.open(CACHE).then(async (cache) => {
      // Ignore query strings so pass.html?ref=… hits the cached shell
      const cached = await cache.match(req, { ignoreSearch: true });
      const network = fetch(req)
        .then((res) => {
          if (res && res.ok) cache.put(req, res.clone());
          return res;
        })
        .catch(() => null);
      if (cached) {
        network.catch(() => {}); // refresh in background
        return cached;
      }
      const fresh = await network;
      if (fresh) return fresh;
      // Last resort: offline navigation to a page we never cached
      if (req.mode === 'navigate') {
        const home = await cache.match('./index.html');
        if (home) return home;
      }
      return new Response('Offline', { status: 503, statusText: 'Offline' });
    })
  );
});
