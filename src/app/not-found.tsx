import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto my-20 w-[calc(100%-2rem)] max-w-4xl text-center">
      <span className="inline-block rounded border border-slate-300 px-3 py-1 text-xs font-bold text-slate-500">
        ● 404 · ROUTE NOT FOUND
      </span>

      <h1 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl">
        Student or department not found
      </h1>

      <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-500">
        The requested directory entry or path could not be located.
        It may have moved or the identifier might be invalid.
      </p>

      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <Link
          href="/students"
          className="rounded border border-blue-600 bg-blue-600 px-4 py-3 text-sm text-white hover:bg-blue-700"
        >
          Return to Students Directory
        </Link>

        <Link
          href="/departments"
          className="rounded border border-slate-300 bg-white px-4 py-3 text-sm text-slate-600 hover:bg-slate-50"
        >
          Browse All Departments
        </Link>
      </div>

      <section className="mt-10 border border-slate-300 bg-white text-left">
        <h2 className="border-b border-slate-300 bg-indigo-50 px-5 py-3 text-xs font-bold uppercase text-slate-500">
          Suggested Starting Points
        </h2>

        <Link
          href="/departments/computer-science/web-development"
          className="block border-b border-slate-200 px-5 py-4 hover:bg-slate-50"
        >
          Computer Science — Web Development →
        </Link>

        <Link
          href="/students"
          className="block border-b border-slate-200 px-5 py-4 hover:bg-slate-50"
        >
          Students Directory →
        </Link>

        <Link
          href="/departments"
          className="block px-5 py-4 hover:bg-slate-50"
        >
          All Departments →
        </Link>
      </section>
    </div>
  );
}
