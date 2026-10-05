import React, { useState, useEffect } from 'react';
import { ARTICLES, Article } from './data/articlesData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BlogSection } from './components/BlogSection';
import { ArticleModal } from './components/ArticleModal';
import { MenuSection } from './components/MenuSection';
import { CraftPhilosophySection } from './components/CraftPhilosophySection';
import { VisitSection } from './components/VisitSection';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';
import { CoffeeQuizModal } from './components/CoffeeQuizModal';
import { ReservationModal } from './components/ReservationModal';

export default function App() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('verdant_hearth_bookmarks');
      return saved ? JSON.parse(saved) : ['anatomy-of-a-perfect-pour-over'];
    } catch {
      return ['anatomy-of-a-perfect-pour-over'];
    }
  });

  // Save bookmarks to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('verdant_hearth_bookmarks', JSON.stringify(bookmarkedIds));
    } catch (e) {
      console.warn('Unable to persist bookmarks to localStorage', e);
    }
  }, [bookmarkedIds]);

  const handleToggleBookmark = (id: string) => {
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectArticleById = (id: string) => {
    const found = ARTICLES.find((a) => a.id === id);
    if (found) {
      setSelectedArticle(found);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-stone-900 flex flex-col selection:bg-amber-100 selection:text-amber-900">
      
      {/* 3-Zone Top Navigation */}
      <Navbar
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenReservation={() => setIsReservationOpen(true)}
        onNavigateSection={scrollToSection}
        bookmarkedCount={bookmarkedIds.length}
        onViewBookmarks={() => scrollToSection('journal')}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onExploreJournal={() => scrollToSection('journal')}
          onExploreMenu={() => scrollToSection('menu')}
          onOpenQuiz={() => setIsQuizOpen(true)}
        />

        {/* The Blog with all 10 Articles */}
        <BlogSection
          articles={ARTICLES}
          bookmarkedIds={bookmarkedIds}
          onToggleBookmark={handleToggleBookmark}
          onSelectArticle={setSelectedArticle}
        />

        {/* Artisanal Cafe & Bakery Menu */}
        <MenuSection
          onOpenReservation={() => setIsReservationOpen(true)}
          onOpenQuiz={() => setIsQuizOpen(true)}
        />

        {/* Craft & Roastery Philosophy (with links to specific essays) */}
        <CraftPhilosophySection
          onSelectArticleById={handleSelectArticleById}
        />

        {/* Visiting, Hours & Location */}
        <VisitSection
          onOpenReservation={() => setIsReservationOpen(true)}
        />

        {/* Newsletter Dispatches */}
        <NewsletterSection />
      </main>

      {/* Footer */}
      <Footer
        onNavigateSection={scrollToSection}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Reader Modal for Articles */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onSelectArticle={setSelectedArticle}
        bookmarkedIds={bookmarkedIds}
        onToggleBookmark={handleToggleBookmark}
      />

      {/* Interactive Coffee Taste Selector Quiz */}
      <CoffeeQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onSelectArticleById={handleSelectArticleById}
        onNavigateToMenu={() => scrollToSection('menu')}
      />

      {/* Table Reservation & Bakery Pre-Order Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

    </div>
  );
}
