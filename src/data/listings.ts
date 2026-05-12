// SG Continental & EV specialist workshop directory.
// Phase 1 niche per Gemini brief: Mercedes, BMW, Audi, VW, Volvo, Porsche, Tesla.
// Generic SG shops included for "any car" fallback but not the focus.

export type Listing = {
  id: string;
  title: string;
  category: string;
  specialties: string[];
  region: string;
  area?: string;
  address?: string;
  phone?: string;
  hours?: string;
  priceFrom?: number;
  rating?: number;
  reviewCount?: number;
  brands?: string[];          // brand specialties
  diagnosticTools?: string[]; // ISTA, Star Diagnostic, ODIS, VCDS, Carly etc.
  partsTier?: "OEM" | "OEM+aftermarket" | "aftermarket";
  source: string;
  sourceUrl: string;
  blurb: string;
  verified?: boolean;         // we audited this shop
  agentAlternative?: boolean; // OEM-parts equivalent quality at lower than dealer price
  // ── v2.0 transparency + specialist scoring ──
  transparencyScore?: number;      // 1-5
  providesPhotoProof?: boolean;    // sends progress photos
  providesScans?: boolean;         // shares pre/post diagnostic scans
  hasItemizedQuote?: boolean;      // written line-item quotes
  hasFixedPriceMenu?: boolean;     // published flat-rate menu for top jobs
  // Per-symptom starting prices (in SGD) for price-comparison cards
  // Key = CommonIssue.id from carModels.ts; value = workshop's starting price for that fix
  symptomPrices?: Record<string, number>;
};

