import { Droplets, Scissors, Zap, Sparkles } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Skin Treatments",
    description: "Clinically advanced solutions to reveal your healthiest, most luminous skin.",
    items: ["Acne Therapy", "Carbon & Yellow Peels", "Pigmentation Correction", "Allergy Management", "Scar Revision"],
  },
  {
    icon: Scissors,
    title: "Hair Restoration",
    description: "Targeted therapies to diagnose, treat, and restore your hair's natural vitality.",
    items: ["Hair Fall Analysis", "Growth Therapy", "PRP Treatments", "Scalp Rejuvenation", "Nutritional Protocols"],
  },
  {
    icon: Zap,
    title: "Laser Procedures",
    description: "FDA-approved laser technology for precise, painless, and lasting results.",
    items: ["Laser Hair Removal", "Skin Resurfacing", "Tattoo Removal", "Vascular Treatments", "Laser Toning"],
  },
  {
    icon: Sparkles,
    title: "Aesthetic Medicine",
    description: "Subtle, refined enhancements that honour your natural beauty.",
    items: ["Anti-aging Protocols", "Dermal Fillers", "Botox", "Skin Tightening", "Glow Treatments"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" data-testid="services-section" className="relative py-20 md:py-32 bg-white">
      <div className="gold-divider w-full absolute top-0" />

      <svg className="leaf-watermark top-10 left-[5%] w-40 h-40" viewBox="0 0 200 200" fill="none">
        <path d="M100 10C100 10 150 60 150 110C150 150 125 185 100 195C75 185 50 150 50 110C50 60 100 10 100 10Z" stroke="#C9A84C" strokeWidth="0.5"/>
        <path d="M100 30V180" stroke="#C9A84C" strokeWidth="0.3"/>
        <path d="M80 70L100 90L120 70" stroke="#C9A84C" strokeWidth="0.3"/>
        <path d="M75 110L100 130L125 110" stroke="#C9A84C" strokeWidth="0.3"/>
      </svg>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] font-medium">
            What We Do Best
          </span>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-medium text-[#2C1A0E] mt-3">
            Our Specialisations
          </h2>
          <div className="w-16 h-px bg-[#C9A84C] mx-auto mt-4" />
          <p className="text-[#5D4037] text-base md:text-lg mt-4 max-w-xl mx-auto">
            Every treatment at TruDerm is backed by evidence, delivered with precision, and designed around you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="reveal group bg-white p-8 md:p-10 border border-[#E8E4DE] hover:border-[#C9A84C]/40 transition-all duration-500 rounded-lg shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_40px_-5px_rgba(201,168,76,0.12)] hover:-translate-y-1"
              style={{ transitionDelay: `${i * 100}ms` }}
              data-testid={`service-card-${i}`}
            >
              <div className="w-full h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent mb-8 group-hover:via-[#C9A84C] transition-colors duration-500" />

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-[#C9A84C]/8 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A84C] transition-colors duration-500">
                  <service.icon className="w-6 h-6 text-[#C9A84C] group-hover:text-white transition-colors duration-500" />
                </div>
                <div className="flex-1">
                  <h3 className="font-['Playfair_Display'] text-xl md:text-2xl text-[#2C1A0E] font-medium mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[#5D4037] text-sm mb-5 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.items.map((item, j) => (
                      <span
                        key={j}
                        className="text-xs px-3 py-1.5 bg-[#FAFAFA] text-[#5D4037] rounded-full border border-[#E8E4DE] group-hover:border-[#C9A84C]/25 transition-colors duration-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
