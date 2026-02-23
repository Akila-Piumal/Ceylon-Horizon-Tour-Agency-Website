import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/60" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sunset font-semibold tracking-[0.3em] uppercase text-sm md:text-base mb-4"
        >
          Welcome to Sri Lanka
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6"
        >
          Discover the Beauty
          <br />
          <span className="text-sand">of Sri Lanka</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body"
        >
          Unforgettable journeys. Authentic experiences. Luxury comfort.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#tours">
            <Button className="bg-sunset hover:bg-sunset-light text-accent-foreground font-semibold px-8 py-6 text-lg rounded-full">
              Explore Tours
            </Button>
          </a>
          <a href="#booking">
            <Button
              variant="outline"
              className="border-2 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 py-6 text-lg rounded-full bg-transparent"
            >
              Book Now
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
