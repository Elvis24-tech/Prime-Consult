export default function Services() {
  const services = [
    { title: "Project Planning", desc: "Create project plans with milestones, timelines, and resource allocation." },
    { title: "Team Coordination", desc: "Facilitate effective communication and teamwork." },
    { title: "Risk Management", desc: "Identify, assess, and mitigate project risks." }
  ];

  return (
    <section id="services" style={{ background: '#f3f4f6', padding: '100px 20px' }}>
      <h2 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '24px' }}>Our Services</h2>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {services.map((s, index) => (
          <div className="card" key={index} style={{ flex: '1 1 300px' }}>
            <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>{s.title}</h3>
            <p style={{ color: '#4b5563' }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
