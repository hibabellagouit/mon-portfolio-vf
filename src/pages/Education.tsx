import EducationCard from "@/components/EducationCard";
import { education } from "@/data/education";

export default function EducationPage() {
  return (
    <div className="max-w-3xl mx-auto">

      <h1 className="text-3xl font-extrabold
                     bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600
                     text-transparent bg-clip-text">
        Formations & Parcours Académique
      </h1>

      <p className="mt-2 text-slate-600">
        Un aperçu de mes études dans le domaine informatique, des technologies émergentes et des systèmes d'information.
      </p>

      <div className="mt-10 space-y-10 border-l-2 border-purple-300/50 pl-8">
        {education.map((e) => (
          <EducationCard
            key={e.school + e.start}
            start={e.start}
            end={e.end}
            degree={e.degree}
            field={e.field}
            school={e.school}
            location={e.location}
            highlights={e.highlights}
          />
        ))}
      </div>
    </div>
  );
}
