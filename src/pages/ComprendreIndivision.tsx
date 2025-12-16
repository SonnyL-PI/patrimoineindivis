import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Scale, Users, AlertCircle, FileText, HelpCircle, Calendar } from "lucide-react";
import { articles } from "@/data/blogData";

const ComprendreIndivision = () => {
  const blogArticles = articles.slice(0, 3);

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
                Comprendre <span className="text-accent">l'indivision</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Tout ce que vous devez savoir sur l'indivision, son cadre juridique,
                ses implications et les solutions pour en sortir.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
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

                {/* Blog Articles Section - Integrated */}
                <article id="articles" className="prose prose-lg max-w-none pt-8 border-t border-border/50">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="heading-section text-foreground !mb-0">
                      Articles du blog
                    </h2>
                    <Link 
                      to="/blog" 
                      className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:gap-2 transition-all no-underline"
                    >
                      Tous les articles
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className="space-y-4 not-prose">
                    {blogArticles.map((article) => (
                      <Link
                        key={article.slug}
                        to={`/blog/${article.slug}`}
                        className="group block bg-card rounded-xl border border-border/50 p-5 hover:shadow-card transition-all duration-300 hover:-translate-y-0.5"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                            <FileText className="w-5 h-5 text-accent" />
                          </div>
                          <div className="flex-grow min-w-0">
                            <div className="flex flex-wrap items-center gap-2 mb-1.5">
                              <span className="px-2 py-0.5 bg-accent/10 text-accent rounded-full text-xs font-medium">
                                {article.category}
                              </span>
                              <span className="text-xs text-muted-foreground">{article.readTime}</span>
                            </div>
                            <h3 className="font-serif text-base font-semibold text-foreground mb-1 group-hover:text-accent transition-colors line-clamp-1">
                              {article.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-1">
                              {article.excerpt}
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
                        </div>
                      </Link>
                    ))}
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
                        { id: "articles", label: "Articles du blog" },
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
      </main>
      <Footer />
    </div>
  );
};

export default ComprendreIndivision;
