// Seed dataset — hand-curated SG workshops for launch.
// Replaced by scraper-generated JSON in v2.

export type Listing = {
  id: string;
  title: string;
  category: string;
  subcategory?: string;
  audience: string[];   // e.g. ["adults", "kids", "couples"]
  region: string;       // central, west, east, north, northeast, online
  area?: string;        // specific neighbourhood when known
  priceFrom: number;    // SGD
  priceTo?: number;
  duration: string;     // e.g. "2 hours", "half-day", "full-day"
  cadence: string;      // e.g. "one-off", "weekly", "monthly"
  source: string;       // platform name
  sourceUrl: string;    // outbound link (will append affiliate tag)
  blurb: string;
  studio?: string;
  weekdays?: string[];  // ["sat","sun"]
};

export const listings: Listing[] = [
  // POTTERY
  { id: "p001", title: "Beginner Pottery Wheel Throwing", category: "pottery", audience: ["adults","couples"], region: "central", area: "Tiong Bahru", priceFrom: 95, duration: "2.5 hours", cadence: "weekly", source: "studio-direct", sourceUrl: "https://www.thepotteryworkshop.sg", blurb: "Hands-on wheel throwing for absolute beginners. Take home one piece.", studio: "The Pottery Workshop", weekdays: ["sat","sun"] },
  { id: "p002", title: "Hand-building Ceramics Workshop", category: "pottery", audience: ["adults","kids"], region: "east", area: "Joo Chiat", priceFrom: 75, duration: "3 hours", cadence: "weekly", source: "peatix", sourceUrl: "https://peatix.com/event/handbuilding-ceramics", blurb: "Build a mug or planter using slab and coil techniques. No wheel.", studio: "Center Pottery", weekdays: ["sat","sun"] },
  { id: "p003", title: "Date Night Pottery Class", category: "pottery", audience: ["couples"], region: "central", area: "Bukit Timah", priceFrom: 180, priceTo: 220, duration: "2.5 hours", cadence: "weekly", source: "klook", sourceUrl: "https://www.klook.com/activity/sg-pottery-date-night", blurb: "Wheel throwing for two. Wine and cheese included.", studio: "Spin Studio", weekdays: ["fri","sat"] },

  // COOKING
  { id: "c001", title: "Sourdough Bread-Making Workshop", category: "cooking", audience: ["adults"], region: "east", area: "Katong", priceFrom: 130, duration: "4 hours", cadence: "monthly", source: "eventbrite", sourceUrl: "https://www.eventbrite.sg/sourdough-katong", blurb: "Learn to bake your own sourdough loaves. Take starter home.", studio: "Bake Lab SG", weekdays: ["sat"] },
  { id: "c002", title: "Hands-on Hainanese Chicken Rice Class", category: "cooking", subcategory: "local", audience: ["adults","all-ages"], region: "central", area: "Chinatown", priceFrom: 90, duration: "3 hours", cadence: "weekly", source: "klook", sourceUrl: "https://www.klook.com/activity/sg-chicken-rice-class", blurb: "Master the local classic. Walk away with recipes.", studio: "Singapore Cooking School", weekdays: ["fri","sat","sun"] },
  { id: "c003", title: "Kids Baking — Cookies & Cupcakes", category: "cooking", subcategory: "baking", audience: ["kids","parent-child"], region: "west", area: "Holland Village", priceFrom: 65, duration: "2 hours", cadence: "weekly", source: "studio-direct", sourceUrl: "https://www.bakingforkids.sg", blurb: "Ages 6-12. Decorate and take home a box of treats.", studio: "Little Bakers", weekdays: ["sat","sun"] },
  { id: "c004", title: "Sushi Making Hands-on Class", category: "cooking", subcategory: "japanese", audience: ["adults","couples"], region: "central", area: "Orchard", priceFrom: 110, duration: "2.5 hours", cadence: "weekly", source: "peatix", sourceUrl: "https://peatix.com/event/sushi-orchard", blurb: "Roll your own maki and nigiri. Sake tasting included.", studio: "Tokyo Kitchen", weekdays: ["sat"] },

  // ART
  { id: "a001", title: "Acrylic Pour Painting Class", category: "art", subcategory: "painting", audience: ["adults","couples","all-ages"], region: "central", area: "Bras Basah", priceFrom: 70, duration: "2 hours", cadence: "weekly", source: "klook", sourceUrl: "https://www.klook.com/activity/sg-acrylic-pour", blurb: "No experience needed. Take home a 12x12 canvas.", studio: "Pour & Sip", weekdays: ["fri","sat","sun"] },
  { id: "a002", title: "Watercolour for Beginners", category: "art", subcategory: "painting", audience: ["adults"], region: "northeast", area: "Serangoon", priceFrom: 80, duration: "3 hours", cadence: "weekly", source: "studio-direct", sourceUrl: "https://www.brushandbloom.sg", blurb: "Loose watercolour florals. Materials provided.", studio: "Brush & Bloom", weekdays: ["sat","sun"] },
  { id: "a003", title: "Family Art Jamming Session", category: "art", subcategory: "general", audience: ["parent-child","all-ages"], region: "central", area: "City Hall", priceFrom: 45, duration: "2 hours", cadence: "daily", source: "klook", sourceUrl: "https://www.klook.com/activity/sg-art-jamming-family", blurb: "Drop-in family painting. Canvas, paint, snacks included.", studio: "Arteastiq", weekdays: ["sat","sun"] },

  // CALLIGRAPHY
  { id: "ca01", title: "Modern Brush Lettering Workshop", category: "calligraphy", audience: ["adults"], region: "central", area: "Tanjong Pagar", priceFrom: 85, duration: "2.5 hours", cadence: "monthly", source: "peatix", sourceUrl: "https://peatix.com/event/brush-lettering-tjp", blurb: "Learn modern script and brush pen techniques.", studio: "Letters by Ren", weekdays: ["sat"] },
  { id: "ca02", title: "Chinese Calligraphy for Beginners", category: "calligraphy", subcategory: "chinese", audience: ["adults","seniors"], region: "central", area: "Bugis", priceFrom: 60, duration: "2 hours", cadence: "weekly", source: "studio-direct", sourceUrl: "https://www.shufa.sg", blurb: "Traditional brush, ink, paper. Cantonese-friendly.", studio: "Shufa Studio", weekdays: ["sat"] },

  // WOODWORK
  { id: "w001", title: "Build Your Own Cutting Board", category: "woodwork", audience: ["adults","couples"], region: "north", area: "Woodlands", priceFrom: 145, duration: "5 hours", cadence: "monthly", source: "studio-direct", sourceUrl: "https://www.shedwoodwork.sg", blurb: "Pick wood, plane, sand, oil. Take home a cutting board.", studio: "The Shed", weekdays: ["sat","sun"] },
  { id: "w002", title: "Resin & Wood Charcuterie Board", category: "woodwork", subcategory: "resin", audience: ["adults","couples"], region: "east", area: "Tai Seng", priceFrom: 165, duration: "4 hours", cadence: "monthly", source: "klook", sourceUrl: "https://www.klook.com/activity/sg-resin-charcuterie", blurb: "Live-edge wood + ocean-blue resin pour.", studio: "Resin Lab", weekdays: ["sat"] },

  // FITNESS
  { id: "f001", title: "Pole Dance Beginner Trial", category: "fitness", subcategory: "dance", audience: ["adults"], region: "central", area: "Somerset", priceFrom: 35, duration: "1 hour", cadence: "daily", source: "studio-direct", sourceUrl: "https://www.poleathletica.sg", blurb: "First-timer trial. All shapes & sizes welcome.", studio: "Pole Athletica", weekdays: ["mon","tue","wed","thu","fri","sat","sun"] },
  { id: "f002", title: "Outdoor Yoga in Botanic Gardens", category: "fitness", subcategory: "yoga", audience: ["adults","all-ages"], region: "central", area: "Botanic Gardens", priceFrom: 30, duration: "1 hour", cadence: "weekly", source: "eventbrite", sourceUrl: "https://www.eventbrite.sg/yoga-botanic", blurb: "Saturday morning sunrise yoga. BYO mat.", studio: "Yoga in the Gardens", weekdays: ["sat"] },

  // MUSIC
  { id: "m001", title: "Beginner Ukulele in 4 Weeks", category: "music", audience: ["adults","kids","all-ages"], region: "central", area: "Dhoby Ghaut", priceFrom: 220, priceTo: 280, duration: "4 sessions", cadence: "weekly", source: "studio-direct", sourceUrl: "https://www.ukestrings.sg", blurb: "From zero to playing your first song. Uke included.", studio: "Uke Strings", weekdays: ["sat","sun"] },
  { id: "m002", title: "Vinyl DJing Intro", category: "music", subcategory: "dj", audience: ["adults"], region: "central", area: "Geylang", priceFrom: 150, duration: "3 hours", cadence: "monthly", source: "peatix", sourceUrl: "https://peatix.com/event/vinyl-dj-geylang", blurb: "Spin your first set on real vinyl. Beat-matching basics.", studio: "Spin Records", weekdays: ["sat"] },

  // LANGUAGE
  { id: "l001", title: "Conversational Japanese Trial", category: "language", subcategory: "japanese", audience: ["adults"], region: "central", area: "Raffles Place", priceFrom: 0, duration: "1 hour", cadence: "weekly", source: "studio-direct", sourceUrl: "https://www.nichiyou.sg", blurb: "Free first lesson. Native instructors.", studio: "Nichiyou Japanese", weekdays: ["sat"] },

  // PARENT-CHILD
  { id: "pc01", title: "Parent-Child Bouldering", category: "fitness", subcategory: "climbing", audience: ["parent-child","kids"], region: "west", area: "Boon Lay", priceFrom: 50, duration: "2 hours", cadence: "weekly", source: "klook", sourceUrl: "https://www.klook.com/activity/sg-bouldering-pc", blurb: "Ages 4+. Climb shoes provided. Coach guidance.", studio: "Boulder+", weekdays: ["sat","sun"] },
  { id: "pc02", title: "Toddler Gymnastics Discovery", category: "fitness", subcategory: "gymnastics", audience: ["parent-child","kids"], region: "northeast", area: "Hougang", priceFrom: 45, duration: "1 hour", cadence: "weekly", source: "studio-direct", sourceUrl: "https://www.junglekidssg.com", blurb: "Ages 18m-3y. Parent participates.", studio: "Jungle Kids", weekdays: ["sat","sun"] },

  // FLOWER / BOTANICAL
  { id: "fl01", title: "Bouquet Arrangement Workshop", category: "florist", audience: ["adults","couples","all-ages"], region: "central", area: "Tiong Bahru", priceFrom: 95, duration: "2 hours", cadence: "weekly", source: "peatix", sourceUrl: "https://peatix.com/event/bouquet-tb", blurb: "Build a hand-tied seasonal bouquet to take home.", studio: "Petal & Co", weekdays: ["fri","sat"] },
  { id: "fl02", title: "Pressed Flower Resin Coaster Set", category: "art", subcategory: "resin", audience: ["adults","couples"], region: "east", area: "Bedok", priceFrom: 70, duration: "2.5 hours", cadence: "monthly", source: "klook", sourceUrl: "https://www.klook.com/activity/sg-pressed-flower-resin", blurb: "Make 4 resin coasters with real pressed botanicals.", studio: "Boon Crafts", weekdays: ["sat","sun"] },

  // CRAFT
  { id: "cr01", title: "Leather Wallet Making", category: "craft", subcategory: "leather", audience: ["adults"], region: "central", area: "Beach Road", priceFrom: 130, duration: "3.5 hours", cadence: "monthly", source: "studio-direct", sourceUrl: "https://www.dlefa.sg", blurb: "Hand-stitch your own bifold wallet from full-grain leather.", studio: "DLEFA", weekdays: ["sat","sun"] },
  { id: "cr02", title: "Soap-Making 101", category: "craft", subcategory: "soap", audience: ["adults","kids","all-ages"], region: "northeast", area: "Punggol", priceFrom: 55, duration: "2 hours", cadence: "weekly", source: "klook", sourceUrl: "https://www.klook.com/activity/sg-soap-making", blurb: "Cold-process soap with botanical scents.", studio: "Suds & Co", weekdays: ["sat","sun"] },
  { id: "cr03", title: "Candle Making — Soy Wax & Scent Blending", category: "craft", subcategory: "candle", audience: ["adults","couples"], region: "central", area: "Kampong Bahru", priceFrom: 65, duration: "1.5 hours", cadence: "daily", source: "klook", sourceUrl: "https://www.klook.com/activity/sg-candle-making", blurb: "Pour two candles with custom fragrance blends.", studio: "Wax Lab", weekdays: ["mon","tue","wed","thu","fri","sat","sun"] },

  // TECH / DIGITAL
  { id: "t001", title: "Beginner Python in a Day", category: "tech", subcategory: "coding", audience: ["adults","kids"], region: "central", area: "Clarke Quay", priceFrom: 140, duration: "6 hours", cadence: "monthly", source: "eventbrite", sourceUrl: "https://www.eventbrite.sg/python-day-cq", blurb: "Zero to your first program. Bring a laptop.", studio: "CodeStart SG", weekdays: ["sat"] },
  { id: "t002", title: "AI Image Generation Workshop", category: "tech", subcategory: "ai", audience: ["adults"], region: "central", area: "Tanjong Pagar", priceFrom: 110, duration: "2.5 hours", cadence: "monthly", source: "peatix", sourceUrl: "https://peatix.com/event/ai-image-gen", blurb: "Hands-on with Midjourney + Stable Diffusion. Take home prompts.", studio: "AI Lab SG", weekdays: ["sat"] },

  // ONLINE
  { id: "o001", title: "Live Online — Watercolour Florals", category: "art", subcategory: "painting", audience: ["adults","all-ages"], region: "online", priceFrom: 40, duration: "1.5 hours", cadence: "weekly", source: "studio-direct", sourceUrl: "https://www.brushandbloom.sg/online", blurb: "Zoom-based watercolour for SG time zone.", studio: "Brush & Bloom", weekdays: ["sun"] },

  // FREE / FREEMIUM
  { id: "fr01", title: "Library Calligraphy Open Session", category: "calligraphy", audience: ["adults","kids","all-ages"], region: "central", area: "Bras Basah", priceFrom: 0, duration: "2 hours", cadence: "weekly", source: "studio-direct", sourceUrl: "https://www.nlb.gov.sg/events/calligraphy", blurb: "Free open session at NLB. All materials provided.", studio: "National Library Board", weekdays: ["sat"] },

  // SENIORS
  { id: "s001", title: "Senior-Friendly Tai Chi Beginner", category: "fitness", subcategory: "tai-chi", audience: ["seniors","adults"], region: "central", area: "Toa Payoh", priceFrom: 25, duration: "1 hour", cadence: "weekly", source: "studio-direct", sourceUrl: "https://www.silvertaichi.sg", blurb: "Slow-paced. Beginners and 50+ welcome.", studio: "Silver Tai Chi", weekdays: ["mon","wed","fri"] },
];

