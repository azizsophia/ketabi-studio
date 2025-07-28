import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, BookOpen, Star, Users } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Islamic Values",
      description: "Every story is carefully crafted to teach authentic Islamic values and morals."
    },
    {
      icon: BookOpen,
      title: "Beautiful Illustrations",
      description: "Our books feature stunning artwork that brings stories to life and captivates young readers."
    },
    {
      icon: Star,
      title: "Quality Content",
      description: "We maintain the highest standards for educational content and storytelling excellence."
    }
  ];

  return (
    <section id="about" className="py-20 bg-nature-mist">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <Badge variant="outline" className="mb-4">
              <Heart className="w-4 h-4 mr-2" />
              About Ketabi Studio
            </Badge>
            
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Creating Beautiful <span className="text-primary">Islamic Stories</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              At Ketabi Studio, we believe every Muslim child deserves access to beautiful, 
              engaging stories that reflect their faith and values. Our mission is to create 
              high-quality Islamic children's books that inspire, educate, and bring families together.
            </p>

            {/* Values */}
            <div className="space-y-6 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="magical" size="lg">
              Explore Our Books
            </Button>
          </div>

          {/* Image and Stats */}
          <div className="relative">
            {/* Main Image */}
            <Card className="p-6 bg-gradient-soft">
              <img 
                src="/books/juha-pumpkin-cover.svg"
                alt="Juha and the Enormous Pumpkin"
                className="w-full rounded-lg shadow-story"
              />
            </Card>

            {/* Floating Stats */}
            <Card className="absolute -bottom-6 -left-6 p-6 bg-card shadow-book">
              <h4 className="font-semibold text-foreground mb-4">Our Commitment</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-xl font-bold text-primary">100%</div>
                  <div className="text-xs text-muted-foreground">Islamic Values</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-primary">Ages 1-16</div>
                  <div className="text-xs text-muted-foreground">For All Children</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-primary">Beautiful</div>
                  <div className="text-xs text-muted-foreground">Illustrations</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-primary">Publisher</div>
                  <div className="text-xs text-muted-foreground">Platform</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 