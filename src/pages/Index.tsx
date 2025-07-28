import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BooksShowcase from "@/components/BooksShowcase";
import AboutSection from "@/components/AboutSection";
import PublisherSection from "@/components/PublisherSection";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <BooksShowcase />
      <AboutSection />
      <PublisherSection />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
