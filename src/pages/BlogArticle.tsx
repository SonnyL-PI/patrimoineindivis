import { useParams, Link, Navigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { articles } from "@/data/blogData";

// Article content mapping
const articleContent: Record<string, React.ReactNode> = {
  "indivision-definition-sortie": (
    <>
      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        L'indivision est une situation juridique fréquente mais souvent mal comprise. 
        Que vous soyez héritier, ex-conjoint ou co-acquéreur, comprendre l'indivision 
        est essentiel pour protéger vos droits et envisager sereinement l'avenir.
      </p>

      <h2 id="definition" className="font-serif text-2xl font-semibold text-foreground mt-12 mb-6">
        Qu'est-ce que l'indivision ?
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        L'indivision désigne la situation dans laquelle plusieurs personnes sont propriétaires 
        ensemble d'un même bien, sans que leurs parts respectives soient matériellement divisées. 
        Chaque indivisaire possède une quote-part (par exemple 1/3, 1/2, 25%...) qui représente 
        ses droits sur l'ensemble du bien.
      </p>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Concrètement, si vous êtes propriétaire indivis à hauteur de 25% d'une maison, 
        vous ne possédez pas un quart spécifique de cette maison (comme une chambre ou le jardin), 
        mais bien 25% de l'ensemble du bien.
      </p>

      <h2 id="origines" className="font-serif text-2xl font-semibold text-foreground mt-12 mb-6">
        Comment naît une indivision ?
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        L'indivision peut survenir dans plusieurs contextes :
      </p>
      <ul className="space-y-3 mb-6">
        <li className="flex items-start gap-3 text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
          <span><strong className="text-foreground">Succession :</strong> Au décès d'un proche, les héritiers deviennent automatiquement propriétaires indivis des biens du défunt.</span>
        </li>
        <li className="flex items-start gap-3 text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
          <span><strong className="text-foreground">Divorce ou séparation :</strong> Les ex-conjoints peuvent rester propriétaires indivis du logement commun après la séparation.</span>
        </li>
        <li className="flex items-start gap-3 text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
          <span><strong className="text-foreground">Achat en commun :</strong> Plusieurs personnes achètent ensemble un bien sans créer de société (SCI).</span>
        </li>
        <li className="flex items-start gap-3 text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
          <span><strong className="text-foreground">Donation :</strong> Un bien peut être donné à plusieurs bénéficiaires simultanément.</span>
        </li>
      </ul>

      <h2 id="solutions" className="font-serif text-2xl font-semibold text-foreground mt-12 mb-6">
        Comment sortir de l'indivision ?
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        L'article 815 du Code civil énonce un principe fondamental : "Nul ne peut être contraint 
        à demeurer dans l'indivision". Vous avez donc toujours le droit de sortir de cette situation.
      </p>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Trois solutions principales s'offrent à vous :
      </p>
      <div className="space-y-4 mb-6">
        <div className="p-6 bg-secondary/50 rounded-xl">
          <h3 className="font-semibold text-foreground mb-2">1. Le partage amiable</h3>
          <p className="text-muted-foreground text-sm">
            Si tous les indivisaires sont d'accord, un partage amiable peut être organisé 
            devant notaire. C'est la solution la plus rapide et la moins coûteuse.
          </p>
        </div>
        <div className="p-6 bg-secondary/50 rounded-xl">
          <h3 className="font-semibold text-foreground mb-2">2. Le partage judiciaire</h3>
          <p className="text-muted-foreground text-sm">
            En cas de désaccord, vous pouvez saisir le tribunal pour demander le partage. 
            Cette procédure peut durer plusieurs années et engendrer des frais importants.
          </p>
        </div>
        <div className="p-6 bg-accent/10 rounded-xl border-2 border-accent/30">
          <h3 className="font-semibold text-foreground mb-2">3. La cession de parts à un tiers</h3>
          <p className="text-muted-foreground text-sm">
            <strong className="text-accent">C'est notre spécialité.</strong> Vous pouvez vendre votre quote-part 
            à un tiers, dans le respect du droit de préemption des autres indivisaires. 
            Cette solution vous permet de récupérer la valeur de votre part rapidement, 
            sans attendre l'accord de tous.
          </p>
        </div>
      </div>

      <h2 id="conclusion" className="font-serif text-2xl font-semibold text-foreground mt-12 mb-6">
        En résumé
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        L'indivision n'est pas une fatalité. Que vous souhaitiez conserver le bien, 
        le vendre collectivement ou céder vos parts, des solutions existent. 
        L'essentiel est de bien comprendre vos droits et de choisir l'option 
        la plus adaptée à votre situation.
      </p>
    </>
  ),
  "article-815-code-civil-explique": (
    <>
      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        L'article 815 du Code civil est la pierre angulaire du droit de l'indivision en France. 
        Comprendre cet article est essentiel pour tout indivisaire souhaitant connaître ses droits.
      </p>

      <h2 id="texte" className="font-serif text-2xl font-semibold text-foreground mt-12 mb-6">
        Que dit l'article 815 ?
      </h2>
      <blockquote className="border-l-4 border-accent bg-secondary/50 pl-6 py-4 my-6 rounded-r-lg">
        <p className="text-foreground italic text-lg">
          « Nul ne peut être contraint à demeurer dans l'indivision et le partage peut toujours être provoqué, 
          à moins qu'il n'y ait été sursis par jugement ou convention. »
        </p>
      </blockquote>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Ce principe fondamental signifie que tout indivisaire dispose d'un droit absolu 
        de sortir de l'indivision à tout moment. Personne ne peut vous obliger à rester 
        propriétaire indivis contre votre volonté.
      </p>

      <h2 id="implications" className="font-serif text-2xl font-semibold text-foreground mt-12 mb-6">
        Les implications pratiques
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Ce droit fondamental a plusieurs conséquences importantes :
      </p>
      <ul className="space-y-3 mb-6">
        <li className="flex items-start gap-3 text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
          <span>Vous pouvez demander le partage même si les autres indivisaires s'y opposent</span>
        </li>
        <li className="flex items-start gap-3 text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
          <span>Vous pouvez céder vos parts à un tiers, sous réserve du droit de préemption</span>
        </li>
        <li className="flex items-start gap-3 text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
          <span>Le tribunal peut ordonner le partage si aucun accord amiable n'est trouvé</span>
        </li>
      </ul>

      <h2 id="exceptions" className="font-serif text-2xl font-semibold text-foreground mt-12 mb-6">
        Les exceptions au principe
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Le partage peut être temporairement suspendu dans deux cas :
      </p>
      <div className="space-y-4 mb-6">
        <div className="p-6 bg-secondary/50 rounded-xl">
          <h3 className="font-semibold text-foreground mb-2">Par convention</h3>
          <p className="text-muted-foreground text-sm">
            Les indivisaires peuvent signer une convention d'indivision pour une durée 
            maximale de 5 ans, renouvelable.
          </p>
        </div>
        <div className="p-6 bg-secondary/50 rounded-xl">
          <h3 className="font-semibold text-foreground mb-2">Par décision de justice</h3>
          <p className="text-muted-foreground text-sm">
            Le juge peut accorder un sursis au partage pour protéger les intérêts 
            d'un indivisaire ou des tiers (maximum 2 ans, renouvelable une fois).
          </p>
        </div>
      </div>

      <h2 id="conclusion" className="font-serif text-2xl font-semibold text-foreground mt-12 mb-6">
        Ce qu'il faut retenir
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        L'article 815 vous garantit un droit fondamental : celui de ne pas rester bloqué 
        dans une indivision contre votre gré. Si vous souhaitez sortir de l'indivision, 
        des solutions existent, même en cas de désaccord avec les autres indivisaires.
      </p>
    </>
  ),
  "sortie-amiable-partage-judiciaire": (
    <>
      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Lorsque vous souhaitez sortir d'une indivision, deux voies principales s'offrent à vous : 
        la sortie amiable ou le partage judiciaire. Chacune présente ses avantages et inconvénients.
      </p>

      <h2 id="amiable" className="font-serif text-2xl font-semibold text-foreground mt-12 mb-6">
        La sortie amiable
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        La sortie amiable nécessite l'accord de tous les indivisaires. Elle peut prendre 
        plusieurs formes :
      </p>
      <div className="space-y-4 mb-6">
        <div className="p-6 bg-secondary/50 rounded-xl">
          <h3 className="font-semibold text-foreground mb-2">Vente du bien</h3>
          <p className="text-muted-foreground text-sm">
            Tous les indivisaires vendent ensemble le bien et se partagent le prix 
            selon leurs quotes-parts.
          </p>
        </div>
        <div className="p-6 bg-secondary/50 rounded-xl">
          <h3 className="font-semibold text-foreground mb-2">Rachat par un indivisaire</h3>
          <p className="text-muted-foreground text-sm">
            Un indivisaire rachète les parts des autres et devient seul propriétaire.
          </p>
        </div>
        <div className="p-6 bg-secondary/50 rounded-xl">
          <h3 className="font-semibold text-foreground mb-2">Partage en nature</h3>
          <p className="text-muted-foreground text-sm">
            Si le bien est divisible, chaque indivisaire reçoit une partie distincte.
          </p>
        </div>
      </div>
      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800 mb-6">
        <p className="text-sm text-green-800 dark:text-green-200">
          <strong>Avantages :</strong> Rapide (quelques mois), moins coûteux, préserve les relations familiales.
        </p>
      </div>

      <h2 id="judiciaire" className="font-serif text-2xl font-semibold text-foreground mt-12 mb-6">
        Le partage judiciaire
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        En cas de désaccord, vous pouvez saisir le Tribunal judiciaire pour demander 
        le partage. Le juge désignera un notaire pour procéder aux opérations.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800 mb-6">
        <p className="text-sm text-amber-800 dark:text-amber-200">
          <strong>Inconvénients :</strong> Procédure longue (2 à 5 ans en moyenne), coûteuse 
          (frais d'avocat, de notaire, d'expertise), conflictuelle.
        </p>
      </div>

      <h2 id="alternative" className="font-serif text-2xl font-semibold text-foreground mt-12 mb-6">
        Une troisième voie : la cession de parts
      </h2>
      <div className="p-6 bg-accent/10 rounded-xl border-2 border-accent/30 mb-6">
        <p className="text-muted-foreground">
          <strong className="text-accent">Notre spécialité :</strong> Vous pouvez céder vos parts 
          à un tiers spécialisé comme Patrimoine Indivis. Cette solution vous permet de 
          récupérer rapidement la valeur de votre quote-part, sans attendre l'accord des 
          autres indivisaires ni engager une procédure judiciaire longue et coûteuse.
        </p>
      </div>

      <h2 id="comparatif" className="font-serif text-2xl font-semibold text-foreground mt-12 mb-6">
        Tableau comparatif
      </h2>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 font-semibold text-foreground">Critère</th>
              <th className="text-left py-3 px-4 font-semibold text-foreground">Amiable</th>
              <th className="text-left py-3 px-4 font-semibold text-foreground">Judiciaire</th>
              <th className="text-left py-3 px-4 font-semibold text-accent">Cession de parts</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr className="border-b border-border/50">
              <td className="py-3 px-4">Délai</td>
              <td className="py-3 px-4">2-6 mois</td>
              <td className="py-3 px-4">2-5 ans</td>
              <td className="py-3 px-4 text-accent">2-4 mois</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4">Accord requis</td>
              <td className="py-3 px-4">Unanimité</td>
              <td className="py-3 px-4">Non</td>
              <td className="py-3 px-4 text-accent">Non</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4">Coût</td>
              <td className="py-3 px-4">Faible</td>
              <td className="py-3 px-4">Élevé</td>
              <td className="py-3 px-4 text-accent">Modéré</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  ),
  "succession-indivision-heritiers": (
    <>
      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Au décès d'un proche, les héritiers se retrouvent souvent propriétaires indivis 
        des biens du défunt. Cette situation, bien que fréquente, soulève de nombreuses questions.
      </p>

      <h2 className="font-serif text-2xl font-semibold text-foreground mt-12 mb-6">
        L'indivision successorale : comment ça marche ?
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Dès l'ouverture de la succession, les héritiers deviennent automatiquement 
        propriétaires indivis des biens du défunt, dans la proportion de leurs droits 
        successoraux. Cette situation perdure jusqu'au partage de la succession.
      </p>

      <h2 className="font-serif text-2xl font-semibold text-foreground mt-12 mb-6">
        Vos droits et obligations
      </h2>
      <ul className="space-y-3 mb-6">
        <li className="flex items-start gap-3 text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
          <span>Vous avez le droit d'utiliser le bien indivis (avec l'accord des autres ou selon les règles de gestion)</span>
        </li>
        <li className="flex items-start gap-3 text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
          <span>Vous devez participer aux charges et aux dépenses d'entretien à proportion de votre quote-part</span>
        </li>
        <li className="flex items-start gap-3 text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
          <span>Vous pouvez demander le partage à tout moment (article 815 du Code civil)</span>
        </li>
      </ul>

      <h2 className="font-serif text-2xl font-semibold text-foreground mt-12 mb-6">
        Les solutions pour les héritiers
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Si vous souhaitez sortir de l'indivision successorale, plusieurs options s'offrent à vous. 
        La cession de vos parts à un tiers spécialisé peut être une solution rapide et efficace, 
        notamment en cas de désaccord familial ou de besoin urgent de liquidités.
      </p>
    </>
  ),
  "divorce-bien-immobilier-indivis": (
    <>
      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Après un divorce, le sort du bien immobilier commun est souvent source de tensions. 
        Si aucune décision n'est prise rapidement, les ex-époux restent propriétaires indivis.
      </p>

      <h2 className="font-serif text-2xl font-semibold text-foreground mt-12 mb-6">
        Les options possibles
      </h2>
      <div className="space-y-4 mb-6">
        <div className="p-6 bg-secondary/50 rounded-xl">
          <h3 className="font-semibold text-foreground mb-2">Vente du bien</h3>
          <p className="text-muted-foreground text-sm">
            La solution la plus simple : vendre le bien et partager le prix de vente.
          </p>
        </div>
        <div className="p-6 bg-secondary/50 rounded-xl">
          <h3 className="font-semibold text-foreground mb-2">Rachat par l'un des ex-époux</h3>
          <p className="text-muted-foreground text-sm">
            L'un des ex-conjoints rachète la part de l'autre et conserve le bien.
          </p>
        </div>
        <div className="p-6 bg-accent/10 rounded-xl border-2 border-accent/30">
          <h3 className="font-semibold text-foreground mb-2">Cession à un tiers</h3>
          <p className="text-muted-foreground text-sm">
            <strong className="text-accent">Notre spécialité :</strong> Vous pouvez céder votre part 
            à un investisseur spécialisé, même sans l'accord de votre ex-conjoint.
          </p>
        </div>
      </div>

      <h2 className="font-serif text-2xl font-semibold text-foreground mt-12 mb-6">
        Pourquoi agir rapidement ?
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Rester dans l'indivision avec un ex-conjoint peut créer des tensions durables : 
        désaccords sur l'entretien, la location, les charges... Plus vous attendez, 
        plus la situation peut se compliquer.
      </p>
    </>
  ),
  "vendre-part-indivision": (
    <>
      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Vendre sa part d'indivision est un droit garanti par la loi. Voici tout ce que 
        vous devez savoir pour céder votre quote-part en toute sérénité.
      </p>

      <h2 className="font-serif text-2xl font-semibold text-foreground mt-12 mb-6">
        Le droit de préemption des co-indivisaires
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Avant de vendre à un tiers, vous devez notifier votre intention aux autres indivisaires. 
        Ils disposent d'un délai d'un mois pour se porter acquéreurs aux mêmes conditions.
      </p>

      <h2 className="font-serif text-2xl font-semibold text-foreground mt-12 mb-6">
        Les étapes de la cession
      </h2>
      <ol className="space-y-4 mb-6">
        <li className="flex items-start gap-4 text-muted-foreground">
          <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 text-accent font-semibold">1</span>
          <span>Estimation de la valeur de votre quote-part</span>
        </li>
        <li className="flex items-start gap-4 text-muted-foreground">
          <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 text-accent font-semibold">2</span>
          <span>Notification aux co-indivisaires (par huissier ou lettre recommandée)</span>
        </li>
        <li className="flex items-start gap-4 text-muted-foreground">
          <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 text-accent font-semibold">3</span>
          <span>Délai d'un mois pour l'exercice du droit de préemption</span>
        </li>
        <li className="flex items-start gap-4 text-muted-foreground">
          <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 text-accent font-semibold">4</span>
          <span>Signature de l'acte de cession chez le notaire</span>
        </li>
      </ol>

      <h2 className="font-serif text-2xl font-semibold text-foreground mt-12 mb-6">
        Pourquoi choisir Patrimoine Indivis ?
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Nous sommes spécialisés dans le rachat de parts indivises. Notre expertise 
        vous garantit une transaction sécurisée, rapide et au juste prix.
      </p>
    </>
  ),
};

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const article = articles.find((a) => a.slug === slug);
  const content = slug ? articleContent[slug] : null;

  // Redirect to blog if article not found
  if (!article || !content) {
    return <Navigate to="/blog" replace />;
  }

  // Get related articles (same category or tags)
  const relatedArticles = articles
    .filter((a) => a.slug !== slug && (a.category === article.category || a.tags.some(t => article.tags.includes(t))))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-wide">
            <div className="max-w-3xl">
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Retour au blog
              </Link>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                  {article.category}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-primary-foreground/60">
                  <Clock className="w-4 h-4" />
                  {article.readTime}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-primary-foreground/60">
                  <Calendar className="w-4 h-4" />
                  {article.date}
                </span>
              </div>
              <h1 className="heading-display text-primary-foreground mb-6">
                {article.title}
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                {article.excerpt}
              </p>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <article className="lg:col-span-2 prose prose-lg max-w-none">
                {content}
              </article>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-32 space-y-8">
                  {/* Tags */}
                  <div className="bg-card rounded-2xl p-6 border border-border/50">
                    <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Tag className="w-5 h-5 text-accent" />
                      Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <Link
                          key={tag}
                          to={`/blog?tag=${encodeURIComponent(tag)}`}
                          className="px-3 py-1 bg-secondary text-muted-foreground rounded-full text-sm hover:bg-accent/10 hover:text-accent transition-colors"
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
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
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="section-padding bg-secondary/30">
            <div className="container-wide">
              <h2 className="heading-section text-foreground mb-8">
                Articles similaires
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedArticles.map((relatedArticle) => (
                  <Link
                    key={relatedArticle.slug}
                    to={`/blog/${relatedArticle.slug}`}
                    className="group bg-card rounded-xl border border-border/50 p-6 hover:shadow-card transition-all duration-300"
                  >
                    <span className="px-2.5 py-0.5 bg-accent/10 text-accent rounded-full text-xs font-medium">
                      {relatedArticle.category}
                    </span>
                    <h3 className="font-serif text-lg font-semibold text-foreground mt-3 mb-2 group-hover:text-accent transition-colors line-clamp-2">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {relatedArticle.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default BlogArticle;
