import { ArrowRight } from "lucide-react";

const treatments = [
  {
    title: "Carbon Peel",
    subtitle: "The Hollywood Glow",
    description: "A red-carpet favourite. This laser-activated carbon treatment deeply purifies pores, controls excess oil, and leaves skin with an immediate, camera-ready radiance.",
    benefits: ["Deep Pore Cleansing", "Oil Control", "Instant Luminosity", "Acne Prevention"],
  },
  {
    title: "Yellow Peel",
    subtitle: "The Retinol Reset",
    description: "A medical-grade retinol peel that works beneath the surface — fading dark spots, smoothing texture, and kick-starting collagen for visibly younger-looking skin.",
    benefits: ["Pigmentation Fading", "Collagen Stimulation", "Texture Refinement", "Brightening"],
  },
  {
    title: "Acne Scar Treatment",
    subtitle: "Skin Rebuilt, Confidence Restored",
    description: "Combining advanced laser fractional technology with micro-needling, this protocol remodels scar tissue from within — revealing smoother, more even skin over a series of sessions.",
    benefits: ["Scar Depth Reduction", "Collagen Remodeling", "Texture Smoothing", "Long-term Results"],
  },
];

export default function TreatmentSpotlight() {
  return (
    <section id="treatments" data-testid="treatment-spotlight" className="relative py-20 md:py-32 bg-[#FAFAFA]">
      <div className="gold-divider w-full absolute top-0" />

      <svg className="leaf-watermark bottom-10 right-[5%] w-48 h-48 rotate-45" viewBox="0 0 200 200" fill="none">
        <path d="M100 10C100 10 150 60 150 110C150 150 125 185 100 195C75 185 50 150 50 110C50 60 100 10 100 10Z" stroke="#C9A84C" strokeWidth="0.5"/>
      </svg>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] font-medium">
            Signature Procedures
          </span>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-medium text-[#2C1A0E] mt-3">
            Treatments We're Known For
          </h2>
          <div className="w-16 h-px bg-[#C9A84C] mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {treatments.map((treatment, i) => (
            <div
              key={i}
              className="reveal group bg-white rounded-lg overflow-hidden border border-[#E8E4DE] hover:border-[#C9A84C]/40 transition-all duration-500 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_40px_-5px_rgba(201,168,76,0.12)] hover:-translate-y-1"
              style={{ transitionDelay: `${i * 120}ms` }}
              data-testid={`treatment-card-${i}`}
            >
              <div className="h-1 bg-gradient-to-r from-[#C9A84C] via-[#E8D5A0] to-[#C9A84C]" />

              <div className="p-8">
                <span className="text-[#C9A84C] text-xs uppercase tracking-[0.2em] font-medium">
                  {treatment.subtitle}
                </span>
                <h3 className="font-['Playfair_Display'] text-xl md:text-2xl text-[#2C1A0E] font-medium mt-2 mb-4">
                  {treatment.title}
                </h3>
                <p className="text-[#5D4037] text-sm leading-relaxed mb-6">
                  {treatment.description}
                </p>

                <div className="space-y-2 mb-6">
                  {treatment.benefits.map((benefit, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
                      <span className="text-[#5D4037] text-xs">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-[#C9A84C] text-sm font-medium group-hover:gap-3 transition-all duration-300 cursor-pointer">
                  <span>Explore Treatment</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
