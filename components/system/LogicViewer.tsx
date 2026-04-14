"use client";
import { useState, useEffect } from 'react';

const LOG_STEPS = [
  { status: 'INIT', msg: 'System.initialize("Venture_Analyst_Agent")', delay: 500 },
  { status: 'PROC', msg: 'Scanning market_liquidity_v3 API...', delay: 1200 },
  { status: 'CALC', msg: 'Evaluating risk_parameters (Confidence: 89%)', delay: 800 },
  { status: 'WARN', msg: 'Detected slippage_variance > 2.5%', delay: 1500 },
  { status: 'USER', msg: 'Awaiting human_validation...', delay: 1000 },
];

export default function LogicViewer() {
  const [logs, setLogs] = useState<typeof LOG_STEPS>([]);
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    if (currentIdx < LOG_STEPS.length) {
      const timer = setTimeout(() => {
        setLogs(prev => [...prev, LOG_STEPS[currentIdx]]);
        setCurrentIdx(prev => prev + 1);
      }, LOG_STEPS[currentIdx].delay);
      return () => clearTimeout(timer);
    }
  }, [currentIdx]);

  return (
    <div className="bg-black border border-system-border font-mono text-[10px] md:text-xs h-64 flex flex-col overflow-hidden">
      <div className="bg-system-border p-2 flex justify-between items-center">
        <span className="text-gray-400 uppercase tracking-widest font-bold">Agent_Intelligence_Log</span>
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-red-500/20" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/20" />
          <div className="w-2 h-2 rounded-full bg-system-green animate-pulse" />
        </div>
      </div>
      
      <div className="p-4 overflow-y-auto flex-1 space-y-2 scrollbar-hide">
        {logs.map((log, i) => (
          <div key={i} className="flex gap-3 animate-in fade-in slide-in-from-left-2 duration-500">
            <span className={`${
              log.status === 'WARN' ? 'text-yellow-500' : 
              log.status === 'USER' ? 'text-system-green' : 'text-gray-600'
            }`}>[{log.status}]</span>
            <span className="text-gray-300">{log.msg}</span>
          </div>
        ))}
        {currentIdx < LOG_STEPS.length && (
          <div className="text-system-green animate-pulse">_</div>
        )}
      </div>
    </div>
  );
}