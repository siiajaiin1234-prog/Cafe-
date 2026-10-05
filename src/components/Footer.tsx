import React from 'react';
import { ArrowUp, Coffee, MapPin } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateSection,
  onOpenReservation,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#181615] text-stone-300 border-t border-stone-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="font-serif text-2xl text-white font-medium">
              Verdant Hearth
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              An independent neighborhood micro-roastery, 36-hour sourdough bakehouse, and slow coffee bar in Portland, Oregon.
            </p>
            <div className="text-xs text-stone-400 pt-2 space-y-1">
              <p>{CAFE_INFO.address}</p>
              <p>{CAFE_INFO.phone}</p>
            </div>
          </div>

          {/* Nav links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-stone-400 font-semibold">
              Sanctuary
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => onNavigateSection('journal')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  The Journal (10 Essays)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('menu')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Daily Menu &amp; Bakery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('philosophy')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Our Roasting Craft
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('hours')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Hours &amp; Location
                </button>
              </li>
            </ul>
          </div>

          {/* Journal Topics */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-stone-400 font-semibold">
              Journal Topics
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>Brewing Craft &amp; Pour-Overs</li>
              <li>Ethiopian &amp; Colombian Terroir</li>
              <li>Slow Sourdough Microbiology</li>
              <li>Viennoiserie &amp; 81-Layer Lamination</li>
              <li>Barista Science &amp; Microfoam Physics</li>
            </ul>
          </div>

          {/* Hours & Actions */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-stone-400 font-semibold">
              Daily Service
            </h4>
            <div className="text-xs text-stone-400 space-y-1">
              <p>Mon – Fri: 6:30 AM – 5:00 PM</p>
              <p>Sat – Sun: 7:00 AM – 6:00 PM</p>
            </div>
            <div className="pt-3">
              <button
                onClick={onOpenReservation}
                className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-white rounded text-xs font-medium transition-colors cursor-pointer"
              >
                Table &amp; Bread Reservations
              </button>
            </div>
          </div>

        </div>

        {/* Quiet copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Verdant Hearth Café &amp; Bakehouse. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Direct Farm Sourcing</span>
            <span>Regenerative Grains</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-stone-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
