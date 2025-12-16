import blogJuridique from "@/assets/blog/blog-juridique.jpg";
import blogPratique from "@/assets/blog/blog-pratique.jpg";
import blogSuccession from "@/assets/blog/blog-succession.jpg";
import blogDivorce from "@/assets/blog/blog-divorce.jpg";
import blogIndivision from "@/assets/blog/blog-indivision.jpg";
import blogVente from "@/assets/blog/blog-vente.jpg";
import blogChoix from "@/assets/blog/blog-choix.jpg";

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
}

// Map categories to images
export const categoryImages: Record<string, { image: string; alt: string }> = {
  "Comprendre l'indivision": { image: blogIndivision, alt: "Façade haussmannienne — patrimoine immobilier" },
  "Juridique": { image: blogJuridique, alt: "Livre de droit ouvert — cadre juridique" },
  "Succession": { image: blogSuccession, alt: "Clés anciennes et sceau — transmission de patrimoine" },
  "Divorce": { image: blogDivorce, alt: "Alliances dorées sur marbre — séparation" },
  "Pratique": { image: blogPratique, alt: "Stylo plume élégant — formalités" },
};

export const articles: Article[] = [
  {
    slug: "indivision-definition-sortie",
    title: "Indivision : ce qu'il faut savoir",
    excerpt: "Définition, fonctionnement et solutions concrètes pour sortir d'une situation d'indivision. Guide complet pour comprendre vos droits.",
    category: "Comprendre l'indivision",
    tags: ["Comprendre l'indivision", "Pratique"],
    date: "10 décembre 2024",
    readTime: "10 min",
    image: blogIndivision,
    imageAlt: "Façade haussmannienne — comprendre l'indivision immobilière",
  },
  {
    slug: "article-815-code-civil-explique",
    title: "Article 815 du Code civil expliqué simplement",
    excerpt: "Décryptage de l'article 815, pierre angulaire du droit de l'indivision. Ce que dit la loi et ce que cela implique pour vous.",
    category: "Juridique",
    tags: ["Juridique", "Comprendre l'indivision"],
    date: "28 novembre 2024",
    readTime: "8 min",
    image: blogJuridique,
    imageAlt: "Livre de droit — article 815 du Code civil",
  },
  {
    slug: "sortie-amiable-partage-judiciaire",
    title: "Sortie amiable ou partage judiciaire : quelle solution choisir ?",
    excerpt: "Comparatif des deux principales voies pour sortir de l'indivision. Avantages, inconvénients, délais et coûts de chaque option.",
    category: "Pratique",
    tags: ["Pratique", "Juridique"],
    date: "15 novembre 2024",
    readTime: "12 min",
    image: blogChoix,
    imageAlt: "Chemins divergents — choisir sa voie de sortie d'indivision",
  },
  {
    slug: "succession-indivision-heritiers",
    title: "Succession et indivision : guide pour les héritiers",
    excerpt: "Que faire quand on hérite d'un bien en indivision ? Droits, obligations et solutions pour gérer ou sortir de cette situation.",
    category: "Succession",
    tags: ["Succession", "Comprendre l'indivision"],
    date: "28 octobre 2024",
    readTime: "12 min",
    image: blogSuccession,
    imageAlt: "Clés et sceau — héritage et succession",
  },
  {
    slug: "divorce-bien-immobilier-indivis",
    title: "Divorce : que faire du bien immobilier en indivision ?",
    excerpt: "Les différentes options pour le bien commun après un divorce : rachat, vente, maintien en indivision.",
    category: "Divorce",
    tags: ["Divorce", "Pratique"],
    date: "10 octobre 2024",
    readTime: "10 min",
    image: blogDivorce,
    imageAlt: "Alliances — partage du bien immobilier lors d'un divorce",
  },
  {
    slug: "vendre-part-indivision",
    title: "Comment vendre sa part d'indivision ?",
    excerpt: "Guide pratique pour céder votre quote-part à un tiers : procédure, droit de préemption, formalités et pièges à éviter.",
    category: "Pratique",
    tags: ["Pratique", "Juridique"],
    date: "22 septembre 2024",
    readTime: "15 min",
    image: blogVente,
    imageAlt: "Main tenant une clé — vendre sa part d'indivision",
  },
];

export const blogTags = [
  "Comprendre l'indivision",
  "Juridique",
  "Succession",
  "Divorce",
  "Pratique",
];
