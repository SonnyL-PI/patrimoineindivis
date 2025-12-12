import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/votre-situation", label: "Votre situation" },
  { href: "/notre-approche", label: "Vos solutions" },
  { href: "/notre-approche#proposition", label: "Notre proposition" },
  { href: "/notre-approche#avantages", label: "Nos avantages" },
  { href: "/comprendre-indivision", label: "Qui sommes-nous ?" },
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

  return (
    <>
      {/* Top Bar with Contact Info */}
      <div className="bg-charcoal text-primary-foreground py-2 hidden md:block">
        <div className="container-wide flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent" />
              <span>02, rue d'Auteuil, 75016 Paris</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-accent" />
              <a href="tel:0142301000" className="hover:text-accent transition-colors">
                01.42.30.10.00
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hover:text-accent transition-colors">
              CONTACT
            </Link>
            <span className="text-primary-foreground/30">|</span>
            <Link to="/faq" className="hover:text-accent transition-colors">
              FAQ
            </Link>
            <Button variant="gold" size="sm" className="ml-4 px-4 py-1.5 text-xs font-semibold" asChild>
              <Link to="/contact">ÉTUDE GRATUITE</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-charcoal/98 backdrop-blur-md shadow-md"
            : "bg-charcoal"
        }`}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="flex items-center">
                <div className="flex flex-col items-center mr-2">
                  <span className="text-accent text-[10px] font-serif italic leading-none">Art.</span>
                  <span className="text-accent text-lg font-bold leading-none">815</span>
                </div>
                <div className="flex items-center font-serif">
                  <span className="text-primary-foreground text-lg lg:text-xl tracking-wider uppercase">
                    Patrimoine
                  </span>
                  <span className="text-accent text-xl lg:text-2xl mx-0.5">/</span>
                  <span className="text-accent text-lg lg:text-xl tracking-wider uppercase">
                    Indivis
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium transition-colors hover:text-accent uppercase tracking-wide ${
                    location.pathname === link.href
                      ? "text-accent"
                      : "text-primary-foreground/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

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
          className={`lg:hidden absolute top-full left-0 right-0 bg-charcoal/98 backdrop-blur-md border-b border-primary-foreground/10 shadow-lg transition-all duration-300 ${
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
              <Button variant="gold" className="mt-2" asChild>
                <Link to="/contact">Étude gratuite</Link>
              </Button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
