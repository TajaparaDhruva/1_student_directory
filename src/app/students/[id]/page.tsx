
import Link from "next/link";
import { notFound } from "next/navigation";
import { students } from "@/data/studentsData";

export default async function StudentProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const student = students.find((item) => item.id === id);

  if (!student) notFound();

  const yearLabel =
    student.year === 1
      ? "1st"
      : student.year === 2
        ? "2nd"
        : student.year === 3
          ? "3rd"
          : "4th";

  return (
    <div className="mx-auto my-8 w-[calc(100%-2rem)] max-w-4xl">
      <div className="mb-2 flex items-center gap-2 text-xs text-slate-500">
        <Link href="/students">Students</Link>
        <span>/</span>
        <span>{student.name}</span>
      </div>

      <Link
        href="/students"
        className="mb-5 inline-block text-sm text-blue-600 hover:underline"
      >
        ← Back to students
      </Link>

      <section className="rounded border border-slate-200 bg-white p-5 sm:p-6">
        <div className="flex items-center gap-4 border-b border-slate-200 pb-5">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-700">
            {student.initials}
          </span>

          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              {student.name}
            </h1>
            <div className="mt-1 flex flex-wrap gap-2 text-xs">
              <span className="rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-slate-500">
                {student.id}
              </span>
              <span className="rounded border border-green-200 bg-green-50 px-1.5 py-0.5 text-green-700">
                {student.status}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 border-b border-slate-200 py-5 sm:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase text-slate-500">
              Department
            </p>
            <p>{student.department}</p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase text-slate-500">
              Study Year
            </p>
            <p>
              {yearLabel} Year
              {student.year === 3 ? " (Junior)" : ""}
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase text-slate-500">
              Email
            </p>
            <a
              href={`mailto:${student.email}`}
              className="text-blue-600"
            >
              {student.email}
            </a>
          </div>

          <div>
            <p className="text-xs font-bold uppercase text-slate-500">
              Enrolled
            </p>
            <p>{student.enrollment}</p>
          </div>
        </div>

        <section className="border-b border-slate-200 py-5">
          <h2 className="mb-2 font-semibold">About</h2>
          <p className="text-sm leading-6 text-slate-600">
            {student.about}
          </p>
        </section>

        <section className="pt-5">
          <h2 className="mb-3 font-semibold">Academic Details</h2>

          <div className="flex justify-between gap-4 border-b border-slate-100 py-2 text-sm">
            <span className="text-slate-500">Department</span>
            <span>{student.department}</span>
          </div>

          <div className="flex justify-between gap-4 border-b border-slate-100 py-2 text-sm">
            <span className="text-slate-500">
              Current Academic Standing
            </span>
            <span className="text-right">
              {yearLabel} Year Undergraduate
            </span>
          </div>

          <p className="mb-2 mt-5 text-xs font-bold uppercase text-slate-500">
            Enrolled Subjects
          </p>

          <div className="border border-slate-200">
            {student.subjects.map((subject) => (
              <div
                key={subject.code}
                className="flex justify-between gap-3 border-b border-slate-200 bg-slate-50 px-3 py-3 text-xs last:border-b-0"
              >
                <span>
                  {subject.code}: {subject.name}
                </span>
                <strong className="shrink-0 text-slate-500">
                  {subject.credits} Credits
                </strong>
              </div>
            ))}
          </div>
        </section>
      </section>

      <div className="mt-4 flex justify-between gap-3 text-xs text-slate-500">
        <span>System Record ID: 0948-CS-AM</span>
        <span>Last validated: Oct 24, 2024</span>
      </div>
    </div>
  );
}
