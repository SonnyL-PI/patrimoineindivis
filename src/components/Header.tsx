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
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Main Header - Fixed */}
      <header
        className={`fixed top-0 left-0 right-0 z-[9999] bg-navy transition-all duration-300 ${
          isScrolled 
            ? "shadow-lg shadow-black/20" 
            : ""
        }`}
      >
        {/* Premium gold separator */}
        <div className="absolute bottom-0 left-0 right-0 h-px">
          <div className="h-full bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        </div>
        <div className="container-wide py-4 lg:py-5">
          <div className="flex items-center justify-between h-10 lg:h-10">
            {/* Logo - Left */}
            <Link to="/" className="flex-shrink-0">
              <img 
                src={logo} 
                alt="Patrimoine Indivis" 
                className={`w-auto transition-all duration-300 ${
                  isScrolled ? "h-8 lg:h-9" : "h-9 lg:h-11"
                }`} 
              />
            </Link>

            {/* Desktop Navigation - Center */}
            <nav className="hidden lg:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center gap-7 xl:gap-9">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`relative text-sm font-medium transition-colors whitespace-nowrap py-1 ${
                      location.pathname === link.href
                        ? "text-accent"
                        : "text-primary-foreground/80 hover:text-accent"
                    }`}
                  >
                    {link.label}
                    {/* Active/hover underline */}
                    <span 
                      className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300 ${
                        location.pathname === link.href 
                          ? "w-full" 
                          : "w-0 group-hover:w-full"
                      }`} 
                    />
                  </Link>
                ))}
              </div>
            </nav>

            {/* Desktop CTAs - Right */}
            <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-primary-foreground/80 hover:text-accent hover:bg-transparent text-sm"
                asChild
              >
<Link to="/contact?tab=callback">
                  <Phone className="w-4 h-4 mr-2" />
                  Être rappelé
                </Link>
              </Button>
              <Button variant="gold" size="sm" className="px-5" asChild>
                <Link to="/etude-gratuite">Étude de rachat</Link>
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
                  <Link to="/contact?tab=callback">Être rappelé</Link>
                </Button>
                <Button variant="gold" className="flex-1" asChild>
                  <Link to="/etude-gratuite">Étude de rachat</Link>
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
