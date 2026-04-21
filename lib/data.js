// Tour images
const tourImages = {
  t1: 'https://www.greensrentacab.com/media/assets/2026-01-18-11-18-08-SedanAirportTaxi.jpg',
  t2: 'https://images.unsplash.com/photo-1535208632259-841d129a6af5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwzfHxTb3V0aCUyMEluZGlhJTIwdHJhdmVsfGVufDB8fHx8MTc3NjY3Mzc5NHww&ixlib=rb-4.1.0&q=85',
  t3: 'https://images.pexels.com/photos/28882621/pexels-photo-28882621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  t4: 'https://images.pexels.com/photos/29613184/pexels-photo-29613184.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  t5: 'https://images.unsplash.com/photo-1552927561-f515c528935a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHw0fHxoaWxscyUyMHdhdGVyZmFsbHN8ZW58MHx8fHwxNzc2NjczODA2fDA&ixlib=rb-4.1.0&q=85',
  t6: 'https://images.unsplash.com/photo-1605601922759-e1eb9119517e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2ODl8MHwxfHNlYXJjaHwzfHxJbmRpYW4lMjB0ZW1wbGUlMjBwYWxhY2V8ZW58MHx8fHwxNzc2NjczODA2fDA&ixlib=rb-4.1.0&q=85',
  t7: 'https://images.unsplash.com/photo-1584516437421-6d269a2fe578?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2ODl8MHwxfHNlYXJjaHw0fHxJbmRpYW4lMjB0ZW1wbGUlMjBwYWxhY2V8ZW58MHx8fHwxNzc2NjczODA2fDA&ixlib=rb-4.1.0&q=85',
  t8: 'https://images.unsplash.com/photo-1720463903383-c45df62da719?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2ODl8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB0ZW1wbGUlMjBwYWxhY2V8ZW58MHx8fHwxNzc2NjczODA2fDA&ixlib=rb-4.1.0&q=85',
  t9: 'https://images.pexels.com/photos/11473544/pexels-photo-11473544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  t10: 'https://images.pexels.com/photos/34912764/pexels-photo-34912764.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
};

// Company Info
export const company = {
  name: 'Go Trip Cabs',
  tagline: 'Comfortable \u00B7 Safe \u00B7 Reliable',
  phone: '+919886673753',
  phoneDisplay: '+91 9886673753',
  whatsapp: '919886673753',
  paymentMethods: ['Cash', 'UPI', 'Google Pay', 'PhonePe', 'Paytm', 'Bank Transfer (IMPS / NEFT)'],
  paymentUPI: '9886673753',
};

// Hero slider images
export const heroImages = [
  { url: 'https://images.pexels.com/photos/36988911/pexels-photo-36988911.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', title: 'Book Airport Taxi in Bangalore', subtitle: 'Reliable & Affordable Airport Transfers' },
  { url: 'https://images.pexels.com/photos/11384934/pexels-photo-11384934.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', title: 'Outstation Cabs from Bangalore', subtitle: 'Travel Anywhere, Anytime' },
  { url: 'https://images.pexels.com/photos/13716747/pexels-photo-13716747.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', title: 'Local Taxi Hire in Bangalore', subtitle: 'Hourly Rentals for City Travel' },
  { url: 'https://images.unsplash.com/photo-1535208632259-841d129a6af5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwzfHxTb3V0aCUyMEluZGlhJTIwdHJhdmVsfGVufDB8fHx8MTc3NjY3Mzc5NHww&ixlib=rb-4.1.0&q=85', title: 'Explore South India Tour Packages', subtitle: 'Discover Beautiful Destinations' },
];

// Car images
const carImages = {
  sedan: 'https://www.greensrentacab.com/media/assets/2026-01-18-11-18-08-SedanAirportTaxi.jpg',
  etios: 'https://www.greensrentacab.com/media/assets/2026-01-18-11-18-38-EtiosAirportTaxi.jpg',
  ciaz: 'https://www.greensrentacab.com/media/assets/2026-01-18-11-19-19-CiazAirportTaxi.png',
  ertiga: 'https://www.greensrentacab.com/media/assets/2026-01-18-11-19-36-ErtigaAirportTaxi.png',
  innova: 'https://www.greensrentacab.com/media/assets/2026-01-18-11-21-56-InnovaAirportTaxi.png',
  crysta: 'https://www.greensrentacab.com/media/assets/2026-01-18-11-25-05-InnovaCrystaAirportTaxi.png',
  hycross: 'https://www.greensrentacab.com/media/assets/2026-01-18-11-25-48-InnovaHycrossAirportTaxi.png',
  tempo: 'https://www.greensrentacab.com/media/assets/2026-01-18-11-26-23-TempoTravellerAirport.png',
};

function getCarImg(seats) {
  if (seats <= 4) return carImages.sedan;
  if (seats <= 6) return carImages.suv;
  return carImages.mpv;
}

// Airport Taxis
export const airportTaxis = [
  { id: 'airport-sedan', name: 'Sedan', models: 'Sedan', seats: 4, fare: 899, distance: 30, toll: 'Optional', image: carImages.sedan },

  { id: 'airport-etios', name: 'Etios Airport Taxi', models: 'Toyota Etios', seats: 4, fare: 899, distance: 30, toll: 'Optional', image: carImages.etios },

  { id: 'airport-ciaz', name: 'Ciaz Airport Taxi', models: 'Maruti Ciaz', seats: 4, fare: 1199, distance: 30, toll: 'Optional', image: carImages.ciaz },

  { id: 'airport-ertiga', name: 'Ertiga Airport Taxi', models: 'Maruti Ertiga', seats: 6, fare: 1299, distance: 30, toll: 'Optional', image: carImages.ertiga },

  { id: 'airport-innova', name: 'Innova Airport Taxi', models: 'Toyota Innova', seats: 7, fare: 1799, distance: 30, toll: 'Optional', image: carImages.innova },

  { id: 'airport-innova-crysta', name: 'Innova Crysta Airport Taxi', models: 'Toyota Innova Crysta', seats: 7, fare: 1999, distance: 40, toll: 'Optional', image: carImages.crysta },

  { id: 'airport-innova-hycross', name: 'Innova Hycross Airport Taxi', models: 'Toyota Innova Hycross', seats: 7, fare: 2999, distance: 40, toll: 'Optional', image: carImages.hycross },

  { id: 'airport-tempo', name: 'Tempo Traveller For Airport', models: 'Tempo Traveller', seats: 12, fare: 3999, distance: 40, toll: 'Optional', image: carImages.tempo },
];