export const CATEGORIES: Record<string, { label: string; emoji: string; description: string }> = {
  pottery: { label: "Pottery", emoji: "🏺", description: "Wheel throwing, hand-building, glazing." },
  cooking: { label: "Cooking", emoji: "🍳", description: "Baking, local cuisine, sushi, knife skills." },
  art: { label: "Art", emoji: "🎨", description: "Acrylic, watercolour, art jamming, resin." },
  calligraphy: { label: "Calligraphy", emoji: "🖋️", description: "Modern lettering and Chinese brush work." },
  woodwork: { label: "Woodwork", emoji: "🪵", description: "Cutting boards, charcuterie, joinery." },
  fitness: { label: "Fitness", emoji: "💪", description: "Yoga, climbing, gymnastics, dance." },
  music: { label: "Music", emoji: "🎵", description: "Instruments, DJing, voice." },
  language: { label: "Language", emoji: "💬", description: "Japanese, Korean, Chinese, French." },
  florist: { label: "Florist", emoji: "💐", description: "Bouquets, arrangements, bridal." },
  craft: { label: "Craft", emoji: "🧵", description: "Leather, soap, candles, jewellery." },
  tech: { label: "Tech", emoji: "💻", description: "Coding, AI, digital tools." },
};

export const REGIONS: Record<string, string> = {
  central: "Central",
  east: "East",
  west: "West",
  north: "North",
  northeast: "Northeast",
  online: "Online",
};

export const AUDIENCES: Record<string, { label: string; emoji: string }> = {
  adults: { label: "Adults", emoji: "🧑" },
  kids: { label: "Kids", emoji: "🧒" },
  couples: { label: "Couples", emoji: "💑" },
  "parent-child": { label: "Parent & Child", emoji: "👨‍👩‍👧" },
  seniors: { label: "Seniors", emoji: "🧓" },
  "all-ages": { label: "All ages", emoji: "👨‍👩‍👧‍👦" },
};
