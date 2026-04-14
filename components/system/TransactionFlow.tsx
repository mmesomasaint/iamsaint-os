"use client";
import { useState, useEffect } from 'react';

const TX_STATES = [
  { stage: 'BROADCAST', status: 'OK', detail: 'Routing to mempool...', color: 'text-gray-400' },
  { stage: 'VALIDATE', status: 'PROC', detail: 'Checking slippage tolerance (0.5%)', color: 'text-yellow-500' },
  { stage: 'EXECUTE', status: 'OK', detail: 'Smart contract interaction initiated', color: 'text-system-green' },
  { stage: 'CONFIRM', status: 'PENDING', detail: 'Awaiting block finality (2/12)', color: 'text-system-green animate-pulse' },
];

export default function TransactionFlow() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev < TX_STATES.length - 1 ? prev + 1 : prev));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border border-system-border bg-black p-6 font-mono text-xs space-y-6">
      <div className="flex justify-between items-center border-b border-system-border pb-4">
        <span className="text-gray-500 font-bold uppercase tracking-widest">Tx_Lifecycle_Monitor</span>
        <span className="text-[10px] text-system-green uppercase">Network: Ethereum_Mainnet</span>
      </div>

      <div className="space-y-4">
        {TX_STATES.map((tx, i) => (
          <div key={i} className={`flex items-start gap-4 transition-opacity duration-500 ${i <= step ? 'opacity-100' : 'opacity-20'}`}>
            <div className="flex flex-col items-center">
              <div className={`w-2 h-2 rounded-full mt-1 ${i <= step ? 'bg-system-green' : 'bg-gray-800'}`} />
              {i < TX_STATES.length - 1 && <div className="w-[1px] h-8 bg-system-border" />}
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <span className="font-bold text-white uppercase">{tx.stage}</span>
                <span className={`text-[10px] ${tx.color}`}>[{tx.status}]</span>
              </div>
              <div className="text-gray-500 text-[10px] mt-1">{tx.detail}</div>
            </div>
          </div>
        ))}
      </div>

      {step === TX_STATES.length - 1 && (
        <div className="mt-6 p-3 bg-system-green/10 border border-system-green/30 text-[10px] text-system-green text-center">
          TRANSACTION_SUCCESSFUL // VIEW_ON_ETHERSCAN
        </div>
      )}
    </div>
  );
}