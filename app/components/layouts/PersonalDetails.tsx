"use client";
import React from "react";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { DevTool } from "@hookform/devtools";

enum GenderEnum {
  female = "female",
  male = "male",
}

interface IFormInput {
  firstName: string;
  lastName: string;
  middleName: string;
  gender: GenderEnum;
  email: string;
  phone: number;
  password: string;
  confirmPassword: string;
}

const PersonalDetails = () => {
  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is mandatory")
      .min(8, "Password must be at 8 char long"),
    confirmPassword: Yup.string()
      .required("Password is mandatory")
      .oneOf([Yup.ref("password")], "Passwords does not match"),
  });
  const formOptions = { resolver: yupResolver(formSchema) };
  const { reset, formState } = useForm(formOptions);

  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <div>
      <div className="text-center">
        <header className="text-blue-950 font-extrabold text-lg">SignUp</header>
        <span className="text-sm font-semibold opacity-60">
          Sign Up With Your Details To Continue
        </span>
      </div>
      <div className="flex justify-center items-center mt-2">
        <div className=" w-1/2 lg:w-1/4">
          <form onSubmit={handleSubmit(onSubmit)} method="post">
            <label htmlFor="" className="block">
              <span className="block text-xs font-medium text-blue-950">
                First Name
              </span>
              <input
                {...register("firstName", {
                  required: true,
                  minLength: 4,
                  maxLength: 20,
                })}
                type="text"
                placeholder="Joe"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
       disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
       invalid:border-red-500 invalid:text-red-600
       focus:invalid:border-red-500 focus:invalid:ring-red-500"
              />
              {errors.firstName && "Please provide your first name"}
            </label>
            <label htmlFor="" className="block">
              <span className="block text-xs font-medium text-blue-950">
                Middle Intial
              </span>
              <input
                {...register("middleName", {
                  required: true,
                  minLength: 1,
                  maxLength: 3,
                })}
                type="text"
                placeholder="K"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
       disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
       invalid:border-red-500 invalid:text-red-600
       focus:invalid:border-red-500 focus:invalid:ring-red-500"
              />
              {errors.middleName && "Please provide your middle intials"}
            </label>
            <label htmlFor="" className="block">
              <span className="block text-xs font-medium text-blue-950">
                Last Name
              </span>
              <input
                {...register("lastName", {
                  required: true,
                  minLength: 4,
                  maxLength: 20,
                })}
                type="text"
                placeholder="Doe"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
       disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
       invalid:border-red-500 invalid:text-red-600
       focus:invalid:border-red-500 focus:invalid:ring-red-500"
              />
              {errors.lastName && "Please provide your last name"}
            </label>
            <label htmlFor="" className="block">
              <span className="block text-xs font-medium text-blue-950">
                Gender
              </span>
              <select
                {...register("gender", { required: true })}
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
       disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
       invalid:border-red-500 invalid:text-red-600
       focus:invalid:border-red-500 focus:invalid:ring-red-500"
              >
                <option value="female">Female</option>
                <option value="male">Male</option>
              </select>
              {errors.gender && "Please provide your gender"}
            </label>
            <label htmlFor="" className="block">
              <span className="block text-xs font-medium text-blue-950">
                Phone Number
              </span>
              <input
                {...register("phone", { required: true, maxLength: 13 })}
                type="tel"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
       disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
       invalid:border-red-500 invalid:text-red-600
       focus:invalid:border-red-500 focus:invalid:ring-red-500"
              />
              {errors.phone && "Please provide your Phone number"}
            </label>
            <label htmlFor="" className="block">
              <span className="block text-xs font-medium text-blue-950">
                Email Address
              </span>
              <input
                {...register("email", { required: true })}
                type="email"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
       disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
       invalid:border-red-500 invalid:text-red-600
       focus:invalid:border-red-500 focus:invalid:ring-red-500"
              />
              {errors.email && "Please provide your Address"}
            </label>
            <label htmlFor="" className="block">
              <span className="block text-xs font-medium text-blue-950">
                Password
              </span>
              <input
                {...register("password", { required: true, minLength: 8 })}
                type="password"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
       disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
       invalid:border-red-500 invalid:text-red-600
       focus:invalid:border-red-500 focus:invalid:ring-red-500"
              />
              <div className="text-red-500 text-xs">
                {errors.password?.message}
              </div>
            </label>
            <label htmlFor="" className="block">
              <span className="block text-xs font-medium text-blue-950">
                Confirm Password
              </span>
              <input
                {...register("confirmPassword", {
                  required: true,
                  maxLength: 20,
                })}
                type="password"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
       disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
       invalid:border-red-500 invalid:text-red-600
       focus:invalid:border-red-500 focus:invalid:ring-red-500"
              />
              <div className="text-red-500 text-xs">
                {errors.confirmPassword?.message}
              </div>
            </label>
          </form>
          <DevTool control={control} />
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
                onClick={handleSubmit(onSubmit)}
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
