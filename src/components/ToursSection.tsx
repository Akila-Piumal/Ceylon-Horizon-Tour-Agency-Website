import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

import tourSigiriya from "@/assets/tour-sigiriya.jpg";
import tourElla from "@/assets/tour-ella.jpg";
import tourBeach from "@/assets/tour-beach.jpg";
import tourCultural from "@/assets/tour-cultural.jpg";
import tourSafari from "@/assets/tour-safari.jpg";

const tours = [
  {
    image: tourSigiriya,
    name: "Sigiriya & Dambulla Adventure",
    duration: "3 Days / 2 Nights",
    description: "Climb the iconic Lion Rock and explore ancient cave temples with breathtaking views.",
    price: "$299",
    location: "Central Province",
  },
  {
    image: tourElla,
    name: "Ella Scenic Escape",
    duration: "4 Days / 3 Nights",
    description: "Ride the famous blue train through misty hills, tea plantations, and Nine Arches Bridge.",
    price: "$399",
    location: "Hill Country",
  },
  {
    image: tourBeach,
    name: "Southern Beach Getaway",
    duration: "5 Days / 4 Nights",
    description: "Relax on pristine beaches, watch stilt fishermen, and explore coastal towns.",
    price: "$449",
    location: "Southern Coast",
  },
  {
    image: tourCultural,
    name: "Cultural Triangle Tour",
    duration: "4 Days / 3 Nights",
    description: "Discover ancient kingdoms, sacred temples, and UNESCO World Heritage Sites.",
    price: "$379",
    location: "North Central",
  },
  {
    image: tourSafari,
    name: "Yala Safari Experience",
    duration: "3 Days / 2 Nights",
    description: "Spot leopards, elephants, and exotic birds in Sri Lanka's premier national park.",
    price: "$349",
    location: "Yala National Park",
  },
];

const ToursSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tours" className="section-padding">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sunset font-semibold tracking-[0.2em] uppercase text-sm mb-3">Our Packages</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Popular Tour Packages
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Handcrafted itineraries designed to showcase the very best of Sri Lanka
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-6">
            {tours.map((tour, i) => (
              <CarouselItem key={tour.name} className="pl-6 sm:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-border/50 h-full flex flex-col"
                >
                  <div className="relative overflow-hidden h-56">
                    <img
                      src={tour.image}
                      alt={tour.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4 bg-sunset text-accent-foreground font-bold px-4 py-1.5 rounded-full text-sm shadow-lg">
                      {tour.price}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-display text-xl font-bold text-card-foreground mb-2">{tour.name}</h3>
                    <div className="flex items-center gap-4 text-muted-foreground text-sm mb-3">
                      <span className="flex items-center gap-1"><Clock size={14} /> {tour.duration}</span>
                      <span className="flex items-center gap-1"><MapPin size={14} /> {tour.location}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">{tour.description}</p>
                    <a href="#booking" className="mt-auto">
                      <Button className="w-full bg-primary hover:bg-ocean-light text-primary-foreground rounded-full font-semibold">
                        View Details
                      </Button>
                    </a>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="static translate-y-0 h-11 w-11 rounded-full border-border hover:bg-sunset hover:text-accent-foreground hover:border-sunset" />
            <CarouselNext className="static translate-y-0 h-11 w-11 rounded-full border-border hover:bg-sunset hover:text-accent-foreground hover:border-sunset" />
          </div>
        </Carousel>

        <div className="text-center mt-12">
          <a href="/tours">
            <Button className="bg-sunset hover:bg-sunset-light text-accent-foreground font-semibold px-10 py-3 rounded-full text-base">
              View All Packages
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ToursSection;
