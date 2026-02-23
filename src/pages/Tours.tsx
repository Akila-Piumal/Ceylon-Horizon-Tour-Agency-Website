import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, MapPin, ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

import tourSigiriya from "@/assets/tour-sigiriya.jpg";
import tourElla from "@/assets/tour-ella.jpg";
import tourBeach from "@/assets/tour-beach.jpg";
import tourCultural from "@/assets/tour-cultural.jpg";
import tourSafari from "@/assets/tour-safari.jpg";

const allTours = [
  {
    image: tourSigiriya,
    name: "Sigiriya & Dambulla Adventure",
    duration: "3 Days / 2 Nights",
    durationDays: 3,
    description: "Climb the iconic Lion Rock and explore ancient cave temples with breathtaking views.",
    price: "$299",
    location: "Central Province",
    category: "Cultural",
  },
  {
    image: tourElla,
    name: "Ella Scenic Escape",
    duration: "4 Days / 3 Nights",
    durationDays: 4,
    description: "Ride the famous blue train through misty hills, tea plantations, and Nine Arches Bridge.",
    price: "$399",
    location: "Hill Country",
    category: "Nature",
  },
  {
    image: tourBeach,
    name: "Southern Beach Getaway",
    duration: "5 Days / 4 Nights",
    durationDays: 5,
    description: "Relax on pristine beaches, watch stilt fishermen, and explore coastal towns.",
    price: "$449",
    location: "Southern Coast",
    category: "Beach",
  },
  {
    image: tourCultural,
    name: "Cultural Triangle Tour",
    duration: "4 Days / 3 Nights",
    durationDays: 4,
    description: "Discover ancient kingdoms, sacred temples, and UNESCO World Heritage Sites.",
    price: "$379",
    location: "North Central",
    category: "Cultural",
  },
  {
    image: tourSafari,
    name: "Yala Safari Experience",
    duration: "3 Days / 2 Nights",
    durationDays: 3,
    description: "Spot leopards, elephants, and exotic birds in Sri Lanka's premier national park.",
    price: "$349",
    location: "Yala National Park",
    category: "Wildlife",
  },
  {
    image: tourSigiriya,
    name: "Knuckles Mountain Trek",
    duration: "2 Days / 1 Night",
    durationDays: 2,
    description: "Hike through the stunning Knuckles Mountain Range with panoramic views and waterfalls.",
    price: "$249",
    location: "Knuckles Range",
    category: "Adventure",
  },
  {
    image: tourBeach,
    name: "Mirissa Whale Watching",
    duration: "1 Day",
    durationDays: 1,
    description: "Witness majestic blue whales and playful dolphins off the southern coast.",
    price: "$129",
    location: "Mirissa",
    category: "Wildlife",
  },
  {
    image: tourElla,
    name: "Horton Plains Day Trip",
    duration: "1 Day",
    durationDays: 1,
    description: "Explore World's End cliff and Baker's Falls in this stunning highland plateau.",
    price: "$99",
    location: "Nuwara Eliya",
    category: "Nature",
  },
  {
    image: tourCultural,
    name: "Kandy Temple & Heritage",
    duration: "2 Days / 1 Night",
    durationDays: 2,
    description: "Visit the sacred Temple of the Tooth and experience traditional Kandyan dance.",
    price: "$199",
    location: "Kandy",
    category: "Cultural",
  },
  {
    image: tourSafari,
    name: "Udawalawe Elephant Safari",
    duration: "1 Day",
    durationDays: 1,
    description: "Get up close with wild elephants in their natural habitat at Udawalawe National Park.",
    price: "$119",
    location: "Udawalawe",
    category: "Wildlife",
  },
  {
    image: tourBeach,
    name: "East Coast Adventure",
    duration: "4 Days / 3 Nights",
    durationDays: 4,
    description: "Surf the waves of Arugam Bay and explore the untouched eastern beaches.",
    price: "$429",
    location: "East Coast",
    category: "Beach",
  },
  {
    image: tourSigiriya,
    name: "Adam's Peak Pilgrimage",
    duration: "2 Days / 1 Night",
    durationDays: 2,
    description: "Climb the sacred Adam's Peak for a breathtaking sunrise above the clouds.",
    price: "$179",
    location: "Ratnapura",
    category: "Adventure",
  },
];

const categories = ["All", "Cultural", "Beach", "Wildlife", "Adventure", "Nature"];
const durations = ["All", "1 Day", "2 Days", "3+ Days"];

const Tours = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDuration, setSelectedDuration] = useState("All");

  const filteredTours = allTours.filter((tour) => {
    const catMatch = selectedCategory === "All" || tour.category === selectedCategory;
    const durMatch =
      selectedDuration === "All" ||
      (selectedDuration === "1 Day" && tour.durationDays === 1) ||
      (selectedDuration === "2 Days" && tour.durationDays === 2) ||
      (selectedDuration === "3+ Days" && tour.durationDays >= 3);
    return catMatch && durMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-ocean-gradient py-24 md:py-32 px-4">
        <div className="container mx-auto text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Back to Home</span>
          </a>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            All Tour Packages
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Browse our complete collection of handcrafted Sri Lankan adventures
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 md:px-8 -mt-8">
        <div className="bg-card rounded-2xl shadow-lg border border-border/50 p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Category Filter */}
            <div className="flex-1">
              <p className="text-sm font-semibold text-foreground mb-3 tracking-wide uppercase">Category</p>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === cat
                        ? "bg-sunset text-accent-foreground shadow-md"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Duration Filter */}
            <div className="flex-1">
              <p className="text-sm font-semibold text-foreground mb-3 tracking-wide uppercase">Duration</p>
              <div className="flex flex-wrap gap-2">
                {durations.map((dur) => (
                  <button
                    key={dur}
                    onClick={() => setSelectedDuration(dur)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedDuration === dur
                        ? "bg-sunset text-accent-foreground shadow-md"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {dur}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="container mx-auto px-4 md:px-8 py-12">
        <p className="text-muted-foreground mb-8">
          Showing <span className="font-semibold text-foreground">{filteredTours.length}</span> tour
          {filteredTours.length !== 1 ? "s" : ""}
        </p>

        {filteredTours.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No tours match your filters. Try adjusting your selection.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour, i) => (
              <motion.div
                key={tour.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-border/50 flex flex-col"
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
                  <div className="absolute top-4 left-4 bg-primary/80 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {tour.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-xl font-bold text-card-foreground mb-2">{tour.name}</h3>
                  <div className="flex items-center gap-4 text-muted-foreground text-sm mb-3">
                    <span className="flex items-center gap-1">
                      <Clock size={14} /> {tour.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} /> {tour.location}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{tour.description}</p>
                  <a href="/#booking" className="mt-auto">
                    <Button className="w-full bg-primary hover:bg-ocean-light text-primary-foreground rounded-full font-semibold">
                      Book This Tour
                    </Button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Tours;