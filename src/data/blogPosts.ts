export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readingTime: string;
  intro: string;
  sections: { heading: string; body: string }[];
  links: { href: string; label: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    "slug": "what-mercedes-do-i-have-singapore",
    "title": "What Mercedes do I have? Singapore owner guide",
    "description": "How to identify your Mercedes model and chassis code before asking a workshop for a quote.",
    "category": "Mercedes owner guide",
    "date": "2026-05-06",
    "readingTime": "5 min read",
    "intro": "Most owners know the badge: E-Class, C-Class, GLE or GLC. Workshops usually need the chassis code too. W213, W212, W205, W166 and X253 are not trivia — they change the likely fault, scan path and quote range.",
    "sections": [
      {
        "heading": "Fast answer",
        "body": "Use the model name, registration year and chassis code together. A 2016–2023 E-Class is usually W213. A 2009–2016 E-Class is usually W212. A 2014–2021 C-Class is usually W205. If you are unsure, ask the workshop to confirm it from the VIN or XENTRY scan before quoting."
      },
      {
        "heading": "Why the code matters",
        "body": "A W213 E-Class rear sinking overnight is often diagnosed differently from an older W212. Gearboxes, suspension parts, electronics and known weak points change by platform. If a quote simply says “Mercedes repair” without model code, ask for more detail."
      },
      {
        "heading": "Common SG models",
        "body": "E-Class W212 and W213 are very common in Singapore used-car listings. C-Class W204 and W205 are common too. GLE W166/C292 and GLC X253 owners should pay closer attention to air suspension, gearbox hesitation and cooling symptoms."
      },
      {
        "heading": "Before approving repair",
        "body": "Give the workshop your model, year, mileage and symptom. Ask what diagnostic tool they will use, what proof they can show, and whether the quote is for confirmed failure or preventive replacement."
      }
    ],
    "links": [
      {
        "href": "/car-problems/mercedes-e-class-air-suspension-drops-overnight",
        "label": "W213 rear sinks overnight"
      },
      {
        "href": "/workshops",
        "label": "Find Mercedes workshops"
      },
      {
        "href": "/audit-my-quote",
        "label": "Audit a quote"
      }
    ]
  },
  {
    "slug": "what-bmw-do-i-have-singapore",
    "title": "What BMW do I have? F30, G20, F10, G30 owner guide",
    "description": "A Singapore owner guide to BMW model names, chassis codes and why they matter for workshop quotes.",
    "category": "BMW owner guide",
    "date": "2026-05-06",
    "readingTime": "5 min read",
    "intro": "BMW names are confusing because the badge is not enough. “320i” tells you the trim and engine family, but the workshop still needs to know whether it is F30, G20, F10 or G30.",
    "sections": [
      {
        "heading": "Fast answer",
        "body": "For 3 Series, F30 usually means 2012–2019 and G20 usually means 2019 onwards. For 5 Series, F10 usually means 2010–2017 and G30 usually means 2017 onwards. The code helps identify the engine, electronics and common failure points."
      },
      {
        "heading": "Why owners should care",
        "body": "A BMW misfire, coolant leak or gearbox jerk can come from different causes depending on platform and engine. A vague quote for “BMW engine repair” is not enough. Ask what engine code or scan result the quote is based on."
      },
      {
        "heading": "Common SG examples",
        "body": "F30 320i/328i cars often involve N20-related checks. F10 and G30 5 Series owners often ask about ZF gearbox servicing, coolant loss and suspension knocks. X models add transfer case and drivetrain checks."
      },
      {
        "heading": "Before going workshop",
        "body": "Send the workshop your model year, mileage, warning lights and exact symptom. If they use ISTA diagnostics, ask for the fault code printout or screenshot before approving major parts."
      }
    ],
    "links": [
      {
        "href": "/car-problems/bmw-3-series-engine-misfire-rough-idle-n20-n52",
        "label": "BMW rough idle guide"
      },
      {
        "href": "/car-problems/bmw-5-series-zf-8-speed-jerky-shifts",
        "label": "BMW ZF jerky shifts"
      },
      {
        "href": "/workshops",
        "label": "Find BMW workshops"
      }
    ]
  },
  {
    "slug": "what-audi-do-i-have-singapore",
    "title": "What Audi do I have? A4, A6, Q5 and S-tronic basics",
    "description": "How Singapore Audi owners can identify model generation, gearbox type and what to tell a workshop.",
    "category": "Audi owner guide",
    "date": "2026-05-06",
    "readingTime": "5 min read",
    "intro": "Audi owners often say “A4” or “A6”, but workshops also care about generation, engine and gearbox. For repair quotes, “S-tronic” and “quattro” matter more than the badge alone.",
    "sections": [
      {
        "heading": "Fast answer",
        "body": "Start with model, year and gearbox. A4 and A6 cars in Singapore may use S-tronic/DSG-style gearboxes, CVT on some older cars, or different quattro drivetrains. The repair path changes quickly."
      },
      {
        "heading": "Why this matters",
        "body": "A jerky Audi gearbox quote should not jump straight to full overhaul. The workshop should confirm whether it is mechatronic, clutch pack, fluid/service issue or a drivetrain problem."
      },
      {
        "heading": "Common SG symptoms",
        "body": "A4 owners often report DSG jerks, misfire, oil consumption or weak aircon. A6 owners often report MMI screen issues, coolant leaks and vibration at idle. Q5 owners should watch gearbox and quattro-related symptoms."
      },
      {
        "heading": "What to ask",
        "body": "Ask whether they use ODIS or VCDS, whether the fault code points to mechatronic or clutch, and whether they can show before/after scan results."
      }
    ],
    "links": [
      {
        "href": "/car-problems/audi-a4-dsg-jerky-shifting",
        "label": "Audi A4 DSG jerking"
      },
      {
        "href": "/car-problems/audi-c8-a6-gearbox-jerking-s-tronic-hesitant-in-traffic",
        "label": "Audi A6 S-tronic jerking"
      },
      {
        "href": "/workshops",
        "label": "Find Audi workshops"
      }
    ]
  },
  {
    "slug": "what-porsche-do-i-have-singapore",
    "title": "What Porsche do I have? Macan, Cayenne and Panamera guide",
    "description": "A practical Porsche identification guide for Singapore owners before workshop diagnosis.",
    "category": "Porsche owner guide",
    "date": "2026-05-06",
    "readingTime": "4 min read",
    "intro": "Porsche model names sound simple until repair time. Macan, Cayenne and Panamera have different generations, drivetrains and common faults. A good workshop should ask which one before quoting.",
    "sections": [
      {
        "heading": "Fast answer",
        "body": "Tell the workshop your model, year, engine, mileage and symptom. For Porsche, the same warning light can mean different things depending on whether it is Macan, Cayenne or Panamera."
      },
      {
        "heading": "Why it matters",
        "body": "Coolant leaks, PDK jerks, drivetrain shudder and suspension knocks are not one-size-fits-all. Porsche diagnostics usually need PIWIS or an experienced specialist who knows the platform."
      },
      {
        "heading": "Common SG symptoms",
        "body": "Macan owners often report PDK shudder, coolant warnings and suspension knocks. Cayenne owners often report coolant leaks, drivetrain vibration and air suspension issues."
      },
      {
        "heading": "Quote sanity check",
        "body": "If the quote is high, ask what scan result confirmed the failed part, whether there is a pressure test, and whether the workshop can separate diagnosis fee from repair approval."
      }
    ],
    "links": [
      {
        "href": "/car-problems/porsche-macan-pdk-gearbox-jerking-shudder-in-traffic",
        "label": "Macan PDK jerking"
      },
      {
        "href": "/car-problems/porsche-cayenne-coolant-leak-between-engine-and-transmission",
        "label": "Cayenne coolant leak"
      },
      {
        "href": "/workshops",
        "label": "Find Porsche workshops"
      }
    ]
  },
  {
    "slug": "what-volvo-do-i-have-singapore",
    "title": "What Volvo do I have? XC60 and XC90 owner guide",
    "description": "How Singapore Volvo owners can identify their model generation and prepare for workshop diagnosis.",
    "category": "Volvo owner guide",
    "date": "2026-05-06",
    "readingTime": "4 min read",
    "intro": "Volvo owners usually know XC60 or XC90, but the workshop still needs year, engine and symptom. VIDA diagnostics matter because many Volvo faults look similar from the driver seat.",
    "sections": [
      {
        "heading": "Fast answer",
        "body": "For XC60 and XC90, share the registration year, mileage, engine type and warning message. Ask the workshop whether they use VIDA or another Volvo-capable scanner."
      },
      {
        "heading": "Common SG symptoms",
        "body": "Owners often report weak aircon, vibration at idle, coolant level dropping and Sensus screen freezing. These are not always major failures, but they need proper diagnosis."
      },
      {
        "heading": "Why specialist diagnosis helps",
        "body": "A general scanner may read basic codes, but Volvo-specific diagnostics help confirm modules, sensors and software issues. This reduces guessing."
      },
      {
        "heading": "Before approving work",
        "body": "Ask for scan proof, leak-test results if coolant is dropping, and a clear itemised quote before parts are ordered."
      }
    ],
    "links": [
      {
        "href": "/car-problems/volvo-xc60-xc90-aircon-not-cold-weak-cooling",
        "label": "Volvo weak aircon"
      },
      {
        "href": "/car-problems/volvo-xc60-xc90-coolant-warning-coolant-level-keeps-dropping",
        "label": "Volvo coolant dropping"
      },
      {
        "href": "/workshops",
        "label": "Find Volvo workshops"
      }
    ]
  },
  {
    "slug": "mercedes-air-suspension-repair-cost-singapore",
    "title": "Mercedes air suspension repair cost in Singapore",
    "description": "What W213/W212 owners should check before paying for struts, compressor or valve block replacement.",
    "category": "Mercedes repair cost",
    "date": "2026-05-06",
    "readingTime": "4 min read",
    "intro": "Air suspension scares owners because quotes can jump from a few hundred dollars to a few thousand. In Singapore, the key is to prove what is leaking before replacing the most expensive part.",
    "sections": [
      {
        "heading": "Typical cost range",
        "body": "A valve block repair can be around $300–$450. Compressor or air strut work can cost much more. Do not compare quotes until you know which part the workshop is pricing."
      },
      {
        "heading": "What to check first",
        "body": "Ask for a leak test. If the car sinks overnight, it may be valve block, line leak, air bag leak or compressor issue. The symptom alone does not prove a strut is dead."
      },
      {
        "heading": "Red flag quote",
        "body": "Be careful when the first quote is full strut replacement without leak-test proof. Sometimes that is correct. Sometimes it is just the easiest expensive answer."
      },
      {
        "heading": "Best next step",
        "body": "Get XENTRY scan plus leak-test proof. Then compare an itemised quote."
      }
    ],
    "links": [
      {
        "href": "/car-problems/mercedes-e-class-air-suspension-drops-overnight",
        "label": "W213 air suspension guide"
      },
      {
        "href": "/workshops",
        "label": "Find air suspension workshops"
      }
    ]
  },
  {
    "slug": "mercedes-gearbox-jerking-repair-cost-singapore",
    "title": "Mercedes gearbox jerking repair cost in Singapore",
    "description": "How to approach 7G-Tronic and 9G-Tronic jerk symptoms before approving a rebuild.",
    "category": "Mercedes repair cost",
    "date": "2026-05-06",
    "readingTime": "4 min read",
    "intro": "A jerky Mercedes gearbox does not automatically mean full gearbox overhaul. In Singapore, many owners hear “gearbox problem” and panic. Slow down and ask for the scan path.",
    "sections": [
      {
        "heading": "Typical cost range",
        "body": "Fluid and filter service is cheaper. Conductor plate, valve body or mechatronic work costs more. Full overhaul should be the last confirmed path, not the opening line."
      },
      {
        "heading": "What to check first",
        "body": "Ask for Star/XENTRY fault codes, adaptation values and service history. Low-speed jerking can have several causes."
      },
      {
        "heading": "Red flag quote",
        "body": "If the quote jumps straight to overhaul without scan results, ask for written diagnosis. “Gearbox spoil” is not diagnosis."
      },
      {
        "heading": "Best next step",
        "body": "Confirm whether it is 7G-Tronic or 9G-Tronic, then get an itemised quote with parts and labour separated."
      }
    ],
    "links": [
      {
        "href": "/car-problems/mercedes-e-class-gearbox-jerking-rough-shifting-at-low-speed",
        "label": "Mercedes gearbox jerking guide"
      },
      {
        "href": "/audit-my-quote",
        "label": "Audit gearbox quote"
      }
    ]
  },
  {
    "slug": "bmw-engine-misfire-repair-cost-singapore",
    "title": "BMW engine misfire repair cost in Singapore",
    "description": "What 3 Series and 5 Series owners should check before replacing injectors, coils or engine parts.",
    "category": "BMW repair cost",
    "date": "2026-05-06",
    "readingTime": "4 min read",
    "intro": "BMW misfire can feel dramatic. The engine shakes, warning light comes on, and the car may lose power. But the fix can range from simple coils to bigger engine work.",
    "sections": [
      {
        "heading": "Typical cost range",
        "body": "Spark plugs and ignition coils are usually the lower-cost suspects. Injectors, fuel pump, compression issues or timing-related faults cost more."
      },
      {
        "heading": "What to check first",
        "body": "Ask which cylinder misfired, what fault code appeared, and whether plugs/coils were swapped for confirmation."
      },
      {
        "heading": "Red flag quote",
        "body": "Replacing all injectors immediately without cylinder-specific diagnosis can be overkill unless there is clear proof."
      },
      {
        "heading": "Best next step",
        "body": "Use ISTA scan, check service history, then approve staged diagnosis before major parts."
      }
    ],
    "links": [
      {
        "href": "/car-problems/bmw-3-series-engine-misfire-rough-idle-n20-n52",
        "label": "BMW misfire guide"
      },
      {
        "href": "/workshops",
        "label": "Find BMW workshops"
      }
    ]
  },
  {
    "slug": "audi-dsg-jerking-repair-cost-singapore",
    "title": "Audi DSG jerking repair cost in Singapore",
    "description": "A practical quote-check guide for Audi and VW S-tronic/DSG symptoms.",
    "category": "Audi repair cost",
    "date": "2026-05-06",
    "readingTime": "4 min read",
    "intro": "DSG jerking is one of those symptoms that makes owners expect a huge bill. Sometimes it is serious. Sometimes the first step is service history, scan codes and adaptation checks.",
    "sections": [
      {
        "heading": "Typical cost range",
        "body": "Fluid service and adaptation checks are lower-cost. Mechatronic or clutch-pack work costs more. Full gearbox replacement should need strong proof."
      },
      {
        "heading": "What to check first",
        "body": "Ask whether the fault points to mechatronic, clutch, fluid, mount or software. The workshop should not diagnose DSG by feel only."
      },
      {
        "heading": "Red flag quote",
        "body": "“Need change gearbox” after a short test drive is not enough for a major approval."
      },
      {
        "heading": "Best next step",
        "body": "Use ODIS/VCDS scan and ask for the exact fault codes in the quote."
      }
    ],
    "links": [
      {
        "href": "/car-problems/audi-a4-dsg-jerky-shifting",
        "label": "Audi A4 DSG guide"
      },
      {
        "href": "/workshops",
        "label": "Find Audi workshops"
      }
    ]
  },
  {
    "slug": "porsche-coolant-leak-repair-cost-singapore",
    "title": "Porsche coolant leak repair cost in Singapore",
    "description": "What Macan and Cayenne owners should ask before approving coolant leak repair.",
    "category": "Porsche repair cost",
    "date": "2026-05-06",
    "readingTime": "4 min read",
    "intro": "Coolant leaks on Porsche models can be minor or painful. The mistake is approving a large job before pressure testing confirms where the coolant is actually escaping.",
    "sections": [
      {
        "heading": "Typical cost range",
        "body": "Small hoses and fittings are lower-cost. Labour-heavy leaks between engine and transmission cost much more."
      },
      {
        "heading": "What to check first",
        "body": "Ask for pressure test, visual proof and whether there are dried coolant marks. Low coolant warning alone is not enough."
      },
      {
        "heading": "Red flag quote",
        "body": "A big teardown quote without pressure-test evidence deserves a second look."
      },
      {
        "heading": "Best next step",
        "body": "Get the leak location written clearly, with labour hours separated from parts."
      }
    ],
    "links": [
      {
        "href": "/car-problems/porsche-cayenne-coolant-leak-between-engine-and-transmission",
        "label": "Porsche Cayenne coolant leak"
      },
      {
        "href": "/workshops",
        "label": "Find Porsche workshops"
      }
    ]
  },
  {
    "slug": "agent-quoted-3000-mercedes-air-suspension",
    "title": "Agent quoted $3,000 for Mercedes air suspension — what to check first",
    "description": "Before accepting a full strut quote, ask for these checks.",
    "category": "Quote audit",
    "date": "2026-05-06",
    "readingTime": "4 min read",
    "intro": "A $3,000+ air suspension quote is not automatically wrong. But it should not be accepted blindly, especially if the car only sinks overnight and still drives normally.",
    "sections": [
      {
        "heading": "First question",
        "body": "Ask whether a leak test was done. Which corner dropped? Did they test the valve block, air line and bag separately?"
      },
      {
        "heading": "Second question",
        "body": "Ask for proof. A photo, video, scan result or pressure test result is better than a one-line quote."
      },
      {
        "heading": "Third question",
        "body": "Ask if a cheaper confirmed fix exists. Valve block leaks can look scary but may not require changing full struts."
      },
      {
        "heading": "When to approve",
        "body": "Approve the expensive repair only when the failed part is identified and the quote is itemised."
      }
    ],
    "links": [
      {
        "href": "/audit-my-quote",
        "label": "Audit your quote"
      },
      {
        "href": "/car-problems/mercedes-e-class-air-suspension-drops-overnight",
        "label": "Air suspension guide"
      }
    ]
  },
  {
    "slug": "workshop-says-gearbox-overhaul-singapore",
    "title": "Workshop says gearbox overhaul — when is it really needed?",
    "description": "How to challenge a gearbox overhaul quote without sounding unreasonable.",
    "category": "Quote audit",
    "date": "2026-05-06",
    "readingTime": "4 min read",
    "intro": "Gearbox overhaul is one of the biggest repair approvals a car owner can face. The right question is not “is the workshop cheating me?” The right question is “what proves overhaul is needed?”",
    "sections": [
      {
        "heading": "When overhaul may be real",
        "body": "Severe slipping, metal debris, repeated fault codes, failed pressure tests or internal damage can justify overhaul."
      },
      {
        "heading": "When to slow down",
        "body": "Low-speed jerks, delayed engagement or occasional hesitation may need diagnosis before overhaul."
      },
      {
        "heading": "What to ask",
        "body": "Ask for fault codes, fluid condition, adaptation readings and whether a smaller repair was ruled out."
      },
      {
        "heading": "How to compare quotes",
        "body": "Compare diagnosis, warranty, parts scope and labour — not just final price."
      }
    ],
    "links": [
      {
        "href": "/audit-my-quote",
        "label": "Audit gearbox quote"
      },
      {
        "href": "/workshops",
        "label": "Find transmission specialists"
      }
    ]
  },
  {
    "slug": "aircon-not-cold-compressor-replacement-singapore",
    "title": "Aircon not cold: do you really need compressor replacement?",
    "description": "What Singapore owners should ask before approving a compressor quote.",
    "category": "Quote audit",
    "date": "2026-05-06",
    "readingTime": "4 min read",
    "intro": "Weak aircon is common in Singapore because the system works hard every day. But weak cooling does not always mean compressor replacement.",
    "sections": [
      {
        "heading": "Common cheaper causes",
        "body": "Low refrigerant, small leaks, clogged condenser, expansion valve issues, dirty cabin filter or fan problems can all cause weak cooling."
      },
      {
        "heading": "What proof to ask for",
        "body": "Ask for pressure readings, leak test, temperature reading at vent and why compressor is confirmed failed."
      },
      {
        "heading": "Red flag quote",
        "body": "If the workshop says “compressor weak” without measurements, ask them to show the readings."
      },
      {
        "heading": "When compressor makes sense",
        "body": "Noisy compressor, poor pressure behaviour or confirmed internal failure can justify replacement."
      }
    ],
    "links": [
      {
        "href": "/car-problems/mercedes-e-class-aircon-not-cold-weak-cooling",
        "label": "Mercedes weak aircon guide"
      },
      {
        "href": "/audit-my-quote",
        "label": "Audit aircon quote"
      }
    ]
  },
  {
    "slug": "agent-vs-specialist-workshop-singapore",
    "title": "Agent or specialist workshop in Singapore — which should you choose?",
    "description": "A practical decision guide for continental car owners after warranty.",
    "category": "Workshop choice",
    "date": "2026-05-06",
    "readingTime": "4 min read",
    "intro": "Agent workshops and independent specialists both have a place. The best choice depends on warranty, fault type, budget and how much diagnostic proof you need.",
    "sections": [
      {
        "heading": "Choose agent when",
        "body": "The car is under warranty, recall-related, software campaign-related, or you need official goodwill support."
      },
      {
        "heading": "Choose specialist when",
        "body": "The car is out of warranty and you need platform-specific diagnosis, itemised repair options and lower-cost alternatives."
      },
      {
        "heading": "What not to do",
        "body": "Do not choose only by cheapest quote. Continental repairs punish guessing."
      },
      {
        "heading": "Best approach",
        "body": "Pay for diagnosis first if the fault is serious. Then compare repair options with proof."
      }
    ],
    "links": [
      {
        "href": "/workshops",
        "label": "Browse specialists"
      },
      {
        "href": "/audit-my-quote",
        "label": "Audit a quote"
      }
    ]
  },
  {
    "slug": "how-to-read-car-repair-quote-singapore",
    "title": "How to read a car repair quote before approving it",
    "description": "A Singapore car owner checklist for parts, labour, diagnosis and warranty.",
    "category": "Quote audit",
    "date": "2026-05-06",
    "readingTime": "4 min read",
    "intro": "A repair quote is not just a price. It should explain what failed, what will be replaced, how labour is charged and what warranty you get.",
    "sections": [
      {
        "heading": "Check diagnosis",
        "body": "Does the quote say what test confirmed the fault? Scan code, leak test, pressure test or visual proof should be mentioned."
      },
      {
        "heading": "Check parts",
        "body": "Are parts OEM, OEM-equivalent, used, rebuilt or aftermarket? The price only makes sense when parts tier is clear."
      },
      {
        "heading": "Check labour",
        "body": "Labour should be separated from parts for bigger jobs. If not, ask."
      },
      {
        "heading": "Check warranty",
        "body": "Ask what is covered: part only, labour only, or both. Also ask what voids it."
      }
    ],
    "links": [
      {
        "href": "/audit-my-quote",
        "label": "Audit your quote"
      },
      {
        "href": "/workshops",
        "label": "Find workshops"
      }
    ]
  },
  {
    "slug": "best-mercedes-specialist-workshop-singapore-criteria",
    "title": "Best Mercedes specialist workshop in Singapore: what to look for",
    "description": "Not a paid ranking — the criteria that actually matter.",
    "category": "Workshop choice",
    "date": "2026-05-06",
    "readingTime": "4 min read",
    "intro": "The best Mercedes workshop is not always the fanciest or cheapest. It is the one that can diagnose your exact platform and show proof before changing expensive parts.",
    "sections": [
      {
        "heading": "Must-have tools",
        "body": "Look for Star Diagnostic or XENTRY capability, especially for gearbox, air suspension and electronic faults."
      },
      {
        "heading": "Must-have behaviour",
        "body": "They should ask for model, year, mileage and symptom. They should explain likely causes before quoting major parts."
      },
      {
        "heading": "Good signs",
        "body": "Itemised quotes, photos, scan reports and willingness to test before replacing."
      },
      {
        "heading": "Bad signs",
        "body": "One-line quotes, pressure tactics and “common problem, just change” without proof."
      }
    ],
    "links": [
      {
        "href": "/workshops",
        "label": "Find Mercedes workshops"
      },
      {
        "href": "/car-problems/mercedes-e-class-air-suspension-drops-overnight",
        "label": "Mercedes issue guides"
      }
    ]
  },
  {
    "slug": "how-to-choose-bmw-specialist-singapore",
    "title": "How to choose a BMW specialist in Singapore",
    "description": "What BMW owners should check before sending in F30, G20, F10 or G30.",
    "category": "Workshop choice",
    "date": "2026-05-06",
    "readingTime": "4 min read",
    "intro": "BMW specialists should be comfortable with ISTA diagnostics, engine codes, ZF gearbox behaviour and common platform faults. A general workshop may be fine for servicing, but not every fault.",
    "sections": [
      {
        "heading": "Ask about tools",
        "body": "ISTA access matters for proper BMW diagnostics. Ask if they can provide scan results."
      },
      {
        "heading": "Ask about experience",
        "body": "Tell them your chassis code and symptom. A good workshop will recognise likely paths but still confirm by scan."
      },
      {
        "heading": "Ask about quote process",
        "body": "For misfire, coolant, gearbox or drivetrain faults, ask for staged diagnosis before parts replacement."
      },
      {
        "heading": "Choose based on proof",
        "body": "Good BMW repair is not guessing with expensive parts."
      }
    ],
    "links": [
      {
        "href": "/car-problems/bmw-3-series-cold-start-engine-rattle-n20",
        "label": "BMW engine rattle guide"
      },
      {
        "href": "/workshops",
        "label": "Find BMW workshops"
      }
    ]
  },
  {
    "slug": "how-to-choose-audi-vw-dsg-specialist-singapore",
    "title": "How to choose an Audi / VW DSG specialist in Singapore",
    "description": "What to ask before approving S-tronic or DSG gearbox work.",
    "category": "Workshop choice",
    "date": "2026-05-06",
    "readingTime": "4 min read",
    "intro": "Audi and VW DSG work needs the right scan tools and enough gearbox experience. A specialist should explain whether your issue is mechatronic, clutch, fluid, mount or software-related.",
    "sections": [
      {
        "heading": "Ask about tools",
        "body": "ODIS and VCDS are strong signs. Ask whether they can share fault codes."
      },
      {
        "heading": "Ask about DSG experience",
        "body": "Do they regularly handle S-tronic/DSG mechatronic and clutch work, or only basic servicing?"
      },
      {
        "heading": "Ask about adaptation",
        "body": "For some symptoms, adaptation and service history matter before parts are condemned."
      },
      {
        "heading": "Avoid vague quotes",
        "body": "“Gearbox problem” is not enough. Ask what exactly failed."
      }
    ],
    "links": [
      {
        "href": "/car-problems/audi-a4-dsg-jerky-shifting",
        "label": "Audi DSG guide"
      },
      {
        "href": "/workshops",
        "label": "Find Audi workshops"
      }
    ]
  },
  {
    "slug": "continental-workshop-diagnostic-tools-singapore",
    "title": "What diagnostic tools should a continental workshop have?",
    "description": "XENTRY, ISTA, ODIS, PIWIS, VIDA — what these names mean for owners.",
    "category": "Workshop choice",
    "date": "2026-05-06",
    "readingTime": "4 min read",
    "intro": "Diagnostic tools do not magically make a workshop good, but they reduce guessing. For continental cars, the right scanner can separate a real fault from a generic warning.",
    "sections": [
      {
        "heading": "Mercedes",
        "body": "Look for Star Diagnostic or XENTRY for air suspension, gearbox, engine and module faults."
      },
      {
        "heading": "BMW",
        "body": "ISTA is the standard tool owners should ask about for deeper diagnosis."
      },
      {
        "heading": "Audi / VW",
        "body": "ODIS and VCDS help with DSG, module coding and fault tracing."
      },
      {
        "heading": "Porsche and Volvo",
        "body": "PIWIS helps Porsche diagnosis. VIDA helps Volvo diagnosis. Ask for scan proof, not just tool names."
      }
    ],
    "links": [
      {
        "href": "/workshops",
        "label": "Browse diagnostic workshops"
      },
      {
        "href": "/audit-my-quote",
        "label": "Audit quote"
      }
    ]
  },
  {
    "slug": "questions-before-leaving-car-at-workshop-singapore",
    "title": "Questions to ask before leaving your car at a workshop",
    "description": "A practical checklist for Singapore owners to avoid confusion and surprise bills.",
    "category": "Workshop choice",
    "date": "2026-05-06",
    "readingTime": "4 min read",
    "intro": "Leaving your car at a workshop is normal. Leaving it there without clear instructions is how misunderstandings start.",
    "sections": [
      {
        "heading": "Before handover",
        "body": "Ask what diagnosis will cost, how long it will take and whether they need approval before repairs."
      },
      {
        "heading": "Before parts order",
        "body": "Ask for itemised quote, parts tier and warranty. Do not rely only on phone summaries for big jobs."
      },
      {
        "heading": "Before collection",
        "body": "Ask what was changed, what was tested and whether old parts or photos are available."
      },
      {
        "heading": "If still unsure",
        "body": "Pay for diagnosis and pause. You do not have to approve a major job on the spot."
      }
    ],
    "links": [
      {
        "href": "/audit-my-quote",
        "label": "Audit repair quote"
      },
      {
        "href": "/workshops",
        "label": "Find workshops"
      }
    ]
  }
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
