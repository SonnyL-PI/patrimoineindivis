import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = {
  navigation: [
    { label: "Accueil", href: "/" },
    { label: "Votre situation", href: "/votre-situation" },
    { label: "Notre approche", href: "/notre-approche" },
    { label: "Comprendre l'indivision", href: "/comprendre-indivision" },
    { label: "Blog", href: "/blog" },
  ],
  legal: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Politique de confidentialité", href: "/politique-confidentialite" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container-wide py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img src={logo} alt="Patrimoine Indivis" className="h-10 w-auto" />
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Société spécialisée dans le rachat de parts indivises mêmes minoritaires.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                <span>02, rue d'Auteuil<br />75016 Paris</span>
              </div>
              <a
                href="tel:0142301000"
                className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4 text-accent" />
                01.42.30.10.00
              </a>
              <a
                href="mailto:contact@patrimoine-indivis.fr"
                className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4 text-accent" />
                contact@patrimoine-indivis.fr
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Informations</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Patrimoine Indivis. Tous droits réservés.
          </p>
          <p className="text-xs text-primary-foreground/40 italic">
            "Nul ne peut être contraint à demeurer dans l'indivision" - Article 815 du Code civil
          </p>
        </div>
      </div>
    </footer>
  );
}
