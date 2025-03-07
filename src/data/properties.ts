
// Define the Property type
export interface Property {
  id: number;
  title: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  status: 'for-sale' | 'sold';
  featured: boolean;
  date: string;
  img: string;
  description?: string;
}

// Properties data
export const properties: Property[] = [
  {
    id: 1,
    title: 'Luxury Beachfront Villa',
    address: 'Malibu, CA',
    price: 8250000,
    bedrooms: 5,
    bathrooms: 6,
    sqft: 4800,
    status: 'for-sale',
    featured: true,
    date: '2023-08-15',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    description: "This stunning beachfront villa in Malibu offers breathtaking ocean views and sophisticated living. The open floor plan features floor-to-ceiling windows that flood the home with natural light and showcase the panoramic coastal vistas. The gourmet kitchen includes top-of-the-line appliances, custom cabinetry, and a large island with breakfast bar. The primary suite is a true retreat with a private terrace, dual walk-in closets, and a spa-like bathroom. Additional features include a home theater, wine cellar, infinity pool with spa, and direct beach access."
  },
  {
    id: 2,
    title: 'Modern Downtown Penthouse',
    address: 'Los Angeles, CA',
    price: 4750000,
    bedrooms: 3,
    bathrooms: 3.5,
    sqft: 3200,
    status: 'for-sale',
    featured: true,
    date: '2023-07-22',
    img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    description: "Located in the heart of downtown Los Angeles, this modern penthouse offers the ultimate urban lifestyle. The residence features soaring ceilings, walls of glass, and sleek finishes throughout. The chef's kitchen is equipped with Italian cabinetry, marble countertops, and professional-grade appliances. The expansive living area opens to a private terrace with spectacular city views. The primary bedroom includes a custom walk-in closet and an ensuite bathroom with a freestanding tub and rainfall shower. Building amenities include 24-hour concierge, rooftop pool, fitness center, and private parking."
  },
  {
    id: 3,
    title: 'Mediterranean Estate',
    address: 'Beverly Hills, CA',
    price: 12900000,
    bedrooms: 7,
    bathrooms: 8,
    sqft: 9500,
    status: 'for-sale',
    featured: true,
    date: '2023-09-05',
    img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    description: "This magnificent Mediterranean estate in Beverly Hills sits on nearly an acre of meticulously landscaped grounds. The grand entrance features a two-story foyer with a sweeping staircase. The main level includes formal living and dining rooms, a wood-paneled library, and a gourmet kitchen that opens to a family room. The upper level houses the luxurious primary suite with dual bathrooms and boutique-inspired closets, plus four additional en-suite bedrooms. The lower level offers entertainment spaces including a home theater, wine cellar, and game room. The outdoor area features a resort-style pool with waterfalls, a fully equipped outdoor kitchen, and a guest house."
  },
  {
    id: 4,
    title: 'Contemporary Hillside Home',
    address: 'Hollywood Hills, CA',
    price: 7850000,
    bedrooms: 4,
    bathrooms: 5,
    sqft: 4200,
    status: 'for-sale',
    featured: false,
    date: '2023-09-18',
    img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    description: "Perched in the Hollywood Hills, this contemporary architectural masterpiece offers unparalleled views of the city and ocean. The open-concept design features disappearing glass walls that create a seamless indoor-outdoor living experience. The chef's kitchen is equipped with custom Italian cabinetry and top-tier appliances. The primary suite includes a private terrace, fireplace, spa-like bathroom, and expansive walk-in closet. Additional features include a media room, home office, wine room, infinity-edge pool, and outdoor entertaining areas with a fireplace and built-in BBQ."
  },
  {
    id: 5,
    title: 'Elegant Spanish Colonial',
    address: 'Santa Monica, CA',
    price: 6450000,
    bedrooms: 5,
    bathrooms: 5.5,
    sqft: 5100,
    status: 'sold',
    featured: false,
    date: '2023-06-10',
    img: 'https://images.unsplash.com/photo-1598228723793-52759bba239c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    description: "This elegant Spanish Colonial revival in Santa Monica blends classic architecture with modern amenities. Original details include arched doorways, beamed ceilings, Saltillo tile, and wrought iron accents. The updated kitchen features custom cabinetry, stone countertops, and high-end appliances. The formal dining room opens to a lush courtyard with a fountain. The primary suite offers a fireplace, sitting area, and renovated bathroom with a soaking tub. The manicured grounds include a swimming pool, spa, outdoor kitchen, and a detached guest house."
  },
  {
    id: 6,
    title: 'Mid-Century Modern Masterpiece',
    address: 'Palm Springs, CA',
    price: 3950000,
    bedrooms: 4,
    bathrooms: 4,
    sqft: 3800,
    status: 'sold',
    featured: false,
    date: '2023-05-20',
    img: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    description: "This pristine mid-century modern home in Palm Springs has been meticulously maintained and thoughtfully updated. The light-filled interior showcases post-and-beam construction, walls of glass, terrazzo floors, and clerestory windows. The open living area includes a stone fireplace and flows seamlessly to the kitchen with period-appropriate updates. All bedrooms are en-suite, with the primary featuring mountain views and access to the pool area. The backyard is a private oasis with a swimming pool, spa, fire pit, and covered patio, all set against a backdrop of mountain views."
  },
  {
    id: 7,
    title: 'Waterfront Modern Estate',
    address: 'Newport Beach, CA',
    price: 14750000,
    bedrooms: 6,
    bathrooms: 7.5,
    sqft: 8200,
    status: 'for-sale',
    featured: false,
    date: '2023-08-30',
    img: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    description: "This waterfront modern estate in Newport Beach offers a rare combination of luxury living and direct bay access. The architectural masterpiece features clean lines, floor-to-ceiling windows, and premium finishes throughout. The main level showcases an open floor plan with a great room, formal dining area, and chef's kitchen with two islands. The primary suite occupies its own wing with dual bathrooms, expansive closets, and a private terrace overlooking the water. Additional features include an elevator, home theater, gym, wine cellar, infinity pool with spa, and a private dock that can accommodate multiple vessels."
  },
  {
    id: 8,
    title: 'Luxury Ranch Estate',
    address: 'Montecito, CA',
    price: 19500000,
    bedrooms: 8,
    bathrooms: 10,
    sqft: 12000,
    status: 'sold',
    featured: true,
    date: '2023-04-15',
    img: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    description: "Set on 10 acres in coveted Montecito, this luxury ranch estate offers the ultimate in privacy and resort-style living. The main residence features a grand formal living room, banquet-sized dining room, gourmet kitchen with butler's pantry, and a magnificent primary suite with dual bathrooms and closets. Additional interior spaces include a wood-paneled library, home theater, wine cellar, gym, and wellness spa. The property includes equestrian facilities, a tennis court, putting green, orchard, and organic gardens. The outdoor entertainment area features a pool, spa, cabana with full kitchen, and breathtaking mountain and ocean views."
  }
];

// Property gallery images (keyed by property ID)
export const propertyImages: { [key: number]: string[] } = {
  1: [
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
  ],
  2: [
    'https://images.unsplash.com/photo-1560448075-bb485b067938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
  ],
  3: [
    'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/photo-1617104678098-de229db51175?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/photo-1591247378419-2c8e83bf3da5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
  ],
  4: [
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
  ],
  5: [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/photo-1560184897-ae75f418493e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
  ],
  6: [
    'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
  ],
  7: [
    'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/photo-1600047508788-26df7b3d6b93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/photo-1600566753376-12c6b3de237e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
  ],
  8: [
    'https://images.unsplash.com/photo-1600047509158-9a25db292d4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/photo-1602028915047-37069d3bbc20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
  ]
};
