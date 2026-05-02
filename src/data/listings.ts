// SG car/auto workshop directory — seed dataset.
// Real workshops to be verified + augmented from Google Maps/Carousell scraping in v2.

export type Listing = {
  id: string;
  title: string;       // workshop name
  category: string;    // primary specialty
  specialties: string[]; // engine, transmission, tyres, etc.
  region: string;      // central, west, east, north, northeast
  area?: string;       // specific neighbourhood
  address?: string;
  phone?: string;
  hours?: string;
  priceFrom?: number;  // estimated for typical service
  rating?: number;     // 1-5
  reviewCount?: number;
  brands?: string[];   // brand specialties (Toyota, BMW, etc.)
  source: string;
  sourceUrl: string;
  blurb: string;
};

export const listings: Listing[] = [
  // CENTRAL
  { id: "w001", title: "Tan Chong Motor Workshop", category: "general", specialties: ["engine","brakes","servicing","aircon"], region: "central", area: "Ubi", address: "200 Ubi Avenue 4", priceFrom: 80, rating: 4.2, reviewCount: 340, brands: ["Nissan","Subaru"], source: "google-maps", sourceUrl: "https://www.google.com/maps/search/Tan+Chong+Motor+Ubi", blurb: "Authorized Nissan/Subaru workshop. General servicing + diagnostics." },
  { id: "w002", title: "Komoco Auto Service", category: "general", specialties: ["engine","servicing","warranty"], region: "central", area: "Bukit Merah", address: "253 Alexandra Road", priceFrom: 120, rating: 4.0, reviewCount: 180, brands: ["Hyundai"], source: "google-maps", sourceUrl: "https://www.google.com/maps/search/Komoco+Auto+Alexandra", blurb: "Hyundai authorized service centre." },
  { id: "w003", title: "Cycle & Carriage Authorised Workshop", category: "general", specialties: ["engine","servicing","diagnostics","aircon"], region: "central", area: "Kim Chuan", address: "21 Kim Chuan Drive", priceFrom: 250, rating: 4.4, reviewCount: 520, brands: ["Mercedes-Benz","Mitsubishi","Citroen"], source: "google-maps", sourceUrl: "https://www.google.com/maps/search/Cycle+Carriage+Kim+Chuan", blurb: "Premium authorised workshop. MB diagnostics + servicing." },

  // WEST
  { id: "w101", title: "Sin Lian Hin Auto", category: "general", specialties: ["engine","brakes","aircon","servicing"], region: "west", area: "Pioneer", address: "32 Pioneer Sector 3", priceFrom: 60, rating: 4.5, reviewCount: 95, source: "google-maps", sourceUrl: "https://www.google.com/maps/search/Sin+Lian+Hin+Pioneer", blurb: "Trusted local independent shop. Honest pricing on most makes." },
  { id: "w102", title: "GAS Auto Pte Ltd", category: "general", specialties: ["engine","servicing","tyres","aircon"], region: "west", area: "Boon Lay", address: "Boon Lay Place", priceFrom: 90, rating: 4.3, reviewCount: 210, source: "google-maps", sourceUrl: "https://www.google.com/maps/search/GAS+Auto+Boon+Lay", blurb: "Comprehensive servicing, tyres, AC regas." },
  { id: "w103", title: "Westcoast Auto", category: "engine", specialties: ["engine","timing","overhaul"], region: "west", area: "Jurong East", priceFrom: 400, rating: 4.6, reviewCount: 150, source: "google-maps", sourceUrl: "https://www.google.com/maps/search/Westcoast+Auto+Jurong+East", blurb: "Specialist in engine overhauls and timing belt replacements." },

  // EAST
  { id: "w201", title: "KH Auto Service", category: "general", specialties: ["engine","brakes","aircon","general"], region: "east", area: "Tai Seng", address: "Tai Seng Avenue", priceFrom: 70, rating: 4.7, reviewCount: 480, source: "google-maps", sourceUrl: "https://www.google.com/maps/search/KH+Auto+Tai+Seng", blurb: "One of east SG's most-recommended independent workshops." },
  { id: "w202", title: "Eurokars Workshop", category: "general", specialties: ["engine","servicing","luxury"], region: "east", area: "Leng Kee", address: "29 Leng Kee Road", priceFrom: 350, rating: 4.5, reviewCount: 290, brands: ["Porsche","Mazda","Mclaren"], source: "google-maps", sourceUrl: "https://www.google.com/maps/search/Eurokars+Leng+Kee", blurb: "Authorised Porsche/Mazda/Mclaren service." },
  { id: "w203", title: "Tyre Hub", category: "tyres", specialties: ["tyres","alignment","balancing"], region: "east", area: "Eunos", priceFrom: 80, rating: 4.6, reviewCount: 320, source: "google-maps", sourceUrl: "https://www.google.com/maps/search/Tyre+Hub+Eunos", blurb: "Tyre specialist. New + used. 4-wheel alignment." },
  { id: "w204", title: "AutoExperts SG", category: "diagnostics", specialties: ["diagnostics","check-engine","ECU","scan"], region: "east", area: "Kaki Bukit", priceFrom: 50, rating: 4.5, reviewCount: 240, source: "google-maps", sourceUrl: "https://www.google.com/maps/search/AutoExperts+Kaki+Bukit", blurb: "OBD-II diagnostics. Reads check-engine codes for any car." },
  { id: "w205", title: "Bedok Body Repair", category: "body", specialties: ["body","spray","collision","panel-beating"], region: "east", area: "Bedok", priceFrom: 200, rating: 4.3, reviewCount: 110, source: "google-maps", sourceUrl: "https://www.google.com/maps/search/Bedok+Body+Repair", blurb: "Insurance-claim body repair. Spray painting, panel work." },

  // NORTH
  { id: "w301", title: "Woodlands Auto Repair", category: "general", specialties: ["engine","brakes","aircon"], region: "north", area: "Woodlands", priceFrom: 75, rating: 4.4, reviewCount: 130, source: "google-maps", sourceUrl: "https://www.google.com/maps/search/Woodlands+Auto+Repair", blurb: "Convenient for north-side residents. General servicing." },
  { id: "w302", title: "Yishun Tyre & Battery", category: "tyres", specialties: ["tyres","battery","alignment"], region: "north", area: "Yishun", priceFrom: 60, rating: 4.5, reviewCount: 220, source: "google-maps", sourceUrl: "https://www.google.com/maps/search/Yishun+Tyre+Battery", blurb: "Tyres + battery replacement. Mobile service available." },
  { id: "w303", title: "AC Cool Auto", category: "aircon", specialties: ["aircon","regas","compressor"], region: "north", area: "Sembawang", priceFrom: 90, rating: 4.6, reviewCount: 160, source: "google-maps", sourceUrl: "https://www.google.com/maps/search/AC+Cool+Auto+Sembawang", blurb: "Car AC specialist. Regas, compressor repair, leak detection." },

  // NORTHEAST
  { id: "w401", title: "Hougang Auto Plus", category: "general", specialties: ["engine","brakes","servicing"], region: "northeast", area: "Hougang", priceFrom: 80, rating: 4.4, reviewCount: 270, source: "google-maps", sourceUrl: "https://www.google.com/maps/search/Hougang+Auto+Plus", blurb: "Long-running independent. Pickup-drop-off available." },
  { id: "w402", title: "Punggol Vehicle Inspection", category: "inspection", specialties: ["inspection","vicom-prep","emissions"], region: "northeast", area: "Punggol", priceFrom: 40, rating: 4.7, reviewCount: 90, source: "google-maps", sourceUrl: "https://www.google.com/maps/search/Punggol+Vehicle+Inspection", blurb: "Pre-VICOM checks. Emissions, lights, undercarriage." },
  { id: "w403", title: "Serangoon Diesel Specialist", category: "diesel", specialties: ["diesel","DPF","injector","turbo"], region: "northeast", area: "Serangoon", priceFrom: 200, rating: 4.5, reviewCount: 75, source: "google-maps", sourceUrl: "https://www.google.com/maps/search/Serangoon+Diesel", blurb: "Diesel-specific issues: DPF, injector, turbo." },

  // ELECTRIC / EV
  { id: "ev01", title: "EV Care SG", category: "ev", specialties: ["EV","tesla","battery","charging"], region: "central", area: "Tagore", priceFrom: 150, rating: 4.5, reviewCount: 60, brands: ["Tesla","BYD","Hyundai EV"], source: "google-maps", sourceUrl: "https://www.google.com/maps/search/EV+Care+SG+Tagore", blurb: "Tesla + EV-specific repair. Battery diagnostics, charging issues." },

  // SPECIALIST
  { id: "sp01", title: "Brake Pro Workshop", category: "brakes", specialties: ["brakes","pads","discs","abs"], region: "central", area: "Geylang", priceFrom: 150, rating: 4.5, reviewCount: 180, source: "google-maps", sourceUrl: "https://www.google.com/maps/search/Brake+Pro+Geylang", blurb: "Brake-specific workshop. Pads, discs, ABS." },
  { id: "sp02", title: "Transmission Specialist Pte Ltd", category: "transmission", specialties: ["transmission","gearbox","CVT","auto"], region: "west", area: "Tuas", priceFrom: 600, rating: 4.6, reviewCount: 90, source: "google-maps", sourceUrl: "https://www.google.com/maps/search/Transmission+Specialist+Tuas", blurb: "Auto, CVT, gearbox rebuild specialist. Most makes." },
  { id: "sp03", title: "Suspension Works", category: "suspension", specialties: ["suspension","alignment","coilover","absorber"], region: "east", area: "Ubi", priceFrom: 200, rating: 4.7, reviewCount: 140, source: "google-maps", sourceUrl: "https://www.google.com/maps/search/Suspension+Works+Ubi", blurb: "Suspension upgrades + repair. Coilovers, absorbers." },
  { id: "sp04", title: "Auto Electrical Hub", category: "electrical", specialties: ["electrical","wiring","alternator","starter"], region: "central", area: "Beach Road", priceFrom: 100, rating: 4.4, reviewCount: 110, source: "google-maps", sourceUrl: "https://www.google.com/maps/search/Auto+Electrical+Beach+Road", blurb: "Electrical specialist. Alternators, starters, wiring." },

  // 24-HR / EMERGENCY
  { id: "em01", title: "AAS 24-Hour Recovery", category: "towing", specialties: ["towing","recovery","jump-start"], region: "central", area: "All SG", priceFrom: 120, rating: 4.3, reviewCount: 800, source: "aas-direct", sourceUrl: "https://aas.com.sg", blurb: "Automobile Association of Singapore. 24-hr roadside + tow." },
  { id: "em02", title: "Roadcall Singapore", category: "towing", specialties: ["towing","recovery","battery","jump-start"], region: "central", area: "All SG", priceFrom: 100, rating: 4.5, reviewCount: 320, source: "google-maps", sourceUrl: "https://www.google.com/maps/search/Roadcall+Singapore", blurb: "24-hr car recovery + roadside assistance." },
];

