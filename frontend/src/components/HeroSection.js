import { ChevronDown } from "lucide-react";

export default function HeroSection({ onBookClick }) {
  const scrollToAbout = () => {
    const el = document.querySelector("#about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grain-overlay"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-white" />

      {/* Decorative elements */}
      <svg className="leaf-watermark top-20 right-10 w-64 h-64 rotate-12" viewBox="0 0 200 200" fill="none">
        <path d="M100 10C100 10 140 60 140 100C140 140 120 180 100 190C80 180 60 140 60 100C60 60 100 10 100 10Z" stroke="#C9A84C" strokeWidth="0.5" fill="none"/>
        <path d="M100 10V190" stroke="#C9A84C" strokeWidth="0.3"/>
      </svg>
      <svg className="leaf-watermark bottom-20 left-10 w-48 h-48 -rotate-12" viewBox="0 0 200 200" fill="none">
        <path d="M100 10C100 10 140 60 140 100C140 140 120 180 100 190C80 180 60 140 60 100C60 60 100 10 100 10Z" stroke="#C9A84C" strokeWidth="0.5" fill="none"/>
      </svg>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Gold ornamental line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-px bg-[#C9A84C]/30" />
          <span className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] font-medium">
            Bhopal's Premier Skin Clinic
          </span>
          <div className="w-16 h-px bg-[#C9A84C]/30" />
        </div>

        {/* Main heading */}
        <h1 className="font-['Playfair_Display'] text-5xl sm:text-6xl lg:text-7xl font-medium text-[#2C1A0E] mb-2 tracking-tight leading-[1.1]">
          Tru<span className="gold-shimmer">Derm</span>
        </h1>
        <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl lg:text-4xl text-[#2C1A0E] font-normal mb-8 tracking-tight">
          Skin Clinic
        </h2>

        {/* Tagline */}
        <p className="font-['Playfair_Display'] italic text-base md:text-lg text-[#5D4037] max-w-2xl mx-auto mb-12 leading-relaxed">
          "Where dermatology meets artistry. Every treatment is designed around you — your skin,
          your story, your confidence."
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onBookClick}
            className="bg-[#C9A84C] text-white px-10 py-4 rounded-full text-sm font-semibold tracking-wider uppercase hover:bg-[#B8860B] transition-all duration-300 shadow-[0_4px_20px_rgba(201,168,76,0.3)] hover:shadow-[0_8px_30px_rgba(201,168,76,0.4)] hover:-translate-y-0.5"
            data-testid="hero-book-appointment"
          >
            Book Your Consultation
          </button>
          <a
            href="#about"
            onClick={(e) => { e.preventDefault(); scrollToAbout(); }}
            className="border border-[#C9A84C] text-[#2C1A0E] px-10 py-4 rounded-full text-sm font-semibold tracking-wider uppercase hover:bg-[#C9A84C]/5 transition-all duration-300"
            data-testid="hero-learn-more"
          >
            Meet Dr. Nidhi Rana
          </a>
        </div>

        {/* Credentials mini bar */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-xs text-[#5D4037]/70 uppercase tracking-widest">
          <span>MBBS, MD (DVL)</span>
          <span className="w-1 h-1 rounded-full bg-[#C9A84C]" />
          <span>Ex-AIIMS Delhi</span>
          <span className="w-1 h-1 rounded-full bg-[#C9A84C]" />
          <span>8+ Years Experience</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-[#C9A84C]"
        data-testid="scroll-indicator"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
}
