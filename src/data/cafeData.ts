export interface MenuItem {
  id: string;
  name: string;
  category: 'Espresso Bar' | 'Slow Filter' | 'Hearth Bakery' | 'Savory & Plates';
  description: string;
  price: string;
  notes?: string;
  tags?: ('Vegan' | 'Vegetarian' | 'Gluten-Free Friendly' | 'House Specialty' | 'Direct Trade')[];
  origin?: string;
}

export const CAFE_INFO = {
  name: 'Verdant Hearth Café & Bakehouse',
  shortName: 'Verdant Hearth',
  tagline: 'Artisanal Roastery, Sourdough Bakehouse & Neighborhood Sanctuary',
  address: '418 Millstone Lane, Pearl District, Portland, OR 97209',
  phone: '(503) 555-0192',
  email: 'hello@verdanthearth.com',
  hours: [
    { days: 'Monday – Friday', openTime: '06:30', closeTime: '17:00', label: '6:30 AM – 5:00 PM' },
    { days: 'Saturday – Sunday', openTime: '07:00', closeTime: '18:00', label: '7:00 AM – 6:00 PM' }
  ],
  features: [
    { title: 'In-House 15kg Giesen Drum Roaster', desc: 'Light to medium-light roast profiles highlighting origin terroir and bright fruit acids.' },
    { title: 'Stone Deck Bread Oven', desc: 'Naturally fermented 36-hour sourdoughs, laminated viennoiserie, and seasonal galettes.' },
    { title: 'Precision Mineralized Water', desc: 'Custom 125ppm reverse-osmosis remineralization with a 2:1 magnesium-to-calcium ratio.' },
    { title: 'Direct Farm Partnership', desc: 'We pay an average 185% above Fair Trade minimums directly to farmer cooperatives.' }
  ]
};

export const MENU_ITEMS: MenuItem[] = [
  // Espresso Bar
  {
    id: 'double-shot-espresso',
    name: 'Single-Origin Double Espresso',
    category: 'Espresso Bar',
    description: 'Extracted at 9 bars on our custom Synesso MVP. Rotating single-origin micro-lot.',
    price: '$4.25',
    notes: 'Candied citrus, bergamot blossom, stone fruit',
    tags: ['House Specialty', 'Direct Trade'],
    origin: 'Konga Cooperative, Yirgacheffe, Ethiopia'
  },
  {
    id: 'cortado',
    name: 'Rustic Cortado (1:1 Ratio)',
    category: 'Espresso Bar',
    description: 'Equal parts dense double shot and velvety steamed whole milk in an amber Duralex tumbler.',
    price: '$4.75',
    notes: 'Brown butter, praline, melted milk chocolate',
    tags: ['House Specialty']
  },
  {
    id: 'cappuccino-flat-white',
    name: 'Velvet Flat White',
    category: 'Espresso Bar',
    description: 'Silky microfoam with zero stiff peaks poured over double espresso in handcrafted ceramic.',
    price: '$5.25',
    notes: 'Honeycomb, toffee sweetness, subtle lavender',
    tags: ['House Specialty']
  },
  {
    id: 'smoked-vanilla-latte',
    name: 'Hearth Smoked Vanilla Latte',
    category: 'Espresso Bar',
    description: 'House-made Madagascar vanilla bean syrup infused with charred applewood smoke.',
    price: '$6.50',
    notes: 'Charred vanilla, caramel crust, toasted marshmallow',
    tags: ['House Specialty']
  },
  {
    id: 'ceremonial-matcha-latte',
    name: 'Uji Ceremonial Matcha',
    category: 'Espresso Bar',
    description: 'First-harvest stone-ground tencha from Kyoto, whisked with steamed organic oat milk.',
    price: '$6.25',
    notes: 'Sweet umami, spring grass, white chocolate finish',
    tags: ['Vegan']
  },

  // Slow Filter
  {
    id: 'pourover-ethiopia',
    name: 'Hario V60 — Washed Ethiopian Heirloom',
    category: 'Slow Filter',
    description: 'Precision hand-poured single cup. Sparkling clarity with a tea-like delicate mouthfeel.',
    price: '$6.50',
    notes: 'Jasmine blossom, white peach, Meyer lemon',
    tags: ['House Specialty', 'Direct Trade'],
    origin: 'Gedeo Zone, 2,100m elevation'
  },
  {
    id: 'pourover-colombia-pink-bourbon',
    name: 'Kalita Wave — Colombian Pink Bourbon',
    category: 'Slow Filter',
    description: 'Rare Pink Bourbon varietal with extended anaerobic natural fermentation.',
    price: '$7.00',
    notes: 'Papaya, pink guava, cane sugar syrup',
    tags: ['Direct Trade'],
    origin: 'Huila, Finca El Paraíso'
  },
  {
    id: 'kyoto-cold-drip',
    name: '8-Hour Kyoto Slow Drip on Ice',
    category: 'Slow Filter',
    description: 'Gravity-extracted over 8 hours in vintage glass towers. Unmatched clean sweetness.',
    price: '$6.00',
    notes: 'Dark cacao nibs, dried figs, sweet bourbon finish',
    tags: ['House Specialty']
  },

  // Hearth Bakery
  {
    id: 'traditional-croissant',
    name: '81-Layer French Butter Croissant',
    category: 'Hearth Bakery',
    description: 'Laminated with 84% butterfat Normandy cultured butter, baked fresh every morning at 6:00 AM.',
    price: '$4.75',
    notes: 'Crisp golden exterior, airy honeycomb interior',
    tags: ['Vegetarian', 'House Specialty']
  },
  {
    id: 'pain-au-chocolat',
    name: 'Valrhona Pain au Chocolat',
    category: 'Hearth Bakery',
    description: 'Double batons of 70% dark Valrhona Guanaja chocolate enclosed in flaky laminated pastry.',
    price: '$5.50',
    notes: 'Bittersweet chocolate, deep butter flake',
    tags: ['Vegetarian']
  },
  {
    id: 'cardamom-morning-bun',
    name: 'Swedish Cardamom Sugar Bun',
    category: 'Hearth Bakery',
    description: 'Twisted enriched dough with freshly cracked green cardamom seeds and pearl sugar crystals.',
    price: '$5.00',
    notes: 'Warm botanical cardamom, caramelized base',
    tags: ['Vegetarian', 'House Specialty']
  },
  {
    id: 'seasonal-marionberry-tart',
    name: 'Almond Frangipane & Marionberry Galette',
    category: 'Hearth Bakery',
    description: 'Rustic rye crust filled with crushed almond frangipane and preserved Oregon marionberries.',
    price: '$6.25',
    notes: 'Tart wild blackberry, nutty marzipan, flaky rye',
    tags: ['Vegetarian']
  },

  // Savory & Plates
  {
    id: 'avocado-tartine',
    name: 'Heirloom Avocado on 36-Hr Sourdough',
    category: 'Savory & Plates',
    description: 'Thick toasted slice of country sourdough, crushed Hass avocado, pickled shallots, smoked sea salt, and cold-pressed olive oil.',
    price: '$12.50',
    notes: 'Creamy avocado, bright shallot tang, crunchy crust',
    tags: ['Vegan', 'House Specialty']
  },
  {
    id: 'smoked-salmon-toast',
    name: 'Wild Salmon Tartine on Caraway Rye',
    category: 'Savory & Plates',
    description: 'Smoked King salmon, whipped lemon dill labneh, caper berries, and shaved radishes on stone-ground rye.',
    price: '$15.00',
    notes: 'Rich alderwood smoke, crisp radish, herbaceous dill'
  },
  {
    id: 'daily-quiche',
    name: 'Wild Mushroom & Gruyère Hearth Quiche',
    category: 'Savory & Plates',
    description: 'Flaky all-butter crust filled with chanterelle mushrooms, caramelized leeks, cave-aged Gruyère, and pasture-raised eggs.',
    price: '$11.50',
    notes: 'Earthy chanterelles, velvety savory custard',
    tags: ['Vegetarian']
  }
];

