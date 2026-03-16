import { Star } from "lucide-react";

const ratings = [
  { platform: "Google", rating: "4.9", reviews: "895+ Reviews", icon: Star },
  { platform: "Justdial", rating: "4.8", reviews: "974 Votes", icon: Star },
  { platform: "Yappe", rating: "4.9", reviews: "591 Reviews", icon: Star },
];

export default function RatingsBar() {
  return (
    <section data-testid="ratings-bar" className="relative bg-[#2C1A0E] py-10 md:py-14 overflow-hidden">
      {/* Gold ornamental borders */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />

      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {ratings.map((r, i) => (
            <div key={i} className="flex items-center gap-4" data-testid={`rating-${r.platform.toLowerCase()}`}>
              {/* Rating number */}
              <div className="text-center">
                <div className="flex items-center gap-1">
                  <span className="font-['Playfair_Display'] text-3xl md:text-4xl font-semibold text-[#C9A84C]">
                    {r.rating}
                  </span>
                  <Star className="w-5 h-5 text-[#C9A84C] fill-[#C9A84C]" />
                </div>
                <p className="text-white/80 text-xs mt-0.5">{r.platform}</p>
              </div>

              {/* Divider */}
              <div className="w-px h-10 bg-[#C9A84C]/30 hidden md:block" />

              {/* Reviews count */}
              <p className="text-white/60 text-sm hidden md:block">{r.reviews}</p>

              {/* Separator between ratings on mobile */}
              {i < ratings.length - 1 && (
                <div className="w-16 h-px bg-[#C9A84C]/30 md:hidden" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
