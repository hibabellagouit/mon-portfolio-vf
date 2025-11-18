import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="space-y-8 animate-fadeIn">

      {/* TITLE */}
      <div>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent drop-shadow">
          Projets
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Sélection de projets réalisés en stage et en formation.
        </p>
      </div>

      {/* PROJECTS GRID */}
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="rounded-2xl bg-white/40 backdrop-blur-xl p-6 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition border border-white/20"
          >
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-semibold text-slate-800">
                {p.title}
              </h3>

              {p.period && (
                <span className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-3 py-1 text-xs text-white shadow">
                  {p.period}
                </span>
              )}
            </div>

            {p.company && (
              <p className="mt-1 text-xs text-slate-600">
                {p.company} – {p.location}
              </p>
            )}

            <p className="mt-4 text-sm text-slate-700 leading-relaxed">
              {p.summary}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/60 backdrop-blur-md px-3 py-1 text-xs text-slate-700 shadow"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

    </section>
  );
}
