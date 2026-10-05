import React, { useState } from 'react';
import { Mail, Check, ArrowRight } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <section className="py-14 bg-stone-900 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          
          <p className="text-xs uppercase tracking-widest text-amber-300 font-medium">
            Weekly Hearth Dispatches
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white text-balance">
            Receive Sunday cupping notes &amp; bakery batch updates.
          </h2>

          <p className="text-stone-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Every Sunday morning, we send a single quiet dispatch: tasting profiles of our rotating single-origin lots, weekend sourdough specials, and home brewing essays.
          </p>

          {!subscribed ? (
            <form onSubmit={handleSubmit} className="pt-4 max-w-md mx-auto flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                placeholder="your.email@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2.5 text-xs bg-stone-800/90 border border-stone-700 rounded-md text-white placeholder:text-stone-500 focus:outline-none focus:ring-1 focus:ring-amber-400"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-amber-200 hover:bg-amber-100 text-stone-950 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer inline-flex items-center justify-center gap-1.5"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          ) : (
            <div className="pt-4 flex items-center justify-center gap-2 text-emerald-400 text-xs font-medium animate-in fade-in">
              <Check className="w-4 h-4" />
              <span>You are subscribed to the Sunday Hearth Dispatch. Welcome to our table.</span>
            </div>
          )}

          <p className="text-[11px] text-stone-500 pt-1">
            Zero spam. Unsubscribe with a single click at any time.
          </p>

        </div>
      </div>
    </section>
  );
};
