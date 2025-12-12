import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  company: [
    { label: "Notre approche", href: "/notre-approche" },
    { label: "Comprendre l'indivision", href: "/comprendre-indivision" },
    { label: "FAQ", href: "/faq" },
    { label: "Ressources", href: "/ressources" },
  ],
  situations: [
    { label: "Succession", href: "/votre-situation#succession" },
    { label: "Divorce", href: "/votre-situation#divorce" },
    { label: "Conflit familial", href: "/votre-situation#conflit" },
    { label: "Besoin de liquidité", href: "/votre-situation#liquidite" },
  ],
  legal: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Politique de confidentialité", href: "/politique-confidentialite" },
    { label: "CGU", href: "/cgu" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-primary font-serif font-bold text-lg">P</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-semibold text-lg text-primary-foreground leading-tight">
                  Patrimoine
                </span>
                <span className="font-serif text-sm text-accent leading-tight">
                  Indivis
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              La première société française 100% spécialisée dans le rachat de parts indivises.
              Expertise, discrétion et accompagnement humain.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:contact@patrimoine-indivis.fr"
                className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                contact@patrimoine-indivis.fr
              </a>
              <a
                href="tel:+33100000000"
                className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                01 00 00 00 00
              </a>
              <div className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Paris, France</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">L'entreprise</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
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

          {/* Situations Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Votre situation</h4>
            <ul className="space-y-3">
              {footerLinks.situations.map((link) => (
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
            <h4 className="font-serif font-semibold text-lg mb-6">Informations légales</h4>
            <ul className="space-y-3">
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
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Patrimoine Indivis. Tous droits réservés.
          </p>
          <p className="text-xs text-primary-foreground/40">
            Société spécialisée dans le rachat de parts indivises • Article 815 du Code civil
          </p>
        </div>
      </div>
    </footer>
  );
}
