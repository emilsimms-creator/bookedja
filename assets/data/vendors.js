// BookedJA seed vendor data — demonstration listings (one per category)
// These are sample listings that show how each category works end-to-end.
// Real, in-person-verified rural operators replace them as the pilot recruits them.
// Set on window so all pages share it without a module loader.
window.VENDORS = [
  {
    id: 'ras-delroy', sample: true, category: 'Tour', name: 'Ras Delroy', title: 'Mangrove Safari with Ras Delroy',
    town: 'Black River', durationHrs: 2.5, pricePerPersonUSD: 45, rating: 5.0, trips: 124, tier: 'Top Local',
    image: './assets/images/black-river.webp',
    short: 'Crocodile-spotting and mangrove ecology with a third-generation Black River boatman.',
    about: 'Ras Delroy has piloted boats on the Black River for thirty years. His father and grandfather both worked these waters. He knows every bird call and every croc by sight.',
    included: ['2.5-hour river safari', 'Locally-roasted coffee on the return leg', 'Cold drinks & light snacks', 'Life jackets & rain ponchos'],
    bring: ['Sun protection', 'Camera', 'Long sleeves if going at sunrise'],
    itinerary: [
      { time: '09:30', activity: 'Meet at the Black River boathouse' },
      { time: '09:45', activity: 'Cast off into the morass' },
      { time: '10:30', activity: 'Crocodile-sighting stops + bird identification' },
      { time: '11:15', activity: 'Return leg + coffee at the riverbank cafe' },
      { time: '12:00', activity: 'Trip ends back at the boathouse' }
    ],
    times: ['07:00', '09:30', '13:00', '15:30'],
    cancellation: 'Full refund up to 48 hours before. 50% refund within 24 hours. Free rebook in case of weather.',
    verification: { identity: true, jtb: true, insured: true, tpdco: true, firstAid: true },
    reviews: [
      { name: 'Hannah, London', stars: 5, text: 'Ras knew every bird call by name. We saw three crocs and learned a hundred things.' },
      { name: 'Hiroshi, Tokyo', stars: 5, text: 'Exactly the experience the website promised. The coffee on the return was the best part.' },
      { name: 'Aisha, Toronto', stars: 5, text: 'Felt completely safe. Picked us up on time. Treated us like family.' }
    ]
  },
  {
    id: 'miss-cynthia', sample: true, category: 'Food', name: 'Miss Cynthia', title: 'Kitchen Supper with Miss Cynthia',
    town: 'Treasure Beach', durationHrs: 3, pricePerPersonUSD: 65, rating: 4.9, trips: 58, tier: 'Top Local',
    image: './assets/images/pelican-bar.webp',
    short: 'Cook escovitch and rundown using produce from her sister’s farm next door.',
    about: 'Miss Cynthia’s kitchen is on a small farm three minutes from Calabash Bay. Her sister grows the okra. Her brother fishes the snapper.',
    included: ['Three-course Jamaican supper, cooked together', 'Wine + rum cocktails', 'Recipe cards to take home', 'Transport within Treasure Beach'],
    bring: ['Appetite', 'Camera', 'Allergy notes ahead of time'],
    itinerary: [
      { time: '17:00', activity: 'Pickup from your Treasure Beach guesthouse' },
      { time: '17:15', activity: 'Tour the kitchen garden' },
      { time: '17:45', activity: 'Cook escovitch + rundown together' },
      { time: '19:00', activity: 'Sit-down supper' },
      { time: '20:00', activity: 'Drop-off' }
    ],
    times: ['17:00'],
    cancellation: 'Full refund up to 48 hours before.',
    verification: { identity: true, jtb: false, insured: true, tpdco: true, firstAid: false },
    reviews: [
      { name: 'Aisha, Toronto', stars: 5, text: 'Miss Cynthia cooked with us in her own kitchen. The okra was from her sister’s farm. I will never forget that night.' },
      { name: 'Tom, NYC', stars: 5, text: 'The best meal of any holiday we’ve ever taken. Miss Cynthia is a star.' }
    ]
  },
  {
    id: 'marcus-transfer', sample: true, category: 'Transport', name: 'Marcus', title: 'Private Transfer with Marcus', vehicle: 'White Toyota Land Cruiser', plate: 'PP 4821',
    town: 'MBJ airport → Treasure Beach', durationHrs: 2.5, pricePerPersonUSD: 135, rating: 5.0, trips: 312, tier: 'Top Local',
    image: './assets/images/jamaica-road.webp',
    short: 'JUTA-licensed driver, insured SUV, fixed fare. English-fluent local guide along the route.',
    about: 'Marcus has been driving the MBJ → Treasure Beach corridor for ten years. JUTA licensed since 2018.',
    included: ['Door-to-door private SUV', 'Fixed fare — no haggling', 'Cold water + cool towel on pickup', 'Optional Black River coffee stop'],
    bring: ['Flight details for tracking', 'Hotel address'],
    itinerary: [
      { time: 'On arrival', activity: 'Marcus meets you at MBJ arrivals with name board' },
      { time: '+30 min', activity: 'Loaded + on the road south' },
      { time: '+90 min', activity: 'Optional Black River coffee stop' },
      { time: '+150 min', activity: 'Arrive at Treasure Beach hotel' }
    ],
    times: ['any time — matches your flight'],
    cancellation: 'Full refund up to 24 hours before.',
    verification: { identity: true, jtb: true, insured: true, tpdco: true, firstAid: true },
    reviews: [
      { name: 'Petersen family, Hamburg', stars: 5, text: 'Marcus picked us up exactly when the pass said. The price never moved. The conversation made the trip.' }
    ]
  }
];

// WhatsApp contact per operator. For the pilot & live demo, every host routes
// to the founder's WhatsApp so "Ask {host}" / "Message" buttons open a real chat.
// Replace with each operator's own verified number before a wider public launch.
(function () {
  const DEMO_WHATSAPP = '16132903791';
  window.VENDORS.forEach(v => { v.whatsapp = DEMO_WHATSAPP; });
})();
