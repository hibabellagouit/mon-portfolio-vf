import { certifications } from "@/data/certifications";
import { useState, useMemo } from "react";

export default function CertificationsPage() {
  const [query, setQuery] = useState("");

  const list = useMemo(() =>
    certifications
      .filter(c =>
        [c.title, c.issuer, ...(c.skills ?? []), ...(c.tags ?? [])]
          .join(" ")
          .toLowerCase()
          .includes(query.toLowerCase())
      )
      .sort((a, b) => b.issueDate.localeCompare(a.issueDate))
  , [query]);

  return (
    <div className="max-w-4xl mx-auto">

      <h1 className="text-3xl font-extrabold
                     bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600
                     bg-clip-text text-transparent">
        Certifications Professionnelles
      </h1>

      <p className="text-slate-600 mt-1">
        Certifications techniques dans le développement Java, Hibernate, React et technologies modernes.
      </p>

      <input
        placeholder="Filtrer (ex : Java, React, Hibernate…) "
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="mt-5 w-full rounded-xl border px-4 py-2 shadow-sm
                   focus:ring-2 focus:ring-purple-400 outline-none"
      />

      <div className="grid gap-6 mt-10 md:grid-cols-2">
        {list.map(c => (
          <div
            key={c.title}
            className="rounded-2xl p-5 shadow-lg border
                       bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50
                       backdrop-blur-xl hover:shadow-2xl transition-all"
          >
            {c.image && (
              <img
                src={c.image}
                alt={c.title}
                className="h-16 w-16 object-contain mb-3 rounded-lg"
              />
            )}

            <h3 className="font-bold text-lg">{c.title}</h3>

            <p className="text-sm text-slate-600">
              {c.issuer} • {c.issueDate.replace("-", "/")}
              {c.status === "active" && (
                <span className="ml-2 bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">
                  Active
                </span>
              )}
            </p>

            {c.skills && (
              <div className="mt-3 flex flex-wrap gap-1">
                {c.skills.map(s => (
                  <span
                    key={s}
                    className="text-xs bg-white/60 border px-2 py-1 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
            )}

            <a
              href={c.credentialUrl}
              target="_blank"
              className="block mt-4 text-sm font-medium text-purple-700 hover:underline"
            >
              Voir le certificat PDF →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
