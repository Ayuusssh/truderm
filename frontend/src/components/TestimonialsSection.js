import { Quote, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const featuredReviews = [
  {
    name: "Anjali Chakravarty",
    text: "I was skeptical at first but they cured my hormonal acne in 4 months. I started seeing visible results in just 1 month. Now my skin is all clear, no scars nothing and it's very healthy.",
    treatment: "Acne Treatment",
    rating: 5,
  },
  {
    name: "Aditi Shukla",
    text: "I've been visiting Dr Nidhi for laser, and even though I wasn't available on the times she advised, she gave me results beyond expectations — without any burns or ulcers. Always reachable over phone.",
    treatment: "Laser Treatment",
    rating: 5,
  },
  {
    name: "Shruti Choudhary",
    text: "Went to the clinic for acne scar removal. The whole process was well planned. Doctor informed me about each step clearly. Saw visible difference in just 3 sittings. Would recommend to everyone.",
    treatment: "Acne Scar Removal",
    rating: 5,
  },
  {
    name: "Manav Mathur",
    text: "A fantastic experience with Dr. Nidhi Rana. Her professionalism and expertise were evident from the start. She took the time to understand my concerns and crafted a tailored treatment plan.",
    treatment: "General Consultation",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" data-testid="testimonials-section" className="relative py-20 md:py-32 bg-white">
      <div className="gold-divider w-full absolute top-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 reveal">
          <span className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] font-medium">
            Real Stories, Real Results
          </span>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-medium text-[#2C1A0E] mt-3">
            In Their Own Words
          </h2>
          <div className="w-16 h-px bg-[#C9A84C] mx-auto mt-4" />
          <p className="text-[#5D4037] text-sm mt-4">
            From 896+ verified Google reviews (4.9 rating)
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {featuredReviews.map((t, i) => (
            <div
              key={i}
              className="reveal bg-[#FAFAFA] p-8 md:p-10 rounded-lg relative border border-[#E8E4DE] shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
              style={{ transitionDelay: `${i * 100}ms` }}
              data-testid={`testimonial-card-${i}`}
            >
              <Quote className="w-10 h-10 text-[#C9A84C]/15 absolute top-6 right-6" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-[#C9A84C] fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>

              <p className="font-['Playfair_Display'] italic text-[#2C1A0E] text-base md:text-lg leading-relaxed mb-6">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C9A84C] flex items-center justify-center text-white font-semibold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-[#2C1A0E] font-semibold text-sm">{t.name}</p>
                  <p className="text-[#C9A84C] text-xs">{t.treatment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all reviews CTA */}
        <div className="text-center mt-12 reveal">
          <Link
            to="/reviews"
            className="inline-flex items-center gap-2 border border-[#C9A84C] text-[#2C1A0E] px-8 py-3.5 rounded-full text-sm font-semibold tracking-wider uppercase hover:bg-[#C9A84C]/5 transition-all duration-300 group"
            data-testid="view-all-reviews"
          >
            Read All 896+ Patient Reviews
            <ArrowRight className="w-4 h-4 text-[#C9A84C] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
