import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    country: "United Kingdom",
    rating: 5,
    text: "An absolutely magical experience! The team at Ceylon Horizon made our honeymoon in Sri Lanka unforgettable. Every detail was perfectly planned.",
    initials: "SM",
  },
  {
    name: "Marco Rossi",
    country: "Italy",
    rating: 5,
    text: "From Sigiriya to Yala, every moment was extraordinary. Our guide was incredibly knowledgeable and passionate about sharing Sri Lanka's culture.",
    initials: "MR",
  },
  {
    name: "Emily Chen",
    country: "Australia",
    rating: 5,
    text: "The scenic train ride through Ella was a dream come true. Ceylon Horizon's attention to detail and personalized service exceeded all expectations.",
    initials: "EC",
  },
  {
    name: "James Peterson",
    country: "Canada",
    rating: 5,
    text: "Best vacation we've ever had! The wildlife safari was incredible and the beach resort was pure paradise. Highly recommend Ceylon Horizon!",
    initials: "JP",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-4xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sunset font-semibold tracking-[0.2em] uppercase text-sm mb-3">Testimonials</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Travelers Say
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border/50"
        >
          <Quote className="text-sunset/20 absolute top-6 left-6 md:top-8 md:left-8" size={48} />

          <div className="text-center">
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={20} className="fill-sunset text-sunset" />
              ))}
            </div>

            <p className="text-foreground text-lg md:text-xl leading-relaxed mb-8 italic font-display">
              "{t.text}"
            </p>

            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                {t.initials}
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-muted-foreground text-sm">{t.country}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current ? "bg-sunset w-6" : "bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
