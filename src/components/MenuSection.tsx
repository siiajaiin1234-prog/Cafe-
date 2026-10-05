import React, { useState } from 'react';
import { MENU_ITEMS, MenuItem } from '../data/cafeData';
import { Coffee, Wheat, Flame, Utensils, Sparkles } from 'lucide-react';

interface MenuSectionProps {
  onOpenReservation: () => void;
  onOpenQuiz: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onOpenReservation,
  onOpenQuiz,
}) => {
  const categories: MenuItem['category'][] = [
    'Espresso Bar',
    'Slow Filter',
    'Hearth Bakery',
    'Savory & Plates',
  ];

  const [activeCategory, setActiveCategory] = useState<MenuItem['category']>('Espresso Bar');

  const filteredItems = MENU_ITEMS.filter((item) => item.category === activeCategory);

  const getCategoryIcon = (cat: MenuItem['category']) => {
    switch (cat) {
      case 'Espresso Bar':
        return <Flame className="w-4 h-4 text-amber-700" />;
      case 'Slow Filter':
        return <Coffee className="w-4 h-4 text-amber-700" />;
      case 'Hearth Bakery':
        return <Wheat className="w-4 h-4 text-amber-700" />;
      case 'Savory & Plates':
        return <Utensils className="w-4 h-4 text-amber-700" />;
    }
  };

  return (
    <section id="menu" className="py-16 md:py-24 bg-[#FBF9F5] border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-stone-200">
          <div>
            <p className="text-xs uppercase tracking-widest text-amber-900 font-medium">
              Daily Offerings &amp; Provisions
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-900 font-normal mt-1 tracking-tight">
              The Hearth Menu &amp; Bakery
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-xl">
              Single-origin coffees roasted weekly on our 15kg Giesen drum, paired with 36-hour wild fermented sourdough breads and fresh morning viennoiserie.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenQuiz}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-md transition-colors cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-800" />
              <span>Not sure what to order?</span>
            </button>
            <button
              onClick={onOpenReservation}
              className="px-4 py-2 text-xs font-medium text-white bg-stone-900 hover:bg-stone-800 rounded-md transition-colors cursor-pointer"
            >
              Order Ahead
            </button>
          </div>
        </div>

        {/* Category Segmented Tabs */}
        <div className="py-6 flex items-center gap-2 overflow-x-auto scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                activeCategory === cat
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-950 hover:bg-stone-200/60'
              }`}
            >
              {getCategoryIcon(cat)}
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* Menu Grid (Lead with typography & price baseline) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="p-6 bg-white border border-stone-200/80 rounded-xl hover:border-stone-300 transition-colors shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-baseline justify-between gap-4 border-b border-stone-100 pb-2 mb-3">
                  <h3 className="font-serif text-lg text-stone-950 font-normal">
                    {item.name}
                  </h3>
                  <span className="font-mono text-sm font-semibold text-stone-900 tabular-nums shrink-0">
                    {item.price}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {item.description}
                </p>

                {item.notes && (
                  <div className="mt-3 text-xs text-amber-950/80 italic font-serif">
                    Flavor notes: {item.notes}
                  </div>
                )}
              </div>

              {/* Tags & origin info */}
              <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                <div className="flex items-center gap-2">
                  {item.origin && (
                    <span>Origin: <strong className="font-medium text-stone-700">{item.origin}</strong></span>
                  )}
                </div>

                <div className="flex items-center gap-1.5">
                  {item.tags?.map((t) => (
                    <span key={t} className="text-stone-600 bg-stone-100 px-2 py-0.5 rounded text-[10px] font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bakery Morning Batch Note */}
        <div className="mt-10 p-4 bg-amber-50/70 border border-amber-200/60 rounded-lg text-xs text-amber-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p>
            <strong>Bakery Freshness Guarantee:</strong> Our morning viennoiserie and country sourdough batards leave the stone deck oven between 6:00 AM and 7:15 AM daily. Limited afternoon batches baked on weekends.
          </p>
          <button
            onClick={onOpenReservation}
            className="text-xs font-semibold text-amber-900 hover:text-amber-950 underline whitespace-nowrap cursor-pointer"
          >
            Pre-order bread &amp; pastries &rarr;
          </button>
        </div>

      </div>
    </section>
  );
};
