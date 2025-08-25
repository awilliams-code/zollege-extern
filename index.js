import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <h1 className="text-4xl font-bold mb-6">Zollege Extern Network</h1>
      <p className="mb-8 text-lg text-gray-700">
        Connecting Students, Graduates, and Clinics Across the U.S.
      </p>
      <div className="flex space-x-6">
        <Link href="/students" className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700">
          View Students
        </Link>
        <Link href="/clinics" className="px-6 py-3 bg-green-600 text-white rounded-2xl shadow hover:bg-green-700">
          View Clinics
        </Link>
      </div>
    </main>
  );
}
