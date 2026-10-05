export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  callout?: string;
  quote?: string;
}

export interface Article {
  id: string;
  title: string;
  deck: string;
  category: 'Brewing Craft' | 'Origin & Terroir' | 'Hearth Bakery' | 'Cafe Culture' | 'Equipment & Technique';
  readTime: string;
  publishedDate: string;
  author: {
    name: string;
    role: string;
    avatarInitials: string;
  };
  coverImage: string;
  imageAlt: string;
  figureCaption: string;
  leadQuote: string;
  sections: ArticleSection[];
  tags: string[];
  keyTakeaways: string[];
  brewingSpec?: {
    ratio: string;
    waterTemp: string;
    grindSize: string;
    brewTime: string;
    notes: string;
  };
}

export const ARTICLES: Article[] = [
  {
    id: 'anatomy-of-a-perfect-pour-over',
    title: 'The Anatomy of a Perfect Pour-Over: Ratios, Water Temperature, and Blooming',
    deck: 'How controlled turbulence, water mineral chemistry, and precision degassing unveil the delicate floral and citrus compounds hidden inside single-origin coffees.',
    category: 'Brewing Craft',
    readTime: '6 min read',
    publishedDate: 'October 2, 2026',
    author: {
      name: 'Clara Evans',
      role: 'Head of Coffee & Quality',
      avatarInitials: 'CE'
    },
    coverImage: '/src/assets/images/article_pourover_craft_1791170321882.jpg',
    imageAlt: 'Specialty coffee pour-over ritual with a matte gooseneck kettle and glass V60 dripper',
    figureCaption: 'Fig. 1 — The 45-second bloom phase releases trapped CO2 from the cellular matrix of freshly roasted beans.',
    leadQuote: 'Pour-over brewing is not about rushing extraction; it is about providing the exact hydraulic conditions under which coffee can articulate its own origin.',
    tags: ['V60', 'Extraction', 'Water Chemistry', 'Pour-over'],
    keyTakeaways: [
      'Maintain a golden ratio between 1:15 and 1:16.5 depending on roast density.',
      'Water temperature should sit between 92°C and 94°C for washed Ethiopians to preserve volatile esters.',
      'A 45-second bloom with 3x the coffee weight in water ensures even saturation without channeling.',
      'Pour in concentric circles without breaking the surface crust or eroding paper channel walls.'
    ],
    brewingSpec: {
      ratio: '1:16 (18g coffee : 288g water)',
      waterTemp: '93°C (199.4°F)',
      grindSize: 'Medium-Fine (approx. 550μm)',
      brewTime: '3 min 15 sec',
      notes: 'Use third-wave mineral recipe with 120ppm total dissolved solids.'
    },
    sections: [
      {
        heading: 'The Geometry of Extraction',
        paragraphs: [
          'When hot water touches freshly ground coffee, a cascade of thermodynamic and chemical reactions occurs within fractions of a second. Soluble gases—primarily carbon dioxide trapped within the caramelized cellular matrix during roasting—burst forth in what baristas call the bloom.',
          'If you pour water too rapidly during this initial phase, the escaping gas acts as an invisible shield, physically deflecting the water and preventing it from dissolving the delicate fruit acids and aromatic lipids inside each particulate cell.'
        ],
        callout: 'Tip: Always rinse your oxygen-bleached paper filters with boiling water before dosing coffee to eliminate paper lignin taste and pre-heat the thermal mass of your brewer.'
      },
      {
        heading: 'Water: The Forgotten Ninety-Eight Percent',
        paragraphs: [
          'A cup of filter coffee is roughly 98.6% water. If your brewing water contains excessive calcium carbonate, it buffers out delicate malic and citric acidity, transforming an effervescent washed Kenyan into a flat, chalky brew.',
          'Conversely, distilled water devoid of magnesium cations lacks the molecular grab hooks needed to bond with volatile flavor compounds. At Verdant Hearth, we remineralize reverse-osmosis water to precisely 125 ppm TDS with a 2:1 magnesium-to-calcium ratio.'
        ],
        quote: 'You cannot roast or brew past your water. Great water makes good coffee sublime; harsh water turns rare micro-lots mute.'
      },
      {
        heading: 'The Three-Stage Pour Technique',
        paragraphs: [
          'We practice a continuous three-pulse method: the 55g bloom, followed at 0:45 by a steady circular spiral up to 170g, and a final gentle center pour to 288g by 2:15. This maintains an optimal thermal bed while avoiding excessive agitation that risks over-extracting astringent polyphenols.',
          'The result in the cup is crystal-clear transparency: bergamot blossom on the nose, honeysuckle sweetness on the palate, and a lingering, tea-like finish.'
        ]
      }
    ]
  },
  {
    id: 'crop-to-cup-ethiopian-yirgacheffe',
    title: 'From Crop to Cup: A Journey into Ethiopian Yirgacheffe Heirloom Varietals',
    deck: 'Tracing the wild forest coffees of the Gedeo zone, where misty altitude, centuries of agroforestry, and pristine natural fermentation produce unmatched jasmine and peach aromatics.',
    category: 'Origin & Terroir',
    readTime: '7 min read',
    publishedDate: 'September 28, 2026',
    author: {
      name: 'Maeve Chen',
      role: 'Green Coffee Buyer & Sensory Lead',
      avatarInitials: 'MC'
    },
    coverImage: '/src/assets/images/article_coffee_cherries_1791170343871.jpg',
    imageAlt: 'Ripe red coffee cherries and raw green beans resting in artisanal ceramic vessels',
    figureCaption: 'Fig. 2 — Hand-picked cherries at peak Brix density before sorting on raised African drying beds.',
    leadQuote: 'In the Ethiopian highlands, coffee is not an industrial monoculture. It grows as it was born: in the dappled shade of ancient indigenous trees.',
    tags: ['Ethiopia', 'Terroir', 'Heirloom', 'Direct Trade'],
    keyTakeaways: [
      'Grown at altitudes between 1,900m and 2,200m in mineral-dense volcanic soils.',
      'Thousands of uncataloged heirloom cultivars provide genetic resilience and flavor complexity.',
      'Wet-milling followed by 36-hour submerged fermentation produces signature sparkling clarity.',
      'Direct trade agreements guarantee fair premiums directly to smallholder farming cooperatives.'
    ],
    sections: [
      {
        heading: 'The Birthplace of Coffea Arabica',
        paragraphs: [
          'High in the misty escarpments of southern Ethiopia lies the Gedeo zone. Here, coffee trees do not stand in regimented plantation rows under open skies; they thrive in layered agroforestry systems alongside false banana (enset), avocado trees, and wild forest flora.',
          'These micro-climates experience dramatic diurnal temperature swings: 28°C during sunny alpine afternoons plunging to 9°C after dusk. This slow thermal rhythm retards maturation, allowing the cherry sugars to concentrate into dense, highly complex organic acids.'
        ]
      },
      {
        heading: 'Decoding the "Heirloom" Mystery',
        paragraphs: [
          'While Central American specialty coffee is dominated by identifiable single varieties like Typica, Bourbon, or Geisha, Ethiopian coffee lots are frequently labeled simply as "regional heirloom". In truth, this term conceals a magnificent biodiversity of thousands of wild forest ecotypes, many of which exist nowhere else on Earth.',
          'When we roast our lot from the Konga cooperative, you are tasting a living botanical symphony that has evolved naturally over millennia.'
        ],
        quote: 'Every sip of a washed Yirgacheffe carries a whisper of wild jasmine, candied lemon zest, and dried peach.'
      },
      {
        heading: 'Fermentation on Raised Mesh Beds',
        paragraphs: [
          'Post-harvest processing in Yirgacheffe is an art of patience. Cherries are pulped with pure mountain spring water, fermented underwater for 36 hours to enzymatically break down sticky mucilage, and gently turned by hand every thirty minutes on elevated African drying tables.',
          'This rigorous air circulation prevents mold while ensuring uniform moisture decline to the critical 11% threshold.'
        ]
      }
    ]
  },
  {
    id: 'art-of-slow-sourdough-fermentation',
    title: 'The Art of Slow Fermentation: Why Our Sourdough Takes 36 Hours',
    deck: 'Wild yeasts, stone-milled regional wheat, and a two-stage cold retardation develop deep lactic acidity, caramelized blistered crusts, and gentle digestability.',
    category: 'Hearth Bakery',
    readTime: '5 min read',
    publishedDate: 'September 22, 2026',
    author: {
      name: 'Julian Thorne',
      role: 'Master Baker & Hearth Director',
      avatarInitials: 'JT'
    },
    coverImage: '/src/assets/images/article_sourdough_croissant_1791170333526.jpg',
    imageAlt: 'Rustic golden sourdough loaf with blistered crust and flaky butter croissants on baker cooling rack',
    figureCaption: 'Fig. 3 — Loaves emerge from our stone hearth deck oven with deep mahogany caramelization and an airy crumb.',
    leadQuote: 'Commercial bakeries use speed to produce volume. We use time to produce digestibility and profound flavor.',
    tags: ['Sourdough', 'Fermentation', 'Heritage Grain', 'Baking'],
    keyTakeaways: [
      'Our starter, "Agatha", has been fed daily with organic rye and whole wheat since 2018.',
      'A 36-hour cold ferment breaks down complex gluten structures and phytic acid.',
      'Flour is sourced from regional heritage mills using regenerative dry-farmed grains.',
      'Steam injection in the first 8 minutes of baking allows the dough to expand freely before crusting.'
    ],
    sections: [
      {
        heading: 'The Microbiome of Our Hearth',
        paragraphs: [
          'A genuine sourdough loaf requires only three primal ingredients: flour, water, and sea salt. The fourth ingredient—the one that cannot be purchased from any distributor—is biological time.',
          'Our sourdough culture is home to billions of wild yeasts (predominantly Kazachstania exigua) living in symbiotic harmony with heterofermentative lactic acid bacteria (Lactobacillus sanfranciscensis). As they digest the starches in our stone-ground flour, they produce both acetic and lactic acids, building a complex sweet-sour profile.'
        ]
      },
      {
        heading: 'Why Cold Retardation Matters',
        paragraphs: [
          'After initial autolyse and coil-folding, our shaped dough batards rest in rattan banneton baskets lined with linen. Rather than rushing them into the oven, they are transferred into a temperature-controlled cold room held steadily at 4°C for 28 hours.',
          'At this chilled temperature, yeast activity slows to a crawl, but enzymatic bacterial breakdown continues unabated. Gluten proteins are gently pre-digested, and complex carbohydrates are converted into fermentable sugars that caramelize during baking into dark amber blisters on the loaf ear.'
        ],
        quote: 'People who believe they cannot tolerate bread often find they can comfortably enjoy true slow-fermented sourdough.'
      },
      {
        heading: 'The Hearth Oven Explosion',
        paragraphs: [
          'At dawn, each batard is scored with a razor-sharp lame at a 30-degree angle and loaded directly onto the stone floor of our deck oven. A blast of pressurized superheated steam saturates the baking chamber, keeping the exterior dough supple while internal water rapidly vaporizes, giving our loaves their dramatic oven spring.'
        ]
      }
    ]
  },
  {
    id: 'crafting-silky-microfoam-milk-latte-art',
    title: 'Oat, Almond, or Whole Milk? Crafting Silky Microfoam for Latte Art',
    deck: 'The thermodynamic physics of protein denaturation, lipid stability, and vortex texturing across dairy and plant-based milks.',
    category: 'Equipment & Technique',
    readTime: '6 min read',
    publishedDate: 'September 15, 2026',
    author: {
      name: 'Clara Evans',
      role: 'Head of Coffee & Quality',
      avatarInitials: 'CE'
    },
    coverImage: '/src/assets/images/article_latte_art_cozy_1791170355954.jpg',
    imageAlt: 'Ceramic cappuccino cup with tulip latte art microfoam on rustic cafe table',
    figureCaption: 'Fig. 4 — Wet-paint gloss texture achieved by breaking air bubbles into sub-millimeter micro-vesicles.',
    leadQuote: 'Good milk texture is not stiff foam sitting on top of espresso like shaving cream; it is a unified, glossy emulsion with the sheen of wet paint.',
    tags: ['Latte Art', 'Microfoam', 'Barista Skills', 'Plant Milk'],
    keyTakeaways: [
      'Steam wand tip should introduce air only for the first 3 seconds before descending into vortex mode.',
      'Stop heating at 60°C to 65°C to avoid scalding whey proteins and denaturing sweetness.',
      'Oat milk requires gentler aeration and a slightly faster pour due to starch-based viscosity.',
      'Groom and swirl the milk pitcher immediately to prevent separation before integrating with crema.'
    ],
    sections: [
      {
        heading: 'The Physics of Steaming',
        paragraphs: [
          'Steaming milk is often mistaken for heating milk. In reality, it is a two-phase aerodynamic procedure: aeration followed by texturing. In the aeration phase, high-velocity steam draws atmospheric air beneath the liquid surface, creating tiny bubbles.',
          'In the texturing phase, the barista positions the steam tip just off-center, generating a violent whirlpool vortex that repeatedly shears those large bubbles against the pitcher wall until they disintegrate into invisible microfoam.'
        ]
      },
      {
        heading: 'Dairy vs. Oat: Chemical Differences',
        paragraphs: [
          'Cow milk relies on casein micelle networks and whey proteins to trap air lipids. When heated past 68°C, however, these proteins denature permanently, releasing sulfuric off-notes and destroying perceived sweetness.',
          'Barista-edition oat milk, by contrast, relies on soluble beta-glucan fibers and added dipotassium phosphate to buffer the harsh acidity of espresso shots and prevent curdling. While it lacks dairy lactose, enzymatic hydrolysis yields maltose sugars that complement roasted hazelnut notes.'
        ],
        callout: 'Pro Barista Tip: Pour with your wrist relaxed and your pitcher spout within half an inch of the coffee surface when laying down contrasting white patterns.'
      }
    ]
  },
  {
    id: 'psychology-of-neighborhood-third-places',
    title: 'Finding Quiet in the City: The Psychology of Neighborhood Third Places',
    deck: 'Why human beings need community sanctuaries that are neither the pressures of work nor the domestic routines of home.',
    category: 'Cafe Culture',
    readTime: '5 min read',
    publishedDate: 'September 10, 2026',
    author: {
      name: 'Maeve Chen',
      role: 'Green Coffee Buyer & Sensory Lead',
      avatarInitials: 'MC'
    },
    coverImage: '/src/assets/images/hero_cafe_interior_1791170306974.jpg',
    imageAlt: 'Warm sunlit interior of Verdant Hearth cafe with oak counters and patrons resting in peaceful morning light',
    figureCaption: 'Fig. 5 — Natural acoustic damping and warm wood timbers foster low-anxiety contemplation and spontaneous connection.',
    leadQuote: 'A great neighborhood cafe is an anchor in the urban storm: a room where you can be solitary without feeling alone.',
    tags: ['Cafe Culture', 'Community', 'Urbanism', 'Third Place'],
    keyTakeaways: [
      'Sociologist Ray Oldenburg defined the "Third Place" as a vital civil buffer.',
      'Unstructured social presence reduces loneliness and stimulates creative flow states.',
      'Cafe design must balance communal long tables with private reading alcoves.',
      'Ritualized hospitality turns strangers into familiar, comforting presences.'
    ],
    sections: [
      {
        heading: 'The Architecture of Belonging',
        paragraphs: [
          'In 1989, sociologist Ray Oldenburg coined the term "Third Place" to describe public social anchors distinct from home (the first place) and work (the second place). In these spaces, hosts do not demand economic productivity, status hierarchy is flattened, and conversation is the main currency.',
          'When we built Verdant Hearth, every architectural decision was calibrated around this sociological imperative. The wide blonde oak counters have no towering sneeze-guards; baristas and neighbors speak across a barrier-free threshold.'
        ]
      },
      {
        heading: 'Acoustics and the Low-Stimulus Haven',
        paragraphs: [
          'Modern urban life is an assault of notification chimes, traffic friction, and fluorescent glare. We designed our space with acoustic plaster, wool felt wall tapestries, and cork flooring underlayment to absorb mid-frequency chatter.',
          'The result is a warm ambient hum—roughly 62 decibels—which cognitive psychologists have proven to be the optimal auditory zone for divergent thinking and calm reading.'
        ],
        quote: 'You do not come to a neighborhood cafe simply for caffeine; you come to reconnect with your own heartbeat in the presence of others.'
      }
    ]
  },
  {
    id: 'morning-in-the-bakery-4am-croissants',
    title: 'A Morning in the Bakery: The Ritual of Laminated Croissants at 4:30 AM',
    deck: 'Step inside the flour-dusted pre-dawn hours where 81 micro-layers of cultured French butter and enriched dough fold into ephemeral golden flakes.',
    category: 'Hearth Bakery',
    readTime: '6 min read',
    publishedDate: 'September 3, 2026',
    author: {
      name: 'Julian Thorne',
      role: 'Master Baker & Hearth Director',
      avatarInitials: 'JT'
    },
    coverImage: '/src/assets/images/article_sourdough_croissant_1791170333526.jpg',
    imageAlt: 'Close-up of golden honeycombed cross-section of fresh laminated butter croissant',
    figureCaption: 'Fig. 6 — Geometric lamination creates thin sheets of butter that steam internally during baking.',
    leadQuote: 'A croissant is pure architecture made of butter, flour, and air. Cut one open and you should see a translucent honeycomb of stained glass.',
    tags: ['Croissants', 'Viennoiserie', 'Butter', 'Pastry'],
    keyTakeaways: [
      'We use cultured European-style butter with 84% butterfat content for elasticity.',
      'A 3-fold lamination schedule creates 81 alternating sheets of dough and butter.',
      'Dough and butter block temperatures must match precisely at 14°C during rolling.',
      'Proofing takes 2.5 hours in a humid, gentle 26°C proofing cabinet.'
    ],
    sections: [
      {
        heading: 'The Pre-Dawn Quiet',
        paragraphs: [
          'The city is black and silent when the bakery lights click on at 4:15 AM. The only sound is the rhythmic drone of the refrigeration compressors and the faint scent of yesterday’s caramelized hearth loaves lingering in the brickwork.',
          'Laminated pastry is merciless. If your butter is two degrees too cold, it shatters into jagged flakes inside the dough, rupturing the layers. If it is two degrees too warm, it melts into the flour, turning a light pastry into a greasy biscuit.'
        ]
      },
      {
        heading: 'The Math of 81 Layers',
        paragraphs: [
          'We enclose a chilled rectangle of high-fat cultured butter within our fermented détrempe dough. A double turn (book fold) followed by a resting chill and a single letter turn produces mathematically exactly 81 distinct sheets of butter separated by wafer-thin gluten membranes.',
          'In the oven, the moisture in each butter sheet flashes into steam. Because steam cannot penetrate the fat barrier, it forces the dough layers upward like miniature parachutes, creating the prized open honeycomb alveoli.'
        ]
      }
    ]
  },
  {
    id: 'cold-drip-vs-cold-brew-acidity-flavor',
    title: 'Cold Drip vs. Cold Brew: Unlocking Sweet Acidity and Chocolate Notes',
    deck: 'Immersion steeping versus gravity percolation: how extraction contact time reshapes the solubility of chlorogenic acids and volatile aromas.',
    category: 'Brewing Craft',
    readTime: '5 min read',
    publishedDate: 'August 28, 2026',
    author: {
      name: 'Clara Evans',
      role: 'Head of Coffee & Quality',
      avatarInitials: 'CE'
    },
    coverImage: '/src/assets/images/article_pourover_craft_1791170321882.jpg',
    imageAlt: 'Kyoto-style cold drip glass tower with slow ice melt dripping over dark roast bed',
    figureCaption: 'Fig. 7 — Gravity drip extraction at one drop every 1.5 seconds isolates delicate aromatics without heavy sediment.',
    leadQuote: 'Cold brew is not just iced coffee made lazy; it is an entirely distinct chemical beverage governed by low-temperature thermodynamics.',
    tags: ['Cold Brew', 'Cold Drip', 'Kyoto Tower', 'Summer Brew'],
    keyTakeaways: [
      'Full-immersion cold brew yields rounded, heavy-bodied chocolate and caramel tones.',
      'Kyoto-style slow-drip preserves high-register floral and berry acidity.',
      'Cold water extracts roughly 66% less titratable acidity than boiling water.',
      'Always store cold extractions under airtight nitrogen blanketing to halt oxidation.'
    ],
    sections: [
      {
        heading: 'Immersion vs. Percolation',
        paragraphs: [
          'Most commercial cafes prepare cold brew by dumping coarse ground coffee into giant mesh filtration bags submerged in cold water for 18 to 24 hours. This static immersion extraction is forgiving, but it inevitably produces a beverage dominated by heavy chocolate, tobacco, and molasses tones, sacrificing the sparkling terroir of delicate beans.',
          'At Verdant Hearth, we operate three handcrafted Japanese Kyoto glass towers. Ice water drips through a precision brass needle valve at exactly 40 drops per minute, percolating downward through a bed of single-origin beans over an eight-hour window.'
        ]
      },
      {
        heading: 'The Chemical Profile of Chilled Water',
        paragraphs: [
          'High water temperature acts as an indiscriminate solvent, quickly washing out bitter polyphenols and astringent tannins. By relying solely on time rather than heat, cold percolation leaves behind harsh quinic acid while preserving sweet, viscous sucrose compounds and floral terpenes.'
        ]
      }
    ]
  },
  {
    id: 'decoding-roasting-profiles-light-to-dark',
    title: 'Decoding Roasting Profiles: Light, Cinnamon, City, and French',
    deck: 'From drying and the Maillard reaction to the energetic snap of First Crack: what happens inside the cast-iron drum roaster.',
    category: 'Origin & Terroir',
    readTime: '7 min read',
    publishedDate: 'August 19, 2026',
    author: {
      name: 'Maeve Chen',
      role: 'Green Coffee Buyer & Sensory Lead',
      avatarInitials: 'MC'
    },
    coverImage: '/src/assets/images/article_coffee_cherries_1791170343871.jpg',
    imageAlt: 'Coffee beans at various roasting stages from raw pale green to rich cinnamon and deep roasted chestnut',
    figureCaption: 'Fig. 8 — Color progression and bean expansion during the 11-minute drum roasting curve.',
    leadQuote: 'Roasting does not impart flavor to coffee; it unlocks the genetic and chemical potential already planted by the soil and sun.',
    tags: ['Roasting', 'Maillard Reaction', 'First Crack', 'Sensory'],
    keyTakeaways: [
      'The drying phase consumes the first 4 to 5 minutes as internal bean moisture vaporizes.',
      'The Maillard reaction between amino acids and reducing sugars generates hundreds of aroma compounds.',
      'First Crack signals the structural release of steam and marks the beginning of the development phase.',
      'We roast primarily in the "Light to Light-Medium" band to highlight fruit acids over roasty pyrolytic bitters.'
    ],
    sections: [
      {
        heading: 'The Drum and the Flame',
        paragraphs: [
          'Our cast-iron 15kg Giesen roaster is the beating heart of our cafe. When raw green beans drop into the pre-heated drum, the temperature metric plummets to what roasters call the "turnaround point"—the equilibrium moment where energy transfer shifts from drum to bean.',
          'As the bean temperature climbs past 150°C, the Maillard reaction begins in earnest. Nitrogen-rich proteins bind with simple sugars, tinting the green seeds a pale straw yellow, then toasted bread, releasing intoxicating aromas of baking brioche and roasted hazelnuts.'
        ]
      },
      {
        heading: 'The Climax: First Crack and Development Time',
        paragraphs: [
          'Around 198°C, steam pressure inside the expanding cellular cavities overcomes the wood-like cellulose walls of the coffee bean. A sharp, rhythmic popping sound—resembling popcorn—rings out through the inspection door. This is First Crack.',
          'The percentage of total roast time spent between First Crack and the discharge into the cooling tray is termed the Development Time Ratio (DTR). For our Nordic-style light filter roasts, we drop the batch at just 12% to 14% DTR, safeguarding bright malic acids before they degrade into smoky ash.'
        ]
      }
    ]
  },
  {
    id: 'home-barista-guide-grinder-calibration',
    title: 'A Home Barista\'s Field Guide: Grinder Calibration and Burr Maintenance',
    deck: 'Why your grinder matters ten times more than your espresso machine, and how microscopic burr alignment eliminates channeling.',
    category: 'Equipment & Technique',
    readTime: '6 min read',
    publishedDate: 'August 12, 2026',
    author: {
      name: 'Clara Evans',
      role: 'Head of Coffee & Quality',
      avatarInitials: 'CE'
    },
    coverImage: '/src/assets/images/article_latte_art_cozy_1791170355954.jpg',
    imageAlt: 'Barista inspecting precision 64mm flat burrs with stainless steel calipers and dosing cup',
    figureCaption: 'Fig. 9 — Uniform particle distribution curve with minimized fines prevents uneven hydraulic flow.',
    leadQuote: 'If you have a thousand-dollar budget for coffee equipment, spend eight hundred on the grinder and two hundred on the brewer.',
    tags: ['Grinder', 'Burr Alignment', 'Espresso', 'Maintenance'],
    keyTakeaways: [
      'Bimodal particle size creates fines that choke the filter and boulders that under-extract.',
      'Flat burrs provide superior clarity for light-roast filter coffee; conical burrs build textured body.',
      'Clean your burrs with natural grain cleaning pellets every fortnight to remove rancid coffee oils.',
      'Perform the dry-erase marker test to ensure top and bottom burr faces are parallel to within 10 microns.'
    ],
    sections: [
      {
        heading: 'The Tyranny of the Particle Size Curve',
        paragraphs: [
          'When you break a roasted coffee bean, you do not create uniform spheres; you shatter brittle cellular structures into a distribution of boulders, target grounds, and microscopic dust called "fines".',
          'Fines dissolve in seconds, imparting bitterness and astringency, while boulders take minutes to surrender their interior solutes. A precision grinder with high-grade tool-steel burrs produces a unimodal distribution where the vast majority of particles reside in the sweet-spot micron band.'
        ]
      },
      {
        heading: 'How to Calibrate Your Burrs at Home',
        paragraphs: [
          'To test your grinder’s mechanical alignment, unplug the unit, remove the top carrier, and trace a dry-erase marker along the outer flat bevel of the lower burr. Reassemble the grinder and gently rotate the adjustment ring until you hear the faintest metal-on-metal chirp.',
          'Disassemble and inspect the marker ring: if the ink is wiped away evenly 360 degrees around, your grinder is perfectly parallel. If only one quadrant is rubbed off, insert thin aluminum foil shims beneath the low side until true coplanar alignment is achieved.'
        ]
      }
    ]
  },
  {
    id: 'seasonal-kitchen-preserving-summer-berries',
    title: 'Seasonal Kitchen Notes: Preserving Summer Berries for Winter Tarts',
    deck: 'Traditional copper jam kettles, low-sugar pectin extraction, and capturing Oregon wild marionberries at the height of sweetness.',
    category: 'Hearth Bakery',
    readTime: '5 min read',
    publishedDate: 'August 5, 2026',
    author: {
      name: 'Julian Thorne',
      role: 'Master Baker & Hearth Director',
      avatarInitials: 'JT'
    },
    coverImage: '/src/assets/images/article_sourdough_croissant_1791170333526.jpg',
    imageAlt: 'Copper kettle with bubbling wild berry jam beside freshly baked almond frangipane tarts',
    figureCaption: 'Fig. 10 — Marionberries simmered with green apple peel pectin for balanced sweet-tart acidity.',
    leadQuote: 'Preserving fruit is our pact with the coming winter: sealing the fleeting warmth of August sun inside glass jars.',
    tags: ['Preserves', 'Seasonal Kitchen', 'Tarts', 'Local Produce'],
    keyTakeaways: [
      'We source wild marionberries from family farms in the Willamette Valley.',
      'Copper kettles conduct heat instantaneously, preventing scorched off-notes.',
      'We use natural pectin simmered from green Granny Smith apple skins.',
      'Each batch is sealed in sterilized glass jars for our winter almond frangipane galettes.'
    ],
    sections: [
      {
        heading: 'The Ephemeral Window of the Marionberry',
        paragraphs: [
          'For exactly three weeks in midsummer, the Willamette Valley yields its greatest gift: the marionberry, a complex cross between Chehalem and Olallie blackberries prized for its intense floral perfume and rich tartness.',
          'Rather than relying on commercial frozen purees in November, our bakery team spends three intense days in August destemming, macerating, and boiling thousands of pounds of fresh fruit.'
        ]
      },
      {
        heading: 'The French Copper Kettle Method',
        paragraphs: [
          'We cook our fruit in unlined heavy French copper confituriers. Copper’s unmatched thermal conductivity ensures the entire kettle boils evenly and vigorously without hot spots that scorch sugar onto the bottom.',
          'By cooking rapidly at high temperature, the water vaporizes before the delicate volatile fruit aromas break down, keeping the jam jewel-bright and tasting like fresh fruit plucked directly off the thorny vine.'
        ]
      }
    ]
  }
];

export const CATEGORIES = [
  'All Articles',
  'Brewing Craft',
  'Origin & Terroir',
  'Hearth Bakery',
  'Cafe Culture',
  'Equipment & Technique'
] as const;
