import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent! ✨",
        description: "Thank you for reaching out. We'll get back to you within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sunset font-semibold tracking-[0.2em] uppercase text-sm mb-3">Get in Touch</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to plan your dream Sri Lankan adventure? We'd love to hear from you
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-8">Let's Start Planning</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-sunset/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-sunset" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Address</p>
                  <p className="text-muted-foreground">42 Galle Road, Colombo 03, Sri Lanka</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-sunset/10 flex items-center justify-center shrink-0">
                  <Phone className="text-sunset" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <p className="text-muted-foreground">+94 11 234 5678</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-sunset/10 flex items-center justify-center shrink-0">
                  <Mail className="text-sunset" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-muted-foreground">info@ceylonhorizon.lk</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <p className="font-semibold text-foreground mb-4">Follow Us</p>
              <div className="flex gap-3">
                {[Facebook, Instagram, Twitter].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:bg-ocean-light transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Your Name" required className="rounded-xl bg-card border-border/50 h-12" />
                <Input placeholder="Email Address" type="email" required className="rounded-xl bg-card border-border/50 h-12" />
              </div>
              <Input placeholder="Phone Number" type="tel" className="rounded-xl bg-card border-border/50 h-12" />
              <select
                className="w-full h-12 rounded-xl bg-card border border-border/50 px-4 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                defaultValue=""
              >
                <option value="" disabled>Select Tour Type</option>
                <option>Cultural & Heritage</option>
                <option>Beach & Coastal</option>
                <option>Wildlife Safari</option>
                <option>Adventure & Hiking</option>
                <option>Custom Package</option>
              </select>
              <Textarea
                placeholder="Your Message"
                rows={4}
                required
                className="rounded-xl bg-card border-border/50 resize-none"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-sunset hover:bg-sunset-light text-accent-foreground font-semibold py-6 rounded-full text-lg"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