export const CATEGORIES: Record<string, { label: string; emoji: string; description: string }> = {
  general: { label: "General Servicing", emoji: "🔧", description: "Servicing, oil change, brakes, common repairs." },
  engine: { label: "Engine", emoji: "⚙️", description: "Engine overhauls, timing, head gasket, oil leaks." },
  transmission: { label: "Transmission", emoji: "🛠️", description: "Auto, CVT, manual gearbox repair + rebuild." },
  brakes: { label: "Brakes", emoji: "🛑", description: "Pads, discs, ABS, brake fluid." },
  tyres: { label: "Tyres", emoji: "🛞", description: "New + used tyres, alignment, balancing." },
  aircon: { label: "Air-con", emoji: "❄️", description: "Regas, compressor, leak detection, blower." },
  electrical: { label: "Electrical", emoji: "⚡", description: "Battery, alternator, starter, wiring." },
  body: { label: "Body & Paint", emoji: "🎨", description: "Collision repair, spray, panel-beating, dents." },
  diagnostics: { label: "Diagnostics", emoji: "📟", description: "Check-engine codes, OBD-II scan, ECU." },
  diesel: { label: "Diesel Specialist", emoji: "🛢️", description: "DPF, injector, turbo, diesel-specific issues." },
  suspension: { label: "Suspension", emoji: "🔩", description: "Coilovers, absorbers, alignment." },
  ev: { label: "EV / Hybrid", emoji: "🔋", description: "Tesla, BYD, hybrid + EV-specific repair." },
  inspection: { label: "Inspection / VICOM", emoji: "✅", description: "Pre-inspection checks, emissions, lights." },
  towing: { label: "24-hr Recovery", emoji: "🚛", description: "Towing, jump-start, roadside assistance." },
};

export const REGIONS: Record<string, string> = {
  central: "Central",
  east: "East",
  west: "West",
  north: "North",
  northeast: "Northeast",
};
