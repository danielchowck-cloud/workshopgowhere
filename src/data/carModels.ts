// Car model database for Smart Symptom Search.
// v2.0 launch focus: Mercedes-Benz (W213/W212/W205/W211/W204, GLE, GLC).
// Other Continental brands follow.
//
// Each model has a list of "Common Issues" with diagnostic tips. The tips
// are designed to win owner trust by warning them about THE TRAP — what
// dealers / agents typically over-quote vs the real fix.

export type CommonIssue = {
  id: string;
  symptom: string;                 // human-readable, dropdown label
  severity: "low" | "med" | "high";
  diagnosticTip: string;           // the consumer-alert banner text
  likelyFix: string;
  realFixPrice: [number, number];  // [low, high] in SGD
  agentTrapPrice: [number, number]; // what agent would typically quote
  trapPercentage: number;          // confidence the consumer-alert applies (e.g. 80)
  requiredTools?: string[];        // diagnostic tools needed (XENTRY, etc.)
};

export type CarModel = {
  id: string;
  brand: string;
  model: string;
  yearsActive: string;             // "2016-present"
  popularSG: boolean;              // commonly seen in Singapore
  searchAliases: string[];         // user-typed alt names
  commonIssues: CommonIssue[];
};

export const CAR_MODELS: CarModel[] = [
  // ─────────────── MERCEDES-BENZ (PHASE 1 LAUNCH FOCUS) ───────────────
  {
    id: "mb-w213-eclass",
    brand: "Mercedes-Benz",
    model: "W213 E-Class",
    yearsActive: "2016-2023",
    popularSG: true,
    searchAliases: ["E200", "E250", "E300", "E350", "W213", "E-Class 2016", "E-Class 2018", "E-Class 2020"],
    commonIssues: [
      {
        id: "w213-airmatic-drop",
        symptom: "Car too low / Airmatic warning / Air suspension dropping overnight",
        severity: "med",
        diagnosticTip:
          "This is 80% likely to be a leaking VALVE BLOCK ($300-450), not the full airbag/strut. The Mercedes agent typically quotes $3,000-3,500 for a strut replacement they don't always need. Demand a leak test FIRST. If the air bag is intact and only the valve block leaks, the real fix is 10× cheaper.",
        likelyFix: "Air suspension valve block replacement (with leak test confirming bag is OK)",
        realFixPrice: [300, 450],
        agentTrapPrice: [3000, 3500],
        trapPercentage: 80,
        requiredTools: ["Star Diagnostic XENTRY", "Air suspension test rig"],
      },
      {
        id: "w213-knocking-suspension",
        symptom: "Knocking sound from front suspension over bumps",
        severity: "low",
        diagnosticTip:
          "This is 80% likely to be the LOWER CONTROL ARM bushings ($400-600 each side), NOT the absorber. Mercedes agent often quotes $2,000+ for the full absorber replacement. Demand visible fluid leak proof on the absorber before agreeing to replace it. Bushings wear out around 80,000 km — replacement is straightforward.",
        likelyFix: "Lower control arm bushing replacement (front)",
        realFixPrice: [400, 600],
        agentTrapPrice: [2000, 2800],
        trapPercentage: 80,
      },
      {
        id: "w213-gearbox-jerk",
        symptom: "Gearbox jerking / Rough shifting at low speed",
        severity: "med",
        diagnosticTip:
          "This is 70% likely to be a 9G-Tronic conductor plate ($800-1,200) at 80-100k km. The 9-speed has a known wiring fault that mimics gearbox failure. Agent often quotes full transmission rebuild at $5k+. Insist on Star Diagnostic fault code readout BEFORE any teardown — 9G-Tronic faults are conductor-plate-specific, not torque-converter.",
        likelyFix: "Conductor plate + transmission fluid + filter service",
        realFixPrice: [800, 1200],
        agentTrapPrice: [4500, 6500],
        trapPercentage: 70,
      },
      {
        id: "w213-aircon-not-cold",
        symptom: "Aircon not cold / Weak cooling",
        severity: "low",
        diagnosticTip:
          "This is 90% likely an evaporator drain blockage or refrigerant top-up ($150-350). Agent sometimes pushes full compressor replacement ($1,800+). Always start with a leak test + refrigerant level check before any compressor work.",
        likelyFix: "Drain unblock + refrigerant recharge",
        realFixPrice: [150, 350],
        agentTrapPrice: [1500, 2200],
        trapPercentage: 90,
      },
      {
        id: "w213-engine-rattle-cold",
        symptom: "Engine rattle on cold start (M274/M276)",
        severity: "med",
        diagnosticTip:
          "On the M274 turbo 4-cylinder this is 65% likely to be the variable-displacement camshaft solenoid ($600-900). On the M276 V6 it could be the timing chain tensioner ($1,500-2,200). Agent often jumps to full engine rebuild advice. Demand specific fault code + an oil-pressure test FIRST.",
        likelyFix: "Camshaft solenoid (M274) or timing chain tensioner (M276)",
        realFixPrice: [600, 2200],
        agentTrapPrice: [4500, 8000],
        trapPercentage: 65,
      },
      {
        id: "w213-mbux-glitch",
        symptom: "MBUX touchscreen lag / freezing / random reboots",
        severity: "low",
        diagnosticTip:
          "70% likely a software update + headunit reset ($200-300 at independent specialist with XENTRY). Agent often quotes full headunit replacement ($3,500+). Always try software update first.",
        likelyFix: "MBUX software update + reset (XENTRY required)",
        realFixPrice: [200, 350],
        agentTrapPrice: [3500, 5000],
        trapPercentage: 70,
      },
    ],
  },
  {
    id: "mb-w212-eclass",
    brand: "Mercedes-Benz",
    model: "W212 E-Class",
    yearsActive: "2009-2016",
    popularSG: true,
    searchAliases: ["E200 W212", "E250 CDI", "E350 W212"],
    commonIssues: [
      {
        id: "w212-7g-jerk",
        symptom: "7G-Tronic gearbox jerk / harsh shifting",
        severity: "med",
        diagnosticTip:
          "This is 85% likely to be the 722.9 conductor plate ($600-900 + fluid service). At 100k+ km this is the EXPECTED maintenance, not a transmission failure. Agent quotes $4-6k for full rebuild — refuse without conductor plate diagnosis first.",
        likelyFix: "722.9 conductor plate + fluid + filter (Mercedes ATF 134)",
        realFixPrice: [700, 1100],
        agentTrapPrice: [4500, 6500],
        trapPercentage: 85,
      },
      {
        id: "w212-airmatic",
        symptom: "Air suspension dropping / Airmatic fault",
        severity: "med",
        diagnosticTip:
          "75% chance the air compressor relay or front strut bag. Real fix $400-1,200 depending on diagnosis. Agent quotes $2,500-3,500 for assembly replacement. Demand pressure test before any part swap.",
        likelyFix: "Compressor relay or front strut bag",
        realFixPrice: [400, 1200],
        agentTrapPrice: [2500, 3500],
        trapPercentage: 75,
      },
      {
        id: "w212-balance-shaft",
        symptom: "Engine knocking from M271 4-cylinder (early models)",
        severity: "high",
        diagnosticTip:
          "Known balance shaft gear failure on M271 EVO engines (2009-2010 production). If your engine is in the affected serial range, this is 90% the cause — and Mercedes-Benz HAS issued goodwill repairs in some cases. ALWAYS check serial number against the M271 recall list BEFORE accepting any repair quote.",
        likelyFix: "Balance shaft gear replacement + timing service",
        realFixPrice: [3500, 5500],
        agentTrapPrice: [8000, 12000],
        trapPercentage: 90,
      },
    ],
  },
  {
    id: "mb-w205-cclass",
    brand: "Mercedes-Benz",
    model: "W205 C-Class",
    yearsActive: "2014-2021",
    popularSG: true,
    searchAliases: ["C180", "C200", "C250", "C300", "C43 AMG", "W205"],
    commonIssues: [
      {
        id: "w205-comand-lag",
        symptom: "COMAND infotainment lag / freezing",
        severity: "low",
        diagnosticTip:
          "85% software-fixable via XENTRY firmware update ($150-250). Agent often quotes full COMAND replacement ($2,500+). Software update first, hardware replacement only after that fails.",
        likelyFix: "COMAND firmware update (XENTRY)",
        realFixPrice: [150, 300],
        agentTrapPrice: [2500, 3800],
        trapPercentage: 85,
      },
      {
        id: "w205-engine-mount",
        symptom: "Vibration at idle (M274 engine)",
        severity: "low",
        diagnosticTip:
          "75% likely the engine mounts (rubber + hydraulic). Real fix $400-700 for the pair. Agent sometimes pushes ECU/transmission diagnosis. Mounts wear at 80-100k km on M274.",
        likelyFix: "Engine mount pair replacement",
        realFixPrice: [400, 700],
        agentTrapPrice: [1500, 2200],
        trapPercentage: 75,
      },
      {
        id: "w205-harshride",
        symptom: "Harsh ride / clunking from rear suspension",
        severity: "med",
        diagnosticTip:
          "70% rear sway bar links + bushings ($350-500). Agent quotes full shock replacement ($1,800+). Demand suspension inspection lifted in workshop, not just road test.",
        likelyFix: "Rear sway bar links + bushings",
        realFixPrice: [350, 500],
        agentTrapPrice: [1800, 2500],
        trapPercentage: 70,
      },
    ],
  },
  {
    id: "mb-w211-eclass",
    brand: "Mercedes-Benz",
    model: "W211 E-Class",
    yearsActive: "2002-2009",
    popularSG: true,
    searchAliases: ["W211", "E280", "E320 CDI", "E55 AMG"],
    commonIssues: [
      {
        id: "w211-sbc-recall",
        symptom: "SBC brake warning / Service Brake System message",
        severity: "high",
        diagnosticTip:
          "SBC (Sensotronic Brake Control) was a known weak point on W211 — Mercedes issued multiple goodwill replacements. If you see the SBC warning, contact the AGENT FIRST to check goodwill eligibility (some W211s qualify even out of warranty). Don't pay for SBC repair without confirming this.",
        likelyFix: "SBC pump replacement (potentially goodwill)",
        realFixPrice: [0, 4500],
        agentTrapPrice: [4500, 6500],
        trapPercentage: 50,
      },
      {
        id: "w211-air-bleed",
        symptom: "Bouncy / floating ride at speed",
        severity: "med",
        diagnosticTip:
          "65% Airmatic strut leak (front or rear). Real fix $800-1,500 per strut at specialist. Agent quotes $3,500+ each. AirSuspension Hub-tier shops can rebuild rather than replace.",
        likelyFix: "Airmatic strut rebuild or replacement",
        realFixPrice: [800, 1500],
        agentTrapPrice: [3500, 5000],
        trapPercentage: 65,
      },
    ],
  },
  {
    id: "mb-x166-gle",
    brand: "Mercedes-Benz",
    model: "GLE / ML-Class",
    yearsActive: "2011-present",
    popularSG: true,
    searchAliases: ["GLE350", "GLE43", "ML350", "X166", "W166"],
    commonIssues: [
      {
        id: "gle-airmatic",
        symptom: "Air suspension uneven / sagging on one side",
        severity: "med",
        diagnosticTip:
          "75% air compressor or single-side strut bag. Real fix $700-1,400. Agent typically quotes $4,000+ for full assembly. The compressor itself is around $400 OEM.",
        likelyFix: "Air compressor or single-side strut bag",
        realFixPrice: [700, 1400],
        agentTrapPrice: [3500, 5000],
        trapPercentage: 75,
      },
      {
        id: "gle-rear-diff",
        symptom: "Whining noise from rear at speed",
        severity: "med",
        diagnosticTip:
          "60% rear differential fluid + bearings service ($400-700). Agent often pushes full diff replacement ($3,500+). Always start with fluid + bearing diagnostic.",
        likelyFix: "Rear diff fluid + bearing service",
        realFixPrice: [400, 700],
        agentTrapPrice: [3500, 5000],
        trapPercentage: 60,
      },
    ],
  },
  {
    id: "mb-x253-glc",
    brand: "Mercedes-Benz",
    model: "GLC-Class",
    yearsActive: "2015-present",
    popularSG: true,
    searchAliases: ["GLC200", "GLC250", "GLC300", "GLC43 AMG", "X253"],
    commonIssues: [
      {
        id: "glc-airmatic",
        symptom: "Air suspension dropping / Airmatic warning",
        severity: "med",
        diagnosticTip:
          "70% valve block or compressor. Real fix $400-1,200. Agent quotes $3,000+ for strut. SUV variants (GLC) less prone than W213 sedan but valve block still fails around 80k km.",
        likelyFix: "Valve block or compressor",
        realFixPrice: [400, 1200],
        agentTrapPrice: [3000, 4500],
        trapPercentage: 70,
      },
      {
        id: "glc-9g-tronic",
        symptom: "9G-Tronic harsh shifting / hesitation",
        severity: "med",
        diagnosticTip:
          "75% conductor plate ($800-1,200) at 80-100k km. Agent quotes full rebuild $5k+. ALWAYS demand fault code readout first — 9G failures are usually conductor plate, not mechanical.",
        likelyFix: "9G-Tronic conductor plate + fluid service",
        realFixPrice: [800, 1200],
        agentTrapPrice: [4500, 6500],
        trapPercentage: 75,
      },
    ],
  },
  // ─────────────── VOLVO ───────────────
  {
    id: "volvo-xc60-xc90",
    brand: "Volvo",
    model: "XC60 / XC90",
    yearsActive: "2015-present",
    popularSG: true,
    searchAliases: ["Volvo XC60", "Volvo XC90", "T5", "T6", "B5", "B6"],
    commonIssues: [
      {
        id: "volvo-aircon-weak",
        symptom: "Aircon not cold / weak cooling",
        severity: "low",
        diagnosticTip:
          "For Volvo XC60/XC90 in Singapore heat, weak cooling is often refrigerant leak, condenser, cabin filter, or compressor-control issue. Start with leak test and VIDA scan before compressor replacement.",
        likelyFix: "Leak test, condenser/cabin filter check, refrigerant service",
        realFixPrice: [150, 700],
        agentTrapPrice: [1800, 3500],
        trapPercentage: 75,
        requiredTools: ["VIDA", "EV-safe aircon service equipment"],
      },
      {
        id: "volvo-engine-mount-vibration",
        symptom: "Vibration at idle / vibration when shifting to Drive",
        severity: "low",
        diagnosticTip:
          "Volvo idle vibration is commonly engine mount or torque mount wear, not gearbox failure. Inspect mounts and scan misfire counters before approving transmission work.",
        likelyFix: "Engine mount / torque mount replacement",
        realFixPrice: [350, 900],
        agentTrapPrice: [1800, 3500],
        trapPercentage: 70,
        requiredTools: ["VIDA"],
      },
      {
        id: "volvo-coolant-warning",
        symptom: "Coolant warning / coolant level keeps dropping",
        severity: "med",
        diagnosticTip:
          "Common causes include expansion tank, hoses, thermostat, or water pump. Pressure-test the cooling system before assuming head-gasket or major engine failure.",
        likelyFix: "Cooling-system pressure test, tank/hose/thermostat repair",
        realFixPrice: [250, 1000],
        agentTrapPrice: [2000, 5000],
        trapPercentage: 70,
        requiredTools: ["VIDA", "Cooling system pressure tester"],
      },
      {
        id: "volvo-sensus-reboot",
        symptom: "Sensus screen freezes / infotainment reboots",
        severity: "low",
        diagnosticTip:
          "Often software, low battery voltage, or module reset before screen replacement. Check battery health and update software first.",
        likelyFix: "Battery health check, Sensus software update/reset",
        realFixPrice: [120, 400],
        agentTrapPrice: [1800, 4000],
        trapPercentage: 70,
        requiredTools: ["VIDA"],
      },
    ],
  },


  // ─────────────── BMW (PHASE 1 SECONDARY) ───────────────
  {
    id: "bmw-f30-3series",
    brand: "BMW",
    model: "F30 3-Series",
    yearsActive: "2012-2019",
    popularSG: true,
    searchAliases: ["320i", "330i", "335i", "F30", "F31"],
    commonIssues: [
      {
        id: "f30-n20-timing",
        symptom: "Cold start engine rattle (N20)",
        severity: "high",
        diagnosticTip:
          "85% timing chain guide / tensioner failure on N20 — known BMW issue. Real fix $1,800-2,500 at independent specialist. Agent quotes $4,500+. If left untreated, can cause complete engine failure. Replace BEFORE catastrophic damage.",
        likelyFix: "Timing chain + guides + tensioner (N20 known issue)",
        realFixPrice: [1800, 2500],
        agentTrapPrice: [4500, 6500],
        trapPercentage: 85,
      },
      {
        id: "f30-vanos",
        symptom: "Engine misfire / rough idle (N20/N52)",
        severity: "med",
        diagnosticTip:
          "60% VANOS solenoid or coil pack ($350-650). Agent often jumps to full timing job. ALWAYS demand fault code AND solenoid resistance test before any chain work.",
        likelyFix: "VANOS solenoid + coil/spark plug set",
        realFixPrice: [350, 650],
        agentTrapPrice: [1800, 2800],
        trapPercentage: 60,
      },
      {
        id: "f30-n55-charge-pipe",
        symptom: "Loss of power / boost leak (N55 turbo)",
        severity: "med",
        diagnosticTip:
          "85% the OEM plastic charge pipe cracking — known N55 issue. Real fix: aluminum aftermarket pipe $400-600 installed. Agent installs OEM-replacement plastic ($1,200+) which fails again.",
        likelyFix: "Aluminum charge pipe (aftermarket)",
        realFixPrice: [400, 600],
        agentTrapPrice: [1200, 1800],
        trapPercentage: 85,
      },
    ],
  },
  {
    id: "bmw-g30-5series",
    brand: "BMW",
    model: "G30 5-Series",
    yearsActive: "2017-2024",
    popularSG: true,
    searchAliases: ["530i", "540i", "G30", "G31"],
    commonIssues: [
      {
        id: "g30-zf-jerk",
        symptom: "ZF 8-speed jerky shifts",
        severity: "med",
        diagnosticTip:
          "70% mechatronic seal + ZF Lifeguard 8 fluid service ($600-900). Agent quotes $3,500+ for valve body or rebuild. ZF mechatronic on 8HP is robust — most issues are seal-related.",
        likelyFix: "Mechatronic seal + Lifeguard 8 fluid service",
        realFixPrice: [600, 900],
        agentTrapPrice: [3500, 5000],
        trapPercentage: 70,
      },
      {
        id: "g30-coolant-loss",
        symptom: "Coolant level keeps dropping / engine temperature warning",
        severity: "high",
        diagnosticTip:
          "On BMW G30 520i/530i, coolant loss is commonly expansion tank, hose, water pump, or thermostat housing before it is a head-gasket issue. Pressure-test the cooling system and inspect plastic fittings before approving major engine work.",
        likelyFix: "Cooling-system pressure test, expansion tank/hose/water pump repair",
        realFixPrice: [250, 900],
        agentTrapPrice: [1800, 4500],
        trapPercentage: 70,
        requiredTools: ["ISTA", "Cooling system pressure tester"],
      },
      {
        id: "g30-aircon-weak",
        symptom: "Aircon not cold / weak cooling at idle",
        severity: "low",
        diagnosticTip:
          "Weak BMW G30 aircon is often refrigerant leak, condenser, cabin filter, or compressor control. Start with leak dye and pressure readings before compressor replacement. A compressor quote without leak test proof is a red flag.",
        likelyFix: "Leak test, condenser/cabin filter check, refrigerant service",
        realFixPrice: [150, 650],
        agentTrapPrice: [1800, 3200],
        trapPercentage: 75,
      },
      {
        id: "g30-suspension-clunk",
        symptom: "Front suspension clunk / knocking over bumps",
        severity: "low",
        diagnosticTip:
          "Usually control arm bushings, sway bar links, or top mounts — not the full absorber. Ask for lifted-car inspection and visible play/leak proof before replacing expensive struts.",
        likelyFix: "Control arm bushings, sway bar links or top mount replacement",
        realFixPrice: [350, 900],
        agentTrapPrice: [1800, 3500],
        trapPercentage: 75,
      },
    ],
  },

  // ─────────────── AUDI (PHASE 1 SECONDARY) ───────────────
  {
    id: "audi-b9-a4",
    brand: "Audi",
    model: "B9 A4 / A5 / S4",
    yearsActive: "2017-present",
    popularSG: true,
    searchAliases: ["A4", "S4", "B9", "A5", "S5"],
    commonIssues: [
      {
        id: "b9-mechatronic",
        symptom: "S-Tronic / DSG jerky shifting",
        severity: "med",
        diagnosticTip:
          "75% mechatronic seal + DSG service ($450-650). Agent quotes $1,800+ for valve body. ODIS scan first — DSG faults are usually seal/fluid not mechanical.",
        likelyFix: "DSG mechatronic seal + DSG fluid + filter",
        realFixPrice: [450, 650],
        agentTrapPrice: [1500, 2500],
        trapPercentage: 75,
      },
      {
        id: "b9-tsi-carbon",
        symptom: "Misfire + rough idle (TSI 2.0T)",
        severity: "med",
        diagnosticTip:
          "85% intake valve carbon buildup — known direct-injection TSI issue at 60-80k km. Real fix: walnut blast $400-600. Agent sometimes pushes full intake replacement.",
        likelyFix: "Walnut blast intake valves",
        realFixPrice: [400, 600],
        agentTrapPrice: [1500, 2200],
        trapPercentage: 85,
      },
    ],
  },

  {
    id: "audi-c8-a6",
    brand: "Audi",
    model: "C8 A6",
    yearsActive: "2018-present",
    popularSG: true,
    searchAliases: ["Audi A6", "A6 2.0T", "C8", "Audi sedan"],
    commonIssues: [
      {
        id: "a6-dsg-jerk",
        symptom: "Gearbox jerking / S-Tronic hesitant in traffic",
        severity: "med",
        diagnosticTip:
          "Audi A6 S-Tronic hesitation is commonly DSG fluid, adaptation, or mechatronic seal before full gearbox failure. Ask for ODIS fault codes and adaptation values before approving valve-body replacement.",
        likelyFix: "DSG service, adaptation reset, mechatronic seal diagnosis",
        realFixPrice: [450, 950],
        agentTrapPrice: [2500, 5500],
        trapPercentage: 70,
        requiredTools: ["ODIS", "VCDS"],
      },
      {
        id: "a6-mmi-black-screen",
        symptom: "MMI screen black / infotainment rebooting",
        severity: "low",
        diagnosticTip:
          "MMI black screens are often software, low battery voltage, or module coding before full headunit failure. Try battery health check, software reset/update, and scan first. Headunit replacement should be last.",
        likelyFix: "Battery health check, MMI software reset/update, module scan",
        realFixPrice: [120, 450],
        agentTrapPrice: [2500, 5000],
        trapPercentage: 70,
        requiredTools: ["ODIS", "VCDS"],
      },
      {
        id: "a6-engine-mount-vibration",
        symptom: "Vibration at idle / engine mount warning",
        severity: "low",
        diagnosticTip:
          "Idle vibration is often active engine mounts or misfire-related, not gearbox failure. Scan mount-control faults and check misfire counters before approving drivetrain work.",
        likelyFix: "Engine mount diagnosis/replacement or misfire repair",
        realFixPrice: [500, 1200],
        agentTrapPrice: [2500, 4500],
        trapPercentage: 65,
        requiredTools: ["ODIS", "VCDS"],
      },
      {
        id: "a6-water-pump-leak",
        symptom: "Coolant leak / sweet smell after parking",
        severity: "med",
        diagnosticTip:
          "On Audi 2.0T engines, water pump and thermostat housing leaks are common. Pressure-test first before assuming radiator or head-gasket failure.",
        likelyFix: "Water pump / thermostat housing replacement",
        realFixPrice: [650, 1200],
        agentTrapPrice: [2500, 4800],
        trapPercentage: 75,
        requiredTools: ["Cooling system pressure tester"],
      },
    ],
  },


  // ─────────────── PORSCHE ───────────────
  {
    id: "porsche-cayenne-955-957",
    brand: "Porsche",
    model: "Cayenne (955/957)",
    yearsActive: "2003-2010",
    popularSG: true,
    searchAliases: ["Cayenne S", "Cayenne Turbo", "955", "957"],
    commonIssues: [
      {
        id: "cayenne-coolant-pipe",
        symptom: "Coolant leak between engine and transmission",
        severity: "high",
        diagnosticTip:
          "95% the plastic coolant transfer pipes (known M48 V8 issue). Real fix: aluminum upgrade pipes $1,800-2,500 installed. Agent quotes $4,500+ with original plastic pipes that re-fail.",
        likelyFix: "Aluminum coolant pipe upgrade",
        realFixPrice: [1800, 2500],
        agentTrapPrice: [4500, 6500],
        trapPercentage: 95,
      },
    ],
  },

  // ─────────────── BYD / EV ───────────────
  {
    id: "byd-atto-3",
    brand: "BYD",
    model: "Atto 3",
    yearsActive: "2022-present",
    popularSG: true,
    searchAliases: ["BYD Atto", "Atto 3", "Atto3", "BYD electric SUV"],
    commonIssues: [
      {
        id: "atto-12v-warning",
        symptom: "12V battery warning / car cannot start or wake up",
        severity: "med",
        diagnosticTip:
          "For BYD Atto 3 owners, a no-start or wake-up issue is often the small 12V auxiliary battery, not the main EV battery. Check 12V health first before accepting any high-voltage diagnosis. A proper EV workshop should load-test the 12V battery and scan the low-voltage fault history.",
        likelyFix: "12V auxiliary battery test and replacement if weak",
        realFixPrice: [180, 350],
        agentTrapPrice: [600, 1200],
        trapPercentage: 75,
        requiredTools: ["EV diagnostic scanner", "12V battery load tester"],
      },
      {
        id: "atto-charging-fault",
        symptom: "Charging interrupted / cannot charge AC at home charger",
        severity: "med",
        diagnosticTip:
          "Charging faults are often charger, cable, earthing, or software handshake issues before they are onboard-charger failure. Test with another AC charger and cable first, then scan charging module faults. Do not replace the onboard charger without confirming it fails across multiple chargers.",
        likelyFix: "Charger/cable/earthing check, software reset, then charging module diagnosis",
        realFixPrice: [80, 450],
        agentTrapPrice: [1800, 3500],
        trapPercentage: 65,
        requiredTools: ["EV diagnostic scanner", "Charging cable tester"],
      },
      {
        id: "atto-aircon-not-cold",
        symptom: "Aircon not cold / weak cooling in hot weather",
        severity: "low",
        diagnosticTip:
          "On EVs, weak cooling can be refrigerant level, cabin filter restriction, compressor control, or thermal-management software. Start with cabin filter + refrigerant leak check before replacing the electric compressor. Compressor replacement should be the last step, not the first quote.",
        likelyFix: "Cabin filter, refrigerant leak test, software/thermal-management scan",
        realFixPrice: [80, 380],
        agentTrapPrice: [1200, 2500],
        trapPercentage: 70,
        requiredTools: ["EV-safe aircon service equipment"],
      },
      {
        id: "atto-adas-camera-warning",
        symptom: "ADAS / camera / sensor warning after windscreen or bumper work",
        severity: "low",
        diagnosticTip:
          "If the warning appeared after windscreen replacement, bumper repair, or alignment work, calibration is more likely than sensor failure. Ask for calibration proof and fault codes before buying a new camera or radar module.",
        likelyFix: "ADAS camera/radar calibration and fault-code clear",
        realFixPrice: [180, 450],
        agentTrapPrice: [900, 1800],
        trapPercentage: 70,
        requiredTools: ["ADAS calibration equipment", "EV diagnostic scanner"],
      },
    ],
  },
  {
    id: "byd-sealion",
    brand: "BYD",
    model: "Sealion",
    yearsActive: "2024-present",
    popularSG: true,
    searchAliases: ["BYD Sealion", "Sealion 7", "BYD Sealion 7", "BYD electric SUV"],
    commonIssues: [
      {
        id: "sealion-12v-warning",
        symptom: "12V battery warning / car does not wake up",
        severity: "med",
        diagnosticTip:
          "Even on new EVs, many apparent dead-car problems start with the 12V auxiliary system. Check 12V voltage, DC-DC charging behaviour, and fault history before assuming high-voltage battery failure.",
        likelyFix: "12V auxiliary system test, battery replacement, DC-DC charging check",
        realFixPrice: [180, 450],
        agentTrapPrice: [700, 1500],
        trapPercentage: 70,
        requiredTools: ["EV diagnostic scanner", "12V battery load tester"],
      },
      {
        id: "sealion-charging-slow",
        symptom: "Charging slower than expected / charging stops halfway",
        severity: "med",
        diagnosticTip:
          "Slow or interrupted charging can be charger rating, cable limit, battery temperature, software limit, or handshake error. Confirm charger kW, cable rating, and battery temperature before diagnosing the car as faulty.",
        likelyFix: "Charging setup check, software update, thermal/charging module scan",
        realFixPrice: [80, 450],
        agentTrapPrice: [1500, 3500],
        trapPercentage: 60,
        requiredTools: ["EV diagnostic scanner", "Charging cable tester"],
      },
      {
        id: "sealion-tyre-noise-vibration",
        symptom: "Tyre noise / vibration at highway speed",
        severity: "low",
        diagnosticTip:
          "Heavy EVs are sensitive to tyre wear, balancing, alignment, and uneven pressure. Diagnose tyre condition and wheel balance first before replacing suspension parts. EV torque can make ordinary tyre issues feel like drivetrain problems.",
        likelyFix: "Tyre inspection, road-force balance, alignment",
        realFixPrice: [80, 280],
        agentTrapPrice: [900, 1800],
        trapPercentage: 65,
      },
      {
        id: "sealion-aircon-weak",
        symptom: "Aircon weak / cabin takes long to cool",
        severity: "low",
        diagnosticTip:
          "For EVs, aircon performance is tied to thermal management. Check cabin filter, refrigerant, compressor command, and software before replacing major parts. Ask the workshop to show scan data, not just a compressor quote.",
        likelyFix: "Cabin filter + refrigerant/thermal-management diagnostic",
        realFixPrice: [80, 400],
        agentTrapPrice: [1200, 2500],
        trapPercentage: 65,
        requiredTools: ["EV-safe aircon service equipment", "EV diagnostic scanner"],
      },
    ],
  },


  {
    id: "porsche-macan-95b",
    brand: "Porsche",
    model: "Macan",
    yearsActive: "2014-present",
    popularSG: true,
    searchAliases: ["Porsche Macan", "Macan S", "Macan 2.0", "95B"],
    commonIssues: [
      {
        id: "macan-pdk-jerk",
        symptom: "PDK gearbox jerking / shudder in traffic",
        severity: "med",
        diagnosticTip:
          "PDK jerking can be fluid/adaptation, mounts, or mechatronic-related before gearbox replacement. Ask for PIWIS fault codes and adaptation values first. A full gearbox quote without PIWIS diagnosis is weak.",
        likelyFix: "PDK service, adaptation reset, mount/mechatronic diagnosis",
        realFixPrice: [700, 1800],
        agentTrapPrice: [5000, 12000],
        trapPercentage: 65,
        requiredTools: ["PIWIS"],
      },
      {
        id: "macan-transfer-case-shudder",
        symptom: "Shudder or vibration when turning / accelerating",
        severity: "med",
        diagnosticTip:
          "Macan transfer case shudder is a known issue. Confirm with road test and PIWIS before replacing unrelated suspension parts. Some cases need transfer case fluid/service; severe cases need transfer case replacement.",
        likelyFix: "Transfer case diagnosis, fluid/service or replacement",
        realFixPrice: [450, 2800],
        agentTrapPrice: [4500, 7500],
        trapPercentage: 75,
        requiredTools: ["PIWIS"],
      },
      {
        id: "macan-coolant-leak",
        symptom: "Coolant leak / low coolant warning",
        severity: "med",
        diagnosticTip:
          "Coolant leaks on Macan are often thermostat housing, water pump, or plastic pipes. Pressure-test the system and inspect the leak source before approving major engine teardown.",
        likelyFix: "Water pump / thermostat housing / coolant pipe repair",
        realFixPrice: [800, 1800],
        agentTrapPrice: [3500, 7000],
        trapPercentage: 70,
        requiredTools: ["Cooling system pressure tester", "PIWIS"],
      },
      {
        id: "macan-suspension-knock",
        symptom: "Knocking sound from suspension over bumps",
        severity: "low",
        diagnosticTip:
          "Usually control arms, links, or mounts before full strut replacement. Ask for lifted inspection and proof of play/leak before approving expensive Porsche suspension parts.",
        likelyFix: "Control arms, sway links or top mount replacement",
        realFixPrice: [500, 1400],
        agentTrapPrice: [2500, 6000],
        trapPercentage: 75,
      },
    ],
  },


  // ─────────────── TESLA ───────────────
  {
    id: "tesla-model-3-y",
    brand: "Tesla",
    model: "Model 3 / Y",
    yearsActive: "2019-present",
    popularSG: true,
    searchAliases: ["Model 3", "Model Y", "Tesla 3", "Tesla Y"],
    commonIssues: [
      {
        id: "tesla-12v-fail",
        symptom: "Car won't wake up / 12V battery warning",
        severity: "low",
        diagnosticTip:
          "95% the 12V auxiliary battery — 3-4 year lifespan. Real fix: $200-300 at independent EV specialist using compatible 12V LFP. Tesla agent quotes $600-900 for OEM. Same battery, third the price.",
        likelyFix: "12V auxiliary battery replacement (LFP compatible)",
        realFixPrice: [200, 350],
        agentTrapPrice: [600, 900],
        trapPercentage: 95,
      },
      {
        id: "tesla-mcu-yellow",
        symptom: "Yellow screen border / MCU lag",
        severity: "low",
        diagnosticTip:
          "Yellow border = UV damage, often warranty-eligible. MCU lag = software, usually fixable via reboot or update. Tesla service centre is your best bet here — they often UV-treat under warranty for free.",
        likelyFix: "Warranty UV-treatment (Tesla SC) or software update",
        realFixPrice: [0, 200],
        agentTrapPrice: [1500, 2500],
        trapPercentage: 70,
      },
      {
        id: "tesla-aircon-weak",
        symptom: "Aircon weak / cabin takes long to cool",
        severity: "low",
        diagnosticTip:
          "Tesla aircon issues can be cabin filters, refrigerant, heat pump/valve behaviour, or software before compressor failure. Ask for thermal-system scan data before approving compressor replacement.",
        likelyFix: "Cabin filter, refrigerant/thermal-system scan, software update",
        realFixPrice: [120, 600],
        agentTrapPrice: [1800, 3500],
        trapPercentage: 70,
        requiredTools: ["Tesla Toolbox", "EV-safe aircon service equipment"],
      },
      {
        id: "tesla-suspension-noise",
        symptom: "Creaking / knocking from suspension",
        severity: "low",
        diagnosticTip:
          "Tesla Model 3/Y suspension noises are often control arms or links, not the full strut. Ask for lifted inspection and proof of play before replacing larger assemblies.",
        likelyFix: "Control arm / suspension link diagnosis and replacement",
        realFixPrice: [350, 900],
        agentTrapPrice: [1600, 3200],
        trapPercentage: 75,
      },
    ],
  },
];

// Build a lookup helper
export function getModelById(id: string): CarModel | undefined {
  return CAR_MODELS.find((m) => m.id === id);
}

export function findIssueAcrossModels(issueId: string): { model: CarModel; issue: CommonIssue } | undefined {
  for (const m of CAR_MODELS) {
    const i = m.commonIssues.find((ci) => ci.id === issueId);
    if (i) return { model: m, issue: i };
  }
  return undefined;
}

// Group models by brand for the picker UI
export function groupModelsByBrand(): Record<string, CarModel[]> {
  const out: Record<string, CarModel[]> = {};
  for (const m of CAR_MODELS) {
    if (!out[m.brand]) out[m.brand] = [];
    out[m.brand].push(m);
  }
  return out;
}

// Default featured brand for v2.0 launch
export const FEATURED_BRAND = "Mercedes-Benz";
