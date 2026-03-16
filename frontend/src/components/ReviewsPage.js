import { useState, useEffect } from "react";
import { Star, ArrowLeft, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { allReviews, treatmentCategories, getCategoryForReview } from "@/data/reviews";

function ReviewCard({ review, index }) {
  return (
    <div
      className="reveal bg-[#FAFAFA] p-6 md:p-8 rounded-lg border border-[#E8E4DE] hover:border-[#C9A84C]/30 transition-all duration-300"
      style={{ transitionDelay: `${(index % 6) * 60}ms` }}
      data-testid={`review-card-${index}`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#C9A84C] flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
            {review.name.charAt(0)}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <p className="text-[#2C1A0E] font-semibold text-sm">{review.name}</p>
              {review.badge && (
                <span className="text-[10px] px-2 py-0.5 bg-[#C9A84C]/10 text-[#C9A84C] rounded-full font-medium">
                  {review.badge}
                </span>
              )}
            </div>
            <p className="text-[#5D4037]/50 text-xs">{review.timeAgo}</p>
          </div>
        </div>
      </div>

      {/* Stars */}
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: review.rating }).map((_, j) => (
          <Star key={j} className="w-3.5 h-3.5 text-[#C9A84C] fill-[#C9A84C]" />
        ))}
      </div>

      {/* Text */}
      <p className="text-[#2C1A0E] text-sm leading-relaxed mb-4">
        "{review.text}"
      </p>

      {/* Treatment tag */}
      <span className="text-xs px-3 py-1 bg-white text-[#C9A84C] rounded-full border border-[#C9A84C]/20 font-medium">
        {review.treatment}
      </span>
    </div>
  );
}

export default function ReviewsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );
    setTimeout(() => {
      document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    }, 100);
    return () => observer.disconnect();
  }, [activeCategory, searchQuery]);

  const filteredReviews = allReviews.filter((review) => {
    const matchesCategory = activeCategory === "All" || getCategoryForReview(review.treatment) === activeCategory;
    const matchesSearch = !searchQuery ||
      review.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.treatment.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white pt-24" data-testid="reviews-page">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#C9A84C] text-sm font-medium hover:text-[#B8860B] transition-colors mb-8"
          data-testid="reviews-back-link"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="text-center">
          <span className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] font-medium">
            Verified Patient Experiences
          </span>
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl font-medium text-[#2C1A0E] mt-3">
            Patient Reviews
          </h1>
          <div className="w-16 h-px bg-[#C9A84C] mx-auto mt-4 mb-6" />

          {/* Stats bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-8">
            <div className="text-center">
              <div className="flex items-center gap-1 justify-center">
                <span className="font-['Playfair_Display'] text-3xl font-semibold text-[#2C1A0E]">4.9</span>
                <Star className="w-5 h-5 text-[#C9A84C] fill-[#C9A84C]" />
              </div>
              <p className="text-[#5D4037] text-xs mt-0.5">Google Rating</p>
            </div>
            <div className="w-px h-8 bg-[#E8E4DE]" />
            <div className="text-center">
              <span className="font-['Playfair_Display'] text-3xl font-semibold text-[#2C1A0E]">896+</span>
              <p className="text-[#5D4037] text-xs mt-0.5">Google Reviews</p>
            </div>
            <div className="w-px h-8 bg-[#E8E4DE]" />
            <div className="text-center">
              <span className="font-['Playfair_Display'] text-3xl font-semibold text-[#2C1A0E]">9+</span>
              <p className="text-[#5D4037] text-xs mt-0.5">Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      <div className="gold-divider w-full" />

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-8">
          {/* Search */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5D4037]/40" />
            <input
              type="text"
              placeholder="Search reviews..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#FAFAFA] border border-[#E8E4DE] rounded-full text-sm text-[#2C1A0E] outline-none focus:border-[#C9A84C]/50 transition-colors"
              data-testid="reviews-search"
            />
          </div>

          {/* Category pills */}
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-4 h-4 text-[#5D4037]/40 mr-1" />
            {treatmentCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#C9A84C] text-white"
                    : "bg-[#FAFAFA] text-[#5D4037] border border-[#E8E4DE] hover:border-[#C9A84C]/30"
                }`}
                data-testid={`filter-${cat.toLowerCase().replace(/\s+\/?\s*/g, '-')}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className="text-[#5D4037]/60 text-sm mb-6">
          Showing {filteredReviews.length} review{filteredReviews.length !== 1 ? "s" : ""}
          {activeCategory !== "All" && ` in ${activeCategory}`}
        </p>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredReviews.map((review, i) => (
            <ReviewCard key={i} review={review} index={i} />
          ))}
        </div>

        {filteredReviews.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[#5D4037]/50 text-lg font-['Playfair_Display']">
              No reviews found for this filter.
            </p>
          </div>
        )}

        {/* Google link */}
        <div className="text-center mt-12 mb-8">
          <div className="gold-divider mb-8" />
          <p className="text-[#5D4037] text-sm mb-3">
            Read all 896+ reviews on Google
          </p>
          <a
            href="https://www.google.com/maps/place/Dr+Nidhi+Rana+Skin+Clinic+%7C+Dermatologist+in+Bhopal/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C9A84C] text-white px-8 py-3 rounded-full text-sm font-semibold tracking-wide hover:bg-[#B8860B] transition-all duration-300 shadow-[0_4px_20px_rgba(201,168,76,0.3)]"
            data-testid="google-reviews-link"
          >
            <Star className="w-4 h-4 fill-white" />
            View on Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}
