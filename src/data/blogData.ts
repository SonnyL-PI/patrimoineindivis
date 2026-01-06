import blogJuridique from "@/assets/blog/blog-juridique-new.jpg";
import blogPratique from "@/assets/blog/blog-pratique-new.jpg";
import blogSuccession from "@/assets/blog/blog-succession-new.jpg";
import blogDivorce from "@/assets/blog/blog-divorce-new.jpg";
import blogIndivision from "@/assets/blog/blog-indivision-new.jpg";
import blogVente from "@/assets/blog/blog-vente-new.jpg";
import blogChoix from "@/assets/blog/blog-choix-new.jpg";

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
  "Comprendre l'indivision": { image: blogIndivision, alt: "Dossier d'indivision sur bureau" },
  "Juridique": { image: blogJuridique, alt: "Classeur de pièces – sortie d'indivision" },
  "Succession": { image: blogSuccession, alt: "Archives de dossiers – Patrimoine Indivis" },
  "Divorce": { image: blogDivorce, alt: "Salle de réunion – médiation" },
  "Pratique": { image: blogPratique, alt: "Documents administratifs – Patrimoine Indivis" },
};

export const articles: Article[] = [
  {
    slug: "indivision-definition-sortie",
    title: "Indivision : ce qu'il faut savoir",
    excerpt: "Définition, fonctionnement et solutions concrètes pour sortir d'une situation d'indivision. Guide complet pour comprendre vos droits.",
    category: "Comprendre l'indivision",
    tags: ["Comprendre l'indivision", "Pratique"],
    date: "15 janvier 2025",
    readTime: "10 min",
    image: blogIndivision,
    imageAlt: "Dossier d'indivision sur bureau",
  },
  {
    slug: "article-815-code-civil-explique",
    title: "Article 815 du Code civil expliqué simplement",
    excerpt: "Décryptage de l'article 815, pierre angulaire du droit de l'indivision. Ce que dit la loi et ce que cela implique pour vous.",
    category: "Juridique",
    tags: ["Juridique", "Comprendre l'indivision"],
    date: "8 janvier 2025",
    readTime: "8 min",
    image: blogJuridique,
    imageAlt: "Classeur de pièces – sortie d'indivision",
  },
  {
    slug: "sortie-amiable-partage-judiciaire",
    title: "Sortie amiable ou partage judiciaire : quelle solution choisir ?",
    excerpt: "Comparatif des deux principales voies pour sortir de l'indivision. Avantages, inconvénients, délais et coûts de chaque option.",
    category: "Pratique",
    tags: ["Pratique", "Juridique"],
    date: "18 décembre 2024",
    readTime: "12 min",
    image: blogChoix,
    imageAlt: "Plan de bien immobilier sur table",
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
    imageAlt: "Archives de dossiers – Patrimoine Indivis",
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
    imageAlt: "Salle de réunion – médiation",
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
    imageAlt: "Courrier administratif sur bureau",
  },
];

export const blogTags = [
  "Comprendre l'indivision",
  "Juridique",
  "Succession",
  "Divorce",
  "Pratique",
];