export interface QuizQuestion {
  question: string;
  subtitle: string;
  options: {
    label: string;
    description: string;
    points: { fruitAndFloral: number; richAndChocolate: number; balancedAndPastry: number };
  }[];
}

export const COFFEE_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question: 'How do you prefer to brew your morning cup?',
    subtitle: 'Select the ritual that aligns with your daily rhythm.',
    options: [
      {
        label: 'Pour-Over or Filter (V60, Kalita, Chemex)',
        description: 'I love clean, delicate flavors and tasting every subtle fruit note.',
        points: { fruitAndFloral: 3, richAndChocolate: 0, balancedAndPastry: 1 }
      },
      {
        label: 'Espresso or Moka Pot',
        description: 'I crave syrupy density, rich crema, and concentrated intensity.',
        points: { fruitAndFloral: 1, richAndChocolate: 3, balancedAndPastry: 1 }
      },
      {
        label: 'French Press or Cold Brew',
        description: 'Give me deep body, low acidity, and comforting chocolate tones.',
        points: { fruitAndFloral: 0, richAndChocolate: 3, balancedAndPastry: 2 }
      },
      {
        label: 'A warm mug alongside a fresh pastry',
        description: 'Comfort, balance, and harmony with baked goods are my priority.',
        points: { fruitAndFloral: 1, richAndChocolate: 1, balancedAndPastry: 3 }
      }
    ]
  },
  {
    question: 'What flavor notes ignite your senses?',
    subtitle: 'Pick the aromatic profile that makes your morning brighter.',
    options: [
      {
        label: 'Jasmine, White Peach & Meyer Lemon',
        description: 'Crisp, sparkling, elegant, and tea-like.',
        points: { fruitAndFloral: 4, richAndChocolate: 0, balancedAndPastry: 0 }
      },
      {
        label: 'Dark Cacao Nibs, Praline & Brown Butter',
        description: 'Decadent, rich, comforting, and sweet.',
        points: { fruitAndFloral: 0, richAndChocolate: 4, balancedAndPastry: 1 }
      },
      {
        label: 'Baked Apple, Cardamom & Toffee',
        description: 'Warm, soothing, spiced, and harmonious.',
        points: { fruitAndFloral: 1, richAndChocolate: 1, balancedAndPastry: 4 }
      }
    ]
  },
  {
    question: 'How do you take your coffee?',
    subtitle: 'Pure origin clarity or blended with silky microfoam?',
    options: [
      {
        label: 'Always Black',
        description: 'I want unadulterated terroir and pure cup clarity.',
        points: { fruitAndFloral: 3, richAndChocolate: 1, balancedAndPastry: 0 }
      },
      {
        label: 'With Steamed Whole or Oat Milk',
        description: 'I love microfoam texture, lattes, cortados, and cappuccinos.',
        points: { fruitAndFloral: 0, richAndChocolate: 3, balancedAndPastry: 3 }
      },
      {
        label: 'Over Crystal Ice',
        description: 'Refreshing, chilled, slow-dripped, and crisp.',
        points: { fruitAndFloral: 2, richAndChocolate: 2, balancedAndPastry: 1 }
      }
    ]
  }
];
