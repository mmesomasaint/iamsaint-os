import { getLatestCommit } from "@/lib/github";

export default async function LiveStatus() {
  const commit = await getLatestCommit();

  return (
    <div className="border border-system-border bg-system-gray/50 p-4 font-mono text-[11px] relative overflow-hidden">
      <div className="scanline" />
      <div className="flex items-center gap-2 mb-2 text-system-green">
        <span className="w-2 h-2 bg-system-green rounded-full animate-flicker" />
        <span className="uppercase tracking-widest">Live_Operations_Log</span>
      </div>
      <div className="space-y-1">
        <div className="flex justify-between">
          <span className="text-gray-500">LAST_DEPLOY:</span>
          <span className="text-white uppercase">{commit.repo}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">COMMIT_MSG:</span>
          <span className="text-white truncate max-w-[200px]">{commit.message}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">LATENCY:</span>
          <span className="text-white">24ms</span>
        </div>
      </div>
    </div>
  );
}