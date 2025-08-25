const students = [
  { id: 1, name: "Emily Johnson", program: "Dental Assistant", city: "Austin", externshipHours: 40, cv: "#" },
  { id: 2, name: "Michael Lee", program: "Medical Assistant", city: "Chicago", externshipHours: 80, cv: "#" },
];

export default function Students() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Students & Graduates</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {students.map((s) => (
          <li key={s.id} className="bg-white shadow-md p-6 rounded-2xl">
            <h2 className="text-xl font-semibold">{s.name}</h2>
            <p>{s.program} – {s.city}</p>
            <p>Externship Hours: {s.externshipHours}</p>
            <a href={s.cv} className="text-blue-600 underline mt-2 block">View CV</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
