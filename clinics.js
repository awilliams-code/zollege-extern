const clinics = [
  { id: 1, name: "Austin Dental Clinic", city: "Austin", type: "Dental", contact: "austin@clinic.com" },
  { id: 2, name: "Chicago Health Center", city: "Chicago", type: "Medical", contact: "chicago@clinic.com" },
];

export default function Clinics() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Partner Clinics</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {clinics.map((c) => (
          <li key={c.id} className="bg-white shadow-md p-6 rounded-2xl">
            <h2 className="text-xl font-semibold">{c.name}</h2>
            <p>{c.type} – {c.city}</p>
            <p>Contact: {c.contact}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
