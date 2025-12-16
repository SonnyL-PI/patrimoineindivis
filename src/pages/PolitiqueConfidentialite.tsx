import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Mail, MapPin } from "lucide-react";

const tableOfContents = [
  { id: "responsable", label: "1. Responsable du traitement" },
  { id: "finalites", label: "2. Finalités des données" },
  { id: "droits", label: "3. Vos droits RGPD" },
  { id: "non-communication", label: "4. Non-communication" },
  { id: "types-donnees", label: "5. Types de données" },
  { id: "securite", label: "6. Sécurité" },
  { id: "incident", label: "7. Notification d'incident" },
];

const PolitiqueConfidentialite = () => {
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
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-accent" />
                <span className="text-sm font-medium text-accent uppercase tracking-wider">
                  RGPD
                </span>
              </div>
              <h1 className="heading-display text-primary-foreground mb-6">
                Politique de <span className="text-accent">confidentialité</span>
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Protection des données personnelles conformément au Règlement Général 
                sur la Protection des Données (RGPD : n° 2016-679).
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
                {/* Intro */}
                <div className="bg-accent/10 rounded-2xl p-6 border border-accent/20 mb-12">
                  <h3 className="font-semibold text-foreground mb-3">
                    Gestion des données personnelles
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Le Client est informé des réglementations concernant la communication marketing, 
                    la loi du 21 Juin 2014 pour la confiance dans l'Économie Numérique, la Loi 
                    Informatique et Liberté du 06 Août 2004 ainsi que du Règlement Général sur la 
                    Protection des Données (RGPD : n° 2016-679).
                  </p>
                </div>

                <div className="prose prose-lg max-w-none">
                  {/* Section 1 */}
                  <section id="responsable" className="mb-12 scroll-mt-28">
                    <h2 className="heading-card text-foreground border-b border-border pb-4 mb-6">
                      1. Responsable de la collecte des données personnelles
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        Pour les Données Personnelles collectées dans le cadre de la création du compte 
                        personnel de l'Utilisateur et de sa navigation sur le Site, le responsable du 
                        traitement des Données Personnelles est : <strong className="text-foreground">PATRIMOINE INDIVIS</strong>.
                      </p>
                      <p>
                        Le site patrimoineindivis.com est représenté par son représentant légal.
                      </p>
                      <p>
                        En tant que responsable du traitement des données qu'il collecte, patrimoineindivis.com 
                        s'engage à respecter le cadre des dispositions légales en vigueur. Il lui appartient 
                        notamment d'établir les finalités de ses traitements de données, de fournir à ses 
                        prospects et clients, à partir de la collecte de leurs consentements, une information 
                        complète sur le traitement de leurs données personnelles et de maintenir un registre 
                        des traitements conforme à la réalité.
                      </p>
                    </div>
                  </section>

                  {/* Section 2 */}
                  <section id="finalites" className="mb-12 scroll-mt-28">
                    <h2 className="heading-card text-foreground border-b border-border pb-4 mb-6">
                      2. Finalité des données collectées
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>patrimoineindivis.com est susceptible de traiter tout ou partie des données :</p>
                      <ul className="space-y-3 list-none pl-0">
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                          <span>
                            Pour permettre la navigation sur le Site et la gestion et la traçabilité des 
                            prestations et services commandés par l'utilisateur : données de connexion et 
                            d'utilisation du Site, facturation, historique des commandes, etc.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                          <span>
                            Pour prévenir et lutter contre la fraude informatique (spamming, hacking…) : 
                            matériel informatique utilisé pour la navigation, l'adresse IP, le mot de passe (hashé)
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                          <span>
                            Pour améliorer la navigation sur le Site : données de connexion et d'utilisation
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                          <span>
                            Pour mener des enquêtes de satisfaction facultatives : adresse email
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                          <span>
                            Pour mener des campagnes de communication (sms, mail) : numéro de téléphone, adresse email
                          </span>
                        </li>
                      </ul>
                      <div className="bg-secondary/50 rounded-xl p-4 border border-border/50">
                        <p className="text-sm font-medium text-foreground">
                          patrimoineindivis.com ne commercialise pas vos données personnelles qui sont donc 
                          uniquement utilisées par nécessité ou à des fins statistiques et d'analyses.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Section 3 */}
                  <section id="droits" className="mb-12 scroll-mt-28">
                    <h2 className="heading-card text-foreground border-b border-border pb-4 mb-6">
                      3. Droit d'accès, de rectification et d'opposition
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        Conformément à la réglementation européenne en vigueur, les Utilisateurs de 
                        patrimoineindivis.com disposent des droits suivants :
                      </p>
                      <ul className="space-y-3 list-none pl-0">
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                          <span>
                            <strong className="text-foreground">Droit d'accès</strong> (article 15 RGPD) et de 
                            <strong className="text-foreground"> rectification</strong> (article 16 RGPD), de mise 
                            à jour, de complétude des données
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                          <span>
                            <strong className="text-foreground">Droit d'effacement</strong> des données (article 17 
                            du RGPD), lorsqu'elles sont inexactes, incomplètes, équivoques, périmées
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                          <span>
                            <strong className="text-foreground">Droit de retirer</strong> à tout moment un consentement 
                            (article 13-2c RGPD)
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                          <span>
                            <strong className="text-foreground">Droit à la limitation</strong> du traitement des données 
                            (article 18 RGPD)
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                          <span>
                            <strong className="text-foreground">Droit d'opposition</strong> au traitement des données 
                            (article 21 RGPD)
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                          <span>
                            <strong className="text-foreground">Droit à la portabilité</strong> des données (article 20 RGPD)
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                          <span>
                            <strong className="text-foreground">Droit de définir le sort</strong> des données après décès
                          </span>
                        </li>
                      </ul>

                      {/* Contact DPO */}
                      <div className="bg-secondary/30 rounded-xl p-6 mt-6">
                        <h4 className="font-semibold text-foreground mb-3">
                          Exercer vos droits
                        </h4>
                        <p className="text-sm mb-4">
                          Si vous souhaitez savoir comment patrimoineindivis.com utilise vos Données Personnelles, 
                          demander à les rectifier ou vous opposer à leur traitement, vous pouvez contacter 
                          PATRIMOINE INDIVIS par écrit à l'adresse suivante :
                        </p>
                        <div className="flex items-start gap-3 text-sm">
                          <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium text-foreground">PATRIMOINE INDIVIS – DPO</p>
                            <p>02, Rue d'Auteuil</p>
                            <p>75016 Paris</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 text-sm mt-3">
                          <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                          <a href="mailto:contact@patrimoine-indivis.fr" className="hover:text-accent">
                            contact@patrimoine-indivis.fr
                          </a>
                        </div>
                      </div>

                      <p className="text-sm">
                        Les Utilisateurs peuvent également déposer une réclamation auprès des autorités de contrôle, 
                        et notamment de la <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">CNIL</a>.
                      </p>
                    </div>
                  </section>

                  {/* Section 4 */}
                  <section id="non-communication" className="mb-12 scroll-mt-28">
                    <h2 className="heading-card text-foreground border-b border-border pb-4 mb-6">
                      4. Non-communication des données personnelles
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        patrimoineindivis.com s'interdit de traiter, héberger ou transférer les Informations 
                        collectées sur ses Clients vers un pays situé en dehors de l'Union européenne ou 
                        reconnu comme « non adéquat » par la Commission européenne sans en informer préalablement 
                        le client.
                      </p>
                      <p>
                        patrimoineindivis.com s'engage à prendre toutes les précautions nécessaires afin de 
                        préserver la sécurité des Informations et notamment qu'elles ne soient pas communiquées 
                        à des personnes non autorisées.
                      </p>
                      <p>
                        Les Données Personnelles de l'Utilisateur peuvent être traitées par des filiales et 
                        des sous-traitants (prestataires de services), exclusivement afin de réaliser les 
                        finalités de la présente politique.
                      </p>
                    </div>
                  </section>

                  {/* Section 5 */}
                  <section id="types-donnees" className="mb-12 scroll-mt-28">
                    <h2 className="heading-card text-foreground border-b border-border pb-4 mb-6">
                      5. Types de données collectées
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        Concernant les utilisateurs du Site patrimoineindivis.com, nous collectons les données 
                        suivantes qui sont indispensables au fonctionnement du service, et qui seront conservées 
                        pendant une période maximale de <strong className="text-foreground">9 mois</strong> après 
                        la fin de la relation contractuelle :
                      </p>
                      <div className="bg-secondary/30 rounded-xl p-4">
                        <p className="text-sm font-medium text-foreground">
                          Nom, prénom, adresse email, téléphone, adresse IP, lieu de résidence
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Section 6 */}
                  <section id="securite" className="mb-12 scroll-mt-28">
                    <h2 className="heading-card text-foreground border-b border-border pb-4 mb-6">
                      6. Sécurité
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        Pour assurer la sécurité et la confidentialité des Données Personnelles, 
                        patrimoineindivis.com utilise des réseaux protégés par des dispositifs standards 
                        tels que pare-feu, la pseudonymisation, l'encryption et mot de passe.
                      </p>
                      <p>
                        Lors du traitement des Données Personnelles, patrimoineindivis.com prend toutes les 
                        mesures raisonnables visant à les protéger contre toute perte, utilisation détournée, 
                        accès non autorisé, divulgation, altération ou destruction.
                      </p>
                    </div>
                  </section>

                  {/* Section 7 */}
                  <section id="incident" className="mb-12 scroll-mt-28">
                    <h2 className="heading-card text-foreground border-b border-border pb-4 mb-6">
                      7. Notification d'incident
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        Quels que soient les efforts fournis, aucune méthode de transmission sur Internet et 
                        aucune méthode de stockage électronique n'est complètement sûre. Nous ne pouvons en 
                        conséquence pas garantir une sécurité absolue.
                      </p>
                      <p>
                        Si nous prenions connaissance d'une brèche de la sécurité, nous avertirions les 
                        utilisateurs concernés afin qu'ils puissent prendre les mesures appropriées. Nos 
                        procédures de notification d'incident tiennent compte de nos obligations légales, 
                        qu'elles se situent au niveau national ou européen.
                      </p>
                      <p>
                        Aucune information personnelle de l'utilisateur du site patrimoineindivis.com n'est 
                        publiée à l'insu de l'utilisateur, échangée, transférée, cédée ou vendue sur un 
                        support quelconque à des tiers.
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

export default PolitiqueConfidentialite;
