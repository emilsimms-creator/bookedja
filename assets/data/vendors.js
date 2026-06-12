// BookedJA seed vendor data — pilot cohort (14 operators)
// Set on window so all pages share it without a module loader.
window.VENDORS = [
  {
    id: 'ras-delroy', category: 'Tour', name: 'Ras Delroy', title: 'Mangrove Safari with Ras Delroy',
    town: 'Black River', durationHrs: 2.5, pricePerPersonUSD: 45, rating: 5.0, trips: 124, tier: 'Top Local',
    image: './assets/images/black-river.jpg',
    short: 'Crocodile-spotting and mangrove ecology with a third-generation Black River boatman.',
    about: 'Ras Delroy has piloted boats on the Black River for thirty years. His father and grandfather both worked these waters. He knows every bird call and every croc by sight.',
    included: ['2.5-hour river safari', 'Locally-roasted coffee on the return leg', 'Cold drinks &amp; light snacks', 'Life jackets &amp; rain ponchos'],
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
    id: 'wesley-rum', category: 'Tour', name: 'Wesley', title: 'Rum, Cane &amp; the Maggotty River with Wesley',
    town: 'Appleton', durationHrs: 3.5, pricePerPersonUSD: 78, rating: 4.8, trips: 64, tier: 'Verified',
    image: './assets/images/appleton-cane.jpg',
    short: 'Walk Appleton’s cane fields, taste single-cask rums, hear the river’s old industrial stories.',
    about: 'Wesley grew up in Maggotty. His grandfather worked the cane fields. He runs his tours as the perfect counterweight to a tour-bus visit: slow, personal, full of stories no brochure tells.',
    included: ['Walking tour through cane fields', 'Three single-cask tasting pours', 'Lunch at a roadside cook-shop', 'Transport from Black River pickup point'],
    bring: ['Walking shoes', 'Hat', 'Government-issued ID for tasting'],
    itinerary: [
      { time: '10:00', activity: 'Pickup at Black River meeting point' },
      { time: '10:45', activity: 'Walk Appleton-adjacent cane fields' },
      { time: '12:00', activity: 'Riverside lunch in Maggotty' },
      { time: '13:00', activity: 'Single-cask tasting flight' },
      { time: '13:30', activity: 'Return drive' }
    ],
    times: ['10:00', '13:00'],
    cancellation: 'Full refund up to 48 hours before. 50% within 24 hours.',
    verification: { identity: true, jtb: true, insured: true, tpdco: true, firstAid: false },
    reviews: [
      { name: 'Mark, Cape Town', stars: 5, text: 'The opposite of a coach tour. Wesley took us where Appleton tours can’t.' },
      { name: 'Lena, Berlin', stars: 5, text: 'Felt local, felt real, the rum was incredible.' }
    ]
  },
  {
    id: 'mr-lloyd', category: 'Tour', name: 'Mr. Lloyd', title: 'Fishing Village Walk with Mr. Lloyd',
    town: 'Treasure Beach', durationHrs: 2, pricePerPersonUSD: 35, rating: 4.9, trips: 41, tier: 'Verified',
    image: './assets/images/treasure-beach.jpg',
    short: 'Meet the captains at Calabash Bay. Hear what’s biting, what’s changing, what’s still the same.',
    about: 'Mr. Lloyd has fished these waters his whole life. His walking tour introduces visitors to the captains, the boat-makers, the women who clean the catch.',
    included: ['Walking tour of Calabash Bay', 'Stops at three fishing households', 'Fresh coconut at the halfway point'],
    bring: ['Walking shoes', 'Sun hat', 'Camera'],
    itinerary: [
      { time: '08:30', activity: 'Meet at Calabash Bay village square' },
      { time: '09:00', activity: 'Visit the early-morning fish landing' },
      { time: '09:45', activity: 'Boatbuilder’s shed + coconut stop' },
      { time: '10:30', activity: 'Tour ends at the cove' }
    ],
    times: ['06:30', '08:30', '16:00'],
    cancellation: 'Full refund up to 24 hours before.',
    verification: { identity: true, jtb: false, insured: true, tpdco: true, firstAid: true },
    reviews: [
      { name: 'Carla, Madrid', stars: 5, text: 'Felt like being given the keys to the village.' },
      { name: 'Owen, Bristol', stars: 5, text: 'Mr. Lloyd is exactly why you come to Jamaica.' }
    ]
  },
  {
    id: 'andrene-ys', category: 'Tour', name: 'Andrene', title: 'YS Falls &amp; Bamboo Avenue with Andrene',
    town: 'YS Falls', durationHrs: 4, pricePerPersonUSD: 95, rating: 5.0, trips: 23, tier: 'Verified',
    image: './assets/images/ys-falls.jpg',
    short: 'Botany, swimming and the old Lacovia stories — guided by a forestry-trained local biologist.',
    about: 'Andrene trained as a forestry biologist before guiding full-time. Her tours blend science, swimming and storytelling.',
    included: ['YS Falls entry', 'Bamboo Avenue drive-through', 'Lunch at a country cook-shop', 'Transport from Black River'],
    bring: ['Swimsuit', 'Towel', 'Waterproof phone bag'],
    itinerary: [
      { time: '09:00', activity: 'Pickup at Black River' },
      { time: '10:00', activity: 'Bamboo Avenue + roadside stories' },
      { time: '10:45', activity: 'YS Falls swim + climb' },
      { time: '12:30', activity: 'Country lunch' },
      { time: '13:00', activity: 'Return drive' }
    ],
    times: ['08:30', '12:00'],
    cancellation: 'Full refund up to 48 hours before.',
    verification: { identity: true, jtb: true, insured: true, tpdco: true, firstAid: true },
    reviews: [
      { name: 'Priya, Mumbai', stars: 5, text: 'I learned more about Jamaican ecology in four hours than I expected from a holiday.' }
    ]
  },
  {
    id: 'janelle-cliffs', category: 'Tour', name: 'Janelle', title: 'Cliffs, Coffee &amp; the Legend with Janelle',
    town: 'Lover’s Leap', durationHrs: 1.5, pricePerPersonUSD: 28, rating: 0, trips: 0, tier: 'New',
    image: './assets/images/cliff-coast.jpg',
    short: 'A short hike, the old folktale told properly, locally-roasted Blue Mountain coffee on the cliff edge.',
    about: 'Janelle is a recent Team Jamaica graduate. She grew up looking at these cliffs from her kitchen window.',
    included: ['1.5-hour cliffside walk', 'Single-origin Blue Mountain coffee', 'The Lover’s Leap folktale, told properly'],
    bring: ['Walking shoes', 'A wind layer'],
    itinerary: [
      { time: '07:30', activity: 'Meet at Lover’s Leap car park' },
      { time: '07:45', activity: 'Cliffside walk' },
      { time: '08:30', activity: 'Coffee + folktale at the lookout' },
      { time: '09:00', activity: 'Tour ends' }
    ],
    times: ['07:30', '16:00'],
    cancellation: 'Full refund up to 12 hours before.',
    verification: { identity: true, jtb: false, insured: true, tpdco: true, firstAid: false },
    reviews: []
  },
  {
    id: 'captain-currie', category: 'Tour', name: 'Captain Currie', title: 'Maroon Heritage Walk with Captain Currie',
    town: 'Accompong / Maggotty', durationHrs: 8, pricePerPersonUSD: 140, rating: 4.9, trips: 18, tier: 'Verified',
    image: './assets/images/green-hills.jpg',
    short: 'Visit Accompong Town with a Maroon historian. Drumming, abeng, and the treaty grounds.',
    about: 'Captain Currie is a Maroon historian from Accompong. He has led visiting heads of state and academic delegations.',
    included: ['Full-day Maroon heritage tour', 'Lunch in Accompong', 'Drumming demonstration', 'Round-trip transport'],
    bring: ['Walking shoes', 'Long trousers', 'Camera (still photography only at the treaty grounds)'],
    itinerary: [
      { time: '07:00', activity: 'Pickup from South Coast hotels' },
      { time: '09:00', activity: 'Arrival in Accompong' },
      { time: '10:00', activity: 'Treaty grounds + abeng' },
      { time: '12:30', activity: 'Lunch + drumming' },
      { time: '14:00', activity: 'Return drive' },
      { time: '16:00', activity: 'Drop-off' }
    ],
    times: ['07:00'],
    cancellation: 'Full refund up to 72 hours before.',
    verification: { identity: true, jtb: true, insured: true, tpdco: true, firstAid: true },
    reviews: [
      { name: 'Prof. Adesola, Lagos', stars: 5, text: 'A masterclass. Captain Currie is the real keeper of the story.' }
    ]
  },
  {
    id: 'miss-cynthia', category: 'Food', name: 'Miss Cynthia', title: 'Kitchen Supper with Miss Cynthia',
    town: 'Treasure Beach', durationHrs: 3, pricePerPersonUSD: 65, rating: 4.9, trips: 58, tier: 'Top Local',
    image: './assets/images/mangrove-river.jpg',
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
    id: 'captain-floyd', category: 'Food', name: 'Captain Floyd', title: 'Boat-to-Bar Seafood with Captain Floyd',
    town: 'Pelican Bar', durationHrs: 4, pricePerPersonUSD: 85, rating: 4.9, trips: 92, tier: 'Verified',
    image: './assets/images/pelican-bar.jpg',
    short: 'Sail from Parottee to Pelican Bar. Lunch is whatever was pulled out of the water this morning.',
    about: 'Captain Floyd has been ferrying visitors out to the Pelican Bar sandbar for fifteen years.',
    included: ['Round-trip boat to Pelican Bar', 'Seafood lunch on the sandbar', 'Two cold beers per guest', 'Snorkel gear'],
    bring: ['Swimsuit', 'Sunscreen', 'Towel', 'Cash for tips'],
    itinerary: [
      { time: '11:00', activity: 'Meet at Parottee Bay' },
      { time: '11:30', activity: 'Sail out to Pelican Bar' },
      { time: '12:00', activity: 'Lunch + snorkel time' },
      { time: '14:30', activity: 'Return sail' },
      { time: '15:00', activity: 'Trip ends at Parottee' }
    ],
    times: ['10:30', '12:00'],
    cancellation: 'Full refund up to 24 hours before. Weather-cancellation: full refund anytime.',
    verification: { identity: true, jtb: true, insured: true, tpdco: true, firstAid: true },
    reviews: [
      { name: 'Yasmin, Dubai', stars: 5, text: 'A bar in the middle of the sea. Bewildering, perfect.' }
    ]
  },
  {
    id: 'sister-pat', category: 'Food', name: 'Sister Pat', title: 'Steam-Pot Feast with Sister Pat',
    town: 'Little Ochi', durationHrs: 2.5, pricePerPersonUSD: 55, rating: 4.8, trips: 47, tier: 'Verified',
    image: './assets/images/pelican-bar.jpg',
    short: 'The original Little Ochi steam-pot method, shown to you by a 30-year veteran of the cookhouse.',
    about: 'Sister Pat has been cooking in the Little Ochi cookhouse for thirty years. Her steam pot is legendary.',
    included: ['Cookhouse demo of the steam-pot method', 'Lunch (lobster, snapper, breadfruit)', 'Soursop juice + rum punch'],
    bring: ['Camera', 'Appetite'],
    itinerary: [
      { time: '12:00', activity: 'Meet at the Little Ochi cookhouse' },
      { time: '12:15', activity: 'Steam-pot demo' },
      { time: '13:15', activity: 'Sit-down lunch by the water' },
      { time: '14:30', activity: 'Tour ends' }
    ],
    times: ['12:00'],
    cancellation: 'Full refund up to 24 hours before.',
    verification: { identity: true, jtb: false, insured: true, tpdco: true, firstAid: false },
    reviews: [
      { name: 'Daniel, Stockholm', stars: 5, text: 'The lobster. Speechless.' }
    ]
  },
  {
    id: 'the-henrys', category: 'Food', name: 'The Henrys', title: 'Beachfire Cookout with The Henrys',
    town: 'Bluefields', durationHrs: 3, pricePerPersonUSD: 70, rating: 4.9, trips: 36, tier: 'Verified',
    image: './assets/images/cliff-coast.jpg',
    short: 'A family that’s been cooking on this beach for forty years. Lobster, breadfruit, and a cooler full of stories.',
    about: 'The Henry family has run beachfire suppers on this stretch of Bluefields for two generations.',
    included: ['Beachfire dinner', 'Lobster + breadfruit + rice &amp; peas', 'Two rum punches per guest', 'Family stories'],
    bring: ['Long sleeves for after sunset', 'Bug spray'],
    itinerary: [
      { time: '17:30', activity: 'Meet at Bluefields beach' },
      { time: '18:00', activity: 'Watch the fire start + sunset' },
      { time: '18:45', activity: 'Dinner served' },
      { time: '20:30', activity: 'Evening ends' }
    ],
    times: ['17:30'],
    cancellation: 'Full refund up to 24 hours before.',
    verification: { identity: true, jtb: false, insured: true, tpdco: true, firstAid: false },
    reviews: []
  },
  {
    id: 'marcus-transfer', category: 'Transport', name: 'Marcus', title: 'Private Transfer with Marcus', vehicle: 'White Toyota Land Cruiser', plate: 'PP 4821',
    town: 'MBJ airport → Treasure Beach', durationHrs: 2.5, pricePerPersonUSD: 135, rating: 5.0, trips: 312, tier: 'Top Local',
    image: './assets/images/jamaica-road.jpg',
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
  },
  {
    id: 'donovan-day', category: 'Transport', name: 'Donovan', title: 'Day with Donovan', vehicle: 'Silver Toyota Prado', plate: 'PP 7193',
    town: 'South Coast day-driver', durationHrs: 8, pricePerPersonUSD: 220, rating: 4.9, trips: 188, tier: 'Verified',
    image: './assets/images/hero-coast.jpg',
    short: 'Black River → YS Falls → Appleton → Lover’s Leap. Build your own itinerary; he knows every road.',
    about: 'Donovan runs full-day South Coast itineraries. Bring a list of what you want to see; he handles the route.',
    included: ['8-hour vehicle hire', 'Fuel + tolls', 'Up to 5 guests', 'Roadside lunch stop (your treat)'],
    bring: ['Itinerary ideas', 'Cash for attractions + lunch'],
    itinerary: [
      { time: 'You set the start', activity: 'Pickup from your hotel' },
      { time: 'Variable', activity: 'Stops at the spots you choose' },
      { time: '+8 hrs', activity: 'Drop-off' }
    ],
    times: ['08:00', '09:00'],
    cancellation: 'Full refund up to 48 hours before.',
    verification: { identity: true, jtb: true, insured: true, tpdco: true, firstAid: false },
    reviews: []
  },
  {
    id: 'sandra-transfer', category: 'Transport', name: 'Sandra', title: 'Private Transfer with Sandra', vehicle: 'White Toyota HiAce van', plate: 'PP 2056',
    town: 'KIN airport → Treasure Beach', durationHrs: 3.5, pricePerPersonUSD: 155, rating: 5.0, trips: 96, tier: 'Verified',
    image: './assets/images/jamaica-road.jpg',
    short: 'Female JUTA-licensed driver, family-friendly van, child seats available, fixed fare.',
    about: 'Sandra specialises in family pickups. Two child seats, a booster seat, and a van big enough for the suitcases.',
    included: ['Door-to-door private van', 'Up to 7 guests', 'Two child seats + one booster', 'Fixed fare'],
    bring: ['Flight details', 'Hotel address'],
    itinerary: [
      { time: 'On arrival', activity: 'Sandra meets you at KIN arrivals' },
      { time: '+45 min', activity: 'Loaded + heading west' },
      { time: '+3 hrs', activity: 'Arrive at Treasure Beach' }
    ],
    times: ['any time'],
    cancellation: 'Full refund up to 24 hours before.',
    verification: { identity: true, jtb: true, insured: true, tpdco: true, firstAid: true },
    reviews: []
  },
  {
    id: 'anthony-hops', category: 'Transport', name: 'Anthony', title: 'Hotel-to-Experience with Anthony', vehicle: 'Grey Toyota Voxy', plate: 'PP 8830',
    town: 'Treasure Beach short hops', durationHrs: 0.5, pricePerPersonUSD: 18, rating: 4.8, trips: 240, tier: 'Verified',
    image: './assets/images/green-hills.jpg',
    short: 'Short hops between your Treasure Beach guesthouse and any BookedJA experience. Flat per leg.',
    about: 'Anthony is the go-to short-hop driver in Treasure Beach. Quick to respond, always on time.',
    included: ['One-way drop or pickup', 'Up to 4 guests'],
    bring: ['Just yourselves'],
    itinerary: [
      { time: 'On request', activity: 'WhatsApp Anthony 30 min before' },
      { time: '+5 min', activity: 'Pickup' },
      { time: '+15 min', activity: 'Drop-off' }
    ],
    times: ['on request'],
    cancellation: 'Full refund up to 1 hour before.',
    verification: { identity: true, jtb: false, insured: true, tpdco: true, firstAid: false },
    reviews: []
  }
];

// WhatsApp contact per operator. For the pilot & live demo, every host routes
// to the founder's WhatsApp so "Ask {host}" / "Message" buttons open a real chat.
// Replace with each operator's own verified number before a wider public launch.
(function () {
  const DEMO_WHATSAPP = '16132903791';
  window.VENDORS.forEach(v => { v.whatsapp = DEMO_WHATSAPP; });
})();
