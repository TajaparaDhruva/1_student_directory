
import Link from "next/link";
import type { Student } from "@/types/types";

export default function StudentCard({
  student,
}: {
  student: Student;
}) {
  return (
    <article className="rounded border border-slate-200 bg-white p-4">
      <div className="flex items-start justify-between">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 font-bold text-blue-700">
          {student.initials}
        </span>

        <span className="rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-xs text-slate-500">
          {student.id}
        </span>
      </div>

      <h2 className="mt-3 font-semibold text-slate-900">
        {student.name}
      </h2>

      <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-500">
        <span className="rounded border border-indigo-100 bg-indigo-50 px-1.5 py-0.5 text-blue-700">
          {student.department}
        </span>
        <span>
          {student.year}
          {student.year === 1
            ? "st"
            : student.year === 2
              ? "nd"
              : student.year === 3
                ? "rd"
                : "th"}{" "}
          Year
        </span>
      </div>

      <div className="mt-4 border-t border-slate-200 pt-3 text-sm">
        <Link
          href={`/students/${student.id}`}
          className="font-medium text-blue-600 hover:underline"
        >
          View profile →
        </Link>
      </div>
    </article>
  );
}