export const listings: Listing[] = [
  // === CENTRAL ===
  { id: "c001", title: "AVANTAGE Sin Ming", category: "general", specialties: ["engine","gearbox","suspension","electrical","servicing"], region: "central", area: "Sin Ming", address: "160 Sin Ming Drive, Sin Ming AutoCity", rating: 4.9, brands: ["Mercedes-Benz","BMW","Audi","Volkswagen","Porsche","Volvo","Land Rover"], diagnosticTools: ["Star Diagnostic","ISTA","ODIS","PIWIS","VIDA"], partsTier: "OEM+aftermarket", source: "google-maps", sourceUrl: "https://avantage.sg/", blurb: "Multi-brand Continental specialist at Sin Ming AutoCity. 15,000+ jobs/yr, 10+ years of 5-star reviews.", verified: false, agentAlternative: true },
  { id: "c002", title: "1 Car Service Workshop", category: "general", specialties: ["engine","gearbox","servicing"], region: "central", area: "Sin Ming", address: "160 Sin Ming Drive #03-07, Sin Ming AutoCity", rating: 4.8, brands: ["Mercedes-Benz","BMW","Audi","Porsche","Volvo","Volkswagen"], diagnosticTools: [], partsTier: "OEM+aftermarket", source: "google-maps", sourceUrl: "https://1car.sg/", blurb: "Top Google-rated workshop at Sin Ming AutoCity. Engine and gearbox repairs with warranty.", verified: false, agentAlternative: true },
  { id: "c003", title: "Kee Yong Automobile", category: "general", specialties: ["engine","servicing","diagnostics"], region: "central", area: "Sin Ming", address: "160 Sin Ming Drive #03-09, Sin Ming AutoCity", brands: ["Mercedes-Benz","BMW","Porsche","Jaguar","Land Rover"], diagnosticTools: [], partsTier: "OEM+aftermarket", source: "google-maps", sourceUrl: "https://www.keeyongauto.com.sg/", blurb: "Est. 1977. One of Sin Ming AutoCity's longest-running Continental specialists.", verified: false, agentAlternative: true },
  { id: "c004", title: "Motor Edgevantage", category: "general", specialties: ["engine","servicing","electrical","classic-cars"], region: "central", area: "Sin Ming", address: "160 Sin Ming Drive #03-01/02, Sin Ming AutoCity", brands: ["BMW","Mercedes-Benz","Volvo","Land Rover","Audi","Porsche"], diagnosticTools: [], partsTier: "OEM+aftermarket", source: "google-maps", sourceUrl: "https://www.edgevantage.com.sg/", blurb: "24/7 emergency line. Full Continental servicing and classic car restoration at Sin Ming AutoCity.", verified: false, agentAlternative: true },
  { id: "c005", title: "GT Continental", category: "general", specialties: ["engine","gearbox","servicing"], region: "central", area: "Sin Ming", address: "160 Sin Ming Drive #08-20/21, Sin Ming AutoCity", brands: ["Mercedes-Benz","BMW"], diagnosticTools: ["Star Diagnostic","ISTA"], partsTier: "OEM+aftermarket", source: "google-maps", sourceUrl: "https://gtcontinental.sg/", blurb: "Est. 1989. Mercedes and BMW specialist at Sin Ming AutoCity. Partner of Gim Teck Motor.", verified: false, agentAlternative: true },
  { id: "c006", title: "Accord Auto Services", category: "general", specialties: ["engine","servicing","brakes","diagnostics"], region: "central", area: "Alexandra Village", address: "Blk 1009 Bukit Merah Lane 3, Alexandra Village", brands: ["BMW","Audi","Mercedes-Benz","Volkswagen","Porsche"], diagnosticTools: [], partsTier: "OEM+aftermarket", source: "google-maps", sourceUrl: "https://www.motorist.sg/merchant/876/accord-auto-services-pte-ltd", blurb: "96% recommendation rate. Free 21-point inspection. Continental specialists in Alexandra.", verified: false, agentAlternative: true },

  // === EAST ===
  { id: "e001", title: "AVANTAGE Kaki Bukit", category: "general", specialties: ["engine","gearbox","suspension","electrical","servicing"], region: "east", area: "Kaki Bukit", brands: ["Mercedes-Benz","BMW","Audi","Volkswagen","Porsche","Volvo"], diagnosticTools: ["Star Diagnostic","ISTA","ODIS","PIWIS","VIDA"], partsTier: "OEM+aftermarket", source: "google-maps", sourceUrl: "https://avantage.sg/", blurb: "East Singapore branch of the AVANTAGE group. Multi-brand Continental specialist.", verified: false, agentAlternative: true },

  // === WEST ===
  { id: "w001", title: "AVANTAGE Toh Guan", category: "general", specialties: ["engine","gearbox","suspension","electrical","servicing"], region: "west", area: "Toh Guan", brands: ["Mercedes-Benz","BMW","Audi","Volkswagen","Porsche","Volvo"], diagnosticTools: ["Star Diagnostic","ISTA","ODIS","PIWIS","VIDA"], partsTier: "OEM+aftermarket", source: "google-maps", sourceUrl: "https://avantage.sg/", blurb: "West Singapore branch of the AVANTAGE group. Jurong East area Continental specialist.", verified: false, agentAlternative: true },
  { id: "w002", title: "Squad Workshop", category: "general", specialties: ["engine","DSG","tuning","coding"], region: "west", area: "Toh Guan", address: "48 Toh Guan Road East #04-131, Enterprise Hub", brands: ["Volkswagen","Audi","Skoda","BMW","Mercedes-Benz","Volvo"], diagnosticTools: ["ODIS","VCDS"], partsTier: "OEM+aftermarket", source: "google-maps", sourceUrl: "https://squadworkshop.com/", blurb: "VAG specialist (VW/Audi/Skoda). Authorised EQT/HJS exhaust dealer. Performance tuning and VCDS coding.", verified: false, agentAlternative: true },
  { id: "w003", title: "Wah Hong Car Specialist", category: "general", specialties: ["engine","diagnostics","servicing"], region: "west", area: "Toh Guan", address: "42 Toh Guan Road East #01-79", brands: ["Mercedes-Benz","BMW","Porsche","Volkswagen","Audi"], diagnosticTools: [], partsTier: "OEM+aftermarket", source: "google-maps", sourceUrl: "https://www.wahhongcarspecialist.com/", blurb: "Toh Guan Continental specialist. Diagnostics and repair across German brands.", verified: false, agentAlternative: true },

  // === NORTH ===
  { id: "n001", title: "R2D Autoworks", category: "engine", specialties: ["engine","servicing","diagnostics","electrical"], region: "north", area: "Woodlands", address: "280 Woodlands Industrial Park E5 #03-45, Harvest@Woodlands", brands: ["BMW","MINI"], diagnosticTools: ["ISTA"], partsTier: "OEM+aftermarket", source: "google-maps", sourceUrl: "https://www.r2dautoworks.com/", blurb: "BMW and MINI specialist in Woodlands. ISTA-equipped. Recommended by BMW.SG community. Open until 11pm weekdays.", verified: false, agentAlternative: true },

  // === NORTHEAST ===
  { id: "ne01", title: "Revol Carz Garage", category: "general", specialties: ["engine","gearbox","electrical","servicing"], region: "northeast", area: "Ang Mo Kio", address: "10 Ang Mo Kio Industrial Park 2A #02-18, AMK AutoPoint", rating: 4.9, reviewCount: 380, brands: ["Mercedes-Benz","BMW","Audi","Volkswagen"], diagnosticTools: [], partsTier: "OEM+aftermarket", source: "google-maps", sourceUrl: "https://www.revol.com.sg/", blurb: "SGCarMart Star Merchant Award 12 consecutive years. 380+ verified 5-star reviews. Continental specialist at AMK AutoPoint.", verified: false, agentAlternative: true },

  // === EV ===
  { id: "ev01", title: "Tesla Service Centre", category: "ev", specialties: ["EV","tesla","servicing","HV-system"], region: "central", area: "Toa Payoh", address: "17 Lorong 8 Toa Payoh", rating: 4.0, reviewCount: 380, brands: ["Tesla"], diagnosticTools: ["Tesla Toolbox"], partsTier: "OEM", source: "google-maps", sourceUrl: "https://www.tesla.com/findus/list/services/Singapore", blurb: "Authorised Tesla service centre. Wait times can be long.", verified: false },
  { id: "ev02", title: "Eurokars Services", category: "ev", specialties: ["EV","collision","HV-system","servicing"], region: "central", area: "Multiple locations", brands: ["Tesla","Porsche","Audi","Volkswagen"], diagnosticTools: [], partsTier: "OEM", source: "google-maps", sourceUrl: "https://www.eurokarsservices.com.sg/ev-ready-workshop", blurb: "Tesla-Approved Collision Centre. EV-ready with battery quarantine room and HV-trained technicians.", verified: false },

  // === CENTRAL top-up ===
  { id: "c007", title: "iCar Motor Werkz", category: "general", specialties: ["engine","gearbox","servicing","diagnostics"], region: "central", area: "Sin Ming", address: "160 Sin Ming Drive #04-15, Sin Ming AutoCity", brands: ["BMW","Mercedes-Benz","Audi","Volkswagen"], diagnosticTools: [], partsTier: "OEM+aftermarket", source: "google-maps", sourceUrl: "https://icarmotorwerkz.sg/", blurb: "15+ years experience at Sin Ming AutoCity. 24hr hotline. Multi-brand Continental specialist.", verified: false, agentAlternative: true },
  { id: "c008", title: "Juzz for Cars", category: "general", specialties: ["engine","servicing","bodywork"], region: "central", area: "Sin Ming", address: "Blk 176 Sin Ming Drive #03-13/15/16", brands: ["BMW","Porsche","MINI"], diagnosticTools: [], partsTier: "OEM+aftermarket", source: "google-maps", sourceUrl: "https://juzzperformance.com.sg/", blurb: "BMW and Porsche specialist at Sin Ming. Servicing and repainting. Sister branch to Juzz Performance at Kaki Bukit.", verified: false, agentAlternative: true },

  // === EAST top-up ===
  { id: "e002", title: "Juzz Performance", category: "general", specialties: ["engine","gearbox","servicing","diagnostics"], region: "east", area: "Kaki Bukit", address: "8 Kaki Bukit Ave 4 #03-51/52, Premier@KB", brands: ["BMW","Audi","Volkswagen","Mercedes-Benz","Porsche","Bentley","MINI"], diagnosticTools: [], partsTier: "OEM+aftermarket", source: "google-maps", sourceUrl: "https://juzzperformance.com.sg/", blurb: "20+ years. Continental specialist at Kaki Bukit covering BMW, Audi, Porsche, Merc and prestige brands.", verified: false, agentAlternative: true },
  { id: "e003", title: "KY Auto", category: "general", specialties: ["engine","servicing","diagnostics"], region: "east", area: "Kaki Bukit", address: "25 Kaki Bukit Rd 4 #05-23, Synergy@KB", brands: ["Audi","BMW","Mercedes-Benz","Porsche"], diagnosticTools: [], partsTier: "OEM+aftermarket", source: "google-maps", sourceUrl: "https://kyauto.sg/", blurb: "Continental specialist at Kaki Bukit covering Audi, BMW, Mercedes and Porsche.", verified: false, agentAlternative: true },
  { id: "e004", title: "TG Auto", category: "engine", specialties: ["engine","servicing","diagnostics"], region: "east", area: "Kaki Bukit", address: "8 Kaki Bukit Ave 4 #03-34/35, Premier@KB", brands: ["BMW","Mercedes-Benz"], diagnosticTools: [], partsTier: "OEM+aftermarket", source: "google-maps", sourceUrl: "https://tgauto.com.sg/", blurb: "BMW and Mercedes specialist at Kaki Bukit. Mon–Fri 9am–6pm.", verified: false, agentAlternative: true },
  { id: "e005", title: "Forward Auto", category: "general", specialties: ["engine","gearbox","servicing"], region: "east", area: "Kaki Bukit", address: "10 Kaki Bukit Rd 2, First East Centre #01-27", brands: ["Mercedes-Benz","BMW","Porsche","MINI"], diagnosticTools: [], partsTier: "OEM+aftermarket", source: "google-maps", sourceUrl: "https://www.forwardauto.sg/", blurb: "30+ years of Continental car servicing at Kaki Bukit.", verified: false, agentAlternative: true },
  { id: "e006", title: "Precise Auto Service", category: "general", specialties: ["engine","servicing","diagnostics"], region: "east", area: "Kaki Bukit", address: "1 Kaki Bukit Ave 6 #02-34/36, Autobay@KB", brands: ["Mercedes-Benz","BMW","Audi","Volkswagen","Toyota","Honda"], diagnosticTools: [], partsTier: "OEM+aftermarket", source: "google-maps", sourceUrl: "https://www.motorist.sg/article/676/five-recommended-workshops-in-singapore-by-region", blurb: "Continental and Japanese makes. Extended Saturday hours to 7pm.", verified: false, agentAlternative: true },
  { id: "e007", title: "Chip Soon", category: "general", specialties: ["engine","servicing","diagnostics"], region: "east", area: "Tampines", address: "Tampines (behind SAFRA Tampines)", phone: "67864648", brands: ["Mercedes-Benz"], diagnosticTools: [], partsTier: "OEM+aftermarket", source: "forum", sourceUrl: "https://www.sgmerc.com/topic/24259-good-workshop-to-recommend-for-servicing/", blurb: "Mercedes specialist in Tampines. Long-standing community recommendation on SGMerc forum.", verified: false, agentAlternative: true },
  { id: "e008", title: "Zen Auto", category: "general", specialties: ["engine","servicing"], region: "east", area: "Kaki Bukit", phone: "96270903", brands: ["Mercedes-Benz"], diagnosticTools: [], partsTier: "OEM+aftermarket", source: "forum", sourceUrl: "https://www.sgmerc.com/topic/24259-good-workshop-to-recommend-for-servicing/", blurb: "Mercedes servicing at Kaki Bukit. Community-recommended on SGMerc forum.", verified: false, agentAlternative: true },

  // === WEST top-up ===
  { id: "w004", title: "Perfect Power", category: "general", specialties: ["engine","servicing","diagnostics"], region: "west", area: "Bukit Batok", address: "WCEGA Plaza #06-12, Bukit Batok", phone: "85227011", brands: ["Mercedes-Benz"], diagnosticTools: [], partsTier: "OEM+aftermarket", source: "forum", sourceUrl: "https://www.sgmerc.com/topic/24259-good-workshop-to-recommend-for-servicing/", blurb: "Mercedes servicing at Bukit Batok. Recommended by SGMerc community. Ask for Michael.", verified: false, agentAlternative: true },
  { id: "w005", title: "3K AutoCare", category: "general", specialties: ["engine","servicing","diagnostics"], region: "west", area: "Jurong West", address: "1 Corporation Drive #04-08, Jurong West", rating: 4.9, brands: ["Mercedes-Benz","BMW","Audi","Volkswagen"], diagnosticTools: [], partsTier: "OEM+aftermarket", source: "google-maps", sourceUrl: "https://threebestrated.sg/auto-repair-shops-in-jurong-west", blurb: "Highly rated Continental and Japanese car specialist in Jurong West. Rated 4.9.", verified: false, agentAlternative: true },
  { id: "w006", title: "Fix Auto", category: "general", specialties: ["engine","gearbox","servicing","bodywork"], region: "west", area: "Pioneer", address: "5 Soon Lee Street #01-61, Pioneer Point", rating: 4.8, brands: ["Mercedes-Benz","BMW","Volkswagen"], diagnosticTools: [], partsTier: "OEM+aftermarket", source: "google-maps", sourceUrl: "https://threebestrated.sg/auto-repair-shops-in-jurong-west", blurb: "Gearbox, accident and Continental servicing at Pioneer. Rated 4.8.", verified: false, agentAlternative: true },
  { id: "w007", title: "Car Swift Repair", category: "general", specialties: ["engine","servicing","diagnostics"], region: "west", area: "Jurong West", address: "1 Corporation Drive #05-12", brands: ["Mercedes-Benz","BMW"], diagnosticTools: [], partsTier: "OEM+aftermarket", source: "google-maps", sourceUrl: "https://carswiftrepair.sg/", blurb: "Mercedes-Benz specialist covering C-Class, E-Class, GLC and AMG models.", verified: false, agentAlternative: true },
  { id: "w008", title: "Proline Autowerks", category: "general", specialties: ["engine","suspension","servicing","tuning"], region: "west", area: "Jurong West", address: "1 Corporation Drive #03-19", rating: 4.8, brands: ["Mercedes-Benz","BMW","Audi","Volkswagen"], diagnosticTools: [], partsTier: "OEM+aftermarket", source: "google-maps", sourceUrl: "https://threebestrated.sg/auto-repair-shops-in-jurong-west", blurb: "Suspension and performance focus. Continental servicing at Jurong West. Rated 4.8.", verified: false, agentAlternative: true },

  // === NORTH top-up ===
  { id: "n002", title: "GSC Automotive", category: "general", specialties: ["engine","gearbox","electrical","servicing","hybrid"], region: "north", area: "Admiralty", address: "10 Admiralty Street #01-12, Northlink Building", brands: ["Audi","BMW","Jaguar","Mercedes-Benz","Volkswagen","Volvo"], diagnosticTools: [], partsTier: "OEM+aftermarket", source: "google-maps", sourceUrl: "https://www.conticarspecialist.com.sg/", blurb: "Since 1992. Open 7 days incl PH, 9am–10pm. First private SG workshop with Hybrid certification. Full Continental range.", verified: false, agentAlternative: true },
  { id: "n003", title: "Optima Werkz", category: "general", specialties: ["engine","servicing","diagnostics"], region: "north", area: "Upper Thomson", address: "551 Upper Thomson Road, S574415", phone: "64526868", brands: ["Mercedes-Benz"], diagnosticTools: ["Star Diagnostic"], partsTier: "OEM+aftermarket", source: "forum", sourceUrl: "https://www.sgmerc.com/topic/24259-good-workshop-to-recommend-for-servicing/", blurb: "Mercedes specialist at Upper Thomson. Endorsed by SGMerc forum moderators.", verified: false, agentAlternative: true },
  { id: "n004", title: "Hann Auto", category: "general", specialties: ["engine","servicing"], region: "north", area: "Woodlands", address: "Mega@Woodlands #03-22", brands: ["Mercedes-Benz"], diagnosticTools: [], partsTier: "OEM+aftermarket", source: "forum", sourceUrl: "https://www.sgmerc.com/topic/24259-good-workshop-to-recommend-for-servicing/", blurb: "Mercedes servicing in Woodlands. Forum members praise the friendly and careful handling.", verified: false, agentAlternative: true },

  // === NORTHEAST top-up ===
  { id: "ne02", title: "Riverview Auto Services", category: "general", specialties: ["engine","servicing","diagnostics"], region: "northeast", area: "Ang Mo Kio", address: "10 Ang Mo Kio Industrial Park 2A #04-07, AMK AutoPoint", brands: ["BMW","Mercedes-Benz","Audi","Volkswagen","Honda","Toyota"], diagnosticTools: [], partsTier: "OEM+aftermarket", source: "google-maps", sourceUrl: "https://recordowl.com/company/riverview-auto-services-pte-ltd", blurb: "Continental and Japanese makes at AMK AutoPoint. Free vehicle pickup within 5km.", verified: false, agentAlternative: true },
  { id: "ne03", title: "MBM Wheelpower", category: "general", specialties: ["engine","servicing","diagnostics"], region: "northeast", area: "Sengkang", brands: ["Mercedes-Benz"], diagnosticTools: [], partsTier: "OEM+aftermarket", source: "forum", sourceUrl: "https://www.sgmerc.com/topic/24259-good-workshop-to-recommend-for-servicing/", blurb: "Mercedes specialist in Sengkang. Recommended by SGMerc community with positive service feedback.", verified: false, agentAlternative: true },

  // === VICOM / Inspection ===
  { id: "i001", title: "VICOM Sin Ming", category: "inspection", specialties: ["inspection","emissions","vicom"], region: "central", area: "Sin Ming", priceFrom: 70, rating: 4.0, reviewCount: 920, source: "google-maps", sourceUrl: "https://www.google.com/maps/search/VICOM+Sin+Ming", blurb: "Government-mandated annual inspection. Bays for cars + bikes.", verified: false },

  // === 24-HR / EMERGENCY ===
  { id: "em01", title: "AAS 24-Hour Recovery", category: "towing", specialties: ["towing","recovery","jump-start"], region: "central", area: "All SG", priceFrom: 120, rating: 4.3, reviewCount: 800, source: "aas-direct", sourceUrl: "https://aas.com.sg", blurb: "Automobile Association of Singapore. 24-hr roadside + tow.", verified: false },
];

