"use client";
import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  university: string;
  registrationNumber: number;
  nationalId: number;
  dateOfBirth: Date;
  course: string;
  level: string;
  completionDate: Date;
}

const ApplicationDetaild = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

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
        <div className="w-1/2 lg:w-1/4">
          <form onSubmit={handleSubmit(onSubmit)} action="" method="post">
            <div className="mt-1">
              <label htmlFor="" className="block">
                <span className="block text-xs font-medium text-blue-950">
                  University/College
                </span>
                <input
                  {...register("university", {
                    required: {
                      value: true,
                      message: "Please enter your current university",
                    },
                  })}
                  type="text"
                  className="block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
       disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
       invalid:border-red-500 invalid:text-red-600
       focus:invalid:border-red-500 focus:invalid:ring-red-500"
                />
                <p className="text-red-500 text-xs text-left">
                  {errors.university?.message}
                </p>
              </label>
            </div>
            <div className="mt-1">
              <label htmlFor="" className="block">
                <span className="block text-xs font-medium text-blue-950">
                  Registration Number
                </span>
                <input
                  {...register("registrationNumber", {
                    required: {
                      value: true,
                      message: "Please provide your registration number",
                    },
                    minLength: {
                      value: 6,
                      message: "invalid format",
                    },
                    maxLength: 20,
                  })}
                  type="number"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
       disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
       invalid:border-red-500 invalid:text-red-600
       focus:invalid:border-red-500 focus:invalid:ring-red-500"
                />
                <p className="text-red-500 text-xs text-left">
                  {errors.registrationNumber?.message}
                </p>
              </label>
            </div>
            <div className="mt-1">
              <label htmlFor="" className="block">
                <span className="block text-xs font-medium text-blue-950">
                  National ID Number
                </span>
                <input
                  {...register("nationalId", {
                    required: {
                      value: true,
                      message: "Please your national ID",
                    },
                    minLength: {
                      value: 8,
                      message: "Please provide a valid ID number",
                    },
                  })}
                  type="number"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
       disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
       invalid:border-red-500 invalid:text-red-600
       focus:invalid:border-red-500 focus:invalid:ring-red-500"
                />
                <p className="text-red-500 text-xs text-left">
                  {errors.nationalId?.message}
                </p>
              </label>
            </div>
            <div className="mt-1">
              <label htmlFor="" className="block">
                <span className="block text-xs font-medium text-blue-950">
                  Date Of Birth
                </span>
                <input
                  {...register("dateOfBirth", {
                    required: {
                      value: true,
                      message: "Please provide your dob",
                    },
                  })}
                  type="date"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
       disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
       invalid:border-red-500 invalid:text-red-600
       focus:invalid:border-red-500 focus:invalid:ring-red-500"
                />
                <p className="text-red-500 text-xs text-left">
                  {errors.dateOfBirth?.message}
                </p>
              </label>
            </div>
            <div className="mt-1">
              <label htmlFor="" className="block">
                <span className="block text-xs font-medium text-blue-950">
                  Course
                </span>
                <input
                  {...register("course", {
                    required: {
                      value: true,
                      message: "Please enter your field of study",
                    },
                  })}
                  type="text"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
       disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
       invalid:border-red-500 invalid:text-red-600
       focus:invalid:border-red-500 focus:invalid:ring-red-500"
                />
                <p className="text-red-500 text-xs text-left">
                  {errors.course?.message}
                </p>
              </label>
            </div>
            <div className="mt-1">
              <label htmlFor="" className="block">
                <span className="block text-xs font-medium text-blue-950">
                  Level Of Education
                </span>
                <input
                  {...register("level", {
                    required: {
                      value: true,
                      message: "Enter your level of education",
                    },
                  })}
                  type="text"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
       disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
       invalid:border-red-500 invalid:text-red-600
       focus:invalid:border-red-500 focus:invalid:ring-red-500"
                />
                <p className="text-red-500 text-xs text-left">
                  {errors.level?.message}
                </p>
              </label>
            </div>
            <div className="mt-1"></div>
            <label htmlFor="" className="block">
              <span className="block text-xs font-medium text-blue-950">
                Expected Course Completion Date
              </span>
              <input
                {...register("completionDate", {
                  valueAsDate: true,
                  required: {
                    value: true,
                    message:
                      "Enter the date when you are completing your studies",
                  },
                })}
                type="date"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
       disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
       invalid:border-red-500 invalid:text-red-600
       focus:invalid:border-red-500 focus:invalid:ring-red-500"
              />
              <p className="text-red-500 text-xs text-left">
                {errors.completionDate?.message}
              </p>
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
                type="submit"
                onClick={handleSubmit(onSubmit)}
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
