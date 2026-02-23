import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ToursSection from "@/components/ToursSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <main className="font-body">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ToursSection />
      <WhyChooseUs />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <BookingSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default Index;
