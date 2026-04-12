export default function ProductBlade({ name, version, tech, link }: any) {
  return (
    <div className="group border-l-2 border-system-border hover:border-system-green bg-system-gray/20 p-6 transition-all">
      <div className="flex justify-between items-start">
        <div>
          <span className="text-[10px] font-mono text-system-green mb-1 block">
            BUILD_VER_{version}
          </span>
          <h4 className="text-xl font-bold tracking-tighter uppercase group-hover:text-white">
            {name}
          </h4>
        </div>
        <div className="text-right">
          <span className="text-[10px] font-mono text-gray-500 block uppercase">Stack</span>
          <span className="text-xs font-mono">{tech}</span>
        </div>
      </div>
      
      <div className="mt-8 flex items-center justify-between">
        <div className="flex gap-2">
          {/* Status Indicators */}
          <div className="w-1 h-1 bg-system-green animate-flicker" />
          <div className="w-1 h-1 bg-system-green opacity-40" />
          <div className="w-1 h-1 bg-system-green opacity-20" />
        </div>
        <a href={link} className="text-[10px] font-mono border border-system-border px-3 py-1 hover:bg-white hover:text-black transition-all">
          ACCESS_STATION
        </a>
      </div>
    </div>
  );
}