import DeploymentPipeline from "@/components/system/DeploymentPipeline";

export default function OpsPage() {
  return (
    <div className="max-w-6xl mx-auto py-12 space-y-24">
      {/* Header Area */}
      <section className="border-l-2 border-system-green pl-8">
        <h1 className="text-6xl font-black uppercase tracking-tighter mb-4">
          DevOps & <span className="text-gray-500">Infrastructure</span>
        </h1>
        <p className="text-gray-400 max-w-xl font-mono text-sm">
          Automating the bridge between local development and global production.
        </p>
      </section>

      {/* The DevOps Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold uppercase tracking-tight text-white">
              Zero-Touch Deployment
            </h2>
            <p className="text-gray-400 leading-relaxed font-light">
              I architect CI/CD environments that treat <span className="text-white">infrastructure as code</span>. 
              By utilizing GitHub Actions and Vercel’s Edge Network, I eliminate manual configuration errors, 
              ensuring 99.9% uptime and sub-second deployment cycles.
            </p>
          </div>

          <div className="border-l border-system-border pl-6 space-y-6">
            <div>
              <h4 className="text-system-green font-mono text-[10px] uppercase mb-1">// Observability</h4>
              <p className="text-sm text-gray-500">Real-time monitoring of system health and deployment latency.</p>
            </div>
            <div>
              <h4 className="text-system-green font-mono text-[10px] uppercase mb-1">// Scalability</h4>
              <p className="text-sm text-gray-500">Serverless architecture that scales automatically with user traffic.</p>
            </div>
          </div>
        </div>

        {/* The Pipeline Simulation */}
        <div className="sticky top-24">
          <DeploymentPipeline />
          <div className="mt-4 font-mono text-[10px] text-gray-600 uppercase">
            System_Manifest: iamsaint.me/v1.0.4
          </div>
        </div>
      </section>
    </div>
  );
}