import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, RotateCcw, Coffee, BookOpen } from 'lucide-react';
import { COFFEE_QUIZ_QUESTIONS } from '../data/cafeData';
import { Article } from '../data/articlesData';

interface CoffeeQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectArticleById: (id: string) => void;
  onNavigateToMenu: () => void;
}

export const CoffeeQuizModal: React.FC<CoffeeQuizModalProps> = ({
  isOpen,
  onClose,
  onSelectArticleById,
  onNavigateToMenu,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [scores, setScores] = useState({
    fruitAndFloral: 0,
    richAndChocolate: 0,
    balancedAndPastry: 0,
  });

  if (!isOpen) return null;

  const currentQuestion = COFFEE_QUIZ_QUESTIONS[currentStep];
  const isFinished = currentStep >= COFFEE_QUIZ_QUESTIONS.length;

  const handleSelectOption = (optionIndex: number) => {
    const option = currentQuestion.options[optionIndex];
    setScores((prev) => ({
      fruitAndFloral: prev.fruitAndFloral + option.points.fruitAndFloral,
      richAndChocolate: prev.richAndChocolate + option.points.richAndChocolate,
      balancedAndPastry: prev.balancedAndPastry + option.points.balancedAndPastry,
    }));
    setSelectedAnswers([...selectedAnswers, optionIndex]);
    setCurrentStep((prev) => prev + 1);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedAnswers([]);
    setScores({ fruitAndFloral: 0, richAndChocolate: 0, balancedAndPastry: 0 });
  };

  // Determine recommendation based on winning score
  const getRecommendation = () => {
    if (scores.fruitAndFloral >= scores.richAndChocolate && scores.fruitAndFloral >= scores.balancedAndPastry) {
      return {
        title: 'The Terroir Purist',
        profile: 'Floral, Effervescent & Complex',
        drink: 'Hario V60 — Washed Ethiopian Yirgacheffe Heirloom',
        notes: 'White peach, jasmine blossoms, bergamot tea finish',
        articleId: 'anatomy-of-a-perfect-pour-over',
        articleTitle: 'The Anatomy of a Perfect Pour-Over',
        quote: 'You appreciate clean transparency and tasting the unadulterated micro-climate of the high-altitude Ethiopian highlands.',
      };
    } else if (scores.richAndChocolate >= scores.balancedAndPastry) {
      return {
        title: 'The Velvet Connoisseur',
        profile: 'Silky, Deep & Indulgent',
        drink: 'Velvet Flat White or Hearth Smoked Vanilla Latte',
        notes: 'Roasted hazelnut, dark cocoa, honeyed sweetness',
        articleId: 'crafting-silky-microfoam-milk-latte-art',
        articleTitle: 'Crafting Silky Microfoam for Latte Art',
        quote: 'You love the comforting interplay of concentrated espresso oils enveloped in sweet, glossy microfoam.',
      };
    } else {
      return {
        title: 'The Hearth Harmony Seeker',
        profile: 'Warm Spices & Sourdough Companion',
        drink: 'Rustic Cortado + 81-Layer French Croissant',
        notes: 'Brown butter, cardamom, toasted almond flake',
        articleId: 'art-of-slow-sourdough-fermentation',
        articleTitle: 'The Art of Slow Fermentation: Why Our Sourdough Takes 36 Hours',
        quote: 'For you, coffee is not just a drink; it is part of a complete morning communion with golden bakery hearths.',
      };
    }
  };

  const result = isFinished ? getRecommendation() : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/70 backdrop-blur-sm p-4 animate-in fade-in duration-150">
      <div className="bg-[#FAF7F2] w-full max-w-lg rounded-2xl shadow-2xl border border-stone-300 overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-stone-200 bg-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-700" />
            <span className="font-serif text-lg font-medium text-stone-900">
              Personalized Coffee Matcher
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-800 rounded-md hover:bg-stone-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress indicator */}
        {!isFinished && (
          <div className="w-full bg-stone-200 h-1">
            <div
              className="bg-amber-800 h-1 transition-all duration-300"
              style={{ width: `${((currentStep + 1) / COFFEE_QUIZ_QUESTIONS.length) * 100}%` }}
            />
          </div>
        )}

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {!isFinished ? (
            <div className="space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-900 font-semibold block mb-1">
                  Question {currentStep + 1} of {COFFEE_QUIZ_QUESTIONS.length}
                </span>
                <h3 className="font-serif text-2xl text-stone-900 font-normal">
                  {currentQuestion.question}
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  {currentQuestion.subtitle}
                </p>
              </div>

              <div className="space-y-3">
                {currentQuestion.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    className="w-full text-left p-4 bg-white hover:bg-amber-50/50 border border-stone-200 hover:border-amber-300 rounded-xl transition-all cursor-pointer group shadow-2xs"
                  >
                    <div className="font-medium text-sm text-stone-900 group-hover:text-amber-950 flex items-center justify-between">
                      <span>{opt.label}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-amber-800 group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-xs text-stone-500 mt-1">
                      {opt.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            // Results screen
            result && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="text-center space-y-1">
                  <span className="text-xs uppercase tracking-widest text-amber-900 font-semibold">
                    Your Match Found
                  </span>
                  <h3 className="font-serif text-3xl text-stone-900 font-normal">
                    {result.title}
                  </h3>
                  <p className="text-xs text-stone-500 italic font-serif">
                    Profile: {result.profile}
                  </p>
                </div>

                <div className="p-5 bg-white border border-stone-200 rounded-xl space-y-3 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 uppercase tracking-wider">
                    <Coffee className="w-3.5 h-3.5 text-amber-800" />
                    <span>Recommended Cup</span>
                  </div>
                  <h4 className="font-serif text-xl text-stone-950 font-medium">
                    {result.drink}
                  </h4>
                  <p className="text-xs text-amber-900 italic font-serif">
                    Tasting notes: {result.notes}
                  </p>
                  <p className="text-xs text-stone-600 leading-relaxed pt-2 border-t border-stone-100">
                    {result.quote}
                  </p>
                </div>

                <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-xl flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-amber-900 shrink-0" />
                    <div>
                      <p className="text-xs text-stone-500">Related Journal Dispatch</p>
                      <p className="text-xs font-medium text-stone-900 line-clamp-1">{result.articleTitle}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      onClose();
                      onSelectArticleById(result.articleId);
                    }}
                    className="px-3 py-1.5 bg-amber-900 hover:bg-amber-950 text-white text-xs font-medium rounded-md whitespace-nowrap cursor-pointer"
                  >
                    Read
                  </button>
                </div>

                <div className="flex items-center justify-between gap-3 pt-2">
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs text-stone-600 hover:text-stone-900 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Retake Quiz</span>
                  </button>

                  <button
                    onClick={() => {
                      onClose();
                      onNavigateToMenu();
                    }}
                    className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium rounded-md cursor-pointer"
                  >
                    View Menu Item
                  </button>
                </div>
              </div>
            )
          )}
        </div>

      </div>
    </div>
  );
};
