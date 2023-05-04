"use client";
import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { LoginModal } from "../LoginModal";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  fullName: string;
  relationship: string;
  phone: number;
  email: string;
}

const Info = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  const [showModal, setShowModal] = useState(false);

  const handleOnClose = () => setShowModal(false);

  return (
    <div>
      <div className="text-center">
        <header className="text-blue-950 font-extrabold text-lg">
          Parents/Guardian Details
        </header>
        <span className="text-sm font-semibold opacity-60">
          So that we can contact them incase of emergency
        </span>
      </div>
      <div className="flex justify-center items-center mt-2">
        <div className="w-1/2 lg:w-1/4">
          <form onSubmit={handleSubmit(onSubmit)} action="#" method="post">
            <label htmlFor="" className="block">
              <span className="block text-xs font-medium text-blue-950">
                Full Name
              </span>
              <input
                {...register("fullName", {
                  required: true,
                  minLength: 8,
                  maxLength: 30,
                })}
                type="text"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
       disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
       invalid:border-red-500 invalid:text-red-600
       focus:invalid:border-red-500 focus:invalid:ring-red-500"
              />
              {errors && "Enter your parent full names"}
            </label>
            <label htmlFor="" className="block">
              <span className="block text-xs font-medium text-blue-950">
                Relationship
              </span>
              <input
                {...register("relationship", {
                  required: true,
                })}
                type="text"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
       disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
       invalid:border-red-500 invalid:text-red-600
       focus:invalid:border-red-500 focus:invalid:ring-red-500"
              />
              {errors && "How are you guys related?"}
            </label>
            <label htmlFor="" className="block">
              <span className="block text-xs font-medium text-blue-950">
                Phone Number
              </span>
              <input
                {...register("phone", {
                  required: true,
                  minLength: 8,
                  maxLength: 30,
                })}
                type="tel"
                placeholder="Doe"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
       disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
       invalid:border-red-500 invalid:text-red-600
       focus:invalid:border-red-500 focus:invalid:ring-red-500"
              />
              {errors && "provide your parent phone number"}
            </label>
            <label htmlFor="" className="block">
              <span className="block text-xs font-medium text-blue-950">
                Email Address
              </span>
              <input
                {...register("email", {
                  required: true,
                })}
                type="email"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
       disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
       invalid:border-red-500 invalid:text-red-600
       focus:invalid:border-red-500 focus:invalid:ring-red-500"
              />
              {errors && "Enter your parent email address"}
            </label>
          </form>
          <div className=" flex justify-center mt-4">
            <Stack spacing={2} direction="row">
              <Button
                size="large"
                variant="outlined"
                className="text-blue-950"
                href="/signup/applicationdetails"
              >
                Back
              </Button>
              <Button
                size="large"
                type="submit"
                variant="contained"
                className="text-white bg-blue-950"
                onClick={() => setShowModal(true)}
              >
                Next
              </Button>
            </Stack>
          </div>
        </div>
      </div>
      <LoginModal onClose={handleOnClose} visible={showModal} />
    </div>
  );
};

export default Info;
