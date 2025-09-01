import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <About />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-primary/20 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Gaurav Kamal. Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </footer>
      
      <ScrollToTop />
    </div>
  );
};

export default Index;
