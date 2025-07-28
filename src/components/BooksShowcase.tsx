import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, BookOpen } from "lucide-react";
import { FlipBook } from "./FlipBook";
import { books, Book } from "@/data/books";

const BooksShowcase = () => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const handleBookPreview = (book: Book) => {
    setSelectedBook(book);
  };

  const handleCloseBook = () => {
    setSelectedBook(null);
  };

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {books.map((book) => (
            <Card key={book.id} className="group overflow-hidden hover:shadow-book transition-all duration-500 transform hover:-translate-y-2">
              {/* Book Image */}
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={book.coverImage}
                  alt={book.title}
                  className="w-full h-full object-contain bg-gradient-to-br from-amber-50 to-orange-100 p-4"
                />
                <Badge className="absolute top-4 left-4 bg-golden-warm text-foreground">
                  <BookOpen className="w-3 h-3 mr-1" />
                  {book.category}
                </Badge>
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
                  <Badge variant="secondary" className="text-xs">
                    {book.ageGroup}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">{book.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">by {book.author}</p>
                <p className="text-muted-foreground mb-4 line-clamp-3">{book.description}</p>

                {/* Actions */}
                <Button 
                  variant="default" 
                  size="sm" 
                  className="w-full"
                  onClick={() => handleBookPreview(book)}
                >
                  <BookOpen className="w-4 h-4 mr-1" />
                  Read Story
                </Button>
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

        {/* FlipBook Modal */}
        {selectedBook && (
          <FlipBook
            pages={selectedBook.pages}
            title={selectedBook.title}
            author={selectedBook.author}
            coverImage={selectedBook.coverImage}
            onClose={handleCloseBook}
          />
        )}
      </div>
    </section>
  );
};

export default BooksShowcase;