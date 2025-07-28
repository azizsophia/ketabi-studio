import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, TrendingUp, Award, ArrowRight, Star, Heart } from "lucide-react";
import ContactForm from "./ContactForm";

const PublisherSection = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactFormType, setContactFormType] = useState<'subscription' | 'author'>('subscription');
  const [selectedPlan, setSelectedPlan] = useState<string>('');

  const handleSubscriptionClick = (planName: string) => {
    setContactFormType('subscription');
    setSelectedPlan(planName);
    setShowContactForm(true);
  };

  const handleAuthorClick = () => {
    setContactFormType('author');
    setShowContactForm(true);
  };

  const closeContactForm = () => {
    setShowContactForm(false);
  };

  const subscriptionPlans = [
    {
      name: "Family Plan",
      price: "$9.99",
      period: "month",
      features: [
        "Access to all current books",
        "New books added monthly",
        "Read on any device",
        "Family account (up to 5 children)",
        "Download for offline reading"
      ],
      popular: false
    },
    {
      name: "Premium Family",
      price: "$14.99",
      period: "month",
      features: [
        "Everything in Family Plan",
        "Exclusive author content",
        "Early access to new releases",
        "Personalized reading recommendations",
        "Priority customer support"
      ],
      popular: true
    }
  ];

  const authorBenefits = [
    {
      icon: Users,
      title: "Global Reach",
      description: "Connect with Muslim families worldwide through our established platform."
    },
    {
      icon: TrendingUp,
      title: "Revenue Sharing",
      description: "Earn royalties from subscription revenue and direct book sales."
    },
    {
      icon: Award,
      title: "Quality Support",
      description: "Professional editing, illustration, and marketing support."
    }
  ];

  return (
    <section id="publisher" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <BookOpen className="w-4 h-4 mr-2" />
            Islamic Publishing Platform
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            The Future of <span className="text-primary">Islamic Children's Books</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join our innovative subscription platform where families discover amazing Islamic stories 
            and authors reach a global audience. We're building the world's best Islamic children's book ecosystem.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Subscription Plans */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
              <Heart className="w-6 h-6 text-primary" />
              For Families
            </h3>
            
            <div className="space-y-6">
              {subscriptionPlans.map((plan, index) => (
                <Card key={index} className={`p-6 relative ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-6 bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  )}
                  
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-foreground">{plan.name}</h4>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-primary">{plan.price}</div>
                      <div className="text-sm text-muted-foreground">per {plan.period}</div>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Star className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={plan.popular ? "default" : "outline"} 
                    className="w-full"
                    size="lg"
                    onClick={() => handleSubscriptionClick(plan.name)}
                  >
                    Start {plan.name}
                  </Button>
                </Card>
              ))}
            </div>
          </div>

          {/* For Authors */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
              <Users className="w-6 h-6 text-primary" />
              For Authors
            </h3>
            
            <Card className="p-8 bg-gradient-soft mb-8">
              <h4 className="text-xl font-bold text-foreground mb-4">
                Partner with Ketabi Studio
              </h4>
              <p className="text-muted-foreground mb-6">
                Are you an author or illustrator with beautiful Islamic stories to share? 
                Join our publishing platform and help shape the next generation of Muslim children.
              </p>
              
              <div className="space-y-4 mb-6">
                {authorBenefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground mb-1">{benefit.title}</h5>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button variant="magical" size="lg" className="w-full group" onClick={handleAuthorClick}>
                Apply to Publish
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">Live Now</div>
                <div className="text-sm text-muted-foreground">Author Platform</div>
              </Card>
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">Available</div>
                <div className="text-sm text-muted-foreground">Subscription Service</div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <ContactForm
          type={contactFormType}
          planName={selectedPlan}
          onClose={closeContactForm}
        />
      )}
    </section>
  );
};

export default PublisherSection; 