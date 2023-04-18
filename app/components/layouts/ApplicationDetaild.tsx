"use client";
import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
const ApplicationDetaild = () => {
  return (
    <div>
      <div className="text-center">
        <header className="text-blue-950 font-extrabold text-lg">
          Application Details
        </header>
        <span className="text-sm font-semibold opacity-60">
          We need a little bit of information inorder to continue
        </span>
      </div>
      <div className="flex justify-center items-center mt-2">
        <div className="w-1/4">
          <form action="#">
            <label htmlFor="" className="block">
              <span className="block text-xs font-medium text-blue-950">
                University/College
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
                Registration Number
              </span>
              <input
                type="number"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
       disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
       invalid:border-red-500 invalid:text-red-600
       focus:invalid:border-red-500 focus:invalid:ring-red-500"
              />
            </label>
            <label htmlFor="" className="block">
              <span className="block text-xs font-medium text-blue-950">
                National ID Number
              </span>
              <input
                type="number"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
       disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
       invalid:border-red-500 invalid:text-red-600
       focus:invalid:border-red-500 focus:invalid:ring-red-500"
              />
            </label>
            <label htmlFor="" className="block">
              <span className="block text-xs font-medium text-blue-950">
                Date Of Birth
              </span>
              <input
                type="date"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
       disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
       invalid:border-red-500 invalid:text-red-600
       focus:invalid:border-red-500 focus:invalid:ring-red-500"
              />
            </label>
            <label htmlFor="" className="block">
              <span className="block text-xs font-medium text-blue-950">
                Course
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
                Level Of Education
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
                Expected Course Complication Date
              </span>
              <input
                type="date"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
       disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
       invalid:border-red-500 invalid:text-red-600
       focus:invalid:border-red-500 focus:invalid:ring-red-500"
              />
            </label>
          </form>
          <div className=" flex justify-center mt-4">
            <Stack spacing={2} direction="row">
              <Button
                size="large"
                variant="outlined"
                className="text-blue-950"
                href="/signup/personalinfo"
              >
                Back
              </Button>
              <Button
                size="large"
                variant="contained"
                className="text-white bg-blue-950"
                href="/signup/parentinfo"
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

export default ApplicationDetaild;
