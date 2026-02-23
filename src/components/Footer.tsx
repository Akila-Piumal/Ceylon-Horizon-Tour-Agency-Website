import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Tour Packages", href: "#tours" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
  { label: "Book Now", href: "#booking" },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">
              Ceylon<span className="text-sunset">Horizon</span>
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Your premier travel partner for unforgettable Sri Lankan experiences. Crafting luxury journeys since 2014.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-sunset transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-primary-foreground/70 hover:text-sunset text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tour Types */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Tour Types</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/70">
              <li>Cultural & Heritage</li>
              <li>Beach & Coastal</li>
              <li>Wildlife Safari</li>
              <li>Adventure & Hiking</li>
              <li>Wellness & Ayurveda</li>
              <li>Honeymoon Packages</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <p className="flex items-start gap-2"><MapPin size={16} className="shrink-0 mt-0.5 text-sunset" /> 42 Galle Road, Colombo 03, Sri Lanka</p>
              <p className="flex items-center gap-2"><Phone size={16} className="text-sunset" /> +94 11 234 5678</p>
              <p className="flex items-center gap-2"><Mail size={16} className="text-sunset" /> info@ceylonhorizon.lk</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 md:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-primary-foreground/50 text-sm">
            © 2024 Ceylon Horizon Travels. All rights reserved.
          </p>
          <p className="text-primary-foreground/50 text-sm">
            Crafted with ❤️ in Sri Lanka
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
