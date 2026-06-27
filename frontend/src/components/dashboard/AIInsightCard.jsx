import { Brain } from "lucide-react";

export default function AIInsightCard() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex items-center gap-3">
        <Brain className="h-6 w-6 text-purple-400" />
        <h2 className="text-xl font-semibold text-white">
          AI Insight
        </h2>
      </div>

      <div className="mt-6 rounded-2xl bg-slate-800 p-4">
        <p className="text-slate-300">
          💡 You're on track to reach your Emergency Fund in approximately 3 months if you continue saving at your current pace.
        </p>
      </div>
    </div>
  );
}