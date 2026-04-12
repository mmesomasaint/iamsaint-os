export default function SystemMetrics() {
  return (
    <div className="hidden md:flex gap-8 text-[10px] font-mono text-gray-600 border-l border-system-border pl-8">
      <div>
        <span className="block text-gray-500">REGION:</span>
        <span className="text-white">LND_01</span>
      </div>
      <div>
        <span className="block text-gray-500">UPTIME:</span>
        <span className="text-white">99.99%</span>
      </div>
      <div>
        <span className="block text-gray-500">PROTOCOL:</span>
        <span className="text-white">HTTP/3</span>
      </div>
    </div>
  );
}