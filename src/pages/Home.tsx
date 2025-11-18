import PhotoCard from "@/components/ui/PhotoCard";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

      {/* LEFT SIDE */}
      <div>

        <p className="uppercase tracking-widest text-sm text-pink-600 font-semibold">
          Portfolio
        </p>

        <h1 className="text-4xl md:text-5xl font-extrabold
                       bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600
                       text-transparent bg-clip-text">
          Bellagouit Hiba
        </h1>

        <p className="mt-4 text-lg font-medium text-slate-700">
          Étudiante en Master — Didactique & Ingénierie Éducative
          <br />
          <span className="text-purple-600">Technologies Émergentes</span>
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          Passionnée par les technologies émergentes, l’ingénierie éducative
          et la conception de solutions numériques. J’allie analyse, créativité
          et innovation pour créer des expériences pédagogiques impactantes.
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mt-6">
          {[
            "React", "Java", "JavaScript", "Python",
            "Machine Learning", "Big Data", "SQL"
          ].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-full text-xs
                         bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md">
              {skill}
            </span>
          ))}
        </div>

        {/* Languages */}
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-purple-700">Langues</h3>
          <p className="text-slate-600 text-sm mt-1">
            Arabe (bilingue) – Français (courant) – Anglais (niveau scolaire)
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          <a
            href="/certifs/cv.pdf"
            download
            className="px-5 py-2 rounded-full text-white text-sm font-medium
                       bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600
                       shadow-lg hover:scale-105 transition"
          >
            Télécharger CV
          </a>

          <a
            href="/contact"
            className="px-5 py-2 rounded-full text-sm font-medium border border-purple-500
                       text-purple-600 hover:bg-purple-50 transition"
          >
            Contact
          </a>
        </div>

      </div>

      {/* RIGHT SIDE — PHOTO */}
      <div className="flex justify-center">
        <PhotoCard />
      </div>

    </div>
  );
}
