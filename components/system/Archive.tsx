const PROJECTS = [
  {
    title: "WhatsApp CRM OS",
    client: "Internal / Lead-Gen",
    tech: ["Node.js", "Notion", "WhatsApp API"],
    description: "Architected a real-time indexing system that captures and categorizes high-volume WhatsApp inquiries directly into a modular Notion CRM.",
    impact: "Automated 1,000+ lead entries monthly without manual oversight."
  },
  {
    title: "Venture Studio Infrastructure",
    client: "Optima Logic",
    tech: ["Next.js", "Serverless", "Tailwind"],
    description: "Designed a high-performance digital foundation for multi-tenant business operations, focusing on async-first communication protocols.",
    impact: "Reduced system latency for client onboarding by 65%."
  },
  {
    title: "Technical Journal CMS",
    client: "Personal Infrastructure",
    tech: ["Next.js 14", "Notion Headless", "TS"],
    description: "Built a self-healing technical blog using the 2026-03-11 Notion Data Source protocol to ensure zero-maintenance content delivery.",
    impact: "Achieved 100/100 Lighthouse performance scores."
  }
];

export default function Archive() {
  return (
    <section className="py-24 border-t border-system-border" id="archive">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-3xl font-black uppercase tracking-tighter">Project_Archive</h2>
        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Type: Production_Logs</span>
      </div>

      <div className="grid grid-cols-1 gap-1">
        {PROJECTS.map((proj, i) => (
          <div key={i} className="group border border-system-border p-8 hover:bg-system-gray/40 transition-all">
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="max-w-xl">
                <div className="flex gap-2 mb-4">
                  {proj.tech.map(t => (
                    <span key={t} className="text-[9px] font-mono border border-system-border px-2 py-0.5 text-gray-500 uppercase">{t}</span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold uppercase group-hover:text-system-green transition-colors">{proj.title}</h3>
                <p className="text-sm text-gray-400 mt-4 leading-relaxed font-light">{proj.description}</p>
              </div>
              
              <div className="w-full md:w-64 p-4 border-l border-system-border bg-system-gray/20">
                <h4 className="text-[10px] font-mono text-system-green uppercase mb-2">// Impact_Metric</h4>
                <p className="text-xs text-gray-300 font-mono italic">"{proj.impact}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}