import ProductBlade from "@/components/system/ProductBlade"
import LiveStatus from "@/components/ui/LiveStatus"
import ModuleCard from "@/components/ui/ModuleCard"
import SystemMetrics from "@/components/ui/SystemMetrics"

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="py-20 border-l-2 border-system-green pl-8">
        <div className="space-y-4">
          <p className="text-system-green font-mono text-sm uppercase tracking-widest">
            {`> Initializing System... [OK]`}
          </p>
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none">
            Systems <br /> 
            <span className="text-gray-500">Architect</span>
          </h1>
          <div className="max-w-2xl text-gray-400 text-lg leading-relaxed">
            I build digital infrastructure where 
            <span className="text-white"> decentralized finance</span>, 
            <span className="text-white"> agentic AI</span>, and 
            <span className="text-white"> automated DevOps</span> converge.
          </div>
        </div>
      </section>

      {/* The 3 Vertical Traps - Grid Layout */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <ModuleCard 
          id="01" 
          title="Web3 / Finance" 
          status="SECURED" 
          desc="Architecting trustless interfaces and friction-heavy transaction flows." 
        />
        <ModuleCard 
          id="02" 
          title="Agentic AI" 
          status="PROCESSING" 
          desc="UX for probabilistic intelligence and human-in-the-loop workflows and experiences." 
        />
        <ModuleCard 
          id="03" 
          title="DevOps" 
          status="SCALED" 
          desc="CI/CD pipelines for venture studio infrastructure and cloud-native apps." 
        />
      </section>

      {/* Operational Philosophy section */}
      <section className="mt-24 border-t border-system-border pt-16">
        <div className="max-w-3xl">
          <h2 className="text-xs font-mono text-system-green uppercase tracking-[0.3em] mb-4">
            // Operational_Philosophy
          </h2>
          <h3 className="text-4xl font-black uppercase tracking-tighter mb-12">
            How I Solve <br /> <span className="text-gray-500">Complex Systems</span>
          </h3>
          
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-4">
              <span className="font-mono text-gray-600 text-sm">[01]</span>
              <div>
                <h4 className="font-bold uppercase text-white mb-2 text-xl">The Trust-less Interface</h4>
                <p className="text-gray-400 font-light leading-relaxed">
                  In Finance and Web3, UI is a liability. I architect interfaces that prioritize 
                  transactional clarity, state-validation, and user-autonomy to eliminate friction in high-stakes environments.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-4">
              <span className="font-mono text-gray-600 text-sm">[02]</span>
              <div>
                <h4 className="font-bold uppercase text-white mb-2 text-xl">Agentic Intelligence</h4>
                <p className="text-gray-400 font-light leading-relaxed">
                  AI shouldn't be a chatbot; it should be an engine. I design probabilistic UIs that 
                  manage LLM hallucinations through robust human-in-the-loop validation checkpoints.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connection Protocol */}
      <section className="mt-32 mb-20">
        <div className="bg-system-green-5 p-8 md:p-12 relative overflow-hidden"
          style={{ clipPath: "polygon(0 0, 90% 0, 100% 30%, 100% 100%, 0 100%)" }}
        >
          {/* Decorative corner accents */}
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-system-green" />
          
          <div className="max-w-2xl">
            <h2 className="text-xs font-mono text-system-green uppercase tracking-[0.4em] mb-6">
              // Connection_Protocol
            </h2>
            <h3 className="text-4xl font-black uppercase tracking-tighter mb-6">
              Ready to build the <br /> <span className="text-white">Next Infrastructure?</span>
            </h3>
            <p className="text-gray-400 font-mono text-sm mb-10 leading-relaxed">
              I am currently accepting high-impact mandates for Web3 architecture, 
              AI workflow engineering, and DevOps scaling.
            </p>

            <a 
              href="mailto:saint@optimalogic.studio" 
              className="inline-block bg-system-border text-white font-bold uppercase py-4 px-8 hover:bg-white hover:text-black transition-colors duration-300 tracking-tighter"
          style={{ clipPath: "polygon(0 0, 90% 0, 100% 35%, 100% 100%, 0 100%)" }}
            >
              Initiate_Handshake.exe
            </a>
          </div>

          {/* Metadata background text for texture */}
          <div className="absolute -bottom-4 -right-4 opacity-5 pointer-events-none select-none">
            <span className="text-8xl font-black uppercase">HANDSHAKE</span>
          </div>
        </div>
      </section>

      {/* Live Status */}
      <LiveStatus />
      
      {/* System Metrics */}
      <SystemMetrics />
    </div>
  );
}
