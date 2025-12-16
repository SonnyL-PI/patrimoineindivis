import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, FileText, Calendar } from "lucide-react";
import { articles } from "@/data/blogData";

export function BlogResourcesSection() {
  const featuredArticles = articles.slice(0, 3);

  return (
    <section id="blog" className="section-padding bg-secondary/30">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Blog & Ressources
          </span>
          <h2 className="heading-section text-foreground mb-6">
            Approfondir vos connaissances
          </h2>
          <p className="text-body">
            Articles, guides et ressources pratiques pour mieux comprendre l'indivision
            et préparer vos démarches en toute sérénité.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Ressource mise en avant - Guide complet */}
          <div className="lg:col-span-5">
            <div className="bg-card rounded-2xl border border-border/50 overflow-hidden h-full flex flex-col hover:shadow-card transition-all duration-300">
              <div className="bg-primary p-8 flex items-center justify-center">
                <div className="w-20 h-20 rounded-2xl bg-accent/20 flex items-center justify-center">
                  <BookOpen className="w-10 h-10 text-accent" />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="inline-block text-xs font-semibold text-accent uppercase tracking-wider mb-3">
                  Ressource mise en avant
                </span>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Guide complet de l'indivision
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  Comprendre l'indivision et préparer vos démarches. Définition, cadre juridique,
                  origines, difficultés courantes et solutions pour en sortir.
                </p>
                <div className="space-y-3">
                  <Button variant="gold" className="w-full" asChild>
                    <Link to="/comprendre-indivision">
                      Lire le guide
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Tout ce que vous devez savoir sur l'indivision
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Derniers articles */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-xl font-semibold text-foreground">
                Derniers articles
              </h3>
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:gap-2 transition-all"
              >
                Voir tous les articles
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {featuredArticles.map((article) => (
                <article
                  key={article.slug}
                  className="group bg-card rounded-xl border border-border/50 p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <FileText className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="px-2.5 py-0.5 bg-accent/10 text-accent rounded-full text-xs font-medium">
                          {article.category}
                        </span>
                        <span className="text-xs text-muted-foreground">{article.readTime}</span>
                      </div>
                      <h4 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                        {article.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Calendar className="w-3.5 h-3.5" />
                          {article.date}
                        </span>
                        <Link 
                          to={`/blog/${article.slug}`}
                          className="inline-flex items-center gap-1 text-sm font-semibold text-accent group-hover:gap-2 transition-all"
                        >
                          Lire l'article
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
