import Link from "next/link";
export default function Home() {
  return (
    <main className="wrap">
      <h1>Zollege Extern Network</h1>
      <p>Connecting Students, Graduates, and Clinics Across the United States.</p>
      <div className="row">
        <Link href="/students" className="btn primary">View Students</Link>
        <Link href="/clinics" className="btn success">View Clinics</Link>
      </div>
      <p className="muted">
        Dental Assistant Program: 12 weeks • Externship: 40 hrs | Medical Assistant Program: 18 weeks • Externship: 80 hrs
      </p>
    </main>
  );
}
