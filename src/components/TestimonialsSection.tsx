import React, { useState } from 'react';
import { Quote, Star, MessageSquarePlus, Check, X, CheckCircle, ShieldCheck } from 'lucide-react';
import { TESTIMONIAL_REVIEWS, TestimonialReview } from '../data/studioData';

export const TestimonialsSection: React.FC = () => {
  const [reviews, setReviews] = useState<TestimonialReview[]>(TESTIMONIAL_REVIEWS);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(5);
  const [newReview, setNewReview] = useState({ name: '', event: '', quote: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.quote) return;
    const item: TestimonialReview = {
      id: `rev-${Date.now()}`,
      stars: rating,
      quote: newReview.quote,
      names: newReview.name,
      event: newReview.event || 'Celebration in Uttar Pradesh',
      date: 'Recent Client Review',
      verified: true
    };
    setReviews([item, ...reviews]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowSubmitModal(false);
      setNewReview({ name: '', event: '', quote: '' });
      setRating(5);
    }, 1500);
  };

  return (
    <section id="reviews" className="py-24 bg-[#070e1b] border-t border-white/10 relative film-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.28em] uppercase text-[#ffb703] mb-3 bg-white/[0.04] backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 font-semibold">
              <Star className="w-3.5 h-3.5 fill-[#ffb703]" />
              <span>TESTED CLIENT REVIEWS WITH 5 STARS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase text-white leading-tight [text-wrap:balance]">
              Words & Ratings From <br />
              <span className="bg-gradient-to-r from-[#00e5ff] via-[#ffb703] to-[#ff6b00] bg-clip-text text-transparent">
                Our Couples & Families
              </span>.
            </h2>
          </div>

          {/* Action to Submit Review (Curved Pill Button) */}
          <div>
            <button
              onClick={() => setShowSubmitModal(true)}
              className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-white/[0.05] hover:bg-white/[0.12] border border-white/20 hover:border-[#00e5ff] transition-all rounded-full flex items-center gap-2 cursor-pointer shadow-lg backdrop-blur-md active:scale-95"
            >
              <MessageSquarePlus className="w-4 h-4 text-[#00e5ff]" />
              <span>Share Your Experience</span>
            </button>
          </div>
        </div>

        {/* Reviews Grid in Glassmorphism UI */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 sm:p-7 bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-300 rounded-2xl flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.5)] group hover:-translate-y-1"
            >
              <div>
                {/* Top Rating & Verified Pill */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < rev.stars ? 'text-[#ffb703] fill-[#ffb703]' : 'text-white/20'
                        }`}
                      />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-[#25D366] bg-[#25D366]/10 px-2.5 py-0.5 rounded-full border border-[#25D366]/30">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verified</span>
                  </span>
                </div>

                {/* Review Quote */}
                <p className="text-xs sm:text-sm text-[#cbd5e1] font-light leading-relaxed mb-6 italic">
                  "{rev.quote}"
                </p>
              </div>

              {/* Author & Event Details */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="font-display text-sm font-bold text-white group-hover:text-[#00e5ff] transition-colors">
                    {rev.names}
                  </h4>
                  <div className="text-[11px] text-[#94a3b8] font-mono mt-0.5">
                    {rev.event}
                  </div>
                </div>

                <div className="text-[10px] font-mono text-white/50 text-right">
                  {rev.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Client Review Submission */}
        {showSubmitModal && (
          <div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setShowSubmitModal(false)}
          >
            <div
              className="relative max-w-lg w-full bg-[#081220] border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowSubmitModal(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <h3 className="font-display text-2xl font-bold uppercase text-white mb-1">
                Leave a Client Review
              </h3>
              <p className="text-xs text-[#cbd5e1] font-light mb-5">
                We value your trust and feedback from your wedding or event with Chandralok Studio.
              </p>

              {submitted ? (
                <div className="py-8 text-center space-y-2">
                  <CheckCircle className="w-12 h-12 text-[#25D366] mx-auto" />
                  <h4 className="font-display text-lg font-bold text-white">Review Added!</h4>
                  <p className="text-xs text-[#cbd5e1]">Thank you for supporting Chandralok Studio.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  {/* Star Rating Selector */}
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-[#00e5ff] mb-1.5 font-bold">
                      Your Rating (5 Stars)
                    </label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          type="button"
                          key={star}
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(rating)}
                          className="p-1 text-white hover:scale-110 transition-transform cursor-pointer"
                        >
                          <Star
                            className={`w-6 h-6 ${
                              star <= (hoverRating || rating)
                                ? 'text-[#ffb703] fill-[#ffb703]'
                                : 'text-white/20'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase text-[#00e5ff] mb-1 font-bold">
                      Your Name(s) *
                    </label>
                    <input
                      type="text"
                      required
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      placeholder="e.g. Vikram & Ananya"
                      className="w-full px-4 py-2.5 bg-black/40 border border-white/10 rounded-xl text-sm text-white focus:border-[#00e5ff] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase text-[#00e5ff] mb-1 font-bold">
                      Event / Occasion
                    </label>
                    <input
                      type="text"
                      value={newReview.event}
                      onChange={(e) => setNewReview({ ...newReview, event: e.target.value })}
                      placeholder="e.g. Royal Wedding in Sirsaganj"
                      className="w-full px-4 py-2.5 bg-black/40 border border-white/10 rounded-xl text-sm text-white focus:border-[#00e5ff] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase text-[#00e5ff] mb-1 font-bold">
                      Your Experience / Feedback *
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={newReview.quote}
                      onChange={(e) => setNewReview({ ...newReview, quote: e.target.value })}
                      placeholder="Tell future couples about your experience with our team..."
                      className="w-full px-4 py-2.5 bg-black/40 border border-white/10 rounded-xl text-sm text-white focus:border-[#00e5ff] focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 text-xs font-bold uppercase tracking-widest text-[#050b14] bg-gradient-to-r from-[#00e5ff] via-[#38bdf8] to-[#ffb703] hover:from-[#ff6b00] hover:to-[#ffb703] hover:text-white transition-all rounded-full cursor-pointer shadow-lg active:scale-95"
                  >
                    Post Review
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