export const CATEGORIES: Record<string, { label: string; emoji: string; description: string }> = {
  general: { label: "General Servicing", emoji: "🔧", description: "Servicing, oil change, brakes, common repairs." },
  engine: { label: "Engine", emoji: "⚙️", description: "Engine overhauls, timing, head gasket, oil leaks." },
  transmission: { label: "Transmission", emoji: "🛠️", description: "Auto, ZF, DSG, CVT, manual gearbox repair + rebuild." },
  brakes: { label: "Brakes", emoji: "🛑", description: "Pads, discs, ABS, brake fluid." },
  suspension: { label: "Suspension", emoji: "🔩", description: "Coilovers, absorbers, air-suspension, valve block." },
  electrical: { label: "Electrical / Coding", emoji: "⚡", description: "Battery, alternator, starter, wiring, VCDS coding." },
  body: { label: "Body & Paint", emoji: "🎨", description: "Collision repair, spray, panel-beating, dents." },
  tyres: { label: "Tyres", emoji: "🛞", description: "New + used tyres, alignment, balancing." },
  ev: { label: "EV / Hybrid", emoji: "🔋", description: "Tesla, BYD, hybrid, EV-specific HV repair." },
  inspection: { label: "VICOM / Inspection", emoji: "✅", description: "Pre-inspection checks, emissions, lights." },
  towing: { label: "24-hr Recovery", emoji: "🚛", description: "Towing, jump-start, roadside assistance." },
};

