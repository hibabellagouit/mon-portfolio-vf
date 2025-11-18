interface EducationCardProps {
  start: string;
  end?: string;
  degree: string;
  field?: string;
  school: string;
  location?: string;
  highlights?: string[];
}

export default function EducationCard({
  start,
  end,
  degree,
  field,
  school,
  location,
  highlights,
}: EducationCardProps) {
  return (
    <div className="relative p-6 rounded-2xl
                    bg-gradient-to-br from-blue-50/40 via-purple-50/40 to-pink-50/40
                    border border-white/20 shadow-lg backdrop-blur-xl
                    hover:scale-[1.01] transition-all">

      {/* POINT DE TIMELINE */}
      <div className="absolute -left-4 top-6 w-3 h-3 rounded-full
                      bg-gradient-to-r from-blue-600 to-purple-600 shadow-md"></div>

      <p className="text-xs uppercase font-semibold text-blue-600 tracking-wide">
        {start} → {end ?? "En cours"}
      </p>

      <h3 className="text-lg font-bold text-slate-900 mt-1">
        {degree} {field ? `— ${field}` : ""}
      </h3>

      <p className="text-sm text-slate-600 font-medium">{school}</p>

      {location && (
        <p className="text-xs text-slate-500 mt-1">{location}</p>
      )}

      {highlights && (
        <ul className="mt-3 ml-3 text-sm text-slate-700 space-y-1">
          {highlights.map((h, index) => (
            <li key={index}>• {h}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
