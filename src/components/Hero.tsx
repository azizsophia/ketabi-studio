import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Star, BookOpen } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-soft overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-nature-mist px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 text-golden-warm" />
              <span className="text-sm font-medium text-foreground">Beautiful Islamic Children's Books</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6">
              Magical Stories for
              <span className="bg-gradient-nature bg-clip-text text-transparent"> Muslim Children</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Discover our collection of beautifully illustrated Islamic children's books that teach valuable lessons, 
              celebrate Islamic values, and create lasting memories for your family.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="magical" size="lg" className="group">
                Explore Our Books
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Learn About Us
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3</div>
                <div className="text-sm text-muted-foreground">Beautiful Stories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Islamic Values</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">Ages 4-9</div>
                <div className="text-sm text-muted-foreground">Perfect for Children</div>
              </div>
            </div>
          </div>
          
          {/* Book Preview */}
          <div className="relative">
            <div className="relative">
              {/* Main book mockup */}
              <Card className="p-8 bg-card shadow-book transform hover:rotate-2 transition-transform duration-500 animate-float-gentle">
                <img 
                  src="/books/juha-pumpkin-cover.svg"
                  alt="Juha and the Enormous Pumpkin"
                  className="w-full rounded-lg shadow-story"
                />
                <div className="mt-4 text-center">
                  <h3 className="font-semibold text-foreground">Juha and the Enormous Pumpkin</h3>
                  <p className="text-sm text-muted-foreground mt-1">A delightful story about sharing and community</p>
                </div>
              </Card>
              
              {/* Floating book preview */}
              <div className="absolute -right-4 -bottom-4 bg-golden-light p-4 rounded-xl shadow-story animate-float-gentle" style={{animationDelay: '1s'}}>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-foreground" />
                  <span className="text-sm font-medium text-foreground">Read stories online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;