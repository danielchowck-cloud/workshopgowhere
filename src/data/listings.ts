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
  // === MERCEDES specialists ===
  { id: "m001", title: "Star Performance", category: "general", specialties: ["mechatronics","air-suspension","servicing","engine","transmission"], region: "central", area: "Sin Ming", address: "Sin Ming Industrial Estate", priceFrom: 250, rating: 4.7, reviewCount: 320, brands: ["Mercedes-Benz","AMG"], diagnosticTools: ["Star Diagnostic XENTRY"], partsTier: "OEM+aftermarket", source: "verified-partner", sourceUrl: "https://www.google.com/maps/search/Star+Performance+Sin+Ming", blurb: "Mercedes specialist. XENTRY diagnostics, OEM Lemförder parts. Common-fix database expert (e.g. W213 valve block).", verified: true, agentAlternative: true,
    transparencyScore: 5, providesPhotoProof: true, providesScans: true, hasItemizedQuote: true, hasFixedPriceMenu: true,
    symptomPrices: { "w213-airmatic-drop": 380, "w213-knocking-suspension": 480, "w213-gearbox-jerk": 950, "w213-aircon-not-cold": 220, "w212-7g-jerk": 850, "w212-airmatic": 750, "w205-comand-lag": 200, "glc-airmatic": 600, "glc-9g-tronic": 950 } },
  { id: "m002", title: "MB Auto Werkstatt", category: "general", specialties: ["mechatronics","air-suspension","aircon","electrical"], region: "west", area: "Toh Guan", priceFrom: 220, rating: 4.6, reviewCount: 180, brands: ["Mercedes-Benz","AMG"], diagnosticTools: ["Star Diagnostic"], partsTier: "OEM+aftermarket", source: "verified-partner", sourceUrl: "https://www.google.com/maps/search/MB+Auto+Werkstatt+Toh+Guan", blurb: "Independent Mercedes specialist. Air suspension, valve block, mechatronics fixes at 40-60% less than agent.", verified: true, agentAlternative: true,
    transparencyScore: 4, providesPhotoProof: true, providesScans: true, hasItemizedQuote: true, hasFixedPriceMenu: false,
    symptomPrices: { "w213-airmatic-drop": 350, "w213-knocking-suspension": 450, "w213-gearbox-jerk": 980, "w212-7g-jerk": 800, "w212-airmatic": 700, "glc-airmatic": 580 } },
  { id: "m003", title: "Stuttgart Auto Service", category: "engine", specialties: ["engine","timing","oil-leak","gasket"], region: "east", area: "Ubi", priceFrom: 350, rating: 4.5, reviewCount: 140, brands: ["Mercedes-Benz","AMG","Smart"], diagnosticTools: ["Star Diagnostic"], partsTier: "OEM", source: "verified-partner", sourceUrl: "https://www.google.com/maps/search/Stuttgart+Auto+Ubi", blurb: "Mercedes engine specialist. Timing, head gasket, M271/M276 known issues.", verified: true, agentAlternative: true,
    transparencyScore: 4, providesPhotoProof: true, providesScans: true, hasItemizedQuote: true, hasFixedPriceMenu: false,
    symptomPrices: { "w213-engine-rattle-cold": 1800, "w212-balance-shaft": 4200, "w205-engine-mount": 550 } },

  // === BMW specialists ===
  { id: "b001", title: "Bavarian Werkstatt", category: "general", specialties: ["engine","gearbox","electrical","servicing"], region: "central", area: "Sin Ming", priceFrom: 280, rating: 4.8, reviewCount: 410, brands: ["BMW","Mini"], diagnosticTools: ["ISTA","BMW Standard Tools"], partsTier: "OEM+aftermarket", source: "verified-partner", sourceUrl: "https://www.google.com/maps/search/Bavarian+Werkstatt+Sin+Ming", blurb: "ISTA-equipped BMW specialist. F30/F32/G30 expertise. ZF gearbox service experts.", verified: true, agentAlternative: true },
  { id: "b002", title: "Munich Motors", category: "engine", specialties: ["engine","timing","vanos","valvetronic"], region: "west", area: "Tuas", priceFrom: 400, rating: 4.6, reviewCount: 200, brands: ["BMW","Mini"], diagnosticTools: ["ISTA"], partsTier: "OEM", source: "verified-partner", sourceUrl: "https://www.google.com/maps/search/Munich+Motors+Tuas", blurb: "BMW engine: VANOS solenoids, Valvetronic, timing chain on N20/N52/N54.", verified: true, agentAlternative: true },
  { id: "b003", title: "M Performance Workshop", category: "transmission", specialties: ["transmission","ZF","DSG","gearbox"], region: "northeast", area: "Hougang", priceFrom: 600, rating: 4.7, reviewCount: 120, brands: ["BMW","Mini"], diagnosticTools: ["ISTA"], partsTier: "OEM", source: "verified-partner", sourceUrl: "https://www.google.com/maps/search/M+Performance+Hougang", blurb: "ZF 8HP gearbox service specialist. Mechatronic, valve body, oil change.", verified: true },

  // === AUDI / VW / Skoda / Porsche specialists ===
  { id: "v001", title: "Wolfsburg Auto", category: "general", specialties: ["engine","DSG","electrical","servicing"], region: "central", area: "Sin Ming", priceFrom: 250, rating: 4.6, reviewCount: 280, brands: ["Audi","Volkswagen","Skoda"], diagnosticTools: ["ODIS","VCDS"], partsTier: "OEM+aftermarket", source: "verified-partner", sourceUrl: "https://www.google.com/maps/search/Wolfsburg+Auto+Sin+Ming", blurb: "Audi/VW specialist. ODIS + VCDS coding. DSG mechatronic and TSI carbon clean.", verified: true, agentAlternative: true },
  { id: "v002", title: "Quattro Auto", category: "general", specialties: ["engine","quattro","brakes","suspension"], region: "east", area: "Kaki Bukit", priceFrom: 280, rating: 4.5, reviewCount: 130, brands: ["Audi"], diagnosticTools: ["ODIS"], partsTier: "OEM", source: "verified-partner", sourceUrl: "https://www.google.com/maps/search/Quattro+Auto+Kaki+Bukit", blurb: "Audi quattro and S-line specialist.", verified: true, agentAlternative: true },
  { id: "v003", title: "Porsche Centre Workshop (Eurokars)", category: "general", specialties: ["engine","servicing","luxury"], region: "east", area: "Leng Kee", priceFrom: 500, rating: 4.5, reviewCount: 290, brands: ["Porsche"], diagnosticTools: ["PIWIS"], partsTier: "OEM", source: "google-maps", sourceUrl: "https://www.google.com/maps/search/Porsche+Centre+Leng+Kee", blurb: "Authorised Porsche workshop. PIWIS-equipped.", verified: false },
  { id: "v004", title: "Stuttgart Specialist Garage", category: "general", specialties: ["engine","ims","servicing"], region: "central", area: "Sin Ming", priceFrom: 400, rating: 4.7, reviewCount: 90, brands: ["Porsche"], diagnosticTools: ["PIWIS","Durametric"], partsTier: "OEM+aftermarket", source: "verified-partner", sourceUrl: "https://www.google.com/maps/search/Stuttgart+Specialist+Sin+Ming", blurb: "Independent Porsche shop. IMS bearing, RMS, 996/997/Cayenne known issues.", verified: true, agentAlternative: true },

  // === VOLVO ===
  { id: "vo01", title: "Gothenburg Motors", category: "general", specialties: ["engine","servicing","electrical"], region: "north", area: "Mandai", priceFrom: 220, rating: 4.5, reviewCount: 110, brands: ["Volvo"], diagnosticTools: ["VIDA"], partsTier: "OEM+aftermarket", source: "verified-partner", sourceUrl: "https://www.google.com/maps/search/Gothenburg+Motors+Mandai", blurb: "Volvo specialist with VIDA. XC60/XC90/V60 expertise.", verified: true, agentAlternative: true },

  // === EV specialists ===
  { id: "ev01", title: "EV Care SG", category: "ev", specialties: ["EV","tesla","battery","charging","HV-system"], region: "central", area: "Tagore", priceFrom: 150, rating: 4.5, reviewCount: 60, brands: ["Tesla","BYD","Hyundai EV","MG"], diagnosticTools: ["TeslaTM"], partsTier: "OEM", source: "verified-partner", sourceUrl: "https://www.google.com/maps/search/EV+Care+SG+Tagore", blurb: "Independent Tesla + EV specialist. HV system, battery cell rebalancing, 12V failure.", verified: true, agentAlternative: true },
  { id: "ev02", title: "Tesla Service Centre", category: "ev", specialties: ["EV","tesla","servicing","HV-system"], region: "east", area: "Toa Payoh", priceFrom: 300, rating: 4.0, reviewCount: 380, brands: ["Tesla"], diagnosticTools: ["Tesla Toolbox"], partsTier: "OEM", source: "google-maps", sourceUrl: "https://www.google.com/maps/search/Tesla+Service+Centre+Toa+Payoh", blurb: "Authorised Tesla service. Wait-times can be long.", verified: false },

  // === SPECIALIST (non-brand) but Continental-relevant ===
  { id: "sp01", title: "Brake Pro Workshop", category: "brakes", specialties: ["brakes","pads","discs","abs"], region: "central", area: "Geylang", priceFrom: 150, rating: 4.5, reviewCount: 180, brands: ["Mercedes-Benz","BMW","Audi","Volkswagen"], diagnosticTools: [], partsTier: "OEM+aftermarket", source: "google-maps", sourceUrl: "https://www.google.com/maps/search/Brake+Pro+Geylang", blurb: "Continental brake specialist. Brembo, ATE, Textar pads. Coding required jobs handled.", verified: true, agentAlternative: true },
  { id: "sp02", title: "Transmission Specialist Pte Ltd", category: "transmission", specialties: ["transmission","gearbox","CVT","ZF","DSG"], region: "west", area: "Tuas", priceFrom: 600, rating: 4.6, reviewCount: 90, brands: ["Mercedes-Benz","BMW","Audi","Volkswagen","Porsche"], diagnosticTools: [], partsTier: "OEM+aftermarket", source: "verified-partner", sourceUrl: "https://www.google.com/maps/search/Transmission+Specialist+Tuas", blurb: "ZF 8HP / DSG mechatronic / ECVT specialist. Continental gearbox rebuild.", verified: true, agentAlternative: true },
  { id: "sp03", title: "AirSuspension Hub", category: "suspension", specialties: ["air-suspension","valve-block","compressor","strut"], region: "east", area: "Ubi", priceFrom: 300, rating: 4.7, reviewCount: 75, brands: ["Mercedes-Benz","BMW","Audi","Land Rover","Porsche"], diagnosticTools: [], partsTier: "OEM+aftermarket", source: "verified-partner", sourceUrl: "https://www.google.com/maps/search/AirSuspension+Hub+Ubi", blurb: "Continental air suspension specialist. W213 valve block ($300 fix instead of $3k strut), B8/B9 Audi A8, Q7.", verified: true, agentAlternative: true,
    transparencyScore: 5, providesPhotoProof: true, providesScans: true, hasItemizedQuote: true, hasFixedPriceMenu: true,
    symptomPrices: { "w213-airmatic-drop": 320, "w212-airmatic": 680, "gle-airmatic": 750, "glc-airmatic": 550, "w211-air-bleed": 950 } },
  { id: "sp04", title: "Auto Electrical Hub", category: "electrical", specialties: ["electrical","wiring","alternator","starter","coding"], region: "central", area: "Beach Road", priceFrom: 100, rating: 4.4, reviewCount: 110, brands: ["Mercedes-Benz","BMW","Audi","Volkswagen"], diagnosticTools: ["VCDS","Carly"], partsTier: "aftermarket", source: "google-maps", sourceUrl: "https://www.google.com/maps/search/Auto+Electrical+Beach+Road", blurb: "Continental coding shop. VCDS, Carly. Headlight retrofit, comfort coding.", verified: true, agentAlternative: true },

  // === GENERAL "any car" fallback (de-emphasised) ===
  { id: "g001", title: "KH Auto Service", category: "general", specialties: ["engine","brakes","aircon","general"], region: "east", area: "Tai Seng", priceFrom: 70, rating: 4.7, reviewCount: 480, brands: ["Toyota","Honda","Nissan","Mazda","Mitsubishi"], diagnosticTools: [], partsTier: "OEM+aftermarket", source: "google-maps", sourceUrl: "https://www.google.com/maps/search/KH+Auto+Tai+Seng", blurb: "East SG's most-recommended Japanese-makes independent shop.", verified: false },
  { id: "g002", title: "GAS Auto Pte Ltd", category: "general", specialties: ["engine","servicing","tyres","aircon"], region: "west", area: "Boon Lay", priceFrom: 90, rating: 4.3, reviewCount: 210, brands: ["Toyota","Honda","Nissan"], diagnosticTools: [], partsTier: "OEM+aftermarket", source: "google-maps", sourceUrl: "https://www.google.com/maps/search/GAS+Auto+Boon+Lay", blurb: "Comprehensive Japanese-makes servicing.", verified: false },
  { id: "g003", title: "Tan Chong Motor Workshop", category: "general", specialties: ["engine","brakes","servicing","aircon","warranty"], region: "central", area: "Ubi", priceFrom: 80, rating: 4.2, reviewCount: 340, brands: ["Nissan","Subaru"], diagnosticTools: [], partsTier: "OEM", source: "google-maps", sourceUrl: "https://www.google.com/maps/search/Tan+Chong+Motor+Ubi", blurb: "Authorized Nissan/Subaru workshop.", verified: false },

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
