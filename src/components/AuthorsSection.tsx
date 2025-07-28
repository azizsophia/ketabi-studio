import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PenTool, Users, TrendingUp, Award, ArrowRight } from "lucide-react";

const AuthorsSection = () => {
  const benefits = [
    {
      icon: Users,
      title: "Growing Community",
      description: "Join our community of Islamic children's book authors reaching thousands of families worldwide."
    },
    {
      icon: TrendingUp,
      title: "Proven Sales Platform",
      description: "Our platform has helped authors increase their reach and sales with targeted marketing to Muslim families."
    },
    {
      icon: Award,
      title: "Quality Standards",
      description: "We maintain high standards for content and illustration quality while preserving authentic Islamic values."
    }
  ];

  const stats = [
    { number: "150+", label: "Published Authors" },
    { number: "50K+", label: "Books Sold" },
    { number: "95%", label: "Author Satisfaction" },
    { number: "30+", label: "Countries Reached" }
  ];

  return (
    <section id="authors" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <Badge variant="outline" className="mb-4">
              <PenTool className="w-4 h-4 mr-2" />
              For Authors
            </Badge>
            
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Share Your Stories with the <span className="text-primary">Ummah</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Are you an author or illustrator with beautiful Islamic stories to share? 
              Join our publishing platform and help shape the next generation of Muslim children through your creativity.
            </p>

            {/* Benefits */}
            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="magical" size="lg" className="group">
                Apply to Publish
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          {/* Stats and Image */}
          <div className="relative">
            {/* Main Image */}
            <Card className="p-6 bg-gradient-soft">
              <img 
                src="/lovable-uploads/d81ee3c7-18ff-4c20-8860-2028faeffde5.png"
                alt="Children reading together"
                className="w-full rounded-lg shadow-story"
              />
            </Card>

            {/* Floating Stats */}
            <Card className="absolute -bottom-6 -left-6 p-6 bg-card shadow-book">
              <h4 className="font-semibold text-foreground mb-4">Platform Impact</h4>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xl font-bold text-primary">{stat.number}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorsSection;