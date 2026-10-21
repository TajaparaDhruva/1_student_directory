
import Link from "next/link";

const departments = [
  {
    name: "Computer Science",
    slug: "computer-science",
    description:
      "Software engineering, artificial intelligence, algorithms, and systems infrastructure.",
    specializations: 4,
    students: 320,
  },
  {
    name: "Design",
    slug: "design",
    description:
      "User experience research, visual communication, interaction design, and product prototyping.",
    specializations: 3,
    students: 185,
  },
  {
    name: "Business",
    slug: "business",
    description:
      "Strategic management, financial technology, international entrepreneurship, and analytics.",
    specializations: 3,
    students: 240,
  },
];

export default function DepartmentsPage() {
  return (
    <div className="mx-auto my-8 w-[calc(100%-2rem)] max-w-5xl">
      <div className="mb-6 flex flex-col justify-between gap-3 border-b border-slate-200 pb-5 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Departments
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Explore academic faculties, programs, and enrolled students.
          </p>
        </div>

        <span className="text-xs text-slate-500">
          <span className="text-blue-600">●</span> 3 Active Academic Faculties
        </span>
      </div>

      <div className="overflow-hidden rounded border border-slate-200 bg-white">
        {departments.map((department) => (
          <article
            key={department.slug}
            className="flex flex-col gap-4 border-b border-slate-200 p-5 last:border-b-0 sm:flex-row sm:items-center"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-indigo-50 text-lg text-blue-600">
              ▣
            </span>

            <div className="flex-1">
              <h2 className="font-semibold text-slate-900">
                {department.name}
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                {department.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-4 text-xs text-slate-500">
                <span>
                  ◈ {department.specializations} Specializations
                </span>
                <span>
                  ♙ {department.students} Enrolled Students
                </span>
              </div>
            </div>

            <Link
              href={
                department.slug === "computer-science"
                  ? "/departments/computer-science/web-development"
                  : `/students?department=${department.slug}`
              }
              className="shrink-0 font-medium text-blue-600 hover:underline"
            >
              View students →
            </Link>
          </article>
        ))}
      </div>

      <footer className="mt-5 flex justify-between gap-3 border-t border-slate-200 pt-4 text-xs text-slate-500">
        <span>Curriculum Year 2024–2025</span>
        <span>Updated daily via Campus Records API</span>
      </footer>
    </div>
  );
}
