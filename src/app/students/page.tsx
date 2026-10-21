
import StudentDirectory from "@/components/StudentDirectory";
import { students } from "@/data/studentsData";

export default function StudentsPage() {
  return (
    <div className="mx-auto my-8 w-[calc(100%-2rem)] max-w-6xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900">
          Students
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Browse students and view their profiles.
        </p>
      </div>

      <StudentDirectory students={students} />
    </div>
  );
}
