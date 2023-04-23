import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="text-center">
        <h1 className="text-2xl text-blue-950 font-semibold">Lease Details</h1>
        <p className="text-base">Please fill in the lease agreement!</p>
      </div>
      <div className="flex justify-center mt-4">
        <form action="" className="w-1/4">
          <div className="mb-6">
            <input
              type="date"
              id="date"
              required
              className="bg-gray-50 border border-gray-300 text-blue-950 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <select
            id="duration"
            required
            className="bg-gray-50 border border-gray-300 text-blue-950 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option selected>Lease period</option>
            <option>3 Months</option>
            <option>6 Months</option>
            <option>9 Months</option>
            <option>12 Months</option>
            <option>15 Months</option>
            <option>21 Months</option>
            <option>24 Months</option>
            <option>More than 24 Months</option>
          </select>
        </form>
      </div>
      <div className="flex justify-center mt-6">
        <Link href={"/tenant/application/newapplication/roommate-details"}>
          <button className="py-2 px-4 w-fit text-white bg-blue-950 rounded uppercase">
            next
          </button>
        </Link>
      </div>
    </main>
  );
}
