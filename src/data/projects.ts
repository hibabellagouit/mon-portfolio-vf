export type Project = {
  title: string;
  period?: string;
  tags: string[];
  summary: string;
  context?: string;
  company?: string;
  location?: string;
};

export const projects: Project[] = [
  {
    title: "Ujuke — Lecteur de musique",
    period: "2022 — 2023",
    tags: ["react", "MongoDB", "Merise"],
    company: "Entreprise à Marrakech",
    location: "Marrakech",
    context: "Stage DUT (travail de groupe)",
    summary:
      "Conception et développement d’un lecteur de musique. Participation à toutes les étapes : analyse Merise, modélisation UML, implémentation en Java, tests et documentation.",
  },
  {
    title: "Sklep — Application de vente en ligne",
    period: "2022 — 2023",
    tags: ["Ionic", "Laravel", "Angular", "Mysql"],
    company: "Cité d’Innovation de Marrakech",
    location: "Marrakech",
    context: "Stage de fin d’études (Projet de Fin d'etude DUT)",
    summary:
      "Développement d’une application web de vente en ligne. Mise en place du front-end en React, gestion du catalogue produits, panier, et interfaces utilisateur adaptées aux besoins du projet.",
  },
{
    title: "La Prédiction des  crédits de Logement ",
    period: "2023 — 2024",
    tags: ["python", "Flask", "Vue.js", "Postman"],
    company: "École Supérieure de Technologie de Sale",
    location: "Sale",
    context: "Projet",
    summary:
      "La Prédiction des  crédits de Logement .",
  },
];
