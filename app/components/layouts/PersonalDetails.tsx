"use client";
import React from "react";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const PersonalDetails = () => {
  return (
    <div>
      <div className="text-center">
        <header className="text-blue-950 font-extrabold text-lg">SignUp</header>
        <span className="text-sm font-semibold opacity-60">
          Sign Up With Your Details To Continue
        </span>
      </div>
      <div className="flex justify-center items-center mt-2">
        <div className=" w-1/2 md:w-1/4">
          <form action="#">
            <label htmlFor="" className="block">
              <span className="block text-xs font-medium text-blue-950">
                First Name
              </span>
              <input
                type="text"
                placeholder="Joe"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
       disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
       invalid:border-red-500 invalid:text-red-600
       focus:invalid:border-red-500 focus:invalid:ring-red-500"
              />
            </label>
            <label htmlFor="" className="block">
              <span className="block text-xs font-medium text-blue-950">
                Middle Intial
              </span>
              <input
                type="text"
                placeholder="K"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
       disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
       invalid:border-red-500 invalid:text-red-600
       focus:invalid:border-red-500 focus:invalid:ring-red-500"
              />
            </label>
            <label htmlFor="" className="block">
              <span className="block text-xs font-medium text-blue-950">
                Last Name
              </span>
              <input
                type="text"
                placeholder="Doe"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
       disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
       invalid:border-red-500 invalid:text-red-600
       focus:invalid:border-red-500 focus:invalid:ring-red-500"
              />
            </label>
            <label htmlFor="" className="block">
              <span className="block text-xs font-medium text-blue-950">
                Gender
              </span>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
       disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
       invalid:border-red-500 invalid:text-red-600
       focus:invalid:border-red-500 focus:invalid:ring-red-500"
              />
            </label>
            <label htmlFor="" className="block">
              <span className="block text-xs font-medium text-blue-950">
                Phone Number
              </span>
              <input
                type="tel"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
       disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
       invalid:border-red-500 invalid:text-red-600
       focus:invalid:border-red-500 focus:invalid:ring-red-500"
              />
            </label>
            <label htmlFor="" className="block">
              <span className="block text-xs font-medium text-blue-950">
                Email Address
              </span>
              <input
                type="email"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
       disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
       invalid:border-red-500 invalid:text-red-600
       focus:invalid:border-red-500 focus:invalid:ring-red-500"
              />
            </label>
            <label htmlFor="" className="block">
              <span className="block text-xs font-medium text-blue-950">
                Password
              </span>
              <input
                type="password"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
       disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
       invalid:border-red-500 invalid:text-red-600
       focus:invalid:border-red-500 focus:invalid:ring-red-500"
              />
            </label>
            <label htmlFor="" className="block">
              <span className="block text-xs font-medium text-blue-950">
                Confirm Password
              </span>
              <input
                type="password"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
       disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
       invalid:border-red-500 invalid:text-red-600
       focus:invalid:border-red-500 focus:invalid:ring-red-500"
              />
            </label>
          </form>
          <p className="text-sm font-semibold text-gray-500 pt-2">
            Already have an account?
            <Link href={"/signin"}>
              <span className="text-blue-500">Sigin</span>
            </Link>
          </p>
          <div className=" flex justify-center mt-4">
            <Stack spacing={2} direction="row">
              <Button
                size="large"
                variant="outlined"
                className="text-blue-950"
                href="/signup"
              >
                Back
              </Button>
              <Button
                size="large"
                type="submit"
                variant="contained"
                className="text-white bg-blue-950"
                href="/signup/applicationdetails"
              >
                Next
              </Button>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
