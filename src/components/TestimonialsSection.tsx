import React, { useState } from 'react';
import { Star, MessageSquarePlus, X, CheckCircle } from 'lucide-react';
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
      verified: true,
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
    <section id="reviews" className="py-24 sm:py-32 bg-[#EFEFE8] dark:bg-[#181C16] text-[#3B4436] dark:text-[#EFEFE8] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-6 border-b border-[#D8D8CF] dark:border-[#2E3729]">
          <div>
            <div className="text-[11px] font-semibold tracking-widest uppercase text-[#B08D57] mb-2 flex items-center gap-2">
              <Star className="w-3.5 h-3.5 fill-[#B08D57]" />
              <span>Verified Client Experiences & 5-Star Reviews</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] text-[#3B4436] dark:text-[#EFEFE8] uppercase tracking-tight">
              Words From <br />
              <span className="text-[#B08D57]">
                Our Couples & Families
              </span>
            </h2>
          </div>

          <div>
            <button
              onClick={() => setShowSubmitModal(true)}
              className="px-6 py-3.5 text-xs font-semibold tracking-widest uppercase text-[#3B4436] dark:text-[#EFEFE8] bg-white dark:bg-[#20251E] hover:border-[#B08D57] border border-[#D8D8CF] dark:border-[#2E3729] transition-colors rounded-full flex items-center gap-2 cursor-pointer shadow-xs active:scale-95"
            >
              <MessageSquarePlus className="w-4 h-4 text-[#B08D57]" />
              <span>Share Your Review</span>
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-7 sm:p-8 bg-white dark:bg-[#20251E] border border-[#D8D8CF] dark:border-[#2E3729] hover:border-[#B08D57] transition-all duration-200 rounded-3xl flex flex-col justify-between shadow-xs group"
            >
              <div>
                {/* Top Rating & Verified Pill */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < rev.stars
                            ? 'text-[#B08D57] fill-[#B08D57]'
                            : 'text-stone-300 dark:text-stone-700'
                        }`}
                      />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold tracking-wider uppercase text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verified Couple</span>
                  </span>
                </div>

                {/* Review Quote */}
                <p className="font-heading italic text-lg text-[#3B4436] dark:text-[#EFEFE8] leading-relaxed mb-6">
                  "{rev.quote}"
                </p>
              </div>

              {/* Author & Event Details */}
              <div className="pt-4 border-t border-[#E4E4DC] dark:border-[#272F23] flex items-center justify-between">
                <div>
                  <h4 className="font-heading text-xl font-normal text-[#3B4436] dark:text-[#EFEFE8] group-hover:text-[#B08D57] transition-colors">
                    {rev.names}
                  </h4>
                  <div className="font-body text-xs text-[#5C6755] dark:text-[#A3AFA0] mt-0.5">
                    {rev.event}
                  </div>
                </div>

                <div className="font-mono text-[11px] text-[#5C6755] dark:text-[#A3AFA0] text-right">
                  {rev.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Client Review Submission */}
        {showSubmitModal && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setShowSubmitModal(false)}
          >
            <div
              className="relative max-w-lg w-full bg-[#EFEFE8] dark:bg-[#20251E] border border-[#D8D8CF] dark:border-[#2E3729] rounded-3xl p-7 sm:p-9 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowSubmitModal(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white dark:bg-[#181C16] flex items-center justify-center text-[#3B4436] dark:text-[#EFEFE8] hover:bg-[#B08D57] hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <h3 className="font-heading text-3xl font-normal text-[#3B4436] dark:text-[#EFEFE8] mb-1">
                Share Your Experience
              </h3>
              <p className="font-body text-xs text-[#5C6755] dark:text-[#A3AFA0] mb-6">
                We value your trust and feedback from your wedding or event with Chandralok Studio.
              </p>

              {submitted ? (
                <div className="py-8 text-center text-emerald-700 dark:text-emerald-400 flex flex-col items-center">
                  <CheckCircle className="w-12 h-12 mb-3" />
                  <p className="font-heading text-2xl">Thank You!</p>
                  <p className="font-body text-xs text-[#5C6755] dark:text-[#A3AFA0] mt-1">Your review has been recorded.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-semibold tracking-wider uppercase text-[#3B4436] dark:text-[#EFEFE8] mb-1.5">
                      Your Rating
                    </label>
                    <div className="flex items-center gap-1.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(rating)}
                          onClick={() => setRating(star)}
                          className="p-1 cursor-pointer"
                        >
                          <Star
                            className={`w-6 h-6 transition-colors ${
                              star <= (hoverRating || rating)
                                ? 'text-[#B08D57] fill-[#B08D57]'
                                : 'text-stone-300 dark:text-stone-700'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold tracking-wider uppercase text-[#3B4436] dark:text-[#EFEFE8] mb-1">
                      Your Name / Family Name
                    </label>
                    <input
                      type="text"
                      required
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      placeholder="e.g. Priya & Rahul Sharma"
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#181C16] border border-[#D8D8CF] dark:border-[#2E3729] text-[#3B4436] dark:text-[#EFEFE8] text-xs font-body focus:outline-none focus:border-[#B08D57]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold tracking-wider uppercase text-[#3B4436] dark:text-[#EFEFE8] mb-1">
                      Event / Occasion
                    </label>
                    <input
                      type="text"
                      value={newReview.event}
                      onChange={(e) => setNewReview({ ...newReview, event: e.target.value })}
                      placeholder="e.g. Royal Wedding in Sirsaganj"
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#181C16] border border-[#D8D8CF] dark:border-[#2E3729] text-[#3B4436] dark:text-[#EFEFE8] text-xs font-body focus:outline-none focus:border-[#B08D57]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold tracking-wider uppercase text-[#3B4436] dark:text-[#EFEFE8] mb-1">
                      Review / Testimonial
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={newReview.quote}
                      onChange={(e) => setNewReview({ ...newReview, quote: e.target.value })}
                      placeholder="Tell us about the photos, cinematic film, and service..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#181C16] border border-[#D8D8CF] dark:border-[#2E3729] text-[#3B4436] dark:text-[#EFEFE8] text-xs font-body focus:outline-none focus:border-[#B08D57]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#B08D57] hover:bg-[#9c7b49] text-white font-semibold text-xs tracking-widest uppercase transition-colors cursor-pointer"
                  >
                    Submit Review
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
