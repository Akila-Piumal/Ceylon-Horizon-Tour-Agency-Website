import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Package, DollarSign, Headphones, Car, ShieldCheck } from "lucide-react";

const features = [
  { icon: Users, title: "Experienced Local Guides", description: "Knowledgeable guides who share authentic stories and hidden gems." },
  { icon: Package, title: "Custom Tour Packages", description: "Tailor-made itineraries designed around your interests and schedule." },
  { icon: DollarSign, title: "Affordable Pricing", description: "Premium experiences at competitive prices with no hidden fees." },
  { icon: Headphones, title: "24/7 Customer Support", description: "Round-the-clock assistance whenever you need us, anywhere." },
  { icon: Car, title: "Luxury Transport", description: "Comfortable, air-conditioned vehicles with professional drivers." },
  { icon: ShieldCheck, title: "Safe & Trusted Service", description: "Fully licensed and insured with thousands of happy travelers." },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-ocean-gradient">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sunset font-semibold tracking-[0.2em] uppercase text-sm mb-3">Why Us</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Why Choose Ceylon Horizon
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            We go above and beyond to make your Sri Lankan journey extraordinary
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 text-center hover:bg-primary-foreground/10 transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sunset/20 text-sunset mb-5 group-hover:scale-110 transition-transform duration-300">
                <feature.icon size={28} />
              </div>
              <h3 className="font-display text-xl font-bold text-primary-foreground mb-3">{feature.title}</h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
