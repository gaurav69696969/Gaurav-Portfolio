import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react"; 
// Use a public URL for the PDF file
const pdf = "/Gaurav Kamal Resume 1.pdf";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-elegant border-b border-primary/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            GK
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}

            {/* Resume Button with Glow + Open PDF */}
            <a
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg bg-primary text-white shadow-lg animate-pulse hover:shadow-[0_0_15px_rgba(59,130,246,0.8)] transition-all"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>

            <Button
              variant="hero"
              size="sm"
              onClick={() => scrollToSection("contact")}
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-3 bg-background/80 backdrop-blur-md rounded-lg mt-2 border border-primary/20">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-6 py-2 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                {item.label}
              </button>
            ))}

            {/* Resume Button in Mobile Menu */}
            <a
              href={pdf} // ✅ same PDF link
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-6 py-2 text-center rounded-lg bg-primary text-white shadow-lg animate-pulse hover:shadow-[0_0_15px_rgba(59,130,246,0.8)] transition-all"
            >
              <Download className="w-4 h-4 inline mr-2" />
              Resume
            </a>

            <div className="px-6 pt-2">
              <Button
                variant="hero"
                size="sm"
                className="w-full"
                onClick={() => scrollToSection("contact")}
              >
                Hire Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
