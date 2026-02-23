import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import aboutImg from "@/assets/about-landscape.jpg";

const stats = [
  { label: "Happy Travelers", value: 500, suffix: "+" },
  { label: "Tours Completed", value: 120, suffix: "+" },
  { label: "Destinations", value: 15, suffix: "+" },
  { label: "Years Experience", value: 10, suffix: "+" },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = value / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-display text-3xl md:text-4xl font-bold text-sunset">
      {count}{suffix}
    </span>
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-sand-gradient">
      <div className="container mx-auto" ref={ref}>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutImg}
                alt="Sri Lankan tea plantation landscape"
                className="w-full h-[400px] md:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sunset/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-tropical/20 rounded-2xl -z-10" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-sunset font-semibold tracking-[0.2em] uppercase text-sm mb-3">About Us</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Your Trusted Travel
              <br />
              Partner in <span className="text-tropical">Sri Lanka</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              At Ceylon Horizon Travels, we craft unforgettable experiences that showcase the
              best of Sri Lanka's rich culture, stunning landscapes, and warm hospitality.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With over a decade of local expertise, we offer personalized tour packages
              that cater to every traveler's dream — from ancient temples and misty highlands
              to pristine beaches and thrilling wildlife safaris.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <p className="text-muted-foreground text-sm mt-1 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
