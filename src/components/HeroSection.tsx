import React from 'react';
import { ArrowRight, Clock, MapPin, Coffee, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onExploreJournal: () => void;
  onExploreMenu: () => void;
  onOpenQuiz: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreJournal,
  onExploreMenu,
  onOpenQuiz,
}) => {
  // Compute open/closed status cleanly based on local hour
  const now = new Date();
  const currentHour = now.getHours() + now.getMinutes() / 60;
  const isWeekend = now.getDay() === 0 || now.getDay() === 6;
  const openTime = isWeekend ? 7.0 : 6.5;
  const closeTime = isWeekend ? 18.0 : 17.0;
  const isOpen = currentHour >= openTime && currentHour < closeTime;

  return (
    <section id="hero" className="relative pt-6 pb-16 md:pt-10 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Operational high-contrast utility ribbon */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-600 border-b border-stone-200/90 pb-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 font-medium text-stone-800">
              <span
                className={`w-2 h-2 rounded-full ${isOpen ? 'bg-emerald-600 animate-pulse' : 'bg-stone-400'}`}
                aria-hidden="true"
              />
              {isOpen ? 'Open Now' : 'Closed for the Evening'}
            </span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>{isWeekend ? 'Sat–Sun 7:00 AM – 6:00 PM' : 'Mon–Fri 6:30 AM – 5:00 PM'}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-stone-400" />
              <span>Pearl District, Portland, OR</span>
            </span>
            <span aria-hidden="true" className="text-stone-300 hidden sm:inline">·</span>
            <span className="hidden sm:inline text-stone-500">Heirloom Roasts &amp; Stone Hearth</span>
          </div>
        </div>

        {/* Hero Main Grid: Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Prose */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-widest text-amber-900 font-medium">
                Artisanal Micro-Roastery &amp; Sourdough Hearth
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-stone-950 font-normal leading-[1.08] tracking-tight text-balance">
                Where single-origin coffee meets the patient ritual of wild fermentation.
              </h1>
            </div>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl">
              Every morning in Portland’s Pearl District, our cast-iron drum roaster turns high-altitude Ethiopian lots while our bakers peel 36-hour sourdough batards and laminated viennoiserie from the stone hearth.
            </p>

            {/* Direct CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreJournal}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-white bg-stone-900 hover:bg-stone-800 rounded-md transition-colors shadow-xs cursor-pointer group"
              >
                <span>Read The Coffee Journal</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onExploreMenu}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-stone-800 bg-white hover:bg-stone-50 border border-stone-300/80 rounded-md transition-colors cursor-pointer"
              >
                <Coffee className="w-4 h-4 text-stone-500" />
                <span>Seasonal Menu</span>
              </button>
            </div>

            {/* Adjacency Proof: 3 key quantitative facts */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-stone-200/80">
              <div>
                <div className="font-serif text-2xl sm:text-3xl text-stone-900 font-medium tabular-nums">
                  36<span className="text-lg font-sans font-normal text-stone-500">hr</span>
                </div>
                <div className="text-xs text-stone-500 mt-0.5">Cold Sourdough Ferment</div>
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl text-stone-900 font-medium tabular-nums">
                  93<span className="text-lg font-sans font-normal text-stone-500">°C</span>
                </div>
                <div className="text-xs text-stone-500 mt-0.5">Pour-Over Extraction</div>
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl text-stone-900 font-medium tabular-nums">
                  10<span className="text-lg font-sans font-normal text-stone-500"></span>
                </div>
                <div className="text-xs text-stone-500 mt-0.5">In-Depth Journal Essays</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-6">
            <div className="relative rounded-xl overflow-hidden shadow-xl bg-stone-100 border border-stone-200/60 aspect-[16/10] sm:aspect-[16/10] group">
              <img
                src="/src/assets/images/hero_cafe_interior_1791170306974.jpg"
                alt="Verdant Hearth sunlit interior with blonde oak counter, espresso machine, and morning light"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                loading="eager"
              />
              {/* Measured contrast scrim at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

              {/* In-photo caption */}
              <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between text-xs">
                <div>
                  <p className="font-medium tracking-wide">The Hearth Bar &amp; Roastery Floor</p>
                  <p className="text-stone-300 text-[11px]">418 Millstone Lane · Portland, Oregon</p>
                </div>
                <button
                  onClick={onOpenQuiz}
                  className="px-3 py-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded text-xs font-medium transition-colors cursor-pointer pointer-events-auto"
                >
                  Brew Matcher
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
