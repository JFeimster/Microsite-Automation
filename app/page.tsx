const modules = [
  {
    title: 'Template Marketplace & Component Library',
    description:
      'Browse template archetypes, reusable UI blocks, and brand skin variants for fast microsite assembly.',
  },
  {
    title: 'Content Integration & Notion Sync Center',
    description:
      'Map Notion properties to site fields, control sync intervals, and validate incoming content before deploy.',
  },
  {
    title: 'Global Domain & DNS Command Center',
    description:
      'Track domains, subdomains, SSL, DNS states, and endpoint health across live microsites.',
  },
  {
    title: 'Conversion Analytics & Lead Performance Hub',
    description:
      'Monitor pre-qual forms, calculator performance, attribution, and A/B results across verticals.',
  },
  {
    title: 'Deployment Governance & Pipeline Logs',
    description:
      'Log deployment actions, environment status, rollback readiness, and pipeline history.',
  },
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero-panel">
        <p className="eyebrow">Site Factory / Internal Control Plane</p>
        <h1>Microsite Automation</h1>
        <p className="hero-copy">
          Internal control plane for launching, routing, and governing microsites across funding
          verticals without rebuilding the same circus every time.
        </p>
      </section>

      <section className="status-grid">
        <div className="status-card">
          <span className="status-label">Phase</span>
          <strong>Scaffolded</strong>
        </div>
        <div className="status-card">
          <span className="status-label">Framework</span>
          <strong>Next.js App Router</strong>
        </div>
        <div className="status-card">
          <span className="status-label">Purpose</span>
          <strong>Internal Ops App</strong>
        </div>
      </section>

      <section className="module-section">
        <div className="section-heading">
          <p className="eyebrow">Recommended Modules</p>
          <h2>Phase-ready surfaces for the control plane</h2>
        </div>
        <div className="module-grid">
          {modules.map((module) => (
            <article key={module.title} className="module-card">
              <h3>{module.title}</h3>
              <p>{module.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
