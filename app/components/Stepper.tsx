import Link from "next/link";
import React from "react";

const Stepper = () => {
  return (
    <div className="my-4 hidden md:flex justify-center">
      <div>
        <Link href={"/tenant/application"}>
          <p className="text-sm text-red-600 pl-4">cancel</p>
        </Link>
      </div>
      <ol className="flex justify-center items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white sm:text-base sm:p-4 sm:space-x-4">
        <li className="flex items-center text-blue-950">
          <span className="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-blue-950 rounded-full shrink-0">
            1
          </span>
          <Link href={"/tenant/application/newapplication/lease-details"}>
            Lease <span className="hidden sm:inline-flex sm:ml-2">Details</span>
          </Link>
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 sm:ml-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            ></path>
          </svg>
        </li>
        <li className="flex items-center">
          <span className="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            2
          </span>
          <Link href={"/tenant/application/newapplication/roommate-details"}>
            Roommate
            <span className="hidden sm:inline-flex sm:ml-2">details</span>
          </Link>
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 sm:ml-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            ></path>
          </svg>
        </li>
        <li className="flex items-center">
          <span className="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            3
          </span>
          <Link href={"/tenant/application/newapplication/documents"}>
            Upload
            <span className="hidden sm:inline-flex sm:ml-2">documents</span>
          </Link>
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 sm:ml-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            ></path>
          </svg>
        </li>
        <li className="flex items-center">
          <span className="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            4
          </span>
          <Link href={"/tenant/application/newapplication/guardian-details"}>
            Guardian
            <span className="hidden sm:inline-flex sm:ml-2">info</span>
          </Link>
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 sm:ml-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            ></path>
          </svg>
        </li>
        <li className="flex items-center">
          <span className="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            5
          </span>
          <Link href={"/tenant/application/newapplication/review"}>
            Review
            <span className="hidden sm:inline-flex sm:ml-2">& submit</span>
          </Link>
        </li>
      </ol>
    </div>
  );
};

export default Stepper;
