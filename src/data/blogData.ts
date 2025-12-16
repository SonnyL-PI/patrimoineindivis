export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  date: string;
  readTime: string;
}

export const articles: Article[] = [
  {
    slug: "indivision-definition-sortie",
    title: "Indivision : qu'est-ce que c'est et comment en sortir ?",
    excerpt: "Définition, fonctionnement et solutions concrètes pour sortir d'une situation d'indivision. Guide complet pour comprendre vos droits.",
    category: "Comprendre l'indivision",
    tags: ["Comprendre l'indivision", "Pratique"],
    date: "10 décembre 2024",
    readTime: "10 min",
  },
  {
    slug: "article-815-code-civil-explique",
    title: "Article 815 du Code civil expliqué simplement",
    excerpt: "Décryptage de l'article 815, pierre angulaire du droit de l'indivision. Ce que dit la loi et ce que cela implique pour vous.",
    category: "Juridique",
    tags: ["Juridique", "Comprendre l'indivision"],
    date: "28 novembre 2024",
    readTime: "8 min",
  },
  {
    slug: "sortie-amiable-partage-judiciaire",
    title: "Sortie amiable ou partage judiciaire : quelle solution choisir ?",
    excerpt: "Comparatif des deux principales voies pour sortir de l'indivision. Avantages, inconvénients, délais et coûts de chaque option.",
    category: "Pratique",
    tags: ["Pratique", "Juridique"],
    date: "15 novembre 2024",
    readTime: "12 min",
  },
  {
    slug: "succession-indivision-heritiers",
    title: "Succession et indivision : guide pour les héritiers",
    excerpt: "Que faire quand on hérite d'un bien en indivision ? Droits, obligations et solutions pour gérer ou sortir de cette situation.",
    category: "Succession",
    tags: ["Succession", "Comprendre l'indivision"],
    date: "28 octobre 2024",
    readTime: "12 min",
  },
  {
    slug: "divorce-bien-immobilier-indivis",
    title: "Divorce : que faire du bien immobilier en indivision ?",
    excerpt: "Les différentes options pour le bien commun après un divorce : rachat, vente, maintien en indivision.",
    category: "Divorce",
    tags: ["Divorce", "Pratique"],
    date: "10 octobre 2024",
    readTime: "10 min",
  },
  {
    slug: "vendre-part-indivision",
    title: "Comment vendre sa part d'indivision ?",
    excerpt: "Guide pratique pour céder votre quote-part à un tiers : procédure, droit de préemption, formalités et pièges à éviter.",
    category: "Pratique",
    tags: ["Pratique", "Juridique"],
    date: "22 septembre 2024",
    readTime: "15 min",
  },
];

export const blogTags = [
  "Comprendre l'indivision",
  "Juridique",
  "Succession",
  "Divorce",
  "Pratique",
];
