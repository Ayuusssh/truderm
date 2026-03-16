import { MapPin, Phone, Clock, Instagram } from "lucide-react";

export default function ContactSection({ onBookClick }) {
  return (
    <section id="contact" data-testid="contact-section" className="relative py-20 md:py-32 bg-white">
      <div className="gold-divider w-full absolute top-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 reveal">
          <span className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] font-medium">
            We'd Love to See You
          </span>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-medium text-[#2C1A0E] mt-3">
            Visit TruDerm
          </h2>
          <div className="w-16 h-px bg-[#C9A84C] mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="reveal rounded-lg overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-[#E8E4DE]" data-testid="google-maps">
            <iframe
              title="TruDerm Skin Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.8095774949047!2d77.43564327524978!3d23.198068079059587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f30cb68c1%3A0x15c1b01c8d8e43f6!2sSurendra%20Landmark!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-[350px] md:h-full min-h-[400px]"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="reveal">
            <div className="bg-[#FAFAFA] p-8 md:p-10 rounded-lg border border-[#E8E4DE] shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
              <h3 className="font-['Playfair_Display'] text-2xl text-[#2C1A0E] font-medium mb-8">
                Get In Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4" data-testid="contact-address">
                  <div className="w-10 h-10 rounded-full bg-[#C9A84C]/8 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="text-[#2C1A0E] font-semibold text-sm mb-1">Clinic Address</p>
                    <p className="text-[#5D4037] text-sm leading-relaxed">
                      1st Floor, E Block, Surendra Landmark,<br />
                      Narmadapuram Road, Misrod,<br />
                      Bhopal — 462026
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4" data-testid="contact-phone">
                  <div className="w-10 h-10 rounded-full bg-[#C9A84C]/8 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="text-[#2C1A0E] font-semibold text-sm mb-1">Call Us</p>
                    <a
                      href="tel:+919896254925"
                      className="text-[#C9A84C] text-sm font-medium hover:text-[#B8860B] transition-colors"
                    >
                      +91 98962 54925
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4" data-testid="contact-hours">
                  <div className="w-10 h-10 rounded-full bg-[#C9A84C]/8 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="text-[#2C1A0E] font-semibold text-sm mb-1">Clinic Hours</p>
                    <p className="text-[#5D4037] text-sm">
                      Monday: 12:00 PM onwards<br />
                      Tuesday — Sunday: Open
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4" data-testid="contact-instagram">
                  <div className="w-10 h-10 rounded-full bg-[#C9A84C]/8 flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="text-[#2C1A0E] font-semibold text-sm mb-1">Follow Us</p>
                    <a
                      href="https://instagram.com/drnidhi30"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#C9A84C] text-sm font-medium hover:text-[#B8860B] transition-colors"
                    >
                      @drnidhi30
                    </a>
                  </div>
                </div>
              </div>

              <div className="gold-divider my-8" />

              <button
                onClick={onBookClick}
                className="w-full bg-[#C9A84C] text-white py-4 rounded-full text-sm font-semibold tracking-wider uppercase hover:bg-[#B8860B] transition-all duration-300 shadow-[0_4px_20px_rgba(201,168,76,0.3)] hover:shadow-[0_8px_30px_rgba(201,168,76,0.4)]"
                data-testid="contact-book-appointment"
              >
                Book Your Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
