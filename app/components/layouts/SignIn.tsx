"use client";
import React from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import { IoIosArrowBack } from "react-icons/io";

const SignIn = () => {
  return (
    <div className="mt-10">
      <div className="text-center">
        <header className="text-blue-950 font-extrabold text-lg">
          Sign In
        </header>
        <span className="text-sm font-semibold opacity-60">
          Sign in with your details to continue
        </span>
      </div>
      <div className="flex justify-center items-center mt-2">
        <div className="w-1/4">
          <form action="#" className="mb-2">
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
          </form>
          <Link href={"/forgotpassword"}>
            <span className="text-blue-500">Forgot Password?</span>
          </Link>
          <div className=" flex justify-center my-4">
            <Button
              size="large"
              variant="contained"
              className="text-white bg-blue-950"
              href="/tenant/home"
            >
              Login
            </Button>
          </div>
          <p className="text-sm font-semibold text-gray-500 pt-2">
            Dont have an account?
            <Link href={"/signup"}>
              <span className="text-blue-500">Sign Up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
