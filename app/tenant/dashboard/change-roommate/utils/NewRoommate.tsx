"use client";
import Link from "next/link";
import React from "react";

const NewRoommate = () => {
  const clickHandler = () => {
    alert("Successfully submitted your application");
  };
  return (
    <div>
      <div className="text-center text-blue-950">
        <p className="text-xs text-left pl-4 text-red-500">
          <Link href={"/tenant/dashboard"}>Cancel</Link>
        </p>
        <h1 className="text-lg md:text-2xl font-semibold">
          Do you want to have a new Roommate?
        </h1>
      </div>
      <div className="text-center text-blue-950">
        <h2 className=" text-xs md:text-sm">
          If you dont want a Roommate please review our policy and renew your
          lease agreement
        </h2>
        <div className="flex justify-center">
          <form className="px-3 md:px-0 w-2/3 md:w-1/2" action="">
            <textarea
              id="message"
              rows={4}
              className="block mt-2 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write your reasons for a new roommate..."
            ></textarea>
            <p className="text-blue-950 text-xs md:text-sm text-left py-2">
              Please provide the details for your new roommate..
            </p>
            <div className="relative mb-4">
              <input
                type="text"
                id="firstname"
                className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-blue-950 border border-gray-300 appearance-none 0 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                required
              />
              <label
                htmlFor="first_name"
                className="absolute text-sm text-blue-950 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-950 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                First Name
              </label>
            </div>
            <div className="relative mb-4">
              <input
                type="text"
                id="firstname"
                className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-blue-950 border border-gray-300 appearance-none 0 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                required
              />
              <label
                htmlFor="middle_name"
                className="absolute text-sm text-blue-950 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-950 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Middle Initial
              </label>
            </div>
            <div className="relative mb-4">
              <input
                type="text"
                id="lastname"
                className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-blue-950 border border-gray-300 appearance-none 0 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                required
              />
              <label
                htmlFor="last_name"
                className="absolute text-sm text-blue-950 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-950 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Last Name
              </label>
            </div>
            <div className="mb-4">
              <select
                id="gender"
                required
                className="bg-gray-50 border border-gray-300 text-blue-950 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option className="text-xs" selected>
                  Select your roommate gender
                </option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className="relative mb-4">
              <input
                type="tel"
                id="contact"
                className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-blue-950 border border-gray-300 appearance-none 0 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                required
              />
              <label
                htmlFor="phone_number"
                className="absolute text-sm text-blue-950 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-950 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Phone Number
              </label>
            </div>
            <div className="relative mb-4">
              <input
                type="email"
                id="email"
                className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-blue-950 border border-gray-300 appearance-none 0 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                required
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-blue-950 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-950 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Email Address
              </label>
            </div>
            <div className="relative mb-4">
              <input
                type="text"
                id="university"
                className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-blue-950 border border-gray-300 appearance-none 0 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                required
              />
              <label
                htmlFor="university"
                className="absolute text-sm text-blue-950 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-950 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                College/University
              </label>
            </div>
            <div className="relative mb-4">
              <input
                type="text"
                id="reg"
                className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-blue-950 border border-gray-300 appearance-none 0 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                required
              />
              <label
                htmlFor="reg"
                className="absolute text-sm text-blue-950 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-950 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Registration Number
              </label>
            </div>
            <button
              type="submit"
              onClick={clickHandler}
              className="bg-blue-950 text-white text-sm font-medium py-2 mt-2 w-full rounded"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewRoommate;
