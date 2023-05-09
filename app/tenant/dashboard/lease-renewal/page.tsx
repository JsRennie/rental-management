import Lease from "./utils/Lease";
import NewLease from "./utils/NewLease";

export default function Home() {
  return (
    <main className="mt-4">
      <div className="h-1/3 flex">
        <NewLease />
      </div>
      <div className="h-2/3 py-2">
        <Lease />
      </div>
    </main>
  );
}
