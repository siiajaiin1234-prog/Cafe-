import React, { useState } from 'react';
import { Menu, X, Sparkles, BookOpen } from 'lucide-react';

interface NavbarProps {
  onOpenQuiz: () => void;
  onOpenReservation: () => void;
  onNavigateSection: (sectionId: string) => void;
  bookmarkedCount: number;
  onViewBookmarks: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenQuiz,
  onOpenReservation,
  onNavigateSection,
  bookmarkedCount,
  onViewBookmarks,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigateSection(id);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strict 3-Zone Contract: Brand — 4-6 Nav Links — 1-2 Actions */}
        <div className="flex items-center justify-between h-20">
          
          {/* Zone 1: Single text element Brand wordmark in editorial display face */}
          <button
            onClick={() => handleNavClick('hero')}
            className="text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-800 rounded"
          >
            <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900 group-hover:text-amber-900 transition-colors">
              Verdant Hearth
            </span>
          </button>

          {/* Zone 2: 4-6 clean text navigation links with subtle hover underlines */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
            <button
              onClick={() => handleNavClick('journal')}
              className="hover:text-stone-950 transition-colors cursor-pointer relative py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-stone-400"
            >
              The Journal
              {bookmarkedCount > 0 && (
                <span className="ml-1.5 text-xs text-amber-800 font-normal">
                  ({bookmarkedCount} saved)
                </span>
              )}
            </button>
            <button
              onClick={() => handleNavClick('menu')}
              className="hover:text-stone-950 transition-colors cursor-pointer py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-stone-400"
            >
              Menu &amp; Bakery
            </button>
            <button
              onClick={() => handleNavClick('philosophy')}
              className="hover:text-stone-950 transition-colors cursor-pointer py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-stone-400"
            >
              Our Craft
            </button>
            <button
              onClick={() => handleNavClick('hours')}
              className="hover:text-stone-950 transition-colors cursor-pointer py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-stone-400"
            >
              Visit &amp; Hours
            </button>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenQuiz}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-stone-700 hover:text-stone-950 bg-stone-100 hover:bg-stone-200/70 rounded-md transition-colors whitespace-nowrap cursor-pointer"
              title="Find your personalized coffee match"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Taste Quiz</span>
            </button>
            <button
              onClick={onOpenReservation}
              className="px-4 py-2 text-xs font-medium text-white bg-stone-900 hover:bg-stone-800 rounded-md shadow-xs transition-colors whitespace-nowrap cursor-pointer"
            >
              Reserve Table
            </button>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-stone-950 hover:bg-stone-100 rounded-md transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-[#FBF9F5] px-6 py-6 space-y-4 animate-in slide-in-from-top duration-150">
          <div className="flex flex-col space-y-3 text-base font-medium text-stone-700">
            <button
              onClick={() => handleNavClick('journal')}
              className="text-left py-1 hover:text-stone-950 flex items-center justify-between"
            >
              <span>The Journal (10 Articles)</span>
              {bookmarkedCount > 0 && (
                <span className="text-xs text-amber-800 bg-amber-50 px-2 py-0.5 rounded">
                  {bookmarkedCount} saved
                </span>
              )}
            </button>
            <button
              onClick={() => handleNavClick('menu')}
              className="text-left py-1 hover:text-stone-950"
            >
              Menu &amp; Bakery
            </button>
            <button
              onClick={() => handleNavClick('philosophy')}
              className="text-left py-1 hover:text-stone-950"
            >
              Our Craft &amp; Roastery
            </button>
            <button
              onClick={() => handleNavClick('hours')}
              className="text-left py-1 hover:text-stone-950"
            >
              Visit &amp; Hours
            </button>
          </div>

          <div className="pt-4 border-t border-stone-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuiz();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-stone-800 bg-stone-100 rounded-md"
            >
              <Sparkles className="w-4 h-4 text-amber-700" />
              <span>Brew &amp; Taste Finder</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full px-4 py-2.5 text-sm font-medium text-white bg-stone-900 rounded-md"
            >
              Reserve Table or Order Ahead
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
