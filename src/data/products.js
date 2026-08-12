// Mock product catalog. In a production build, this would be replaced
// by calls to a real product API / CMS.

export const categories = [
  { slug: 'packs', name: 'Packs & Bags' },
  { slug: 'shelter', name: 'Shelter & Sleep' },
  { slug: 'apparel', name: 'Apparel' },
  { slug: 'footwear', name: 'Footwear' },
  { slug: 'accessories', name: 'Accessories' },
]

export const products = [
  {
    id: 'p01',
    name: 'Ridgeline 42L Pack',
    category: 'packs',
    price: 189,
    rating: 4.7,
    reviewCount: 128,
    colors: ['Moss', 'Slate', 'Ink'],
    image: 'https://images.unsplash.com/photo-1622260614153-03223fb72052?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1622260614153-03223fb72052?w=1200&q=80',
      'https://images.unsplash.com/photo-1547949003-9792a18a2645?w=1200&q=80',
    ],
    description: 'A 42-liter, top-loading pack built for multi-day routes. Torso-adjustable frame, ventilated back panel, and a rain hood that stows in its own pocket.',
    specs: { 'Volume': '42L', 'Weight': '1.4 kg', 'Frame': 'Aluminum stay', 'Material': 'Recycled 210D ripstop' },
    stock: 14,
    featured: true,
  },
  {
    id: 'p02',
    name: 'Contour 2-Person Tent',
    category: 'shelter',
    price: 329,
    rating: 4.8,
    reviewCount: 96,
    colors: ['Moss', 'Sand'],
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1200&q=80',
      'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=1200&q=80',
    ],
    description: 'Freestanding two-person tent with a full-coverage fly and dual vestibules. Pitches in under four minutes, packs down to the size of a loaf of bread.',
    specs: { 'Capacity': '2 person', 'Packed weight': '2.1 kg', 'Season rating': '3-season', 'Floor': 'Bathtub, taped seams' },
    stock: 8,
    featured: true,
  },
  {
    id: 'p03',
    name: 'Summit Down Jacket',
    category: 'apparel',
    price: 245,
    rating: 4.6,
    reviewCount: 210,
    colors: ['Ink', 'Amber', 'Bone'],
    image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=1200&q=80',
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1200&q=80',
    ],
    description: '700-fill responsibly sourced down, cut trim for layering. Windproof shell face and an interior stash pocket that doubles as a stuff sack.',
    specs: { 'Fill': '700-fill down', 'Weight': '380 g', 'Shell': 'DWR ripstop nylon', 'Fit': 'Regular' },
    stock: 22,
    featured: true,
  },
  {
    id: 'p04',
    name: 'Traverse Hiking Boots',
    category: 'footwear',
    price: 179,
    rating: 4.5,
    reviewCount: 174,
    colors: ['Moss', 'Ink'],
    image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=1200&q=80',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=1200&q=80',
    ],
    description: 'Mid-cut boots with a waterproof membrane and a Vibram outsole for mixed terrain. Broken-in comfort out of the box, no blister miles required.',
    specs: { 'Upper': 'Nubuck leather', 'Membrane': 'Waterproof/breathable', 'Outsole': 'Vibram Megagrip', 'Weight (pair)': '820 g' },
    stock: 11,
    featured: false,
  },
  {
    id: 'p05',
    name: 'Contour Sleeping Bag 15°',
    category: 'shelter',
    price: 259,
    rating: 4.9,
    reviewCount: 88,
    colors: ['Ink', 'Amber'],
    image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=1200&q=80',
      'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1200&q=80',
    ],
    description: 'A 15°F mummy bag with an offset baffle construction that stops cold spots at the seams. Compresses to the size of a water bottle.',
    specs: { 'Temp rating': '15°F / -9°C', 'Fill': '650-fill down', 'Packed size': '20 x 33 cm', 'Weight': '1.1 kg' },
    stock: 17,
    featured: false,
  },
  {
    id: 'p06',
    name: 'Waypoint Trail Shorts',
    category: 'apparel',
    price: 65,
    rating: 4.4,
    reviewCount: 143,
    colors: ['Sand', 'Ink', 'Moss'],
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=1200&q=80',
    ],
    description: 'Quick-dry stretch shorts with a gusseted seat for full stride. Zippered thigh pocket fits a folded map or a phone.',
    specs: { 'Material': 'Nylon-spandex blend', 'Inseam': '7 in', 'Pockets': '4, one zippered', 'Weight': '145 g' },
    stock: 30,
    featured: false,
  },
  {
    id: 'p07',
    name: 'Basin Water Filter',
    category: 'accessories',
    price: 39,
    rating: 4.7,
    reviewCount: 261,
    colors: ['Amber'],
    image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=1200&q=80',
    ],
    description: 'A hollow-fiber filter rated to 0.1 microns, screws onto standard bottle threads. Filters up to 1000 liters before the cartridge needs replacing.',
    specs: { 'Filter rating': '0.1 micron', 'Capacity': '1000 L', 'Weight': '68 g', 'Flow rate': '1.5 L/min' },
    stock: 45,
    featured: true,
  },
  {
    id: 'p08',
    name: 'Ridgeline Daypack 22L',
    category: 'packs',
    price: 89,
    rating: 4.5,
    reviewCount: 112,
    colors: ['Moss', 'Ink', 'Sand'],
    image: 'https://images.unsplash.com/photo-1547949003-9792a18a2645?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1547949003-9792a18a2645?w=1200&q=80',
    ],
    description: 'The Ridgeline\'s smaller sibling, built for day hikes and commutes alike. Padded laptop sleeve, hydration-reservoir compatible.',
    specs: { 'Volume': '22L', 'Weight': '620 g', 'Laptop sleeve': 'Up to 15"', 'Material': 'Recycled 210D ripstop' },
    stock: 26,
    featured: false,
  },
  {
    id: 'p09',
    name: 'Camp Wool Beanie',
    category: 'accessories',
    price: 28,
    rating: 4.8,
    reviewCount: 190,
    colors: ['Amber', 'Ink', 'Bone'],
    image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=1200&q=80',
    ],
    description: 'Merino wool beanie, double-layered over the ears. Regulates temperature whether you\'re moving fast or sitting still at camp.',
    specs: { 'Material': '100% merino wool', 'Weight': '55 g', 'Fit': 'One size' },
    stock: 60,
    featured: false,
  },
  {
    id: 'p10',
    name: 'Traverse Approach Shoes',
    category: 'footwear',
    price: 139,
    rating: 4.3,
    reviewCount: 76,
    colors: ['Sand', 'Ink'],
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=1200&q=80',
    ],
    description: 'Low-cut approach shoes with a sticky-rubber toe cap for scrambling. Light enough to forget you\'re wearing them.',
    specs: { 'Upper': 'Ripstop mesh + TPU', 'Outsole': 'Sticky rubber', 'Weight (pair)': '590 g' },
    stock: 19,
    featured: false,
  },
  {
    id: 'p11',
    name: 'Summit Fleece Quarter-Zip',
    category: 'apparel',
    price: 95,
    rating: 4.6,
    reviewCount: 134,
    colors: ['Moss', 'Bone', 'Ink'],
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1200&q=80',
    ],
    description: 'Midweight grid fleece that layers clean under a shell. Chest pocket sized for a compass or a granola bar, not both.',
    specs: { 'Material': 'Recycled polyester grid fleece', 'Weight': '310 g', 'Fit': 'Regular' },
    stock: 33,
    featured: false,
  },
  {
    id: 'p12',
    name: 'Basin Trekking Poles',
    category: 'accessories',
    price: 79,
    rating: 4.7,
    reviewCount: 99,
    colors: ['Ink'],
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=80',
    ],
    description: 'Collapsible carbon poles with cork grips and a quick-flip lock. Pair weight is light enough to forget on the ascent.',
    specs: { 'Material': 'Carbon fiber', 'Weight (pair)': '410 g', 'Length range': '110–130 cm' },
    stock: 24,
    featured: false,
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getProductsByCategory(category) {
  if (!category) return products
  return products.filter((p) => p.category === category)
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured)
}

export function getRelatedProducts(product, limit = 4) {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit)
}
