import Navbar from "../../components/dashboard/Navbar";
import WelcomeBanner from "../../components/dashboard/WelcomeBanner";
import NetWorthCard from "../../components/dashboard/NetWorthCard";
import AccountsCard from "../../components/dashboard/AccountsCard";
import GoalsCard from "../../components/dashboard/GoalsCard";
import GarageCard from "../../components/dashboard/GarageCard";
import AIInsightCard from "../../components/dashboard/AIInsightCard";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main className="mx-auto max-w-7xl p-6">
        <WelcomeBanner />

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <NetWorthCard />
          <AccountsCard />
          <GoalsCard />
          <GarageCard />
          <AIInsightCard />
        </div>
      </main>
    </div>
  );
}