import { Star, Building2, FlaskConical, ShieldCheck, Heart, Clock } from "lucide-react";

const trustSignals = [
  {
    icon: Star,
    title: "4.9/5 on Google",
    subtitle: "895+ Verified Patient Reviews",
  },
  {
    icon: Building2,
    title: "Ex-AIIMS Delhi",
    subtitle: "India's Top Medical Institution",
  },
  {
    icon: FlaskConical,
    title: "Evidence-Based",
    subtitle: "Only Proven Protocols",
  },
  {
    icon: ShieldCheck,
    title: "FDA-Approved Tech",
    subtitle: "International Safety Standards",
  },
  {
    icon: Heart,
    title: "Personalised Plans",
    subtitle: "No Two Patients Are Alike",
  },
  {
    icon: Clock,
    title: "8+ Years",
    subtitle: "Of Consistent Results",
  },
];

export default function WhyChoose() {
  return (
    <section id="why-choose" data-testid="why-choose-section" className="relative py-20 md:py-32 bg-[#FAFAFA]">
      <div className="gold-divider w-full absolute top-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 reveal">
          <span className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] font-medium">
            The TruDerm Difference
          </span>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-medium text-[#2C1A0E] mt-3">
            Why Patients Choose Us
          </h2>
          <div className="w-16 h-px bg-[#C9A84C] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {trustSignals.map((signal, i) => (
            <div
              key={i}
              className="reveal text-center p-6 md:p-8 group"
              style={{ transitionDelay: `${i * 80}ms` }}
              data-testid={`trust-signal-${i}`}
            >
              <div className="w-16 h-16 rounded-full bg-[#C9A84C]/8 mx-auto mb-4 flex items-center justify-center group-hover:bg-[#C9A84C] transition-colors duration-500">
                <signal.icon className="w-7 h-7 text-[#C9A84C] group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="font-['Playfair_Display'] text-lg md:text-xl text-[#2C1A0E] font-medium mb-1">
                {signal.title}
              </h3>
              <p className="text-[#5D4037] text-sm">
                {signal.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
