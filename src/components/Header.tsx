import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/votre-situation", label: "Votre situation" },
  { href: "/notre-approche", label: "Notre approche" },
  { href: "/qui-sommes-nous", label: "Qui sommes-nous" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const scrollToSection = (href: string) => {
    if (href.startsWith("/#")) {
      const sectionId = href.replace("/#", "");
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* Top Bar with Contact Info - scrolls with page */}
      <div className="bg-navy text-primary-foreground py-2.5 hidden md:block border-b border-primary-foreground/10">
        <div className="container-wide flex items-center justify-between text-sm">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-primary-foreground/80">02, rue d'Auteuil, 75016 Paris</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-accent" />
              <a href="tel:0142301000" className="text-primary-foreground/80 hover:text-accent transition-colors">
                01.42.30.10.00
              </a>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/faq" className="text-primary-foreground/80 hover:text-accent transition-colors text-xs uppercase tracking-wide">
              FAQ
            </Link>
            <Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors text-xs uppercase tracking-wide">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header - sticky */}
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 bg-navy ${
          isScrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-18 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img src={logo} alt="Patrimoine Indivis" className="h-10 lg:h-12 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 ml-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => link.href.startsWith("/#") && scrollToSection(link.href)}
                  className={`text-sm font-medium transition-colors hover:text-accent tracking-wide whitespace-nowrap ${
                    location.pathname === link.href
                      ? "text-accent"
                      : "text-primary-foreground/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-primary-foreground/80 hover:text-accent hover:bg-transparent text-sm"
                asChild
              >
                <Link to="/contact#rappel">
                  <Phone className="w-4 h-4 mr-2" />
                  Être rappelé
                </Link>
              </Button>
              <Button variant="gold" size="sm" className="px-5" asChild>
                <Link to="/contact">Étude de rachat</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-primary-foreground hover:text-accent transition-colors"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-navy border-b border-primary-foreground/10 shadow-lg transition-all duration-300 ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <nav className="container-wide py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-base font-medium py-3 px-4 rounded-lg transition-colors hover:bg-primary-foreground/5 hover:text-accent ${
                  location.pathname === link.href
                    ? "text-accent bg-primary-foreground/5"
                    : "text-primary-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4 mt-4 border-t border-primary-foreground/10">
              <div className="flex items-center gap-2 px-4 text-primary-foreground/70">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-sm">02, rue d'Auteuil, 75016 Paris</span>
              </div>
              <div className="flex items-center gap-2 px-4 text-primary-foreground/70">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:0142301000" className="text-sm hover:text-accent">
                  01.42.30.10.00
                </a>
              </div>
              <div className="flex gap-3 mt-2">
                <Button variant="goldOutline" className="flex-1" asChild>
                  <Link to="/contact#rappel">Être rappelé</Link>
                </Button>
                <Button variant="gold" className="flex-1" asChild>
                  <Link to="/contact">Étude de rachat</Link>
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
