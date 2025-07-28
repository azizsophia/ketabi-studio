import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BooksShowcase from "@/components/BooksShowcase";
import CustomizationSection from "@/components/CustomizationSection";
import AuthorsSection from "@/components/AuthorsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <BooksShowcase />
      <CustomizationSection />
      <AuthorsSection />
      <Footer />
    </div>
  );
};

export default Index;
