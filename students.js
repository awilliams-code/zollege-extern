const students = [
  { id: 1, name: "Emily Johnson", program: "Dental Assistant", city: "Austin", externshipHours: 40, status: "Ready for Externship", cv: "#" },
  { id: 2, name: "Michael Lee", program: "Medical Assistant", city: "Chicago", externshipHours: 80, status: "Graduate - Seeking Job", cv: "#" },
  { id: 3, name: "Sophia Martinez", program: "Dental Assistant", city: "Phoenix", externshipHours: 40, status: "Ready for Externship", cv: "#" },
  { id: 4, name: "David Kim", program: "Medical Assistant", city: "Dallas", externshipHours: 80, status: "Graduate - Seeking Job", cv: "#" },
];
export default function Students() {
  return (
    <div className="wrap">
      <div className="row between">
        <h1>Students & Graduates</h1>
        <span className="badge">Total: {students.length}</span>
      </div>
      <ul className="grid">
        {students.map((s) => (
          <li key={s.id} className="card">
            <h2>{s.name}</h2>
            <p>{s.program} • {s.city}</p>
            <p>Required Externship Hours: {s.externshipHours}</p>
            <p><span className="badge">{s.status}</span></p>
            <div className="row">
              <a href={s.cv} className="btn primary">View CV</a>
              <button className="btn success">Select / Contact</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
