import { Bike } from "lucide-react";

export default function GarageCard() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex items-center gap-3">
        <Bike className="h-6 w-6 text-purple-400" />
        <h2 className="text-xl font-semibold text-white">Garage</h2>
      </div>

      <div className="mt-6">
        <p className="font-semibold">Royal Enfield Guerrilla 450</p>

        <p className="mt-2 text-slate-400">
          Add your bikes, cars and scooters here.
        </p>
      </div>
    </div>
  );
}