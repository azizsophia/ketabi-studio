import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Palette, BookOpen, Star } from "lucide-react";

const BooksShowcase = () => {
  const books = [
    {
      id: 1,
      title: "My Islamic Adventure",
      description: "A personalized journey where your child learns beautiful Islamic values through exciting adventures.",
      image: "/lovable-uploads/368c4389-ea15-48d5-91e9-081e76d7509c.png",
      customizable: true,
      price: "$24.99",
      rating: 4.9,
      features: ["Custom Name", "Skin Tone Options", "Hair & Eye Colors", "Islamic Values"]
    },
    {
      id: 2,
      title: "Stories from the Garden",
      description: "Beautiful tales of friendship, kindness, and Islamic teachings set in magical garden settings.",
      image: "/lovable-uploads/51c80f0c-cf81-4a33-b684-477ad3aeb4b5.png",
      customizable: false,
      price: "$19.99",
      rating: 4.8,
      features: ["Islamic Stories", "Beautiful Illustrations", "Moral Lessons", "Age 3-8"]
    }
  ];

  return (
    <section id="books" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Our Collection
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Magical Books for <span className="text-primary">Muslim Children</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully crafted collection of Islamic children's books that inspire, educate, and entertain.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {books.map((book) => (
            <Card key={book.id} className="group overflow-hidden hover:shadow-book transition-all duration-500 transform hover:-translate-y-2">
              {/* Book Image */}
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {book.customizable && (
                  <Badge className="absolute top-4 left-4 bg-golden-warm text-foreground">
                    <Palette className="w-3 h-3 mr-1" />
                    Customizable
                  </Badge>
                )}
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="absolute top-4 right-4 bg-background/80 hover:bg-background"
                >
                  <Heart className="w-4 h-4" />
                </Button>
              </div>

              {/* Book Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(book.rating) ? 'text-golden-warm fill-current' : 'text-muted-foreground'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({book.rating})</span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">{book.title}</h3>
                <p className="text-muted-foreground mb-4">{book.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {book.features.map((feature) => (
                    <Badge key={feature} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                {/* Price and Actions */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary">{book.price}</div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <BookOpen className="w-4 h-4 mr-1" />
                      Preview
                    </Button>
                    <Button variant={book.customizable ? "magical" : "default"} size="sm">
                      {book.customizable ? "Customize" : "Order Now"}
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Books
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BooksShowcase;