export const airportPolicy = [
  'Service is strictly point-to-point (Airport Drop/Pickup only)',
  'No multiple pickups or extra drops allowed',
  'No waiting is permitted during the journey',
  'Toll, parking & airport charges extra (as applicable)',
  'Customers are responsible for their belongings',
  'Vehicles must not be used for any illegal activities',
];

// Local Taxis
export const localTaxis = [
  { id: 'local-sedan', name: 'Sedan Rental Cab', models: 'Sedan', seats: 4, fare: 1200, hours: 4, kms: 40, extraKm: 15, extraHr: 150, image: carImages.sedan },

  { id: 'local-etios', name: 'Etios Rental Cab', models: 'Toyota Etios', seats: 4, fare: 2200, hours: 4, kms: 40, extraKm: 15, extraHr: 150, image: carImages.etios },

  { id: 'local-ertiga', name: 'Ertiga Rental Cab', models: 'Maruti Ertiga', seats: 6, fare: 2799, hours: 4, kms: 40, extraKm: 17, extraHr: 170, image: carImages.ertiga },

  { id: 'local-innova', name: 'Innova Rental Cab', models: 'Toyota Innova', seats: 7, fare: 2999, hours: 4, kms: 40, extraKm: 20, extraHr: 200, image: carImages.innova },
  { id: 'local-crysta', name: 'Crysta Rental Cab', models: 'Toyota Innova Crysta', seats: 7, fare: 3499, hours: 4, kms: 40, extraKm: 20, extraHr: 200, image: carImages.crysta },
  { id: 'local-hycross', name: 'Hycross Rental Cab', models: 'Toyota Innova Hycross', seats: 7, fare: 4499, hours: 4, kms: 40, extraKm: 25, extraHr: 250, image: carImages.hycross },
  { id: 'local-tempo', name: 'Tempo Traveller', models: 'Tempo Traveller', seats: 12, fare: 4499, hours: 8, kms: 80, extraKm: 30, extraHr: 300, image: carImages.tempo },
  { id: 'local-tempo-premium', name: 'Tempo Traveller (Premium)', models: 'Tempo Traveller', seats: 12, fare: 4999, hours: 8, kms: 80, extraKm: 30, extraHr: 300, image: carImages.tempo },
];

export const localNotes = [
  'Opening and closing hours, as well as total kilometers, will be calculated on a pickup to pickup (garage to garage) basis.',
  'Customers are responsible for their personal belongings.',
  'Service is applicable within Bangalore city limits only.',
  'Vehicles must not be used for any illegal activities.',
];

// Outstation Taxis
export const outstationTaxis = [
  { id: 'out-sedan', name: 'Sedan Outstation Cab', models: 'Sedan', seats: 4, farePerKm: 11, driverBata: 300, nightBata: 350, minKm: 300, image: carImages.sedan },
  { id: 'out-etios', name: 'Etios Outstation Cab', models: 'Toyota Etios', seats: 4, farePerKm: 12, driverBata: 300, nightBata: 350, minKm: 300, image: carImages.etios },
  { id: 'out-ertiga', name: 'Ertiga Outstation Cab', models: 'Maruti Ertiga', seats: 6, farePerKm: 15, driverBata: 400, nightBata: 350, minKm: 300, image: carImages.ertiga },
  { id: 'out-ciaz', name: 'Ciaz Outstation Cab', models: 'Maruti Ciaz', seats: 4, farePerKm: 15, driverBata: 400, nightBata: 350, minKm: 300, image: carImages.ciaz },
  { id: 'out-innova', name: 'Innova Outstation Cab', models: 'Toyota Innova', seats: 7, farePerKm: 17, driverBata: 400, nightBata: 350, minKm: 300, image: carImages.innova },
  { id: 'out-innova-crysta', name: 'Innova Crysta Outstation Cab', models: 'Toyota Innova Crysta', seats: 7, farePerKm: 19, driverBata: 400, nightBata: 350, minKm: 300, image: carImages.crysta },
  { id: 'out-tempo', name: 'Tempo Traveller Outstation', models: 'Tempo Traveller (Non-AC)', seats: 12, farePerKm: 20, driverBata: 700, nightBata: 350, minKm: 300, image: carImages.tempo },
  { id: 'out-innova-hycross', name: 'Innova Hycross Outstation Cab', models: 'Toyota Innova Hycross', seats: 7, farePerKm: 22, driverBata: 500, nightBata: 350, minKm: 300, image: carImages.hycross },
  { id: 'out-tempo-ac', name: 'Tempo Traveller Outstation (A/C)', models: 'Tempo Traveller (AC)', seats: 12, farePerKm: 23, driverBata: 700, nightBata: 350, minKm: 300, image: carImages.tempo },
];

export const outstationTerms = {
  minimumKmPerDay: 300,
  calendarDay: '12:00 AM to 11:59 PM',
  kmBilling: 'Usually, the distance is charged from the garage to the garage. In some cases will be billed point to point.',
  driverCharges: 'Separate charges apply for the driver, including a daily allowance (Bata) from 6:00 AM to 10:00 PM, and an additional allowance for night driving if the vehicle is used after 10:00 PM or before 6:00 AM.',
  parkingToll: 'Parking fees and highway tolls are not included in the base price.',
  interstateTaxes: 'Interstate taxes apply when crossing from Karnataka into Tamil Nadu, Kerala, Goa, Telangana, or Pondicherry.',
  oneWayDrop: 'If you book a one-way trip, you will still be billed for the distance both ways, but sometimes discounts may be available.',
};

// Tour Packages
export const tourCategories = [
  { id: 'all', label: 'All Packages' },
  { id: 'one-day', label: 'One Day' },
  { id: 'two-day', label: '2D / 1N' },
  { id: 'three-day', label: '3D / 2N' },
  { id: 'four-day', label: '4D / 3N' },
  { id: 'spiritual', label: 'Spiritual' },
  { id: 'nature', label: 'Nature' },
  { id: 'heritage', label: 'Heritage' },
  { id: 'hill-station', label: 'Hill Stations' },
  { id: 'beach', label: 'Beaches' },
];

export const tourGlobalIncludes = [
  'Pickup & Drop (Bangalore City)',
  'Cab for entire trip duration',
  'Driver Bata (06:00 AM \u2013 10:00 PM)',
  'Fuel Charges',
  'Toll & Parking Charges',
  'Complete Sightseeing Transportation',
];

