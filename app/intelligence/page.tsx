import LogicViewer from "@/components/system/LogicViewer";

export default function IntelligencePage() {
  return (
    <div className="max-w-6xl mx-auto py-12 space-y-24">
      {/* Header Area */}
      <section className="border-l-2 border-system-green pl-8">
        <h1 className="text-6xl font-black uppercase tracking-tighter mb-4">
          Agentic <span className="text-gray-500">Intelligence</span>
        </h1>
        <p className="text-gray-400 max-w-xl font-mono text-sm">
          Designing systems that move beyond chatbots into autonomous decision-making engines.
        </p>
      </section>

      {/* The Showcase Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold uppercase tracking-tight text-white">
              The Probabilistic UI Framework
            </h2>
            <p className="text-gray-400 leading-relaxed">
              In AI, interfaces must manage <span className="text-white">uncertainty</span>. 
              I design Human-in-the-loop (HITL) checkpoints that allow users to steer agents 
              without disrupting autonomous workflows.
            </p>
          </div>
          
          <ul className="space-y-4 font-mono text-xs text-gray-500">
            <li className="flex items-center gap-2">
              <span className="text-system-green">→</span> LATENCY_MASKING_STRATEGIES
            </li>
            <li className="flex items-center gap-2">
              <span className="text-system-green">→</span> HALLUCINATION_MITIGATION_UX
            </li>
            <li className="flex items-center gap-2">
              <span className="text-system-green">→</span> MULTI-MODAL_FEEDBACK_LOOPS
            </li>
          </ul>
        </div>

        {/* The Live "Logic Viewer" Trap */}
        <div className="relative">
          <div className="absolute -top-4 -left-4 text-[10px] font-mono text-gray-700 uppercase">
            Live_Execution_Environment
          </div>
          <LogicViewer />
          <div className="mt-4 p-4 border border-system-border text-[10px] font-mono text-gray-500">
            {`// This trace demonstrates the transition from autonomous processing to human-validation request.`}
          </div>
        </div>
      </section>
    </div>
  );
}