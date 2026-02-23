import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, MapPin, ChevronLeft, ChevronRight, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

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
    highlights: ["Climb the legendary Sigiriya Lion Rock fortress", "Explore Dambulla Cave Temple's ancient murals", "Village safari with traditional ox-cart ride", "Scenic views of the Cultural Triangle"],
  },
  {
    image: tourElla,
    name: "Ella Scenic Escape",
    duration: "4 Days / 3 Nights",
    description: "Ride the famous blue train through misty hills, tea plantations, and Nine Arches Bridge.",
    price: "$399",
    location: "Hill Country",
    highlights: ["Scenic blue train ride through tea country", "Visit the iconic Nine Arches Bridge", "Tea factory tour and tasting experience", "Hike to Little Adam's Peak at sunrise"],
  },
  {
    image: tourBeach,
    name: "Southern Beach Getaway",
    duration: "5 Days / 4 Nights",
    description: "Relax on pristine beaches, watch stilt fishermen, and explore coastal towns.",
    price: "$449",
    location: "Southern Coast",
    highlights: ["Relax on Unawatuna & Mirissa golden beaches", "Whale watching boat excursion", "Visit Galle Fort UNESCO World Heritage Site", "Watch traditional stilt fishermen at sunset"],
  },
  {
    image: tourCultural,
    name: "Cultural Triangle Tour",
    duration: "4 Days / 3 Nights",
    description: "Discover ancient kingdoms, sacred temples, and UNESCO World Heritage Sites.",
    price: "$379",
    location: "North Central",
    highlights: ["Explore Polonnaruwa ancient ruins by bicycle", "Visit the sacred Temple of the Tooth in Kandy", "Witness traditional Kandyan dance performance", "Tour a spice garden in Matale"],
  },
  {
    image: tourSafari,
    name: "Yala Safari Experience",
    duration: "3 Days / 2 Nights",
    description: "Spot leopards, elephants, and exotic birds in Sri Lanka's premier national park.",
    price: "$349",
    location: "Yala National Park",
    highlights: ["Morning & evening jeep safaris in Yala", "Spot leopards, elephants & sloth bears", "Bird watching with expert naturalist guide", "Camping under the stars experience"],
  },
];

const ToursSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedTour, setSelectedTour] = useState<(typeof tours)[0] | null>(null);

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
                    <Button
                      onClick={() => setSelectedTour(tour)}
                      className="w-full bg-primary hover:bg-ocean-light text-primary-foreground rounded-full font-semibold mt-auto"
                    >
                      View Details
                    </Button>
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

      {/* Tour Details Dialog */}
      <Dialog open={!!selectedTour} onOpenChange={(open) => !open && setSelectedTour(null)}>
        <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto p-0">
          {selectedTour && (
            <>
              <div className="relative h-64 overflow-hidden">
                <img
                  src={selectedTour.image}
                  alt={selectedTour.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-display font-bold text-white text-left">
                      {selectedTour.name}
                    </DialogTitle>
                    <DialogDescription className="text-white/80 text-left">
                      {selectedTour.location}
                    </DialogDescription>
                  </DialogHeader>
                </div>
                <div className="absolute top-4 right-12 bg-sunset text-accent-foreground font-bold px-5 py-2 rounded-full text-lg shadow-lg">
                  {selectedTour.price}
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div className="flex items-center gap-6 text-muted-foreground text-sm">
                  <span className="flex items-center gap-1.5"><Clock size={16} /> {selectedTour.duration}</span>
                  <span className="flex items-center gap-1.5"><MapPin size={16} /> {selectedTour.location}</span>
                </div>

                <div>
                  <h4 className="font-display font-semibold text-foreground mb-2">About This Tour</h4>
                  <p className="text-muted-foreground leading-relaxed">{selectedTour.description}</p>
                </div>

                <div>
                  <h4 className="font-display font-semibold text-foreground mb-3">Tour Highlights</h4>
                  <ul className="space-y-2.5">
                    {selectedTour.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-muted-foreground">
                        <CheckCircle size={16} className="text-sunset mt-0.5 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 pt-2">
                  <a
                    href="#booking"
                    className="flex-1"
                    onClick={() => {
                      setSelectedTour(null);
                      setTimeout(() => {
                        window.dispatchEvent(
                          new CustomEvent("select-tour-package", { detail: selectedTour!.name })
                        );
                      }, 100);
                    }}
                  >
                    <Button className="w-full bg-sunset hover:bg-sunset-light text-accent-foreground font-semibold py-6 rounded-full text-base">
                      Book Now
                    </Button>
                  </a>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ToursSection;