export const tourGlobalExcludes = [
  'Meals (Breakfast / Lunch / Dinner)',
  'Entry Tickets (if any)',
  'Driver Allowance (After 10:00 PM)',
  'Any extra usage beyond package time & distance',
];

export const tourGlobalNotes = [
  'This is not a guided tour; driver will not act as a guide.',
  'Guests must manage their sightseeing time.',
  'AC may be switched off in hilly areas.',
  'Package can be customized as per your plan.',
  'Kindly confirm final rates before booking.',
  'Actual fares may vary based on season, weekends, festivals.',
];

export const bookingPolicy = {
  advancePercent: 20,
  beforeTripPercent: 50,
  balanceTiming: 'Immediately upon trip completion',
};

export const cancellationPolicy = [
  { condition: 'Same-day cancellation (on booking date)', refund: '100%' },
  { condition: '7+ days before the trip', refund: '75%' },
  { condition: '3 to 6 days before the trip', refund: '50%' },
  { condition: '1 to 3 days before the trip', refund: '25%' },
  { condition: 'Within 24 hours / 1 day before trip', refund: '0% (Non-refundable)' },
];

export const tourPackages = [
  {
    id: 'tour-adiyogi', slug: 'bangalore-to-adiyogi-isha-foundation', title: 'Bangalore to Adiyogi (Isha Foundation)',
    type: 'one-day', duration: '1 Day', timing: '06:00 AM \u2013 10:00 PM', distanceKm: '160\u2013200 KM', category: 'spiritual',
    image: tourImages.t6, gallery: [tourImages.t6, tourImages.t8, tourImages.t1],
    highlights: ['Adiyogi Shiva Statue', 'Isha Foundation Campus'],
    places: [{ name: 'Adiyogi Shiva Statue', description: 'Isha Foundation, Chikkaballapur' }],
    itinerary: null,
    vehicles: [
      { type: 'Sedan (4 Seater)', models: 'Etios / Swift Dzire', seats: 4, price: 4999 },
      { type: 'Ertiga (6 Seater)', models: 'Maruti Ertiga', seats: 6, price: 5499 },
      { type: 'SUV (6\u20137 Seater)', models: 'Innova Crysta', seats: 7, price: 6499 },
      { type: 'Tempo Traveller (12 Seater)', models: 'Tempo Traveller', seats: 12, price: 7499 },
    ],
  },
  {
    id: 'tour-nandi-hills', slug: 'nandi-hills-sunrise-trip', title: 'Nandi Hills Sunrise View Trip',
    type: 'one-day', duration: '1 Day', timing: 'Pickup: 3:00 AM \u2013 4:00 AM | Drop: 10:00 AM', distanceKm: '160\u2013180 KM', category: 'nature',
    image: tourImages.t10, gallery: [tourImages.t10, tourImages.t5, tourImages.t3],
    highlights: ['Nandi Hills Sunrise', 'Tipu Sultan Fort', 'Bhoga Nandeeshwara Temple'],
    places: [{ name: 'Nandi Hills' }, { name: 'Sunrise View Point' }, { name: 'Tipu Sultan Fort' }, { name: 'Bhoga Nandeeshwara Temple' }],
    itinerary: null,
    vehicles: [
      { type: 'Sedan (4 Seater)', models: 'Etios / Swift Dzire', seats: 4, price: 4999 },
      { type: 'Ertiga (6 Seater)', models: 'Maruti Ertiga', seats: 6, price: 5499 },
      { type: 'SUV (6\u20137 Seater)', models: 'Innova Crysta', seats: 7, price: 6499 },
      { type: 'Tempo Traveller (12 Seater)', models: 'Tempo Traveller', seats: 12, price: 6999, priceMax: 7499 },
    ],
  },
  {
    id: 'tour-kotilingeshwara', slug: 'bangalore-to-kotilingeshwara', title: 'Bangalore to Kotilingeshwara Temple',
    type: 'one-day', duration: '1 Day', timing: '06:00 AM \u2013 08:00 PM', distanceKm: '180\u2013220 KM', category: 'spiritual',
    image: tourImages.t8, gallery: [tourImages.t8, tourImages.t6, tourImages.t1],
    highlights: ['Kotilingeshwara Temple', 'Largest Shiva Linga'],
    places: [{ name: 'Kotilingeshwara Temple', description: 'One of the largest Shiva Linga temples in the world' }],
    itinerary: null,
    vehicles: [
      { type: 'Sedan (4 Seater)', models: 'Etios / Swift Dzire', seats: 4, price: 4999 },
      { type: 'Ertiga (6 Seater)', models: 'Maruti Ertiga', seats: 6, price: 5699 },
      { type: 'SUV (6\u20137 Seater)', models: 'Innova Crysta', seats: 7, price: 6499 },
      { type: 'Tempo Traveller (12 Seater)', models: 'Tempo Traveller', seats: 12, price: 7499 },
    ],
  },
  {
    id: 'tour-mysore-1day', slug: 'bangalore-to-mysore-one-day', title: 'Bangalore to Mysore One Day Trip',
    type: 'one-day', duration: '1 Day', timing: '06:00 AM \u2013 10:00 PM', distanceKm: '300\u2013350 KM', category: 'heritage',
    image: tourImages.t4, gallery: [tourImages.t4, tourImages.t6, tourImages.t8],
    highlights: ['Mysore Palace', 'Chamundi Hills', 'Brindavan Gardens'],
    places: [{ name: 'Mysore Palace' }, { name: 'Chamundi Hills & Sri Chamundeshwari Temple' }, { name: 'Mysore Zoo' }, { name: 'St. Philomena\'s Church' }, { name: 'Krishnarajasagara Dam & Brindavan Gardens' }, { name: 'Mysore Market', note: 'Optional' }],
    itinerary: null,
    vehicles: [
      { type: 'Sedan (4 Seater)', models: 'Etios / Swift Dzire', seats: 4, price: 5599 },
      { type: 'Ertiga (6 Seater)', models: 'Maruti Ertiga', seats: 6, price: 6699 },
      { type: 'SUV (6\u20137 Seater)', models: 'Innova Crysta', seats: 7, price: 7599 },
      { type: 'Tempo Traveller (12 Seater)', models: 'Tempo Traveller', seats: 12, price: 7999, priceMax: 8499 },
    ],
  },
  {
    id: 'tour-bangalore-local', slug: 'bangalore-local-sightseeing', title: 'Bangalore Local Sightseeing',
    type: 'one-day', duration: '12 Hours', timing: '08:00 AM \u2013 08:00 PM', distanceKm: '120 KM', category: 'city',
    image: tourImages.t9, gallery: [tourImages.t9, tourImages.t1, tourImages.t4],
    highlights: ['Lalbagh', 'Bangalore Palace', 'ISKCON Temple', 'MG Road'],
    places: [{ name: 'Lalbagh Botanical Garden' }, { name: 'Cubbon Park' }, { name: 'Bull Temple' }, { name: 'Bangalore Palace', note: 'Closed on Mondays' }, { name: 'Vidhana Soudha' }, { name: 'ISKCON Temple Bangalore' }, { name: 'Jawaharlal Nehru Planetarium' }, { name: 'MG Road / Commercial Street', note: 'Shopping' }],
    itinerary: null,
    vehicles: [
      { type: 'Sedan (4 Seater)', models: 'Etios / Swift Dzire', seats: 4, price: 3999 },
      { type: 'Ertiga (6 Seater)', models: 'Maruti Ertiga', seats: 6, price: 5499 },
      { type: 'SUV (6\u20137 Seater)', models: 'Innova Crysta', seats: 7, price: 5999 },
      { type: 'Tempo Traveller (12 Seater)', models: 'Tempo Traveller', seats: 12, price: 6499 },
    ],
  },
  {
    id: 'tour-shivanasamudra', slug: 'bangalore-shivanasamudra-talakadu', title: 'Bangalore to Shivanasamudra & Talakadu',
    type: 'one-day', duration: '1 Day', timing: '06:00 AM \u2013 10:00 PM', distanceKm: '280\u2013320 KM', category: 'nature',
    image: tourImages.t5, gallery: [tourImages.t5, tourImages.t10, tourImages.t2],
    highlights: ['Gaganachukki Falls', 'Bharachukki Falls', 'Talakadu Sand Dunes'],
    places: [{ name: 'Shivanasamudra Falls' }, { name: 'Gaganachukki Falls' }, { name: 'Bharachukki Falls' }, { name: 'Talakadu (Sand Dunes & Temples)' }, { name: 'Somanatheshwara Temple' }],
    itinerary: null,
    vehicles: [
      { type: 'Sedan (4 Seater)', models: 'Etios / Swift Dzire', seats: 4, price: 5499 },
      { type: 'Ertiga (6 Seater)', models: 'Maruti Ertiga', seats: 6, price: 6499 },
      { type: 'SUV (6\u20137 Seater)', models: 'Innova Crysta', seats: 7, price: 7499 },
      { type: 'Tempo Traveller (12 Seater)', models: 'Tempo Traveller', seats: 12, price: 8499 },
    ],
  },
  {
    id: 'tour-hogenakkal', slug: 'bangalore-to-hogenakkal', title: 'Bangalore to Hogenakkal',
    type: 'one-day', duration: '1 Day', timing: '06:00 AM \u2013 10:00 PM', distanceKm: '280\u2013300 KM', category: 'nature',
    image: tourImages.t5, gallery: [tourImages.t5, tourImages.t2, tourImages.t3],
    highlights: ['Hogenakkal Falls', 'Kaveri Coracle Ride'],
    places: [{ name: 'Hogenakkal Falls' }, { name: 'Kaveri River (Coracle Ride)', note: 'Optional' }, { name: 'Local View Points & Bathing Areas' }],
    itinerary: null,
    vehicles: [
      { type: 'Sedan (4 Seater)', models: 'Etios / Swift Dzire', seats: 4, price: 5499 },
      { type: 'Ertiga (6 Seater)', models: 'Maruti Ertiga', seats: 6, price: 6999 },
      { type: 'SUV (6\u20137 Seater)', models: 'Innova Crysta', seats: 7, price: 7999 },
      { type: 'Tempo Traveller (12 Seater)', models: 'Tempo Traveller', seats: 12, price: 10499 },
    ],
  },
  {
    id: 'tour-lepakshi', slug: 'bangalore-to-lepakshi', title: 'Bangalore to Lepakshi',
    type: 'one-day', duration: '1 Day', timing: '06:00 AM \u2013 10:00 PM', distanceKm: '280\u2013300 KM', category: 'heritage',
    image: tourImages.t1, gallery: [tourImages.t1, tourImages.t8, tourImages.t4],
    highlights: ['Lepakshi Temple', 'Hanging Pillar', 'Lepakshi Nandi'],
    places: [{ name: 'Lepakshi Temple' }, { name: 'Lepakshi Nandi' }, { name: 'Hanging Pillar (Famous Attraction)' }, { name: 'Ancient Murals & Architecture' }],
    itinerary: null,
    vehicles: [
      { type: 'Sedan (4 Seater)', models: 'Etios / Swift Dzire', seats: 4, price: 5999 },
      { type: 'Ertiga (6 Seater)', models: 'Maruti Ertiga', seats: 6, price: 7499 },
      { type: 'SUV (6\u20137 Seater)', models: 'Innova Crysta', seats: 7, price: 8999 },
      { type: 'Tempo Traveller (12 Seater)', models: 'Tempo Traveller', seats: 12, price: 10799 },
    ],
  },
  {
    id: 'tour-pondicherry', slug: 'bangalore-to-pondicherry', title: 'Bangalore to Pondicherry',
    type: 'two-day', duration: '2 Days / 1 Night', distanceKm: '700 KM limit', category: 'beach',
    image: tourImages.t2, gallery: [tourImages.t2, tourImages.t10, tourImages.t9],
    highlights: ['Promenade Beach', 'Auroville', 'Sri Aurobindo Ashram', 'White Town'],
    places: [{ name: 'Promenade Beach' }, { name: 'Rock Beach' }, { name: 'Paradise Beach' }, { name: 'Sri Aurobindo Ashram' }, { name: 'Auroville & Matrimandir' }, { name: 'White Town' }, { name: 'Chunnambar Boat House' }],
    includes: ['Pickup & Drop (Bangalore City)', 'Cab for 2 Days', 'Driver Bata (2 Days)', 'Fuel Charges', 'Tamil Nadu & Pondicherry Border Tax', 'Complete Sightseeing Transportation'],
    excludes: ['Meals', 'Entry Tickets', 'Boating / Activity Charges', 'Extra driver bata after 10 PM', 'Toll & Parking Charges'],
    itinerary: null,
    vehicles: [
      { type: 'Sedan (4 Seater)', models: 'Etios / Swift Dzire', seats: 4, price: 11999 },
      { type: 'Ertiga (6 Seater)', models: 'Maruti Ertiga', seats: 6, price: 14900 },
      { type: 'SUV (6\u20137 Seater)', models: 'Innova Crysta', seats: 7, price: 17499 },
      { type: 'Tempo Traveller (12 Seater)', models: 'Tempo Traveller', seats: 12, price: 19999, priceMax: 21499 },
    ],
  },
  {
    id: 'tour-wayanad', slug: 'bangalore-to-wayanad', title: 'Bangalore to Wayanad',
    type: 'two-day', duration: '2 Days / 1 Night', distanceKm: '600\u2013700 KM', category: 'nature',
    image: tourImages.t2, gallery: [tourImages.t2, tourImages.t3, tourImages.t5],
    highlights: ['Edakkal Caves', 'Soochipara Waterfalls', 'Chembra Peak', 'Banasura Sagar Dam'],
    places: [{ name: 'Edakkal Caves' }, { name: 'Soochipara Waterfalls' }, { name: 'Meenmutty Waterfalls' }, { name: 'Pookode Lake' }, { name: 'Banasura Sagar Dam' }, { name: 'Chembra Peak (Trekking)' }, { name: 'Wayanad Wildlife Sanctuary' }],
    includes: ['Pickup & Drop (Bangalore City)', 'Cab for 2 Days', 'Driver Bata (2 Days)', 'Fuel Charges', 'Kerala State Entry Permit', 'Complete Sightseeing Transportation'],
    excludes: ['Meals', 'Entry Tickets', 'Trekking / Boating Charges', 'Extra driver bata after 10 PM', 'Toll & Parking Charges'],
    itinerary: null,
    vehicles: [
      { type: 'Sedan (4 Seater)', models: 'Etios / Swift Dzire', seats: 4, price: 11999 },
      { type: 'Ertiga (6 Seater)', models: 'Maruti Ertiga', seats: 6, price: 14999 },
      { type: 'SUV (6\u20137 Seater)', models: 'Innova Crysta', seats: 7, price: 17999 },
      { type: 'Tempo Traveller (12 Seater)', models: 'Tempo Traveller', seats: 12, price: 20499, priceMax: 21999 },
    ],
  },
  {
    id: 'tour-coorg', slug: 'bangalore-to-coorg', title: 'Bangalore to Coorg (Madikeri)',
    type: 'two-day', duration: '2 Days / 1 Night', distanceKm: '500\u2013600 KM', category: 'nature',
    image: tourImages.t3, gallery: [tourImages.t3, tourImages.t2, tourImages.t5],
    highlights: ['Abbey Falls', 'Dubare Elephant Camp', 'Golden Temple', 'Coffee Plantation'],
    places: [{ name: 'Abbey Falls' }, { name: 'Raja\'s Seat' }, { name: 'Madikeri Fort' }, { name: 'Dubare Elephant Camp' }, { name: 'Golden Temple (Namdroling Monastery)' }, { name: 'Nisargadhama' }, { name: 'Coffee Plantation Visit' }],
    itinerary: null,
    vehicles: [
      { type: 'Sedan (4 Seater)', models: 'Etios / Swift Dzire', seats: 4, price: 9499 },
      { type: 'Ertiga (6 Seater)', models: 'Maruti Ertiga', seats: 6, price: 11799 },
      { type: 'SUV (6\u20137 Seater)', models: 'Innova Crysta', seats: 7, price: 12999 },
      { type: 'Tempo Traveller (12 Seater)', models: 'Tempo Traveller', seats: 12, price: 13499, priceMax: 14799 },
    ],
  },
  {
    id: 'tour-chikkamagalur', slug: 'bangalore-to-chikkamagalur', title: 'Bangalore to Chikkamagalur',
    type: 'two-day', duration: '2 Days / 1 Night', distanceKm: '500\u2013600 KM', category: 'nature',
    image: tourImages.t10, gallery: [tourImages.t10, tourImages.t3, tourImages.t5],
    highlights: ['Mullayanagiri Peak', 'Hebbe Falls', 'Belur & Halebidu Temples'],
    places: [{ name: 'Mullayanagiri Peak' }, { name: 'Baba Budangiri Hills' }, { name: 'Jhari Waterfalls' }, { name: 'Hebbe Falls' }, { name: 'Hirekolale Lake' }, { name: 'Sringeri Sharada Peetham' }, { name: 'Belur & Halebidu Temples' }],
    itinerary: null,
    vehicles: [
      { type: 'Sedan (4 Seater)', models: 'Etios / Swift Dzire', seats: 4, price: 9499 },
      { type: 'Ertiga (6 Seater)', models: 'Maruti Ertiga', seats: 6, price: 11799 },
      { type: 'SUV (6\u20137 Seater)', models: 'Innova Crysta', seats: 7, price: 12999 },
      { type: 'Tempo Traveller (12 Seater)', models: 'Tempo Traveller', seats: 12, price: 13499, priceMax: 14799 },
    ],
  },
  {
    id: 'tour-sakleshpur', slug: 'bangalore-to-sakleshpur', title: 'Bangalore to Sakleshpur',
    type: 'two-day', duration: '2 Days / 1 Night', distanceKm: '550\u2013600 KM', category: 'nature',
    image: tourImages.t3, gallery: [tourImages.t3, tourImages.t10, tourImages.t2],
    highlights: ['Bisle View Point', 'Ettina Bhuja Trek', 'Manjarabad Fort'],
    places: [{ name: 'Manjarabad Fort' }, { name: 'Bisle View Point' }, { name: 'Magajahalli Waterfalls' }, { name: 'Ettina Bhuja Trek' }, { name: 'Coffee Plantation Walk' }],
    itinerary: null,
    vehicles: [
      { type: 'Sedan (4 Seater)', models: 'Etios / Swift Dzire', seats: 4, price: 9499 },
      { type: 'Ertiga (6 Seater)', models: 'Maruti Ertiga', seats: 6, price: 11799 },
      { type: 'SUV (6\u20137 Seater)', models: 'Innova Crysta', seats: 7, price: 12999 },
      { type: 'Tempo Traveller (12 Seater)', models: 'Tempo Traveller', seats: 12, price: 13499, priceMax: 14799 },
    ],
  },
  {
    id: 'tour-ooty', slug: 'bangalore-to-ooty', title: 'Bangalore to Ooty',
    type: 'two-day', duration: '2 Days / 1 Night', distanceKm: '600\u2013700 KM', category: 'hill-station',
    image: tourImages.t7, gallery: [tourImages.t7, tourImages.t3, tourImages.t5],
    highlights: ['Doddabetta Peak', 'Ooty Lake', 'Botanical Garden', 'Pykara Waterfalls'],
    places: [{ name: 'Ooty Lake' }, { name: 'Botanical Garden' }, { name: 'Rose Garden' }, { name: 'Doddabetta Peak' }, { name: 'Pine Forest' }, { name: 'Tea Factory & Museum' }, { name: 'Pykara Lake & Waterfalls' }],
    itinerary: null,
    vehicles: [
      { type: 'Sedan (4 Seater)', models: 'Etios / Swift Dzire', seats: 4, price: null, priceNote: 'Contact for price' },
      { type: 'Ertiga (6 Seater)', models: 'Maruti Ertiga', seats: 6, price: null, priceNote: 'Contact for price' },
      { type: 'SUV (6\u20137 Seater)', models: 'Innova Crysta', seats: 7, price: null, priceNote: 'Contact for price' },
      { type: 'Tempo Traveller (12 Seater)', models: 'Tempo Traveller', seats: 12, price: null, priceNote: 'Contact for price' },
    ],
  },
  {
    id: 'tour-tirupati', slug: 'bangalore-to-tirupati', title: 'Bangalore to Tirupati',
    type: 'two-day', duration: '2 Days / 1 Night', distanceKm: '500\u2013600 KM', category: 'spiritual',
    image: tourImages.t6, gallery: [tourImages.t6, tourImages.t8, tourImages.t4],
    highlights: ['Tirumala Balaji Temple', 'Sri Padmavathi Temple', 'Kapila Theertham'],
    places: [{ name: 'Tirumala Balaji Darshan' }, { name: 'Sri Padmavathi Ammavari Temple' }, { name: 'Kapila Theertham' }, { name: 'Govindaraja Swamy Temple' }],
    itinerary: [
      { day: 1, title: 'Tirupati', activities: ['Travel from Bangalore to Tirupati', 'Tirumala Balaji Darshan', 'Sri Padmavathi Ammavari Temple', 'Overnight Stay'] },
      { day: 2, title: 'Nearby & Return', activities: ['Kapila Theertham', 'Govindaraja Swamy Temple', 'Local sightseeing & shopping', 'Return to Bangalore'] },
    ],
    vehicles: [
      { type: 'Sedan (4 Seater)', models: 'Etios / Swift Dzire', seats: 4, price: 9999 },
      { type: 'Ertiga (6 Seater)', models: 'Maruti Ertiga', seats: 6, price: 12799 },
      { type: 'SUV (6\u20137 Seater)', models: 'Innova Crysta', seats: 7, price: 15499 },
      { type: 'Tempo Traveller (12 Seater)', models: 'Tempo Traveller', seats: 12, price: 16999, priceMax: 18199 },
    ],
  },
  {
    id: 'tour-dharmasthala', slug: 'bangalore-dharmasthala-kukke-subramanya', title: 'Bangalore to Dharmasthala & Kukke Subramanya',
    type: 'two-day', duration: '2 Days / 1 Night', distanceKm: '500\u2013650 KM', category: 'spiritual',
    image: tourImages.t8, gallery: [tourImages.t8, tourImages.t6, tourImages.t7],
    highlights: ['Dharmasthala Temple', 'Kukke Subramanya Temple', 'Western Ghats Scenic Drive'],
    places: [{ name: 'Sri Manjunatha Swamy Temple' }, { name: 'Sri Subramanya Swamy Temple' }, { name: 'Scenic Western Ghats Drive' }],
    itinerary: [
      { day: 1, title: 'Dharmasthala', activities: ['Travel from Bangalore', 'Sri Manjunatha Swamy Temple Darshan', 'Temple surroundings visit', 'Overnight Stay'] },
      { day: 2, title: 'Kukke Subramanya', activities: ['Sri Subramanya Swamy Temple Darshan', 'Scenic Western Ghats drive', 'Return Journey to Bangalore'] },
    ],
    vehicles: [
      { type: 'Sedan (4 Seater)', models: 'Etios / Swift Dzire', seats: 4, price: 9899 },
      { type: 'Ertiga (6 Seater)', models: 'Maruti Ertiga', seats: 6, price: 11999 },
      { type: 'SUV (6\u20137 Seater)', models: 'Innova Crysta', seats: 7, price: 13999 },
      { type: 'Tempo Traveller (12 Seater)', models: 'Tempo Traveller', seats: 12, price: 13999, priceMax: 15499 },
    ],
  },
  {
    id: 'tour-mysore-ooty', slug: 'bangalore-mysore-ooty', title: 'Bangalore \u2013 Mysore \u2013 Ooty',
    type: 'three-day', duration: '3 Days / 2 Nights', distanceKm: '800\u2013900 KM', category: 'multi-destination',
    image: tourImages.t4, gallery: [tourImages.t4, tourImages.t7, tourImages.t3],
    highlights: ['Mysore Palace', 'Doddabetta Peak', 'Ooty Lake', 'Brindavan Gardens'],
    places: [{ name: 'Mysore Palace' }, { name: 'Chamundi Hills' }, { name: 'Brindavan Gardens' }, { name: 'Ooty Lake' }, { name: 'Botanical Garden' }, { name: 'Doddabetta Peak' }, { name: 'Pykara Lake & Waterfalls' }],
    itinerary: [
      { day: 1, title: 'Mysore Sights', activities: ['Mysore Palace', 'Chamundi Hills', 'St. Philomena\'s Church', 'Mysore Zoo', 'Brindavan Gardens'] },
      { day: 2, title: 'Ooty Sights', activities: ['Ooty Lake', 'Botanical Garden', 'Rose Garden', 'Doddabetta Peak', 'Tea Factory & Museum'] },
      { day: 3, title: 'Ooty & Return', activities: ['Pykara Lake & Waterfalls', 'Pine Forest', 'Shooting Point', '9th Mile View Point'] },
    ],
    vehicles: [
      { type: 'Sedan (4 Seater)', models: 'Etios / Swift Dzire', seats: 4, price: 14899 },
      { type: 'Ertiga (6 Seater)', models: 'Maruti Ertiga', seats: 6, price: 17999 },
      { type: 'SUV (6\u20137 Seater)', models: 'Innova Crysta', seats: 7, price: 19999 },
      { type: 'Tempo Traveller (12 Seater)', models: 'Tempo Traveller', seats: 12, price: 21999, priceMax: 23999 },
    ],
  },
  {
    id: 'tour-mysore-coorg', slug: 'bangalore-mysore-coorg', title: 'Bangalore \u2013 Mysore \u2013 Coorg',
    type: 'three-day', duration: '3 Days / 2 Nights', distanceKm: '800\u2013900 KM', category: 'multi-destination',
    image: tourImages.t3, gallery: [tourImages.t3, tourImages.t4, tourImages.t2],
    highlights: ['Mysore Palace', 'Abbey Falls', 'Dubare Elephant Camp', 'Golden Temple'],
    places: [{ name: 'Mysore Palace' }, { name: 'Chamundi Hills' }, { name: 'Abbey Falls' }, { name: 'Raja\'s Seat' }, { name: 'Dubare Elephant Camp' }, { name: 'Golden Temple' }],
    itinerary: [
      { day: 1, title: 'Mysore Sights', activities: ['Mysore Palace', 'Chamundi Hills', 'St. Philomena\'s Church', 'Mysore Zoo', 'Brindavan Gardens'] },
      { day: 2, title: 'Coorg Sights', activities: ['Abbey Falls', 'Raja\'s Seat', 'Madikeri Fort', 'Omkareshwara Temple'] },
      { day: 3, title: 'Coorg & Return', activities: ['Dubare Elephant Camp', 'Golden Temple', 'Nisargadhama', 'Return Journey'] },
    ],
    vehicles: [
      { type: 'Sedan (4 Seater)', models: 'Etios / Swift Dzire', seats: 4, price: null, priceNote: 'Contact for price' },
      { type: 'Ertiga (6 Seater)', models: 'Maruti Ertiga', seats: 6, price: null, priceNote: 'Contact for price' },
      { type: 'SUV (6\u20137 Seater)', models: 'Innova Crysta', seats: 7, price: null, priceNote: 'Contact for price' },
      { type: 'Tempo Traveller (12 Seater)', models: 'Tempo Traveller', seats: 12, price: null, priceNote: 'Contact for price' },
    ],
  },
  {
    id: 'tour-mysore-wayanad', slug: 'bangalore-mysore-wayanad', title: 'Bangalore \u2013 Mysore \u2013 Wayanad',
    type: 'three-day', duration: '3 Days / 2 Nights', distanceKm: '800\u2013900 KM', category: 'multi-destination',
    image: tourImages.t2, gallery: [tourImages.t2, tourImages.t4, tourImages.t5],
    highlights: ['Mysore Palace', 'Edakkal Caves', 'Soochipara Waterfalls', 'Wayanad Wildlife Sanctuary'],
    places: [{ name: 'Mysore Palace' }, { name: 'Chamundi Hills' }, { name: 'Edakkal Caves' }, { name: 'Pookode Lake' }, { name: 'Banasura Sagar Dam' }, { name: 'Wayanad Wildlife Sanctuary' }],
    itinerary: [
      { day: 1, title: 'Mysore Sights', activities: ['Mysore Palace', 'Chamundi Hills', 'St. Philomena\'s Church', 'Mysore Zoo', 'Brindavan Gardens'] },
      { day: 2, title: 'Wayanad Sights', activities: ['Edakkal Caves', 'Pookode Lake', 'Banasura Sagar Dam', 'Soochipara Waterfalls'] },
      { day: 3, title: 'Wayanad & Return', activities: ['Wayanad Wildlife Sanctuary', 'Lakkidi View Point', 'Shopping & Return Journey'] },
    ],
    vehicles: [
      { type: 'Sedan (4 Seater)', models: 'Etios / Swift Dzire', seats: 4, price: null, priceNote: 'Contact for price' },
      { type: 'Ertiga (6 Seater)', models: 'Maruti Ertiga', seats: 6, price: null, priceNote: 'Contact for price' },
      { type: 'SUV (6\u20137 Seater)', models: 'Innova Crysta', seats: 7, price: null, priceNote: 'Contact for price' },
      { type: 'Tempo Traveller (12 Seater)', models: 'Tempo Traveller', seats: 12, price: null, priceNote: 'Contact for price' },
    ],
  },
  {
    id: 'tour-hampi-badami', slug: 'bangalore-hampi-badami', title: 'Bangalore \u2013 Hampi \u2013 Badami',
    type: 'four-day', duration: '4 Days / 3 Nights', distanceKm: '1000\u20131200 KM', category: 'heritage',
    image: tourImages.t1, gallery: [tourImages.t1, tourImages.t4, tourImages.t8],
    highlights: ['Vittala Temple & Stone Chariot', 'Badami Cave Temples', 'Hampi Bazaar', 'Pattadakal'],
    places: [{ name: 'Virupaksha Temple' }, { name: 'Vittala Temple & Stone Chariot' }, { name: 'Lotus Mahal' }, { name: 'Badami Cave Temples' }, { name: 'Pattadakal' }, { name: 'Aihole Temples' }],
    itinerary: [
      { day: 1, title: 'Hampi', activities: ['Travel to Hampi', 'Virupaksha Temple', 'Hampi Bazaar', 'Tungabhadra River Side'] },
      { day: 2, title: 'Hampi Sights', activities: ['Vittala Temple & Stone Chariot', 'Lotus Mahal', 'Elephant Stables', 'Queen\'s Bath'] },
      { day: 3, title: 'Badami', activities: ['Travel to Badami', 'Badami Cave Temples', 'Agastya Lake', 'Bhutanatha Temple'] },
      { day: 4, title: 'Return', activities: ['Pattadakal', 'Aihole Temples', 'Return Journey'] },
    ],
    vehicles: [
      { type: 'Sedan (4 Seater)', models: 'Etios / Swift Dzire', seats: 4, price: 18499 },
      { type: 'Ertiga (6 Seater)', models: 'Maruti Ertiga', seats: 6, price: 22499 },
      { type: 'SUV (6\u20137 Seater)', models: 'Innova Crysta', seats: 7, price: 25999 },
      { type: 'Tempo Traveller (12 Seater)', models: 'Tempo Traveller', seats: 12, price: 25999, priceMax: 28499 },
    ],
  },
  {
    id: 'tour-murudeshwara', slug: 'bangalore-murudeshwara-gokarna', title: 'Bangalore \u2013 Murudeshwara \u2013 Gokarna',
    type: 'four-day', duration: '4 Days / 3 Nights', distanceKm: '1100\u20131200 KM', category: 'beach',
    image: tourImages.t10, gallery: [tourImages.t10, tourImages.t2, tourImages.t5],
    highlights: ['Murudeshwara Shiva Statue', 'Om Beach Gokarna', 'Jog Falls', 'Mirjan Fort'],
    places: [{ name: 'Gokarna Beach' }, { name: 'Om Beach' }, { name: 'Murudeshwara Temple' }, { name: 'Mirjan Fort' }, { name: 'Jog Falls (if route permits)' }],
    itinerary: [
      { day: 1, title: 'Travel & Gokarna', activities: ['Travel to Gokarna', 'Gokarna Beach', 'Om Beach', 'Kudle Beach'] },
      { day: 2, title: 'Murudeshwara', activities: ['Murudeshwara Temple', 'Shiva Statue', 'Murudeshwara Beach'] },
      { day: 3, title: 'Nearby Places', activities: ['Honnavar Backwaters', 'Mirjan Fort', 'Leisure & Relax'] },
      { day: 4, title: 'Return', activities: ['Jog Falls (if route permits)', 'Return Journey'] },
    ],
    vehicles: [
      { type: 'Sedan (4 Seater)', models: 'Etios / Swift Dzire', seats: 4, price: null, priceNote: 'Contact for price' },
      { type: 'Ertiga (6 Seater)', models: 'Maruti Ertiga', seats: 6, price: null, priceNote: 'Contact for price' },
      { type: 'SUV (6\u20137 Seater)', models: 'Innova Crysta', seats: 7, price: null, priceNote: 'Contact for price' },
      { type: 'Tempo Traveller (12 Seater)', models: 'Tempo Traveller', seats: 12, price: null, priceNote: 'Contact for price' },
    ],
  },
  {
    id: 'tour-kodaikanal', slug: 'bangalore-to-kodaikanal', title: 'Bangalore to Kodaikanal',
    type: 'four-day', duration: '4 Days / 3 Nights', distanceKm: '1100\u20131200 KM', category: 'hill-station',
    image: tourImages.t7, gallery: [tourImages.t7, tourImages.t3, tourImages.t5],
    highlights: ['Kodai Lake', 'Pillar Rocks', 'Guna Caves', 'Silver Cascade'],
    places: [{ name: 'Kodai Lake' }, { name: 'Coaker\'s Walk' }, { name: 'Pillar Rocks' }, { name: 'Guna Caves' }, { name: 'Bryant Park' }, { name: 'Silver Cascade Waterfalls' }, { name: 'Pine Forest' }],
    itinerary: [
      { day: 1, title: 'Kodaikanal Arrival', activities: ['Scenic hill drive', 'Coaker\'s Walk', 'Kodai Lake', 'Local shopping'] },
      { day: 2, title: 'Sightseeing', activities: ['Pillar Rocks', 'Guna Caves', 'Green Valley View', 'Bryant Park', 'Silver Cascade'] },
      { day: 3, title: 'Nature & Views', activities: ['Pine Forest', 'Dolphin\'s Nose', 'Kurinji Andavar Temple', 'Berijam Lake'] },
      { day: 4, title: 'Return Journey', activities: ['Check-out', 'Return drive to Bangalore'] },
    ],
    vehicles: [
      { type: 'Sedan (4 Seater)', models: 'Etios / Swift Dzire', seats: 4, price: null, priceNote: 'Contact for price' },
      { type: 'Ertiga (6 Seater)', models: 'Maruti Ertiga', seats: 6, price: null, priceNote: 'Contact for price' },
      { type: 'SUV (6\u20137 Seater)', models: 'Innova Crysta', seats: 7, price: null, priceNote: 'Contact for price' },
      { type: 'Tempo Traveller (12 Seater)', models: 'Tempo Traveller', seats: 12, price: null, priceNote: 'Contact for price' },
    ],
  },
  {
    id: 'tour-munnar', slug: 'bangalore-to-munnar', title: 'Bangalore to Munnar',
    type: 'four-day', duration: '4 Days / 3 Nights', distanceKm: '1100\u20131200 KM', category: 'hill-station',
    image: tourImages.t2, gallery: [tourImages.t2, tourImages.t3, tourImages.t7],
    highlights: ['Eravikulam National Park', 'Tea Plantations', 'Mattupetty Dam', 'Echo Point'],
    places: [{ name: 'Tea Plantation Visit' }, { name: 'Eravikulam National Park' }, { name: 'Mattupetty Dam' }, { name: 'Echo Point' }, { name: 'Kundala Lake' }, { name: 'Tea Museum' }],
    includes: ['Pickup & Drop (Bangalore City)', 'Cab for entire trip', 'Driver Bata', 'Fuel Charges', 'Kerala State Entry Permit', 'Complete Sightseeing Transportation'],
    excludes: ['Meals', 'Entry Tickets', 'Trekking / Boating Charges', 'Extra driver bata after 10 PM', 'Toll & Parking Charges'],
    itinerary: [
      { day: 1, title: 'Travel & Arrival', activities: ['Pickup from Bangalore', 'Scenic Western Ghats drive', 'Tea plantation visit', 'Evening leisure'] },
      { day: 2, title: 'Munnar Sightseeing', activities: ['Eravikulam National Park', 'Mattupetty Dam', 'Echo Point', 'Kundala Lake', 'Tea Museum'] },
    ],
    vehicles: [
      { type: 'Sedan (4 Seater)', models: 'Etios / Swift Dzire', seats: 4, price: null, priceNote: 'Contact for price' },
      { type: 'Ertiga (6 Seater)', models: 'Maruti Ertiga', seats: 6, price: null, priceNote: 'Contact for price' },
      { type: 'SUV (6\u20137 Seater)', models: 'Innova Crysta', seats: 7, price: null, priceNote: 'Contact for price' },
      { type: 'Tempo Traveller (12 Seater)', models: 'Tempo Traveller', seats: 12, price: null, priceNote: 'Contact for price' },
    ],
  },
];

// Helper to get min price from tour vehicles
export function getTourMinPrice(tour) {
  const prices = tour.vehicles.map(v => v.price).filter(p => p !== null);
  return prices.length > 0 ? Math.min(...prices) : null;
}
