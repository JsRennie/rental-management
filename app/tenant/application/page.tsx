import { BiDotsVerticalRounded } from "react-icons/bi";

export default function Home() {
  return (
    <main>
      <div className="px-4">
        <div className="py-6 flex justify-between">
          <div className="">
            <h1 className="text-blue-950 font-semibold">My Applications</h1>
          </div>
          <div className="">
            <button className="bg-blue-950 p-2 uppercase text-white text-xs font-semibold rounded hover:cursor-pointer hover:shadow-blue-900/50 hover:shadow-xl">
              + new application
            </button>
          </div>
        </div>
        {/* application details to be displayed here */}
        <div className="mt-4 border realtive overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-stone-900 uppercase bg-slate-200">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Application Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-2 text-xs font-medium text-sky-500 whitespace-nowrap hover:cursor-pointer"
                >
                  001
                </th>
                <th
                  scope="row"
                  className="px-6 py-2 text-xs font-medium text-gray-900 whitespace-nowrap"
                >
                  29th Dec 2021
                </th>
                <th
                  scope="row"
                  className="px-6 py-2 text-xs font-medium text-gray-900 whitespace-nowrap"
                >
                  <div className="w-1/4 flex justify-center rounded-xl px-3 py-1 text-green-600 border bg-green-100 border-green-600 ">
                    Approved
                  </div>
                </th>
                <th
                  scope="row"
                  className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap"
                >
                  <BiDotsVerticalRounded className="" />
                </th>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-2 text-xs font-medium text-sky-500 whitespace-nowrap hover:cursor-pointer"
                >
                  002
                </th>
                <th
                  scope="row"
                  className="px-6 py-2 text-xs font-medium text-gray-900 whitespace-nowrap"
                >
                  29th Dec 2022
                </th>
                <th
                  scope="row"
                  className="px-6 py-2 text-xs font-medium text-gray-900 whitespace-nowrap"
                >
                  <div className="w-1/4 flex justify-center rounded-xl px-3 py-1 text-red-600 border bg-red-100 border-red-600 ">
                    Rejected
                  </div>
                </th>
                <th
                  scope="row"
                  className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap"
                >
                  <BiDotsVerticalRounded className="" />
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
