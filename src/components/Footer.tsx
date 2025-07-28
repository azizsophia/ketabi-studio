import { Button } from "@/components/ui/button";
import { BookOpen, Heart, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Ketabi</h3>
                <p className="text-sm opacity-80">Islamic Children's Books</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Creating magical, personalized Islamic stories that inspire young hearts 
              and minds with beautiful values and teachings.
            </p>
            <div className="flex gap-4">
              <Button variant="secondary" size="sm">
                <Heart className="w-4 h-4 mr-2" />
                Made with Love
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#books" className="opacity-80 hover:opacity-100 transition-opacity">Our Books</a></li>
              <li><a href="#customize" className="opacity-80 hover:opacity-100 transition-opacity">Customize</a></li>
              <li><a href="#authors" className="opacity-80 hover:opacity-100 transition-opacity">For Authors</a></li>
              <li><a href="#about" className="opacity-80 hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 opacity-80">
                <Mail className="w-4 h-4" />
                <span>hello@ketabi.com</span>
              </div>
              <div className="flex items-center gap-2 opacity-80">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 opacity-80">
                <MapPin className="w-4 h-4" />
                <span>Serving families worldwide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-80">
            © 2024 Ketabi. All rights reserved. Made with love for Muslim families.
          </p>
          <div className="flex gap-6 text-sm mt-4 md:mt-0">
            <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Terms of Service</a>
            <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;