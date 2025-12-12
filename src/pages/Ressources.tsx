import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, BookOpen, Download, Calendar } from "lucide-react";

const articles = [
  {
    slug: "article-815-code-civil",
    title: "Article 815 du Code civil : tout comprendre",
    excerpt: "Analyse complète de l'article 815, pierre angulaire du droit de l'indivision. Découvrez vos droits et les procédures pour sortir de l'indivision.",
    category: "Juridique",
    date: "15 novembre 2024",
    readTime: "8 min",
  },
  {
    slug: "succession-indivision-heritiers",
    title: "Succession et indivision : guide pour les héritiers",
    excerpt: "Que faire quand on hérite d'un bien en indivision ? Droits, obligations et solutions pour gérer ou sortir de cette situation.",
    category: "Succession",
    date: "28 octobre 2024",
    readTime: "12 min",
  },
  {
    slug: "divorce-bien-immobilier-indivis",
    title: "Divorce : que faire du bien immobilier en indivision ?",
    excerpt: "Les différentes options pour le bien commun après un divorce : rachat, vente, maintien en indivision... Avantages et inconvénients de chaque solution.",
    category: "Divorce",
    date: "10 octobre 2024",
    readTime: "10 min",
  },
  {
    slug: "vendre-part-indivision",
    title: "Comment vendre sa part d'indivision ?",
    excerpt: "Guide pratique pour céder votre quote-part à un tiers : procédure, droit de préemption, formalités et pièges à éviter.",
    category: "Guide pratique",
    date: "22 septembre 2024",
    readTime: "15 min",
  },
  {
    slug: "blocage-indivision-solutions",
    title: "Blocage en indivision : quelles solutions ?",
    excerpt: "Quand un indivisaire refuse de vendre ou de participer aux décisions, quels recours ? Partage judiciaire, cession de parts, médiation...",
    category: "Conflits",
    date: "5 septembre 2024",
    readTime: "11 min",
  },
  {
    slug: "frais-succession-indivision",
    title: "Frais de succession et indivision : ce qu'il faut savoir",
    excerpt: "Droits de succession, frais de notaire, taxe foncière... Comment sont répartis les frais entre indivisaires et comment les financer ?",
    category: "Fiscalité",
    date: "18 août 2024",
    readTime: "9 min",
  },
];

const guides = [
  {
    title: "Guide complet de l'indivision",
    description: "Tout comprendre sur l'indivision en 30 pages : définition, droits, obligations et solutions pour en sortir.",
    format: "PDF - 30 pages",
  },
  {
    title: "Checklist : documents pour céder ses parts",
    description: "La liste complète des documents nécessaires pour préparer la cession de votre quote-part indivise.",
    format: "PDF - 2 pages",
  },
  {
    title: "Modèle de notification aux indivisaires",
    description: "Modèle de lettre pour informer les co-indivisaires de votre intention de céder vos parts (droit de préemption).",
    format: "Word - 1 page",
  },
];

const Ressources = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-wide">
            <div className="max-w-3xl">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                Blog & Ressources
              </span>
              <h1 className="heading-display text-primary-foreground mb-6">
                Nos <span className="text-accent">ressources</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Articles, guides pratiques et documents utiles pour mieux comprendre
                l'indivision et préparer votre sortie.
              </p>
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="flex items-center justify-between mb-12">
              <h2 className="heading-section text-foreground">
                Derniers articles
              </h2>
              <div className="flex items-center gap-2 text-accent">
                <BookOpen className="w-5 h-5" />
                <span className="text-sm font-medium">{articles.length} articles</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <article
                  key={article.slug}
                  className="group bg-card rounded-2xl border border-border/50 overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-[16/9] bg-secondary flex items-center justify-center">
                    <FileText className="w-12 h-12 text-accent/30" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4 text-sm">
                      <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">
                        {article.category}
                      </span>
                      <span className="text-muted-foreground">{article.readTime}</span>
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {article.date}
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent group-hover:gap-2 transition-all">
                        Lire
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Guides */}
        <section className="section-padding bg-secondary/50">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                Guides pratiques
              </span>
              <h2 className="heading-section text-foreground mb-6">
                Documents à télécharger
              </h2>
              <p className="text-body">
                Des ressources pratiques pour vous accompagner dans vos démarches.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {guides.map((guide) => (
                <div
                  key={guide.title}
                  className="bg-card rounded-2xl p-8 border border-border/50 hover:shadow-card transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <Download className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                    {guide.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {guide.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {guide.format}
                    </span>
                    <Button variant="goldOutline" size="sm">
                      Télécharger
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-narrow text-center">
            <h2 className="heading-section text-primary-foreground mb-6">
              Restez informé
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8">
              Recevez nos derniers articles et conseils directement dans votre boîte mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-6 py-4 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent"
              />
              <Button variant="hero">
                S'inscrire
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Ressources;
