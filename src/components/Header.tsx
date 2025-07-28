import { Button } from "@/components/ui/button";
import { BookOpen, Heart, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-nature rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Ketabi</h1>
              <p className="text-xs text-muted-foreground">Islamic Children's Books</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#books" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Our Books
            </a>
            <a href="#customize" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Customize
            </a>
            <a href="#authors" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              For Authors
            </a>
            <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Heart className="w-4 h-4" />
            </Button>
            <Button variant="magical" className="hidden md:flex">
              Shop Now
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;