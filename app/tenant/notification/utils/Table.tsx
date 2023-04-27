import Link from "next/link";
import React from "react";

const Table = () => {
  return (
    <div className="relative overflow-x-auto overflow-y-auto">
      <table className="w-full text-sm text-left">
        <thead className="text-xs uppercase bg-slate-200 whitespace-nowrap">
          <tr className="uppercase">
            <th scope="col" className="px-6 py-3">
              invoice id
            </th>
            <th scope="col" className="px-6 py-3">
              reason
            </th>
            <th scope="col" className="px-6 py-3">
              due date
            </th>
            <th scope="col" className="px-6 py-3">
              amount
            </th>
            <th scope="col" className="px-6 py-3">
              status
            </th>
          </tr>
        </thead>
        <tbody>
          {/* to be displayed if the bill is paid */}
          <tr className="bg-white border font-medium text-xs">
            <th
              scope="row"
              className="px-6 py-2 text-blue-500 whitespace-nowrap hover:cursor-pointer"
            >
              <Link href={"#"}>#1234</Link>
            </th>
            <td className="px-6 py-2">Rent</td>
            <td className="px-6 py-2">Jan 31 2021</td>
            <td className="px-6 py-2">10,000</td>
            <td className="px-6 py-2">
              <div className="w-fit p-1 border-none rounded bg-green-200 text-green-600 uppercase">
                paid
              </div>
            </td>
            <td className="px-6 py-2">
              <div className="flex items-center gap-2">
                <button
                  disabled
                  className="border border-gray-200 rounded w-fit p-2"
                >
                  open dispute
                </button>
                <button
                  disabled
                  className="border-none bg-gray-200 rounded w-fit p-2"
                >
                  Pay
                </button>
              </div>
            </td>
          </tr>
          {/* to be displayed if the bill is paid */}
          <tr className="bg-white border font-medium text-xs">
            <th
              scope="row"
              className="px-6 py-2 text-blue-500 whitespace-nowrap hover:cursor-pointer"
            >
              <Link href={"#"}>#5678</Link>
            </th>
            <td className="px-6 py-2">Wifi Subscription</td>
            <td className="px-6 py-2">Jan 31 2021</td>
            <td className="px-6 py-2">3,500</td>
            <td className="px-6 py-2">
              <div className="w-fit p-1 border-none rounded bg-red-200 text-red-600 uppercase">
                Unpaid
              </div>
            </td>
            <td className="px-6 py-2">
              <div className="flex items-center font-medium gap-2">
                <button className="text-blue-950 rounded border border-gray-200 w-fit p-2">
                  open dispute
                </button>
                <button className="border-none bg-blue-950 text-white rounded w-fit p-2">
                  Pay
                </button>
              </div>
            </td>
          </tr>
          {/* to be displayed if the bill is paid */}
          <tr className="bg-white border font-medium text-xs">
            <th
              scope="row"
              className="px-6 py-2 text-blue-500 whitespace-nowrap hover:cursor-pointer"
            >
              <Link href={"#"}>#1234</Link>
            </th>
            <td className="px-6 py-2">Rent</td>
            <td className="px-6 py-2">Jan 31 2021</td>
            <td className="px-6 py-2">10,000</td>
            <td className="px-6 py-2">
              <div className="w-fit p-1 border-none rounded bg-green-200 text-green-600 uppercase">
                paid
              </div>
            </td>
            <td className="px-6 py-2">
              <div className="flex items-center gap-2">
                <button
                  disabled
                  className="border border-gray-200 rounded w-fit p-2"
                >
                  open dispute
                </button>
                <button
                  disabled
                  className="border-none bg-gray-200 rounded w-fit p-2"
                >
                  Pay
                </button>
              </div>
            </td>
          </tr>
          {/* to be displayed if the bill is paid */}
          <tr className="bg-white border font-medium text-xs">
            <th
              scope="row"
              className="px-6 py-2 text-blue-500 whitespace-nowrap hover:cursor-pointer"
            >
              <Link href={"#"}>#5678</Link>
            </th>
            <td className="px-6 py-2">Wifi Subscription</td>
            <td className="px-6 py-2">Jan 31 2021</td>
            <td className="px-6 py-2">3,500</td>
            <td className="px-6 py-2">
              <div className="w-fit p-1 border-none rounded bg-red-200 text-red-600 uppercase">
                Unpaid
              </div>
            </td>
            <td className="px-6 py-2">
              <div className="flex items-center font-medium gap-2">
                <button className="text-blue-950 rounded border border-gray-200 w-fit p-2">
                  open dispute
                </button>
                <button className="border-none bg-blue-950 text-white rounded w-fit p-2">
                  Pay
                </button>
              </div>
            </td>
          </tr>
          {/* to be displayed if the bill is paid */}
          <tr className="bg-white border font-medium text-xs">
            <th
              scope="row"
              className="px-6 py-2 text-blue-500 whitespace-nowrap hover:cursor-pointer"
            >
              <Link href={"#"}>#5678</Link>
            </th>
            <td className="px-6 py-2">Wifi Subscription</td>
            <td className="px-6 py-2">Jan 31 2021</td>
            <td className="px-6 py-2">3,500</td>
            <td className="px-6 py-2">
              <div className="w-fit p-1 border-none rounded bg-red-200 text-red-600 uppercase">
                Unpaid
              </div>
            </td>
            <td className="px-6 py-2">
              <div className="flex items-center font-medium gap-2">
                <button className="text-blue-950 rounded border border-gray-200 w-fit p-2">
                  open dispute
                </button>
                <button className="border-none bg-blue-950 text-white rounded w-fit p-2">
                  Pay
                </button>
              </div>
            </td>
          </tr>
          {/* to be displayed if the bill is paid */}
          <tr className="bg-white border font-medium text-xs whitespace-nowrap">
            <th
              scope="row"
              className="px-6 py-2 text-blue-500 whitespace-nowrap hover:cursor-pointer"
            >
              <Link href={"#"}>#5678</Link>
            </th>
            <td className="px-6 py-2">Wifi Subscription</td>
            <td className="px-6 py-2">Jan 31 2021</td>
            <td className="px-6 py-2">3,500</td>
            <td className="px-6 py-2">
              <div className="w-fit p-1 border-none rounded bg-red-200 text-red-600 uppercase">
                Unpaid
              </div>
            </td>
            <td className="px-6 py-2">
              <div className="flex items-center font-medium gap-2">
                <button className="text-blue-950 rounded border border-gray-200 w-fit p-2">
                  open dispute
                </button>
                <button className="border-none bg-blue-950 text-white rounded w-fit p-2">
                  Pay
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
