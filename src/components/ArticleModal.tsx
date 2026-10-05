import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Bookmark,
  BookmarkCheck,
  Share2,
  Clock,
  ArrowLeft,
  ArrowRight,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Check,
  CheckCircle2,
  Coffee
} from 'lucide-react';
import { Article, ARTICLES } from '../data/articlesData';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
  onSelectArticle: (article: Article) => void;
  bookmarkedIds: string[];
  onToggleBookmark: (id: string) => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onSelectArticle,
  bookmarkedIds,
  onToggleBookmark,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const [audioSpeed, setAudioSpeed] = useState<1 | 1.25 | 1.5>(1);

  const containerRef = useRef<HTMLDivElement>(null);
  const audioIntervalRef = useRef<number | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Lock body scroll while reading modal is open
  useEffect(() => {
    if (article) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
      if (audioIntervalRef.current) clearInterval(audioIntervalRef.current);
    };
  }, [article]);

  // Audio simulation ticker
  useEffect(() => {
    if (isPlayingAudio) {
      audioIntervalRef.current = window.setInterval(() => {
        setAudioProgress((prev) => {
          if (prev >= 100) {
            setIsPlayingAudio(false);
            return 0;
          }
          return prev + 0.5 * audioSpeed;
        });
      }, 200);
    } else {
      if (audioIntervalRef.current) clearInterval(audioIntervalRef.current);
    }
    return () => {
      if (audioIntervalRef.current) clearInterval(audioIntervalRef.current);
    };
  }, [isPlayingAudio, audioSpeed]);

  // Reset audio & scroll when article changes
  useEffect(() => {
    setIsPlayingAudio(false);
    setAudioProgress(0);
    setScrollProgress(0);
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [article?.id]);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    const total = scrollHeight - clientHeight;
    if (total > 0) {
      setScrollProgress((scrollTop / total) * 100);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  if (!article) return null;

  const isBookmarked = bookmarkedIds.includes(article.id);
  const currentIndex = ARTICLES.findIndex((a) => a.id === article.id);
  const prevArticle = currentIndex > 0 ? ARTICLES[currentIndex - 1] : null;
  const nextArticle = currentIndex < ARTICLES.length - 1 ? ARTICLES[currentIndex + 1] : null;

  // Other articles in the same or adjacent category
  const relatedArticles = ARTICLES.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/75 backdrop-blur-sm p-0 sm:p-4 md:p-6 animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="bg-[#FAF7F2] w-full h-full sm:h-[94vh] sm:max-w-4xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-stone-300">
        
        {/* Top Reading Progress Bar */}
        <div className="w-full bg-stone-200 h-1">
          <div
            className="bg-amber-800 h-1 transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Modal Header Bar */}
        <div className="px-6 py-4 border-b border-stone-200 bg-[#FBF9F5] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 text-xs text-stone-500">
            <span className="font-medium text-amber-900">{article.category}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleBookmark(article.id)}
              className="p-2 text-stone-600 hover:text-stone-950 hover:bg-stone-100 rounded-md transition-colors"
              title={isBookmarked ? 'Remove bookmark' : 'Bookmark this essay'}
            >
              {isBookmarked ? (
                <BookmarkCheck className="w-4 h-4 text-amber-800" />
              ) : (
                <Bookmark className="w-4 h-4" />
              )}
            </button>

            <button
              onClick={handleCopyLink}
              className="p-2 text-stone-600 hover:text-stone-950 hover:bg-stone-100 rounded-md transition-colors relative"
              title="Copy essay link"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>

            <button
              onClick={onClose}
              className="p-2 text-stone-600 hover:text-stone-950 hover:bg-stone-100 rounded-md transition-colors ml-1"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto px-6 sm:px-12 md:px-16 py-8 sm:py-12"
        >
          <div className="max-w-2xl mx-auto">
            
            {/* Title & Deck */}
            <div className="space-y-4 mb-8">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-950 font-normal leading-[1.12] text-balance">
                {article.title}
              </h1>

              <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-sans">
                {article.deck}
              </p>

              {/* Author byline */}
              <div className="flex items-center justify-between pt-4 border-t border-stone-200 text-xs text-stone-500">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-amber-100 text-amber-900 font-semibold flex items-center justify-center text-xs">
                    {article.author.avatarInitials}
                  </div>
                  <div>
                    <p className="font-medium text-stone-900">{article.author.name}</p>
                    <p className="text-[11px] text-stone-500">{article.author.role}</p>
                  </div>
                </div>
                <span>{article.publishedDate}</span>
              </div>
            </div>

            {/* Audio narration simulation banner */}
            <div className="mb-8 p-3.5 bg-stone-100/80 border border-stone-200/90 rounded-lg flex items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                  className="w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center hover:bg-amber-900 transition-colors shrink-0"
                  aria-label={isPlayingAudio ? 'Pause narration' : 'Listen to narration'}
                >
                  {isPlayingAudio ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
                </button>
                <div>
                  <p className="font-medium text-stone-900">
                    {isPlayingAudio ? 'Playing Narrated Essay' : 'Listen to Narrated Dispatch'}
                  </p>
                  <p className="text-[11px] text-stone-500">Read by {article.author.name} · {article.readTime}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* Simulated soundwave */}
                {isPlayingAudio && (
                  <div className="flex items-center gap-0.5 h-4">
                    <span className="w-1 bg-amber-800 h-2 animate-pulse" />
                    <span className="w-1 bg-amber-800 h-4 animate-pulse delay-75" />
                    <span className="w-1 bg-amber-800 h-3 animate-pulse delay-150" />
                    <span className="w-1 bg-amber-800 h-1 animate-pulse" />
                  </div>
                )}

                <button
                  onClick={() => {
                    const speeds: (1 | 1.25 | 1.5)[] = [1, 1.25, 1.5];
                    const next = speeds[(speeds.indexOf(audioSpeed) + 1) % speeds.length];
                    setAudioSpeed(next);
                  }}
                  className="px-2 py-1 bg-white border border-stone-300 rounded text-[11px] font-mono text-stone-700 hover:bg-stone-50"
                  title="Playback speed"
                >
                  {audioSpeed}x
                </button>
              </div>
            </div>

            {/* Cover Image & Caption */}
            <div className="mb-10 space-y-2">
              <div className="aspect-[16/10] rounded-xl overflow-hidden bg-stone-100 shadow-sm border border-stone-200">
                <img
                  src={article.coverImage}
                  alt={article.imageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs font-serif italic text-stone-500 text-center">
                {article.figureCaption}
              </p>
            </div>

            {/* Lead Pull Quote */}
            <blockquote className="my-8 py-4 px-6 border-y border-stone-300 bg-white/50 text-center">
              <p className="font-serif italic text-xl sm:text-2xl text-stone-800 leading-relaxed">
                "{article.leadQuote}"
              </p>
            </blockquote>

            {/* Brewing Specs Box (if available) */}
            {article.brewingSpec && (
              <div className="my-8 p-6 bg-amber-50/50 border border-amber-200/80 rounded-xl space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-900">
                  <Coffee className="w-4 h-4" />
                  <span>The Hearth Laboratory Brew Card</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs pt-2 border-t border-amber-200/60">
                  <div>
                    <span className="text-stone-500 block">Ratio</span>
                    <span className="font-medium text-stone-900">{article.brewingSpec.ratio}</span>
                  </div>
                  <div>
                    <span className="text-stone-500 block">Water Temp</span>
                    <span className="font-medium text-stone-900">{article.brewingSpec.waterTemp}</span>
                  </div>
                  <div>
                    <span className="text-stone-500 block">Grind Size</span>
                    <span className="font-medium text-stone-900">{article.brewingSpec.grindSize}</span>
                  </div>
                  <div>
                    <span className="text-stone-500 block">Total Time</span>
                    <span className="font-medium text-stone-900">{article.brewingSpec.brewTime}</span>
                  </div>
                </div>
                <p className="text-xs text-amber-950/80 pt-1 italic">
                  Note: {article.brewingSpec.notes}
                </p>
              </div>
            )}

            {/* In-depth Article Sections */}
            <div className="space-y-8 text-stone-800 text-base sm:text-lg leading-relaxed font-sans">
              {article.sections.map((section, idx) => (
                <section key={idx} className="space-y-4">
                  <h2 className="font-serif text-2xl sm:text-3xl text-stone-950 font-normal pt-4 border-t border-stone-200">
                    {section.heading}
                  </h2>

                  {section.paragraphs.map((p, pIdx) => (
                    <p
                      key={pIdx}
                      className={idx === 0 && pIdx === 0 ? 'drop-cap' : ''}
                    >
                      {p}
                    </p>
                  ))}

                  {section.quote && (
                    <div className="my-6 pl-4 border-l-2 border-amber-800 text-stone-700 italic font-serif text-lg">
                      "{section.quote}"
                    </div>
                  )}

                  {section.callout && (
                    <div className="p-4 bg-stone-100 rounded-lg text-xs sm:text-sm text-stone-700 border-l-3 border-stone-800">
                      {section.callout}
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* Key Takeaways */}
            <div className="my-10 p-6 bg-white border border-stone-200 rounded-xl space-y-3">
              <h3 className="font-serif text-xl text-stone-900 font-medium">
                Key Principles &amp; Field Takeaways
              </h3>
              <ul className="space-y-2.5 pt-2">
                {article.keyTakeaways.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Article Tags */}
            <div className="pt-6 border-t border-stone-200 flex flex-wrap items-center gap-2">
              <span className="text-xs text-stone-500 font-medium mr-2">Topics:</span>
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-stone-600 bg-stone-200/60 px-2.5 py-1 rounded font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Next / Previous Article Navigation */}
            <div className="mt-12 pt-8 border-t border-stone-300 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevArticle ? (
                <button
                  onClick={() => onSelectArticle(prevArticle)}
                  className="p-4 bg-white border border-stone-200 hover:border-stone-400 rounded-lg text-left transition-colors cursor-pointer group"
                >
                  <span className="text-[11px] uppercase tracking-wider text-stone-400 flex items-center gap-1">
                    <ArrowLeft className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" />
                    Previous Dispatch
                  </span>
                  <p className="font-serif text-sm font-medium text-stone-900 mt-1 line-clamp-1 group-hover:text-amber-900">
                    {prevArticle.title}
                  </p>
                </button>
              ) : (
                <div />
              )}

              {nextArticle && (
                <button
                  onClick={() => onSelectArticle(nextArticle)}
                  className="p-4 bg-white border border-stone-200 hover:border-stone-400 rounded-lg text-right transition-colors cursor-pointer group"
                >
                  <span className="text-[11px] uppercase tracking-wider text-stone-400 flex items-center justify-end gap-1">
                    Next Dispatch
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                  <p className="font-serif text-sm font-medium text-stone-900 mt-1 line-clamp-1 group-hover:text-amber-900">
                    {nextArticle.title}
                  </p>
                </button>
              )}
            </div>

            {/* Related articles row */}
            <div className="mt-12 pt-8 border-t border-stone-200">
              <h4 className="text-xs uppercase tracking-widest text-stone-500 font-medium mb-4">
                Recommended From The Roastery
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedArticles.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => onSelectArticle(rel)}
                    className="p-3 bg-white border border-stone-200 rounded-lg hover:border-stone-400 cursor-pointer transition-colors"
                  >
                    <span className="text-[10px] text-amber-900 font-medium block">{rel.category}</span>
                    <p className="font-serif text-xs font-medium text-stone-900 mt-1 line-clamp-2 hover:text-amber-900">
                      {rel.title}
                    </p>
                    <span className="text-[10px] text-stone-400 mt-2 block">{rel.readTime}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
