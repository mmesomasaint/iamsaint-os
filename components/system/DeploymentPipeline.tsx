"use client";
import { useState, useEffect } from 'react';

const PIPELINE_STAGES = [
  { name: 'Source', action: 'GitHub_Push', icon: '◈' },
  { name: 'Build', action: 'Next.js_Optimize', icon: '⚙' },
  { name: 'Verify', action: 'Vercel_Check', icon: '✓' },
  { name: 'Edge', action: 'Global_Deploy', icon: '🌐' },
];

export default function DeploymentPipeline() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % PIPELINE_STAGES.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="border border-system-border bg-system-gray/30 p-8 font-mono">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 relative">
        {PIPELINE_STAGES.map((stage, i) => (
          <div key={i} className="flex flex-col items-center z-10 w-full">
            <div className={`w-12 h-12 flex items-center justify-center border-2 transition-all duration-700 ${
              i === active ? 'border-system-green text-system-green shadow-[0_0_15px_rgba(0,255,65,0.3)]' : 'border-system-border text-gray-700'
            }`}>
              <span className="text-xl">{stage.icon}</span>
            </div>
            <div className="mt-4 text-center">
              <div className={`text-[10px] font-bold uppercase ${i === active ? 'text-white' : 'text-gray-600'}`}>
                {stage.name}
              </div>
              <div className="text-[8px] text-gray-500 mt-1">{stage.action}</div>
            </div>
          </div>
        ))}
        {/* Connector Line */}
        <div className="hidden md:block absolute top-6 left-0 w-full h-[1px] bg-system-border -z-0" />
      </div>
      
      <div className="mt-10 pt-6 border-t border-system-border">
        <div className="flex justify-between text-[10px] uppercase">
          <span className="text-gray-500">Pipeline_Health:</span>
          <span className="text-system-green">Optimal_100%</span>
        </div>
      </div>
    </div>
  );
}