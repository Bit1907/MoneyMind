import { Wallet } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center justify-center gap-3">
      <div className="rounded-xl bg-purple-600 p-3 shadow-lg shadow-purple-600/30">
        <Wallet className="h-7 w-7 text-white" />
      </div>

      <div>
        <h1 className="text-3xl font-bold text-white">
          MoneyMind
        </h1>

        <p className="text-sm text-slate-400">
          Your Personal Financial OS
        </p>
      </div>
    </div>
  );
}