import Invoice from "./utils/Invoice";
import Notifications from "./utils/Notifications";

export default function Home() {
  return (
    <main>
      <div className="mt-4 block md:flex gap-4 mx-3">
        <div className="w-full md:w-3/5 mb-6">
          <Invoice />
        </div>
        <div className="w-full md:w-2/5">
          <Notifications />
        </div>
      </div>
    </main>
  );
}
