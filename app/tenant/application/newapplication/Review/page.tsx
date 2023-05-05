"use client";
import { useState } from "react";
import Link from "next/link";
import AppModal from "@/app/components/AppModal";

export default function Home() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <main>
      <div className="text-center">
        <h1 className="text-2xl text-blue-950 font-semibold">
          Review & Submit
        </h1>
        <p className="text-center">
          Please confirm the details provided are correct
        </p>
      </div>
      <div className="flex justify-center mt-4">
        <form action="" className="w-1/2 md:w-1/4 space-y-4">
          <select
            id="lease_details"
            required
            className="bg-gray-50 border border-gray-300 text-blue-950 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option selected>Lease period</option>
            <option>Lease Agreement</option>
          </select>
          <select
            id="roomate_details"
            required
            className="bg-gray-50 border border-gray-300 text-blue-950 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option selected>Roomate details</option>
            <option>Your Roommate details</option>
          </select>
          <select
            id="roomate_details"
            required
            className="bg-gray-50 border border-gray-300 text-blue-950 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option selected>Documents</option>
            <option>Your documents</option>
          </select>
          <select
            id="roomate_details"
            required
            className="bg-gray-50 border border-gray-300 text-blue-950 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option selected>Guardian Information</option>
            <option>Your guardian information</option>
          </select>
          <div className="flex items-center my-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              required
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-checkbox"
              className="ml-2 text-xs font-medium text-gray-900"
            >
              I agree that the information provided is accurate and valid.
            </label>
          </div>
        </form>
      </div>
      <div className="flex justify-center mt-4 gap-4">
        <div>
          <Link href={"/tenant/application/newapplication/guardian-details"}>
            <button className="text-blue-950 py-2 px-10 w-fit rounded uppercase">
              Back
            </button>
          </Link>
        </div>
        <div>
          <button
            className="bg-blue-950 text-white py-2 px-10 w-fit rounded uppercase"
            onClick={toggleModal}
          >
            Submit
          </button>
          {modal && <AppModal />}
        </div>
      </div>
    </main>
  );
}
