import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, FileText, Calendar, Search, BookOpen } from "lucide-react";
import { articles, blogTags } from "@/data/blogData";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesSearch = searchQuery === "" || 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesTag = selectedTag === null || 
        article.tags.includes(selectedTag) ||
        article.category === selectedTag;

      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-wide">
            <div className="max-w-3xl">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                Blog
              </span>
              <h1 className="heading-display text-primary-foreground mb-6">
                Blog <span className="text-accent">Patrimoine Indivis</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Articles, analyses et conseils pratiques pour comprendre l'indivision
                et préparer vos démarches.
              </p>
            </div>
          </div>
        </section>

        {/* Search & Filters */}
        <section className="py-8 bg-secondary/50 border-b border-border/50">
          <div className="container-wide">
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
              {/* Search */}
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Rechercher un article..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 py-6 bg-background border-border/50"
                />
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedTag(null)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedTag === null
                      ? "bg-accent text-accent-foreground"
                      : "bg-background border border-border/50 text-muted-foreground hover:text-accent hover:border-accent/50"
                  }`}
                >
                  Tous
                </button>
                {blogTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedTag === tag
                        ? "bg-accent text-accent-foreground"
                        : "bg-background border border-border/50 text-muted-foreground hover:text-accent hover:border-accent/50"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="section-padding">
          <div className="container-wide">
            {/* Featured Guide Card */}
            <div className="mb-12 p-8 bg-card rounded-2xl border border-border/50 hover:shadow-card transition-all duration-300">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-accent" />
                </div>
                <div className="flex-grow">
                  <span className="inline-block text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                    Ressource mise en avant
                  </span>
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">
                    Guide complet de l'indivision
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4 max-w-2xl">
                    Tout ce que vous devez savoir sur l'indivision : définition, cadre juridique (article 815),
                    origines, difficultés courantes et solutions pour en sortir.
                  </p>
                  <Button variant="gold" asChild>
                    <Link to="/comprendre-indivision">
                      Lire le guide complet
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Results count */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-muted-foreground">
                {filteredArticles.length} article{filteredArticles.length !== 1 ? "s" : ""} 
                {selectedTag && <span> dans "{selectedTag}"</span>}
              </p>
            </div>

            {/* Articles */}
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article) => (
                  <article
                    key={article.slug}
                    className="group bg-card rounded-2xl border border-border/50 overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="aspect-[16/9] bg-secondary flex items-center justify-center">
                      <FileText className="w-12 h-12 text-accent/30" />
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                          {article.category}
                        </span>
                        <span className="text-xs text-muted-foreground">{article.readTime}</span>
                      </div>
                      <h3 className="font-serif text-lg font-semibold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {article.date}
                        </span>
                        <Link 
                          to={`/blog/${article.slug}`}
                          className="inline-flex items-center gap-1 text-sm font-semibold text-accent group-hover:gap-2 transition-all"
                        >
                          Lire
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground mb-4">Aucun article trouvé pour cette recherche.</p>
                <Button variant="goldOutline" onClick={() => { setSearchQuery(""); setSelectedTag(null); }}>
                  Réinitialiser les filtres
                </Button>
              </div>
            )}
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

export default Blog;
