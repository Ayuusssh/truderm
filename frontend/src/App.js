import { useState, useEffect, useCallback } from "react";
import "@/App.css";
import axios from "axios";
import { Toaster, toast } from "sonner";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutDoctor from "@/components/AboutDoctor";
import ServicesSection from "@/components/ServicesSection";
import WhyChoose from "@/components/WhyChoose";
import RatingsBar from "@/components/RatingsBar";
import TreatmentSpotlight from "@/components/TreatmentSpotlight";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AppointmentModal from "@/components/AppointmentModal";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleBookAppointment = useCallback(async (formData) => {
    setIsSubmitting(true);
    try {
      await axios.post(`${API}/appointments`, formData);
      toast.success("Appointment booked successfully! We'll contact you shortly.");
      setIsModalOpen(false);
    } catch (err) {
      toast.error("Failed to book appointment. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white" data-testid="truderm-app">
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            fontFamily: "'Lato', sans-serif",
            background: "#FFFFFF",
            border: "1px solid rgba(201,168,76,0.25)",
            color: "#2C1A0E",
          },
        }}
      />
      <Navbar onBookClick={() => setIsModalOpen(true)} />
      <HeroSection onBookClick={() => setIsModalOpen(true)} />
      <AboutDoctor />
      <ServicesSection />
      <WhyChoose />
      <TestimonialsSection />
      <RatingsBar />
      <TreatmentSpotlight />
      <ContactSection onBookClick={() => setIsModalOpen(true)} />
      <Footer />
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleBookAppointment}
        isSubmitting={isSubmitting}
      />
    </div>
  );
}

export default App;
