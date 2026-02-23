import { useRef, useState, useEffect  } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const tourPackages = [
  "Sigiriya & Dambulla Adventure",
  "Ella Scenic Escape",
  "Southern Beach Getaway",
  "Cultural Triangle Tour",
  "Yala Safari Experience",
  "Knuckles Mountain Trek",
  "Mirissa Whale Watching",
  "Horton Plains Day Trip",
  "Kandy Temple & Heritage",
  "Udawalawe Elephant Safari",
  "East Coast Adventure",
  "Adam's Peak Pilgrimage",
  "Custom Package",
];

const BookingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");

  useEffect(() => {
    const handleSelectTour = (e: CustomEvent<string>) => {
      setSelectedPackage(e.detail);
    };
    window.addEventListener("select-tour-package", handleSelectTour as EventListener);
    return () => window.removeEventListener("select-tour-package", handleSelectTour as EventListener);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Booking Request Received! 🎉",
        description: "Our team will confirm your booking within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
      setSelectedPackage("");
    }, 1000);
  };

  return (
    <section id="booking" className="section-padding bg-ocean-gradient">
      <div className="container mx-auto max-w-3xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sunset font-semibold tracking-[0.2em] uppercase text-sm mb-3">Booking</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Book Your Adventure
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto">
            Fill in the form below and we'll craft the perfect Sri Lankan experience for you
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10 rounded-3xl p-8 md:p-10 space-y-5"
        >
          <select
            className="w-full h-12 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 px-4 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-sunset"
            value={selectedPackage}
            onChange={(e) => setSelectedPackage(e.target.value)}
            required
          >
            <option value="" disabled className="bg-background text-foreground">Select Tour Package</option>
            {tourPackages.map((pkg) => (
              <option key={pkg} value={pkg} className="bg-background text-foreground">{pkg}</option>
            ))}
          </select>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="relative">
              <Input
                type="date"
                required
                className="rounded-xl bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground h-12 [color-scheme:dark]"
              />
            </div>
            <select
              className="w-full h-12 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 px-4 text-primary-foreground focus:outline-none focus:ring-2 focus:ring-sunset"
              defaultValue=""
              required
            >
              <option value="" disabled className="bg-background text-foreground">Number of Guests</option>
              <option className="bg-background text-foreground">1 Guest</option>
              <option className="bg-background text-foreground">2 Guests</option>
              <option className="bg-background text-foreground">3-4 Guests</option>
              <option className="bg-background text-foreground">5-8 Guests</option>
              <option className="bg-background text-foreground">9+ Guests</option>
            </select>
          </div>

          <Textarea
            placeholder="Special Requests (optional)"
            rows={3}
            className="rounded-xl bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 resize-none"
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-sunset hover:bg-sunset-light text-accent-foreground font-semibold py-6 rounded-full text-lg"
          >
            {isSubmitting ? "Processing..." : "Book Now"}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default BookingSection;
