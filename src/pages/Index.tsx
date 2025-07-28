import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BooksShowcase from "@/components/BooksShowcase";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <BooksShowcase />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
