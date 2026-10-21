
import Link from "next/link";
import { notFound } from "next/navigation";
import { students } from "@/data/studentsData";

export default async function SpecializationPage({
  params,
}: {
  params: Promise<{
    departmentSlug: string;
    specializationSlug: string;
  }>;
}) {
  const { departmentSlug, specializationSlug } = await params;

  if (
    departmentSlug !== "computer-science" ||
    specializationSlug !== "web-development"
  ) {
    notFound();
  }

  const enrolledStudents = students.filter(
    (student) =>
      student.departmentSlug === departmentSlug &&
      student.specialization === "Web Development"
  );

  return (
    <div className="mx-auto my-8 w-[calc(100%-2rem)] max-w-5xl">
      <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-slate-500">
        <Link href="/departments">Departments</Link>
        <span>/</span>
        <span>Computer Science</span>
        <span>/</span>
        <span className="font-semibold text-slate-800">Web Development</span>
      </div>

      <div className="flex flex-wrap justify-between gap-4 border-b border-slate-200 pb-3 text-xs">
        <Link href="/departments" className="text-blue-600">
          ← Return to Computer Science Department
        </Link>
        <Link href="/students" className="text-slate-500">
          View all students →
        </Link>
      </div>

      <section className="mt-4 border border-slate-200 bg-white p-5">
        <div className="flex flex-col justify-between gap-5 sm:flex-row">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Web Development
            </h1>
            <span className="mt-2 inline-block rounded border border-slate-200 bg-indigo-50 px-2 py-1 text-xs text-slate-600">
              Specialization under Computer Science
            </span>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
              Focusing on modern frontend architectures, full-stack
              frameworks, reactive interfaces, and distributed web APIs.
            </p>
          </div>

          <div className="shrink-0 sm:text-right">
            <p className="text-xs font-bold uppercase text-slate-500">
              Department Track
            </p>
            <span className="mt-2 inline-block border border-slate-300 px-2 py-1 text-xs">
              CS-SPEC-04
            </span>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 border-t border-slate-200 pt-5 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-xs text-slate-500">Academic Lead</p>
            <p className="font-medium">Prof. Elena Vance</p>
          </div>
          <div>
            <p className="text-xs text-slate-500">Primary Core Lab</p>
            <p className="font-medium">Turing Hall 408</p>
          </div>
          <div>
            <p className="text-xs text-slate-500">Total Enrollment</p>
            <p className="font-medium">
              {enrolledStudents.length} Active Enrollees
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-500">Curriculum Cycle</p>
            <p className="font-medium">2024–2025 Revised</p>
          </div>
        </div>
      </section>

      <div className="my-5 flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
        <h2 className="font-semibold">
          Students in this Specialization{" "}
          <span className="rounded bg-indigo-100 px-1.5 py-0.5 text-xs">
            {enrolledStudents.length}
          </span>
        </h2>
        <span className="text-xs text-slate-500">
          Filtered by Track:{" "}
          <strong className="rounded bg-indigo-50 px-2 py-1 text-slate-700">
            Web Development
          </strong>
        </span>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {enrolledStudents.map((student) => (
          <article
            key={student.id}
            className="border border-slate-200 bg-white p-3"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-700">
                {student.initials}
              </span>

              <div className="min-w-0 flex-1">
                <p className="font-medium">{student.name}</p>
                <p className="text-xs text-slate-500">{student.id}</p>
              </div>

              <span className="border border-slate-200 px-2 py-1 text-xs text-slate-500">
                Year {student.year}
              </span>
            </div>

            <div className="mt-3 flex justify-between gap-3 border-t border-slate-200 pt-3 text-xs">
              <span className="text-slate-500">
                {student.specialization}
              </span>
              <Link
                href={`/students/${student.id}`}
                className="text-blue-600 hover:underline"
              >
                View profile →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