export const REGIONS: Record<string, string> = {
  central: "Central",
  east: "East",
  west: "West",
  north: "North",
  northeast: "Northeast",
};

// Common-fix database — symptom + brand → likely cause + price range
// Educates owners away from "agent says strut $3000" toward "specialist says valve block $300"
export const COMMON_FIXES: { brand: string; model?: string; symptom: string; commonCause: string; agentEstimate?: number; specialistEstimate?: number; severity: "low" | "med" | "high" }[] = [
  {
    brand: "Mercedes-Benz", model: "W213 E-Class",
    symptom: "Air suspension dropping overnight",
    commonCause: "Air valve block leak (common at 80-120k km)",
    agentEstimate: 3500, specialistEstimate: 350,
    severity: "med",
  },
  {
    brand: "Mercedes-Benz", model: "W212 E-Class",
    symptom: "Transmission jerk at low speed",
    commonCause: "722.9 7G-Tronic conductor plate (common at 100k km)",
    agentEstimate: 2200, specialistEstimate: 800,
    severity: "med",
  },
  {
    brand: "BMW", model: "F30 3-Series (N20)",
    symptom: "Engine rattle on cold start",
    commonCause: "Timing chain guide / tensioner (known N20 issue)",
    agentEstimate: 4500, specialistEstimate: 1800,
    severity: "high",
  },
  {
    brand: "BMW", model: "F30 3-Series (B58/N55)",
    symptom: "Misfire / rough idle",
    commonCause: "Coil pack + spark plug set",
    agentEstimate: 800, specialistEstimate: 320,
    severity: "low",
  },
  {
    brand: "Audi", model: "B8/B9 A4 / S4",
    symptom: "DSG / S-Tronic jerky shifting",
    commonCause: "Mechatronic seal / fluid + filter service",
    agentEstimate: 1500, specialistEstimate: 480,
    severity: "med",
  },
  {
    brand: "Audi", model: "Q7 / A8",
    symptom: "Suspension dropping or compressor noise",
    commonCause: "Air compressor or front strut",
    agentEstimate: 2800, specialistEstimate: 1100,
    severity: "med",
  },
  {
    brand: "Volkswagen", model: "Golf / Passat (TSI)",
    symptom: "Engine misfire + carbon symptoms",
    commonCause: "Walnut blast / carbon clean of intake valves",
    agentEstimate: 1200, specialistEstimate: 450,
    severity: "low",
  },
  {
    brand: "Porsche", model: "996 / 997 (early)",
    symptom: "Oil leak from rear of engine",
    commonCause: "RMS (rear main seal) / IMS bearing inspection",
    agentEstimate: 5500, specialistEstimate: 2800,
    severity: "high",
  },
  {
    brand: "Tesla", model: "Model 3 / Model Y",
    symptom: "Car bricked / won't wake up",
    commonCause: "12V auxiliary battery failure (3-4 yr lifespan)",
    agentEstimate: 600, specialistEstimate: 200,
    severity: "low",
  },
  {
    brand: "Tesla", model: "Model S (older)",
    symptom: "MCU touchscreen lag / yellow border",
    commonCause: "MCU2 retrofit (memory chip degradation)",
    agentEstimate: 4200, specialistEstimate: 2500,
    severity: "med",
  },
];
