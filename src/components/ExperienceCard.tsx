interface ExperienceCardProps {
  date: string;
  title: string;
  company: string;
  location: string;
  missions: string[];
  tech?: string[];
}

export default function ExperienceCard({
  date,
  title,
  company,
  location,
  missions,
  tech,
}: ExperienceCardProps) {
  return (
    <div className="relative border border-white/20 rounded-2xl p-6
                    bg-gradient-to-br from-pink-50/50 via-purple-50/50 to-blue-50/50
                    shadow-lg backdrop-blur-xl hover:scale-[1.01] transition-all">

      {/* Timeline Ball */}
      <div className="absolute -left-4 top-6 w-3 h-3 rounded-full
                      bg-gradient-to-r from-pink-500 to-purple-600 shadow-md"></div>

      <p className="text-xs uppercase font-semibold text-purple-600 tracking-wide mb-2">
        {date}
      </p>

      <h3 className="text-lg font-bold text-slate-900">{title}</h3>

      <p className="text-sm text-slate-600 font-medium">
        {company} – {location}
      </p>

      <ul className="mt-4 ml-3 text-sm text-slate-700 space-y-2">
        {missions.map((m, i) => (
          <li key={i} className="leading-relaxed">
            • {m}
          </li>
        ))}
      </ul>

      {tech && (
        <div className="flex flex-wrap gap-2 mt-4">
          {tech.map((t, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full text-xs text-white
                         bg-gradient-to-r from-pink-500 to-purple-600 shadow"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
