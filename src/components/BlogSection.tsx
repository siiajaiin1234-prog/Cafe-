import React, { useState, useMemo } from 'react';
import { Search, Bookmark, BookmarkCheck, ArrowRight, BookOpen, Clock, Sparkles } from 'lucide-react';
import { Article, CATEGORIES } from '../data/articlesData';

interface BlogSectionProps {
  articles: Article[];
  bookmarkedIds: string[];
  onToggleBookmark: (id: string) => void;
  onSelectArticle: (article: Article) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  articles,
  bookmarkedIds,
  onToggleBookmark,
  onSelectArticle,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Articles');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlySaved, setOnlySaved] = useState(false);

  // Filter articles based on category, search query, and bookmark status
  const filteredArticles = useMemo(() => {
    return articles.filter((art) => {
      const matchesCategory =
        selectedCategory === 'All Articles' || art.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.deck.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        art.author.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesSaved = onlySaved ? bookmarkedIds.includes(art.id) : true;
      return matchesCategory && matchesSearch && matchesSaved;
    });
  }, [articles, selectedCategory, searchQuery, onlySaved, bookmarkedIds]);

  // Lead story is the first item if no search active, or first filtered item
  const leadArticle = filteredArticles[0];
  const secondaryArticles = filteredArticles.slice(1, 4);
  const remainingArticles = filteredArticles.slice(4);

