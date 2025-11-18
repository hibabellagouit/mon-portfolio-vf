import ExperienceCard from "@/components/ExperienceCard";

export default function Experience() {
  return (
    <div className="max-w-3xl mx-auto">

      <h1 className="text-3xl font-extrabold
                     bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600
                     text-transparent bg-clip-text">
        Parcours Professionnel
      </h1>

      <p className="mt-2 text-slate-600">
        Voici un aperçu de mes expériences professionnelles et des missions réalisées.
      </p>

      <div className="mt-10 space-y-10 border-l-2 border-purple-300/50 pl-8">

        {/* EXPERIENCE 1 */}
        <ExperienceCard
          date="Avr 2024 – Juin 2024"
          title="Stage en Développement Mobile & Web"
          company="cité d'innovation"
          location="Marrakech"
          missions={[
            "Développement et optimisation d’une application mobile commerciale",
            "Création d’une interface utilisateur intuitive",
            "Intégration de fonctionnalités de gestion du catalogue",
            "Collaboration avec l'équipe pour améliorer l’expérience client",
          ]}
          tech={["Django ", "Python", "sqlite",]}
        />

        {/* EXPERIENCE 2 */}
        <ExperienceCard
          date="Juin 2023 – Juil 2023"
          title="Développement d’un lecteur de musique"
          company="UPXP Africa"
          location="Marrakech"
          missions={[
            "Conception d’un lecteur audio intelligent",
            "Création d’une interface ergonomique",
            "Implémentation des fonctionnalités audio",
          ]}
          tech={["react", "Mongodb", ]}
        />

        {/* EXPERIENCE 3 */}
        <ExperienceCard
          date="Juin 2022 – Juil 2022"
          title="Stage en Informatique & Administration"
          company="Délégation de l'Enseignement"
          location="Marrakech"
          missions={[
            "Support informatique",
            "Gestion de fichiers administratifs",
            "Installation et configuration d’outils numériques",
          ]}
          tech={["Windows", "Administration", "Support Technique"]}
        />

      </div>
    </div>
  );
}
