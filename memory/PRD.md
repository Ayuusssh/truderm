# TruDerm Skin Clinic - PRD

## Problem Statement
Luxury dermatology clinic website for TruDerm Skin Clinic (Dr. Nidhi Rana), Bhopal, India.

## Architecture
- **Frontend**: React + Tailwind CSS + Shadcn UI (single-page, section-based navigation)
- **Backend**: FastAPI + MongoDB (appointment booking API)
- **Components**: Navbar, Hero, About, Services, WhyChoose, Testimonials, RatingsBar, TreatmentSpotlight, Contact (Google Maps), Footer, AppointmentModal

## User Personas
- Patients (25-55) seeking premium dermatology in Bhopal
- Health-conscious individuals researching skin/hair treatments

## Core Requirements
- Elegant white + gold color palette
- Playfair Display + Lato typography
- Doctor's real photo integrated
- Appointment booking form with calendar & service dropdown
- Google Maps embed
- Fully responsive (mobile-first)
- Scroll-triggered animations

## What's Been Implemented (Dec 2025)
- Full single-page website with 9 sections
- Appointment booking (modal form → POST /api/appointments → MongoDB)
- Shadcn Dialog, Calendar, Select, Popover components used
- Mobile hamburger menu
- Gold shimmer animation, scroll reveal, hover effects
- Backend validation for required fields

## Prioritized Backlog
- P1: Admin panel to view/manage appointments
- P1: WhatsApp integration for appointment confirmations
- P2: Before/after treatment gallery
- P2: Blog/skin tips section
- P2: SEO meta tags optimization
- P3: Multi-language support (Hindi)
