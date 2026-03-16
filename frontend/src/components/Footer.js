import { Instagram } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer data-testid="footer" className="relative bg-[#1A1008] text-white/80">
      <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-10 md:gap-16">
          <div>
            <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-white mb-3">
              Tru<span className="text-[#C9A84C]">Derm</span>
            </h3>
            <p className="text-white/40 text-sm leading-relaxed">
              Where dermatology meets artistry. Every treatment is designed around you — 
              your skin, your story, your confidence.
            </p>
          </div>

          <div>
            <h4 className="text-[#C9A84C] text-xs uppercase tracking-[0.2em] font-semibold mb-4">
              Quick Links
            </h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className="block text-white/50 text-sm hover:text-[#C9A84C] transition-colors duration-300"
                  data-testid={`footer-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[#C9A84C] text-xs uppercase tracking-[0.2em] font-semibold mb-4">
              Connect With Us
            </h4>
            <p className="text-white/40 text-sm mb-4">
              Skin tips, patient transformations, and clinic updates.
            </p>
            <a
              href="https://instagram.com/drnidhi30"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C9A84C]/10 border border-[#C9A84C]/25 px-4 py-2.5 rounded-full text-[#C9A84C] text-sm hover:bg-[#C9A84C]/20 transition-all duration-300"
              data-testid="footer-instagram"
            >
              <Instagram className="w-4 h-4" />
              @drnidhi30
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; 2025 TruDerm Skin Clinic. All Rights Reserved.
          </p>
          <p className="text-white/20 text-xs">
            Dr. Nidhi Rana Skin Clinic &middot; Bhopal, India
          </p>
        </div>
      </div>
    </footer>
  );
}
