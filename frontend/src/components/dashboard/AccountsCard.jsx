import { Landmark } from "lucide-react";

export default function AccountsCard() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex items-center gap-3">
        <Landmark className="h-6 w-6 text-purple-400" />

        <h2 className="text-xl font-semibold text-white">
          Accounts
        </h2>
      </div>

      <div className="mt-6 space-y-3">

        <div className="flex justify-between">
          <span className="text-slate-300">
            Salary Account
          </span>

          <span className="font-semibold">
            ₹0
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-300">
            Savings
          </span>

          <span className="font-semibold">
            ₹0
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-300">
            Cash
          </span>

          <span className="font-semibold">
            ₹0
          </span>
        </div>

      </div>
    </div>
  );
}