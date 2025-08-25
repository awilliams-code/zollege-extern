const clinics = [
  { id: 1, name: "Austin Dental Clinic", city: "Austin", type: "Dental", offers: "Externships + Jobs", contact: "austin@clinic.com" },
  { id: 2, name: "Chicago Health Center", city: "Chicago", type: "Medical", offers: "Externships", contact: "chicago@clinic.com" },
  { id: 3, name: "Phoenix Smile Care", city: "Phoenix", type: "Dental", offers: "Jobs", contact: "phoenix@clinic.com" },
  { id: 4, name: "Dallas Med Group", city: "Dallas", type: "Medical", offers: "Externships + Jobs", contact: "dallas@clinic.com" },
];
export default function Clinics() {
  return (
    <div className="wrap">
      <div className="row between">
        <h1>Partner Clinics</h1>
        <span className="badge">Total: {clinics.length}</span>
      </div>
      <ul className="grid">
        {clinics.map((c) => (
          <li key={c.id} className="card">
            <h2>{c.name}</h2>
            <p>{c.type} • {c.city}</p>
            <p>Offers: {c.offers}</p>
            <p>Contact: {c.contact}</p>
            <div className="row">
              <button className="btn primary">Select / Contact</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
