import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarDays, Loader2 } from "lucide-react";
import { format } from "date-fns";

const serviceOptions = [
  "Acne Treatment",
  "Chemical Peel (Carbon)",
  "Chemical Peel (Yellow)",
  "Pigmentation Correction",
  "Skin Allergies",
  "Scar Reduction",
  "Hair Fall Treatment",
  "Hair Growth Therapy",
  "PRP Therapy",
  "Laser Hair Removal",
  "Laser Skin Rejuvenation",
  "Anti-aging Treatment",
  "Skin Rejuvenation",
  "Cosmetic Dermatology",
  "General Consultation",
];

export default function AppointmentModal({ isOpen, onClose, onSubmit, isSubmitting }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState(undefined);
  const [message, setMessage] = useState("");
  const [calendarOpen, setCalendarOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !service || !date) return;
    onSubmit({
      name,
      phone,
      service,
      preferred_date: format(date, "yyyy-MM-dd"),
      message,
    });
    // Reset form
    setName("");
    setPhone("");
    setService("");
    setDate(undefined);
    setMessage("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="bg-white border-[#C9A84C]/15 max-w-md sm:max-w-lg"
        data-testid="appointment-modal"
      >
        <DialogHeader>
          <DialogTitle className="font-['Playfair_Display'] text-2xl text-[#2C1A0E] font-medium text-center">
            Book Your Appointment
          </DialogTitle>
          <DialogDescription className="text-[#5D4037] text-center text-sm">
            Share your details below and our team will confirm your visit within hours.
          </DialogDescription>
        </DialogHeader>

        {/* Gold divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent my-1" />

        <form onSubmit={handleSubmit} className="space-y-5" data-testid="appointment-form">
          {/* Name */}
          <div>
            <label className="text-[#2C1A0E] text-sm font-medium mb-1.5 block">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              required
              className="w-full bg-transparent border-b border-[#C9A84C]/40 focus:border-[#C9A84C] px-0 py-2.5 text-[#2C1A0E] text-sm outline-none transition-colors placeholder:text-[#5D4037]/40"
              data-testid="appointment-name"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-[#2C1A0E] text-sm font-medium mb-1.5 block">
              Phone Number
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 XXXXX XXXXX"
              required
              className="w-full bg-transparent border-b border-[#C9A84C]/40 focus:border-[#C9A84C] px-0 py-2.5 text-[#2C1A0E] text-sm outline-none transition-colors placeholder:text-[#5D4037]/40"
              data-testid="appointment-phone"
            />
          </div>

          {/* Service */}
          <div>
            <label className="text-[#2C1A0E] text-sm font-medium mb-1.5 block">
              Service Required
            </label>
            <Select value={service} onValueChange={setService} required>
              <SelectTrigger
                className="w-full border-0 border-b border-[#C9A84C]/40 rounded-none bg-transparent px-0 py-2.5 text-sm focus:ring-0 focus:border-[#C9A84C] h-auto shadow-none"
                data-testid="appointment-service-trigger"
              >
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent className="bg-white border-[#C9A84C]/15" data-testid="appointment-service-dropdown">
                {serviceOptions.map((s) => (
                  <SelectItem key={s} value={s} className="text-[#2C1A0E] text-sm focus:bg-[#F7E7CE] focus:text-[#2C1A0E]">
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Date */}
          <div>
            <label className="text-[#2C1A0E] text-sm font-medium mb-1.5 block">
              Preferred Date
            </label>
            <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  className="w-full flex items-center justify-between border-b border-[#C9A84C]/40 focus:border-[#C9A84C] px-0 py-2.5 text-sm outline-none transition-colors text-left"
                  data-testid="appointment-date-trigger"
                >
                  <span className={date ? "text-[#2C1A0E]" : "text-[#5D4037]/40"}>
                    {date ? format(date, "PPP") : "Select a date"}
                  </span>
                  <CalendarDays className="w-4 h-4 text-[#C9A84C]" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-white border-[#C9A84C]/15" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(d) => { setDate(d); setCalendarOpen(false); }}
                  disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                  className="truderm-calendar"
                  data-testid="appointment-calendar"
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Message */}
          <div>
            <label className="text-[#2C1A0E] text-sm font-medium mb-1.5 block">
              Message <span className="text-[#5D4037]/40">(optional)</span>
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Any specific concerns or questions..."
              rows={2}
              className="w-full bg-transparent border-b border-[#C9A84C]/40 focus:border-[#C9A84C] px-0 py-2.5 text-[#2C1A0E] text-sm outline-none transition-colors resize-none placeholder:text-[#5D4037]/40"
              data-testid="appointment-message"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting || !name || !phone || !service || !date}
            className="w-full bg-[#C9A84C] text-white py-3.5 rounded-full text-sm font-semibold tracking-wider uppercase hover:bg-[#B8860B] transition-all duration-300 shadow-[0_4px_20px_rgba(201,168,76,0.3)] hover:shadow-[0_8px_30px_rgba(201,168,76,0.4)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            data-testid="appointment-submit"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Booking...
              </>
            ) : (
              "Confirm Appointment"
            )}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
