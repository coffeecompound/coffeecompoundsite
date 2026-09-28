// Single source of truth for business facts. Every page, the footer and all structured data read from here,
// which keeps name/address/phone consistent everywhere (a core local-SEO signal).


export const SITE = {
  url: "https://www.thecoffeecompound.com",
  name: "The Coffee Compound",
  tagline: "When One Cup Isn't Enough!",
  motto: "We Bring People Together Over A Cup 'A Joe",
  phone: "(801) 317-4880",
  phoneHref: "tel:+18013174880",
  email: "coffee@thecoffeecompound.com",
  street: "2417 Grant Ave",
  streetLong: "2417 Grant Avenue",
  city: "Ogden",
  region: "UT",
  zip: "84401",
  lat: 41.2223739,
  lng: -111.9736729,
  priceRange: "$",
  // Hours as published on joe.coffee (Sept 2026). Visit Ogden lists Mon–Sat 8–2, so confirm with the owners.
  hours: [
    { label: "Monday – Friday", days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], open: "07:30", close: "15:00", text: "7:30 AM – 3:00 PM" },
    { label: "Saturday", days: ["Saturday"], open: "08:00", close: "14:00", text: "8:00 AM – 2:00 PM" },
    { label: "Sunday", days: ["Sunday"], open: null, close: null, text: "Closed" },
  ],
  hoursShort: "Mon–Fri 7:30–3 • Sat 8–2 • Sun closed",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=The+Coffee+Compound%2C+2417+Grant+Ave%2C+Ogden%2C+UT+84401",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Coffee+Compound%2C+2417+Grant+Ave%2C+Ogden%2C+UT+84401",
  mapEmbed: "https://www.google.com/maps?q=The+Coffee+Compound,+2417+Grant+Ave,+Ogden,+UT+84401&output=embed",
  // TODO: replace with the Google Business Profile "Ask for reviews" short link (g.page/r/.../review).
  reviewUrl: "https://www.google.com/maps/search/?api=1&query=The+Coffee+Compound%2C+2417+Grant+Ave%2C+Ogden%2C+UT+84401",
  // Contact form posts to the Cloudflare Pages Function in functions/api/contact.ts.
  formEndpoint: "/api/contact",
  social: {
    facebook: "https://www.facebook.com/TheCoffeeCompound/",
    yelp: "https://www.yelp.com/biz/coffee-compound-ogden",
    tripadvisor: "https://www.tripadvisor.com/Restaurant_Review-g57090-d9756278-Reviews-The_Coffee_Compound-Ogden_Utah.html",
    visitOgden: "https://www.visitogden.com/directory/coffee-compound/",
    joe: "https://joe.coffee/locations/ut/ogden/the-coffee-compound-ogden/",
  },
} as const;

export const IMG = {
  logo: "/assets/img/logo.png",
  barista: "/assets/img/barista.jpg",
  pastries: "/assets/img/pastries.jpg",
  latte: "/assets/img/latte.jpg",
  patio: "/assets/img/patio.jpg",
  nook: "/assets/img/nook.jpg",
  bagel: "/assets/img/bagel.jpg",
  beans: "/assets/img/beans.jpg",
  owners: "/assets/img/owners.jpg",
  map: "/assets/img/map.png",
} as const;

export const NAV = [
  { path: "/", label: "Home" },
  { path: "/menu/", label: "Menu" },
  { path: "/drive-thru/", label: "Drive-Thru" },
  { path: "/about/", label: "About" },
  { path: "/reviews/", label: "Reviews" },
  { path: "/events/", label: "Events" },
  { path: "/blog/", label: "Blog" },
  { path: "/contact/", label: "Contact" },
];
