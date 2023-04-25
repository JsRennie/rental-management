import Spending from "./util/sections/Spending";
import Header from "./util/Header";
import PaymentPlan from "./util/sections/PaymentPlan";
import Profile from "./util/sections/Profile";

export default function Home() {
  return (
    <main className="mt-4 ml-3 mr-6 overflow-y-auto">
      <Header />
      <div className="rounded-sm drop-shadow-2xl p-2">
        <Spending />
      </div>

      <div className="w-full block md:flex mt-6">
        <div className="w-full md:w-1/2 border border-slate-100 rounded-sm drop-shadow-md p-2 md:p-6">
          <PaymentPlan />
        </div>
        <div className="w-full md:w-1/2 ml-4 border border-slate-100 rounded-sm drop-shadow-md p-2 md:p-6">
          <Profile />
        </div>
      </div>
    </main>
  );
}
