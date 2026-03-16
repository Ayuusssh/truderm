import { Award, Building2, Stethoscope, GraduationCap } from "lucide-react";

const DOCTOR_IMAGE = "https://customer-assets.emergentagent.com/job_skin-clinic-bhopal/artifacts/xwu6tfna_image.png";

const credentials = [
  { icon: GraduationCap, text: "MBBS, MD (Dermatology, Venereology & Leprosy)" },
  { icon: Stethoscope, text: "8+ Years of Clinical Excellence" },
  { icon: Building2, text: "Former Consultant — AIIMS Delhi, Kaya Skin Clinic, Skin Behl Delhi" },
  { icon: Award, text: "Board Certified Dermatologist, Cosmetologist & Laser Surgeon" },
];

export default function AboutDoctor() {
  return (
    <section id="about" data-testid="about-section" className="relative py-20 md:py-32 bg-[#FAFAFA]">
      <div className="gold-divider w-full absolute top-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 reveal">
          <span className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] font-medium">
            The Doctor Behind TruDerm
          </span>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-medium text-[#2C1A0E] mt-3">
            Dr. Nidhi Rana
          </h2>
          <div className="w-16 h-px bg-[#C9A84C] mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="reveal flex justify-center">
            <div className="relative">
              <div className="absolute -inset-3 border border-[#C9A84C]/20 rounded-lg" />
              <div className="absolute -inset-1.5 border border-[#C9A84C]/10 rounded-lg" />
              <img
                src={DOCTOR_IMAGE}
                alt="Dr. Nidhi Rana - TruDerm Skin Clinic"
                className="relative w-full max-w-md rounded-lg shadow-[0_10px_40px_rgba(0,0,0,0.08)] object-cover"
                data-testid="doctor-image"
              />
              <div className="absolute -bottom-4 -right-4 bg-[#C9A84C] text-white px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase shadow-lg">
                Founder, TruDerm
              </div>
            </div>
          </div>

          <div className="reveal">
            <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#2C1A0E] font-medium mb-6">
              Where Medical Precision Meets Compassionate Care
            </h3>
            <p className="text-[#5D4037] text-base md:text-lg leading-relaxed mb-8">
              Trained at India's most prestigious institutions and refined through thousands of 
              patient transformations, Dr. Nidhi Rana doesn't just treat skin — she understands it. 
              Every consultation at TruDerm begins with listening, because the best outcomes start 
              with understanding the person behind the concern.
            </p>

            <div className="space-y-4 mb-8">
              {credentials.map((cred, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <cred.icon className="w-4 h-4 text-[#C9A84C]" />
                  </div>
                  <span className="text-[#5D4037] text-sm md:text-base">{cred.text}</span>
                </div>
              ))}
            </div>

            <blockquote className="border-l-2 border-[#C9A84C] pl-6 py-2" data-testid="doctor-quote">
              <p className="font-['Playfair_Display'] italic text-[#2C1A0E] text-base md:text-lg">
                "I believe every patient deserves treatments that are not just effective, 
                but safe, honest, and tailored to who they are."
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
