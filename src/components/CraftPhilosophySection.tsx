import React from 'react';
import { ArrowRight, Flame, Wheat, Droplets, HeartHandshake } from 'lucide-react';
import { Article } from '../data/articlesData';

interface CraftPhilosophyProps {
  onSelectArticleById: (id: string) => void;
}

export const CraftPhilosophySection: React.FC<CraftPhilosophyProps> = ({
  onSelectArticleById,
}) => {
  const pillars = [
    {
      icon: <Wheat className="w-5 h-5 text-amber-800" />,
      title: '36-Hour Sourdough Hearth',
      desc: 'We never use commercial baker’s yeast. Agatha, our wild mother starter, slowly leavens stone-ground Pacific Northwest grains over a two-day cold retardation for deep lactic sweetness and gut ease.',
      articleId: 'art-of-slow-sourdough-fermentation',
      articleTitle: 'Why Our Sourdough Takes 36 Hours',
    },
    {
      icon: <Flame className="w-5 h-5 text-amber-800" />,
      title: 'In-House Micro-Roasting',
      desc: 'Our cast-iron 15kg Giesen drum roaster operates in view of the cafe seating area. We roast lightly to honor origin terroir, emphasizing jasmine florals and crisp stone fruit over smoky char.',
      articleId: 'decoding-roasting-profiles-light-to-dark',
      articleTitle: 'Inside the Drum: Roasting Profiles',
    },
    {
      icon: <Droplets className="w-5 h-5 text-amber-800" />,
      title: 'Precision Mineral Kinetics',
      desc: 'Coffee is 98.6% water. We re-mineralize purified water to exactly 125ppm TDS with a 2:1 magnesium-to-calcium ratio, unlocking aromatic esters that tap water hopelessly dampens.',
      articleId: 'anatomy-of-a-perfect-pour-over',
      articleTitle: 'The Anatomy of a Pour-Over',
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-amber-800" />,
      title: 'Direct Farm Alliances',
      desc: 'We purchase our micro-lots directly from smallholder washing stations in Yirgacheffe, Nariño, and Antigua, returning 185% above Fair Trade minimums straight to the agricultural communities.',
      articleId: 'crop-to-cup-ethiopian-yirgacheffe',
      articleTitle: 'Crop to Cup: Ethiopian Heirloom',
    },
  ];

  return (
    <section id="philosophy" className="py-16 md:py-24 bg-[#FAF7F2] border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-widest text-amber-900 font-medium">
            Our Craft &amp; Dedication
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-900 font-normal mt-1 tracking-tight">
            Nothing rushed. Everything with intention.
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
            In an era of instant gratification, Verdant Hearth operates as an intentional counterweight: honoring botanical farmers, wild microbes, and the ancient art of the warm stone hearth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border border-stone-200/80 rounded-xl flex flex-col justify-between hover:border-stone-300 transition-colors shadow-xs"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center mb-4">
                  {pillar.icon}
                </div>
                <h3 className="font-serif text-lg text-stone-950 font-medium mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-stone-100">
                <button
                  onClick={() => onSelectArticleById(pillar.articleId)}
                  className="text-xs font-medium text-amber-900 hover:text-amber-950 inline-flex items-center gap-1 group cursor-pointer"
                >
                  <span>Read: {pillar.articleTitle}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
