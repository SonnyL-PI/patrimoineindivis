import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, FileText, Calendar, Search, BookOpen, Scale, Users, AlertCircle, HelpCircle } from "lucide-react";
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
      <main>
        {/* Hero */}
        <section className="py-12 md:py-16 lg:py-20 bg-primary text-primary-foreground">
          <div className="container-wide">
            <div className="max-w-3xl">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                Blog
              </span>
              <h1 className="heading-display text-primary-foreground mb-6">
                Comprendre <span className="text-accent">l'indivision</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Tout ce que vous devez savoir sur l'indivision, son cadre juridique,
                ses implications et les solutions pour en sortir.
              </p>
            </div>
          </div>
        </section>

        {/* Guide Content */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* What is indivision */}
                <article id="definition" className="prose prose-lg max-w-none">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-7 h-7 text-accent" />
                    </div>
                    <h2 className="heading-section text-foreground !mb-0">
                      Indivision : ce qu'il faut savoir
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    L'indivision est une situation juridique dans laquelle plusieurs personnes 
                    (appelées indivisaires ou co-indivisaires) sont propriétaires ensemble d'un même bien, 
                    sans que leurs parts respectives soient matériellement divisées.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Chaque indivisaire possède une quote-part (par exemple 1/3, 1/4, 50%...) 
                    qui représente ses droits sur l'ensemble du bien, mais aucun ne peut prétendre 
                    à une portion spécifique du bien tant que l'indivision n'est pas résolue.
                  </p>
                </article>

                {/* Origins */}
                <article id="origines" className="prose prose-lg max-w-none">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Users className="w-7 h-7 text-accent" />
                    </div>
                    <h2 className="heading-section text-foreground !mb-0">
                      Les origines de l'indivision
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    L'indivision peut naître de différentes situations :
                  </p>
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                      <span><strong className="text-foreground">Succession :</strong> Les héritiers deviennent automatiquement propriétaires indivis des biens du défunt.</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                      <span><strong className="text-foreground">Divorce ou séparation :</strong> Les ex-conjoints peuvent rester propriétaires indivis du logement commun.</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                      <span><strong className="text-foreground">Achat en commun :</strong> Plusieurs personnes achètent ensemble un bien sans créer de société.</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                      <span><strong className="text-foreground">Donation :</strong> Un bien peut être donné à plusieurs bénéficiaires.</span>
                    </li>
                  </ul>
                </article>

                {/* Legal framework */}
                <article id="cadre-juridique" className="prose prose-lg max-w-none">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Scale className="w-7 h-7 text-accent" />
                    </div>
                    <h2 className="heading-section text-foreground !mb-0">
                      Le cadre juridique
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    L'indivision est régie par les articles 815 et suivants du Code civil.
                    Le principe fondamental est énoncé à l'article 815 :
                  </p>
                  <blockquote className="border-l-4 border-accent bg-secondary/50 pl-6 py-4 my-6 rounded-r-lg">
                    <p className="text-foreground italic text-lg">
                      « Nul ne peut être contraint à demeurer dans l'indivision et le partage
                      peut toujours être provoqué. »
                    </p>
                  </blockquote>
                  <p className="text-muted-foreground leading-relaxed">
                    Ce principe garantit à chaque indivisaire le droit de sortir de l'indivision
                    à tout moment, sous réserve du respect de certaines procédures.
                  </p>
                </article>

                {/* Difficulties */}
                <article id="difficultes" className="prose prose-lg max-w-none">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="w-7 h-7 text-accent" />
                    </div>
                    <h2 className="heading-section text-foreground !mb-0">
                      Les difficultés courantes
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    L'indivision génère fréquemment des tensions et des blocages :
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
                    {[
                      "Désaccord sur la vente ou la conservation du bien",
                      "Conflits sur la gestion et l'entretien",
                      "Répartition inégale des charges",
                      "Occupation exclusive par un indivisaire",
                      "Difficultés de communication",
                      "Blocage des décisions importantes",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3 p-4 bg-destructive/5 rounded-lg">
                        <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                        <span className="text-foreground text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </article>

                {/* Solutions */}
                <article id="solutions" className="prose prose-lg max-w-none">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-7 h-7 text-accent" />
                    </div>
                    <h2 className="heading-section text-foreground !mb-0">
                      Les solutions pour sortir de l'indivision
                    </h2>
                  </div>
                  <div className="space-y-6 not-prose">
                    <div className="p-6 bg-secondary/50 rounded-xl">
                      <h3 className="font-semibold text-foreground mb-2">1. Le partage amiable</h3>
                      <p className="text-muted-foreground text-sm">
                        Si tous les indivisaires sont d'accord, ils peuvent procéder à un partage amiable
                        devant notaire. C'est la solution la plus simple mais elle nécessite l'unanimité.
                      </p>
                    </div>
                    <div className="p-6 bg-secondary/50 rounded-xl">
                      <h3 className="font-semibold text-foreground mb-2">2. Le partage judiciaire</h3>
                      <p className="text-muted-foreground text-sm">
                        En cas de désaccord, un indivisaire peut saisir le tribunal pour demander le partage.
                        Cette procédure est souvent longue et coûteuse.
                      </p>
                    </div>
                    <div className="p-6 bg-accent/10 rounded-xl border-2 border-accent/30">
                      <h3 className="font-semibold text-foreground mb-2">3. La cession de parts à un tiers</h3>
                      <p className="text-muted-foreground text-sm">
                        <strong className="text-accent">C'est notre spécialité.</strong> Vous pouvez céder votre quote-part
                        à un tiers, dans le respect du droit de préemption des autres indivisaires.
                        Cette solution vous permet de récupérer la valeur de votre part rapidement.
                      </p>
                    </div>
                  </div>
                </article>
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-32 space-y-8">
                  {/* Table of contents */}
                  <div className="bg-card rounded-2xl p-6 border border-border/50">
                    <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-accent" />
                      Sommaire
                    </h3>
                    <nav className="space-y-2">
                      {[
                        { id: "definition", label: "Définition" },
                        { id: "origines", label: "Les origines" },
                        { id: "cadre-juridique", label: "Cadre juridique" },
                        { id: "difficultes", label: "Les difficultés" },
                        { id: "solutions", label: "Les solutions" },
                        { id: "articles", label: "Nos articles" },
                      ].map((item) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          className="block text-sm text-muted-foreground hover:text-accent transition-colors py-1"
                        >
                          {item.label}
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* CTA Card */}
                  <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
                    <h3 className="font-serif text-xl font-semibold mb-4">
                      Besoin d'aide ?
                    </h3>
                    <p className="text-primary-foreground/70 text-sm mb-6">
                      Nos experts sont à votre disposition pour analyser votre situation
                      et vous proposer une solution adaptée.
                    </p>
                    <Button variant="hero" size="default" className="w-full" asChild>
                      <Link to="/contact">
                        Nous contacter
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <section id="articles" className="section-padding bg-secondary/30">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="heading-section text-foreground mb-6">
                Nos articles
              </h2>
              <p className="text-body">
                Approfondissez vos connaissances avec nos articles détaillés sur l'indivision.
              </p>
            </div>

            {/* Search & Filters */}
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between mb-10">
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
                    <div className="aspect-[16/9] overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
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
