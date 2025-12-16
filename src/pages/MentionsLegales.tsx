import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";

const tableOfContents = [
  { id: "identification", label: "1. Identification" },
  { id: "contact", label: "2. Adresse de contact" },
  { id: "donnees", label: "3. Données personnelles" },
  { id: "navigation", label: "4. Navigation Internet" },
  { id: "propriete", label: "5. Propriété intellectuelle" },
];

const MentionsLegales = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-wide">
            <div className="max-w-3xl">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Retour au site
              </Link>
              <h1 className="heading-display text-primary-foreground mb-6">
                Mentions <span className="text-accent">légales</span>
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Informations légales relatives au site patrimoineindivis.com
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Sidebar - Table of Contents */}
              <aside className="lg:col-span-1">
                <div className="sticky top-28 bg-card rounded-2xl p-6 border border-border/50">
                  <h3 className="font-serif font-semibold text-foreground mb-4">
                    Sommaire
                  </h3>
                  <nav className="space-y-2">
                    {tableOfContents.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="block w-full text-left text-sm text-muted-foreground hover:text-accent transition-colors py-1"
                      >
                        {item.label}
                      </button>
                    ))}
                  </nav>
                </div>
              </aside>

              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="prose prose-lg max-w-none">
                  {/* Section 1 */}
                  <section id="identification" className="mb-12 scroll-mt-28">
                    <h2 className="heading-card text-foreground border-b border-border pb-4 mb-6">
                      1. Identification de Patrimoine Indivis
                    </h2>
                    <div className="bg-secondary/30 rounded-xl p-6 space-y-3">
                      <p className="text-foreground font-semibold text-lg">
                        PATRIMOINE INDIVIS SAS
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>02, rue d'Auteuil<br />75016 Paris</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                          <a href="mailto:contact@patrimoine-indivis.fr" className="hover:text-accent">
                            contact@patrimoine-indivis.fr
                          </a>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                          <a href="tel:0142301000" className="hover:text-accent">
                            +33 (0) 1.42.30.10.00
                          </a>
                        </div>
                      </div>
                      <div className="pt-4 border-t border-border/50 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                        <p><span className="font-medium text-foreground">RCS Paris :</span> 828 343 640</p>
                        <p><span className="font-medium text-foreground">Capital social :</span> 211 071,00 €</p>
                        <p><span className="font-medium text-foreground">N° TVA :</span> FR828343640</p>
                        <p><span className="font-medium text-foreground">SIRET :</span> 82834364000011</p>
                        <p><span className="font-medium text-foreground">Code APE :</span> 6420Z</p>
                      </div>
                    </div>
                  </section>

                  {/* Section 2 */}
                  <section id="contact" className="mb-12 scroll-mt-28">
                    <h2 className="heading-card text-foreground border-b border-border pb-4 mb-6">
                      2. Adresse de contact
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Le client peut contacter PATRIMOINE INDIVIS dans le cadre des présentes Mentions Légales 
                      et d'information aux adresses listées ci-dessus ou via le formulaire de contact disponible 
                      sur le site Internet.
                    </p>
                  </section>

                  {/* Section 3 */}
                  <section id="donnees" className="mb-12 scroll-mt-28">
                    <h2 className="heading-card text-foreground border-b border-border pb-4 mb-6">
                      3. Données personnelles
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        PATRIMOINE INDIVIS est amenée à collecter des données relatives à ses clients et 
                        transmises notamment à travers le questionnaire rempli en ligne. Les informations 
                        collectées seront conservées pendant 5 ans par PATRIMOINE INDIVIS. Elles pourront 
                        être utilisées à des fins commerciales par PATRIMOINE INDIVIS qui se réserve le 
                        droit de les transmettre à des tiers. Il est possible de s'opposer à cette 
                        communication en informant PATRIMOINE INDIVIS à l'adresse de contact.
                      </p>
                      <p>
                        En application de la Loi dite « Informatique et Liberté » (Loi n°78-17 du 6 janvier 1978) 
                        et du Règlement Général sur la Protection des Données (RGPD), vous avez la possibilité 
                        d'accéder aux données personnelles recueillies par PATRIMOINE INDIVIS, d'en demander 
                        la modification, la rectification ou la suppression en contactant PATRIMOINE INDIVIS 
                        à l'adresse de contact.
                      </p>
                      <p>
                        Des cookies sont installés sur l'ordinateur du client lors de sa connexion au site 
                        Internet PATRIMOINE INDIVIS. Ces cookies ne permettent que la collecte d'informations 
                        afférentes à la connexion. Ces cookies ont une durée de vie limitée au temps de 
                        connexion de l'Internaute sur le site. Vous pouvez vous opposer à l'installation 
                        des cookies en configurant votre navigateur.
                      </p>
                      <div className="bg-accent/10 rounded-xl p-4 border border-accent/20">
                        <p className="text-sm">
                          Pour plus d'informations sur le traitement de vos données, consultez notre{" "}
                          <Link to="/politique-confidentialite" className="text-accent hover:underline font-medium">
                            Politique de confidentialité
                          </Link>.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Section 4 */}
                  <section id="navigation" className="mb-12 scroll-mt-28">
                    <h2 className="heading-card text-foreground border-b border-border pb-4 mb-6">
                      4. Information relative à la navigation sur Internet
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Il revient à chaque utilisateur d'Internet de prendre des mesures afin d'assurer 
                      la confidentialité de ses correspondances sur le réseau. Il lui revient également 
                      de s'assurer qu'il a mis en place une protection adéquate et régulièrement mise à 
                      jour contre les virus et autres atteintes pouvant endommager les données, les 
                      logiciels et l'ordinateur lui-même, lorsqu'il se connecte sur Internet.
                    </p>
                  </section>

                  {/* Section 5 */}
                  <section id="propriete" className="mb-12 scroll-mt-28">
                    <h2 className="heading-card text-foreground border-b border-border pb-4 mb-6">
                      5. Respect des droits et propriété intellectuelle
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        Le client s'engage à ne pas porter atteinte aux droits de propriété intellectuelle 
                        attachés aux produits vendus, et notamment aux droits d'auteur existants sur les 
                        contenus proposés par PATRIMOINE INDIVIS. À cet égard, il s'engage notamment à 
                        une exploitation personnelle de ces contenus, sans effectuer de copie.
                      </p>
                      <p>
                        Le client garantit PATRIMOINE INDIVIS contre toute action dont elle pourrait faire 
                        l'objet du fait de la violation par lui-même, ses contractants ou des tiers autorisés 
                        par ces derniers, des droits de propriété intellectuelle, et s'engage à indemniser 
                        PATRIMOINE INDIVIS de tout préjudice subi. Il s'engage par ailleurs à ne pas porter 
                        atteinte aux droits de la société PATRIMOINE INDIVIS sur ses marques.
                      </p>
                      <p>
                        Les images, textes, graphismes, et autres éléments apparaissant dans les pages du 
                        site PATRIMOINE INDIVIS sont la propriété de la société PATRIMOINE INDIVIS ou 
                        utilisés sur le site avec l'autorisation spéciale des titulaires de leurs droits. 
                        Ces éléments ne sauraient être repris, copiés ou imités, en partie ou en totalité, 
                        sur tout support, par quelque moyen et dans quelque but que ce soit.
                      </p>
                      <p>
                        Toute personne souhaitant installer un lien hypertexte en direction du site de la 
                        société PATRIMOINE INDIVIS doit obtenir, au préalable, l'autorisation écrite de 
                        celle-ci. PATRIMOINE INDIVIS n'engage aucunement sa responsabilité à raison de 
                        tout lien hypertexte apparaissant sur son site et menant à d'autres sites Internet, 
                        notamment quant aux contenus et aux pratiques de ces sites.
                      </p>
                    </div>
                  </section>
                </div>

                {/* CTA */}
                <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row gap-4">
                  <Button variant="outline" asChild>
                    <Link to="/">
                      <ArrowLeft className="w-4 h-4" />
                      Retour au site
                    </Link>
                  </Button>
                  <Button variant="gold" asChild>
                    <Link to="/contact">
                      Nous contacter
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MentionsLegales;
