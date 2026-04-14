import TransactionFlow from "@/components/system/TransactionFlow";

export default function FinancePage() {
  return (
    <div className="max-w-6xl mx-auto py-12 space-y-24">
      {/* Header Area */}
      <section className="border-l-2 border-system-green pl-8">
        <h1 className="text-6xl font-black uppercase tracking-tighter mb-4">
          Web3 & <span className="text-gray-500">Finance</span>
        </h1>
        <p className="text-gray-400 max-w-xl font-mono text-sm">
          Architecting resilient interfaces for high-frequency decentralized protocols.
        </p>
      </section>

      {/* The Showcase Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* The Live "Transaction Trap" */}
        <div className="order-2 lg:order-1 relative">
          <TransactionFlow />
          <div className="absolute -bottom-4 -right-4 text-[10px] font-mono text-gray-700 uppercase">
            Protocol_Simulation_01
          </div>
        </div>

        <div className="order-1 lg:order-2 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold uppercase tracking-tight text-white">
              Friction as a Security Feature
            </h2>
            <p className="text-gray-400 leading-relaxed">
              In DeFi, speed is secondary to <span className="text-white">certainty</span>. 
              I design transaction flows that provide granular feedback on gas priority, 
              slippage risk, and bridge latency to prevent user error in irreversible environments.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-system-border p-4">
              <span className="block text-[10px] text-gray-600 mb-2 uppercase">Focus_01</span>
              <span className="text-white font-bold text-sm uppercase">Account Abstraction</span>
            </div>
            <div className="border border-system-border p-4">
              <span className="block text-gray-600 text-[10px] mb-2 uppercase">Focus_02</span>
              <span className="text-white font-bold text-sm uppercase">Multi-Chain UX</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}