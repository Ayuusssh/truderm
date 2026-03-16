import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar({ onBookClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollTo = (href) => {
    setMobileOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.06)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); scrollTo("#hero"); }}
          className="flex items-center gap-2"
          data-testid="nav-logo"
        >
          <span className="font-['Playfair_Display'] text-xl md:text-2xl font-semibold text-[#2C1A0E]">
            Tru<span className="text-[#C9A84C]">Derm</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              className="text-[#5D4037] hover:text-[#C9A84C] text-sm font-medium tracking-wide uppercase transition-colors duration-300"
              data-testid={`nav-link-${link.label.toLowerCase()}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+919896254925"
            className="flex items-center gap-1.5 text-[#C9A84C] text-sm font-medium"
            data-testid="nav-phone"
          >
            <Phone className="w-3.5 h-3.5" />
            +91 98962 54925
          </a>
          <button
            onClick={onBookClick}
            className="bg-[#C9A84C] text-white px-6 py-2.5 rounded-full text-sm font-medium tracking-wide hover:bg-[#B8860B] transition-all duration-300 shadow-lg hover:shadow-xl"
            data-testid="nav-book-appointment"
          >
            Book Appointment
          </button>
        </div>

        <button
          className="md:hidden text-[#2C1A0E]"
          onClick={() => setMobileOpen(!mobileOpen)}
          data-testid="mobile-menu-toggle"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/98 backdrop-blur-lg border-t border-[#C9A84C]/10 shadow-lg" data-testid="mobile-menu">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className="text-[#5D4037] hover:text-[#C9A84C] text-base font-medium py-2 border-b border-[#C9A84C]/10"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => { setMobileOpen(false); onBookClick(); }}
              className="bg-[#C9A84C] text-white px-6 py-3 rounded-full text-sm font-medium tracking-wide hover:bg-[#B8860B] transition-all duration-300 mt-2"
              data-testid="mobile-book-appointment"
            >
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
