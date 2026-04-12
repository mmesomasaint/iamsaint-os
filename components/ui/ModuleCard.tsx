export default function ModuleCard({ id, title, status, desc }: any) {
  return (
    <div className="relative group">
      {/* The Clipped Background Layer */}
      <div 
        className="absolute inset-0 bg-system-border bg-zinc-900 group-hover:bg-system-green transition-colors duration-500"
        style={{ clipPath: "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%)" }}
      />
      
      {/* The Content Layer (Slightly smaller to create an internal border look) */}
      <div 
        className="relative m-[1px] bg-background p-8 h-full transition-all group-hover:bg-system-gray/80"
        style={{ clipPath: "polygon(0 0, 84.5% 0, 99.5% 15%, 99.5% 100%, 0 100%)" }}
      >
        <div className="flex justify-between items-start mb-12">
          <span className="text-xs text-gray-600 font-mono">[{id}]</span>
          <span className="text-[10px] px-2 py-0.5 border border-system-green text-system-green font-mono uppercase animate-flicker">
            {status}
          </span>
        </div>
        
        <h3 className="text-2xl font-bold uppercase mb-4 group-hover:text-system-green transition-colors tracking-tighter">
          {title}
        </h3>
        
        <p className="text-sm text-gray-400 leading-relaxed mb-8 font-light">
          {desc}
        </p>

        <div className="mt-auto flex items-center gap-2 text-[10px] font-mono text-gray-600 group-hover:text-white transition-colors">
          <span className="w-4 h-[1px] bg-current" />
          EXECUTE_MODULE.SH
        </div>
      </div>
    </div>
  );
}