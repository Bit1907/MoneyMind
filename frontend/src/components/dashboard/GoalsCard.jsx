import { Target } from "lucide-react";

export default function GoalsCard() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex items-center gap-3">
        <Target className="h-6 w-6 text-purple-400" />
        <h2 className="text-xl font-semibold text-white">Goals</h2>
      </div>

      <div className="mt-6 space-y-4">
        <div>
          <div className="flex justify-between">
            <span className="text-slate-300">Emergency Fund</span>
            <span className="text-sm text-slate-400">90%</span>
          </div>

          <div className="mt-2 h-2 rounded-full bg-slate-700">
            <div className="h-2 w-[90%] rounded-full bg-purple-500"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between">
            <span className="text-slate-300">Europe Trip</span>
            <span className="text-sm text-slate-400">60%</span>
          </div>

          <div className="mt-2 h-2 rounded-full bg-slate-700">
            <div className="h-2 w-[60%] rounded-full bg-purple-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}