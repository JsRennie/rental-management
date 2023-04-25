import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <div className="mt-3 mb-6">
        <Link href={"#"}>
          <button className="bg-blue-950 p-2 uppercase text-white text-xs font-semibold rounded hover:cursor-pointer hover:shadow-blue-900/50 hover:shadow-xl">
            + request Service
          </button>
        </Link>
      </div>
      <div className="block md:flex md:items-center gap-6">
        <div className="text-base md:text-lg font-bold uppercase">
          <h1 className="text-blue-950">dashboard</h1>
        </div>
        <div className="md:w-1/4">
          <form action="">
            <label
              htmlFor="default-search"
              className="mb-2 text-xs md:text-sm font-medium text-gray-900 sr-only"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="payments..."
                required
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