  return (
    <section id="journal" className="py-16 md:py-24 border-t border-stone-200/80 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-stone-200">
          <div>
            <p className="text-xs uppercase tracking-widest text-amber-900 font-medium">
              The Hearth Journal · Volume IV
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-900 font-normal mt-1 tracking-tight">
              Essays, Sourdough Science &amp; Coffee Origin Notes
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-2xl">
              Ten in-depth dispatches from our baristas and bakers covering micro-lot provenance, water mineral kinetics, sourdough microbiology, and the architecture of quiet cafes.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto shrink-0">
            <button
              onClick={() => setOnlySaved(!onlySaved)}
              className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-md transition-colors border cursor-pointer ${
                onlySaved
                  ? 'bg-amber-900 text-white border-amber-900'
                  : 'bg-white text-stone-700 border-stone-300 hover:border-stone-400'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>Saved Articles ({bookmarkedIds.length})</span>
            </button>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="py-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Functional category tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-950 hover:bg-stone-200/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search 10 articles, origins, methods..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-900/30 focus:border-amber-900 text-stone-900 placeholder:text-stone-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* Empty state if search or filter yielded zero results */}
        {filteredArticles.length === 0 && (
          <div className="py-16 text-center bg-white rounded-lg border border-dashed border-stone-300 my-6">
            <p className="font-serif text-xl text-stone-700">No journal articles found</p>
            <p className="text-xs text-stone-500 mt-1">Try adjusting your category filter or search query.</p>
            <button
              onClick={() => {
                setSelectedCategory('All Articles');
                setSearchQuery('');
                setOnlySaved(false);
              }}
              className="mt-4 px-4 py-2 text-xs font-medium text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-md cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Tier 1: Lead Story Presentation */}
        {leadArticle && (
          <div className="mb-12">
            <div className="group relative bg-white border border-stone-200/90 rounded-xl overflow-hidden hover:border-stone-300 transition-all shadow-xs grid grid-cols-1 lg:grid-cols-12">
              
              {/* Image side */}
              <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-stone-100">
                <img
                  src={leadArticle.coverImage}
                  alt={leadArticle.imageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-stone-900/80 backdrop-blur-xs text-white text-[11px] font-medium tracking-wider uppercase px-2.5 py-1 rounded">
                    Featured Lead Essay
                  </span>
                </div>
              </div>

              {/* Text side */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  {/* Clean unboxed metadata with dot separators */}
                  <div className="flex items-center gap-2 text-xs text-stone-500 mb-3">
                    <span className="font-medium text-amber-900">{leadArticle.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{leadArticle.publishedDate}</span>
                    <span aria-hidden="true">·</span>
                    <span>{leadArticle.readTime}</span>
                  </div>

                  <h3
                    onClick={() => onSelectArticle(leadArticle)}
                    className="font-serif text-2xl sm:text-3xl text-stone-950 font-normal leading-snug hover:text-amber-900 transition-colors cursor-pointer text-balance"
                  >
                    {leadArticle.title}
                  </h3>

                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed mt-4">
                    {leadArticle.deck}
                  </p>

                  {/* Figure caption quote */}
                  <blockquote className="mt-4 pl-3 border-l-2 border-amber-800/40 text-xs italic text-stone-500 font-serif">
                    "{leadArticle.leadQuote}"
                  </blockquote>
                </div>

                <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-semibold">
                      {leadArticle.author.avatarInitials}
                    </div>
                    <div>
                      <p className="text-xs font-medium text-stone-800">{leadArticle.author.name}</p>
                      <p className="text-[11px] text-stone-500">{leadArticle.author.role}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleBookmark(leadArticle.id);
                      }}
                      className="p-2 text-stone-400 hover:text-stone-800 rounded-md hover:bg-stone-50 transition-colors"
                      title={bookmarkedIds.includes(leadArticle.id) ? 'Remove bookmark' : 'Bookmark article'}
                    >
                      {bookmarkedIds.includes(leadArticle.id) ? (
                        <BookmarkCheck className="w-4 h-4 text-amber-800" />
                      ) : (
                        <Bookmark className="w-4 h-4" />
                      )}
                    </button>

                    <button
                      onClick={() => onSelectArticle(leadArticle)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-md transition-colors cursor-pointer"
                    >
                      <span>Read Essay</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* Tier 2: Secondary Feature Articles Grid (3 Columns) */}
        {secondaryArticles.length > 0 && (
          <div className="mb-12">
            <h4 className="text-xs uppercase tracking-widest text-stone-500 font-medium mb-4">
              Highlighted Dispatches
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {secondaryArticles.map((article) => {
                const isBookmarked = bookmarkedIds.includes(article.id);
                return (
                  <article
                    key={article.id}
                    className="group bg-white border border-stone-200/80 rounded-xl overflow-hidden flex flex-col justify-between hover:shadow-md hover:border-stone-300 transition-all"
                  >
                    <div>
                      {/* Image frame */}
                      <div
                        onClick={() => onSelectArticle(article)}
                        className="relative aspect-[4/3] overflow-hidden bg-stone-100 cursor-pointer"
                      >
                        <img
                          src={article.coverImage}
                          alt={article.imageAlt}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-5 sm:p-6">
                        {/* Clean unboxed metadata */}
                        <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-2">
                          <span className="text-amber-900 font-medium">{article.category}</span>
                          <span aria-hidden="true">·</span>
                          <span>{article.readTime}</span>
                        </div>

                        <h3
                          onClick={() => onSelectArticle(article)}
                          className="font-serif text-xl text-stone-950 font-normal leading-snug group-hover:text-amber-900 transition-colors cursor-pointer line-clamp-2 text-balance"
                        >
                          {article.title}
                        </h3>

                        <p className="text-stone-600 text-xs sm:text-sm line-clamp-3 mt-2.5 leading-relaxed">
                          {article.deck}
                        </p>
                      </div>
                    </div>

                    <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                      <span className="text-stone-500 font-sans">{article.author.name}</span>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onToggleBookmark(article.id)}
                          className="p-1.5 text-stone-400 hover:text-stone-800 rounded transition-colors"
                          title={isBookmarked ? 'Remove bookmark' : 'Bookmark'}
                        >
                          {isBookmarked ? (
                            <BookmarkCheck className="w-4 h-4 text-amber-800" />
                          ) : (
                            <Bookmark className="w-4 h-4" />
                          )}
                        </button>
                        <button
                          onClick={() => onSelectArticle(article)}
                          className="font-medium text-stone-900 hover:text-amber-900 inline-flex items-center gap-1 cursor-pointer"
                        >
                          Read <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        )}

        {/* Tier 3: Remaining Articles Grid / Broadsheet Archive */}
        {remainingArticles.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-4 border-b border-stone-200 pb-2">
              <h4 className="text-xs uppercase tracking-widest text-stone-500 font-medium">
                The Roastery Archive ({remainingArticles.length} additional essays)
              </h4>
              <span className="text-xs text-stone-400">All 10 articles written in full</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {remainingArticles.map((article) => {
                const isBookmarked = bookmarkedIds.includes(article.id);
                return (
                  <article
                    key={article.id}
                    className="group bg-white border border-stone-200/80 rounded-lg p-5 flex flex-col justify-between hover:border-stone-300 hover:shadow-xs transition-all"
                  >
                    <div>
                      <div className="aspect-[16/9] rounded-md overflow-hidden bg-stone-100 mb-3 cursor-pointer" onClick={() => onSelectArticle(article)}>
                        <img
                          src={article.coverImage}
                          alt={article.imageAlt}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Clean unboxed metadata */}
                      <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1.5">
                        <span className="text-amber-900 font-medium">{article.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{article.readTime}</span>
                      </div>

                      <h3
                        onClick={() => onSelectArticle(article)}
                        className="font-serif text-lg text-stone-950 font-normal leading-snug group-hover:text-amber-900 transition-colors cursor-pointer line-clamp-2 text-balance"
                      >
                        {article.title}
                      </h3>

                      <p className="text-xs text-stone-600 line-clamp-2 mt-2 leading-relaxed">
                        {article.deck}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                      <span className="text-stone-500">{article.publishedDate}</span>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onToggleBookmark(article.id)}
                          className="p-1 text-stone-400 hover:text-stone-800 rounded transition-colors"
                        >
                          {isBookmarked ? (
                            <BookmarkCheck className="w-3.5 h-3.5 text-amber-800" />
                          ) : (
                            <Bookmark className="w-3.5 h-3.5" />
                          )}
                        </button>
                        <button
                          onClick={() => onSelectArticle(article)}
                          className="font-medium text-stone-900 hover:text-amber-900 inline-flex items-center gap-1 cursor-pointer"
                        >
                          Read <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
