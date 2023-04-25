import Link from "next/link";
import React from "react";

const Table = () => {
  return (
    <div>
      <div className="mt-4 border realtive overflow-x-auto overflow-y-auto">
        <table className="w-full h-fit text-sm text-left text-gray-500">
          <thead className="text-xs text-stone-900 uppercase bg-slate-200">
            <tr>
              <th scope="col" className="px-6 py-3">
                Payment Plan
              </th>
              <th scope="col" className="px-6 py-3">
                Reason
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-2 text-xs font-medium text-sky-500 whitespace-nowrap"
              >
                Card
              </th>
              <th
                scope="row"
                className="px-6 py-2 text-xs font-medium text-gray-900 whitespace-nowrap"
              >
                Rent
              </th>
              <th
                scope="row"
                className="px-6 py-2 text-xs font-medium text-gray-900 whitespace-nowrap"
              >
                <div className="py-1">Jan 15 2021</div>
              </th>
              <th
                scope="row"
                className="px-6 py-2 text-xs font-medium text-gray-900 whitespace-nowrap"
              >
                10,000
              </th>
            </tr>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-2 text-xs font-medium text-sky-500 whitespace-nowrap"
              >
                Mobile
              </th>
              <th
                scope="row"
                className="px-6 py-2 text-xs font-medium text-gray-900 whitespace-nowrap"
              >
                Wifi Subscription
              </th>
              <th
                scope="row"
                className="px-6 py-2 text-xs font-medium text-gray-900 whitespace-nowrap"
              >
                <div className=" py-1">Jan 27 2021</div>
              </th>
              <th
                scope="row"
                className="px-6 py-2 text-xs font-medium text-gray-900 whitespace-nowrap"
              >
                3,500
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="text-xs font-normal text-sky-500 text-center underline pt-2">
        <Link href={"#"}>View All</Link>
      </div>
    </div>
  );
};

export default Table;
