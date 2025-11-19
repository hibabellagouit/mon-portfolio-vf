export default function Contact() {
  return (
    <section className="max-w-lg mx-auto space-y-8 animate-fadeIn">

      {/* TITRE */}
      <div>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
          Contact
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Voici mes informations pour me contacter directement.
        </p>
      </div>

      {/* CARTE CONTACT */}
      <div className="space-y-5 p-6 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/30 shadow-xl">

        {/* EMAIL */}
        <div>
          <p className="text-xs font-semibold text-purple-700">Email</p>
          <a
            href="mailto:bellagouithiba@gmail.com"
            className="text-slate-700 text-sm hover:underline"
          >
            bellagouithiba@gmail.com
          </a>
        </div>

        {/* TÉLÉPHONE */}
        <div>
          <p className="text-xs font-semibold text-purple-700">Téléphone</p>
          <p className="text-slate-700 text-sm">+212 6 12 34 56 78</p>
        </div>

        {/* LOCALISATION */}
        <div>
          <p className="text-xs font-semibold text-purple-700">Localisation</p>
          <p className="text-slate-700 text-sm">Marrakech, Maroc</p>
        </div>

        {/* LINKEDIN */}
        <div>
          <p className="text-xs font-semibold text-purple-700">LinkedIn</p>
          <a
            href="https://www.linkedin.com/in/hibabellagouit"
            target="_blank"
            className="text-blue-600 text-sm hover:underline"
          >
            linkedin.com/in/hibabellagouit
          </a>
        </div>

        {/* GITHUB */}
        <div>
          <p className="text-xs font-semibold text-purple-700">GitHub</p>
          <a
            href="https://github.com/hibabellagouit"
            target="_blank"
            className="text-slate-700 text-sm hover:underline"
          >
            github.com/hibabellagouit
          </a>
        </div>

      </div>

      {/* BOUTONS */}
      <div className="flex gap-3 justify-center mt-4">
        <a
          href="mailto:bellagouithiba@gmail.com"
          className="px-5 py-2 rounded-full text-white bg-gradient-to-r from-pink-600 to-purple-600 shadow-lg hover:scale-105 transition text-sm font-medium"
        >
          Envoyer un email
        </a>

        <a
          href="/certifs/cv.pdf"
          download
          className="px-5 py-2 rounded-full border border-purple-500 text-purple-600 hover:bg-purple-50 transition text-sm font-medium"
        >
          Télécharger CV
        </a>
      </div>

    </section>
  );
}
