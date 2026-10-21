"use client";

import { useMemo, useState } from "react";
import StudentCard from "@/components/StudentCard";
import type { Student } from "@/types/types";

export default function StudentDirectory({
  students,
}: {
  students: Student[];
}) {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All departments");

  const departments = [
    "All departments",
    ...Array.from(new Set(students.map((s) => s.department))),
  ];

const filteredStudents = useMemo(() => {
    const query = search.trim().toLowerCase();

    return students.filter((student) => {
      const matchesSearch =
        student.name.toLowerCase().includes(query) ||
        student.id.toLowerCase().includes(query);

      const matchesDepartment =
        department === "All departments" ||
        student.department === department;

      return matchesSearch && matchesDepartment;
    });
  }, [students, search, department]);

  return (
    <>
      <div className="mb-5 flex flex-col gap-3 rounded border border-slate-200 bg-white p-3 sm:flex-row sm:items-center sm:justify-between">
        <input
          aria-label="Search students"
          placeholder="⌕  Search students"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="w-full rounded border border-slate-300 px-3 py-2 outline-none focus:border-blue-500 sm:w-1/2"
        />

        <label className="flex items-center gap-3 text-xs text-slate-500">
          Department:
          <select
            value={department}
            onChange={(event) => setDepartment(event.target.value)}
            className="min-w-36 rounded border border-slate-300 bg-white px-3 py-2 text-slate-700"
          >
            {departments.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>

      {filteredStudents.length > 0 ? (  
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredStudents.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      ) : (
        <div className="rounded border border-slate-200 bg-white p-10 text-center">
          <h2 className="font-semibold text-slate-900">
            No students found
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Try another name or select a different department.
          </p>
        </div>
      )}

      <div className="mt-6 flex justify-between border-t border-slate-200 pt-4 text-xs text-slate-500">
        <span>
          Showing {filteredStudents.length} of {students.length} students
        </span>
        <span>Campus Records</span>
      </div>
    </>
  );
}
