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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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
    <div className="bg-navy">
      {/* Top Bar with Contact Info */}
      <div className="text-primary-foreground py-2 hidden md:block border-b border-primary-foreground/10">
        <div className="container-wide flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              <span className="text-primary-foreground/70 text-xs">02, rue d'Auteuil, 75016 Paris</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-accent" />
              <a href="tel:0142301000" className="text-primary-foreground/70 hover:text-accent transition-colors text-xs">
                01.42.30.10.00
              </a>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <Link to="/faq" className="text-primary-foreground/70 hover:text-accent transition-colors text-xs uppercase tracking-wide">
              FAQ
            </Link>
            <Link to="/contact" className="text-primary-foreground/70 hover:text-accent transition-colors text-xs uppercase tracking-wide">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="relative">
        <div className="container-wide">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img src={logo} alt="Patrimoine Indivis" className="h-9 lg:h-11 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7 ml-8">
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
          className={`lg:hidden absolute top-full left-0 right-0 bg-navy border-b border-primary-foreground/10 shadow-lg z-50 transition-all duration-300 ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <nav className="container-wide py-5 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-base font-medium py-2.5 px-4 rounded-lg transition-colors hover:bg-primary-foreground/5 hover:text-accent ${
                  location.pathname === link.href
                    ? "text-accent bg-primary-foreground/5"
                    : "text-primary-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4 mt-3 border-t border-primary-foreground/10">
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
    </div>
  );
}
