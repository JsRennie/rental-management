"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useForm, SubmitHandler } from "react-hook-form";
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
  const {
    register,
    control,
    reset,
    formState: {
      errors,
      isDirty,
      isValid,
      isSubmitting,
      isSubmitted,
      isSubmitSuccessful,
      submitCount,
    },
    handleSubmit,
  } = useForm<IFormInput>({
    mode: "onBlur",
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  console.log({ isSubmitting, isSubmitted, isSubmitSuccessful, submitCount });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

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
            <div className="mt-1">
              <label htmlFor="" className="block">
                <span className="block text-xs font-medium text-blue-950">
                  First Name
                </span>
                <input
                  {...register("firstName", {
                    required: {
                      value: true,
                      message: "First name is required",
                    },

                    minLength: 4,
                    maxLength: 20,
                  })}
                  type="text"
                  placeholder="Joe"
                  className="block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
       disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
       invalid:border-red-500 invalid:text-red-600
       focus:invalid:border-red-500 focus:invalid:ring-red-500"
                />
                <p className="text-red-500 text-left text-xs">
                  {errors.firstName?.message}
                </p>
              </label>
            </div>
            <div className="mt-1">
              <label htmlFor="" className="block">
                <span className="block text-xs font-medium text-blue-950">
                  Middle Intial
                </span>
                <input
                  {...register("middleName", {
                    required: {
                      value: true,
                      message: "Please provide your middle intials",
                    },
                    minLength: {
                      value: 1,
                      message: "Provide your intial",
                    },
                    maxLength: {
                      value: 3,
                      message: "intial must be less than 3 characters",
                    },
                  })}
                  type="text"
                  placeholder="K"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
       disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
       invalid:border-red-500 invalid:text-red-600
       focus:invalid:border-red-500 focus:invalid:ring-red-500"
                />
                <p className="text-red-500 text-left text-xs">
                  {errors.middleName?.message}
                </p>
              </label>
            </div>
            <div className="mt-1">
              <label htmlFor="" className="block">
                <span className="block text-xs font-medium text-blue-950">
                  Last Name
                </span>
                <input
                  {...register("lastName", {
                    required: {
                      value: true,
                      message: "Please provide your last name",
                    },
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
                <p className="text-red-500 text-left text-xs">
                  {errors.lastName?.message}
                </p>
              </label>
            </div>
            <div className="mt-1">
              <label htmlFor="" className="block">
                <span className="block text-xs font-medium text-blue-950">
                  Gender
                </span>
                <select
                  {...register("gender", {
                    required: {
                      value: true,
                      message: "Please provide your gender",
                    },
                  })}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
       disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
       invalid:border-red-500 invalid:text-red-600
       focus:invalid:border-red-500 focus:invalid:ring-red-500"
                >
                  <option>Select your gender</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                </select>
                <p className="text-red-500 text-left text-xs">
                  {errors.gender?.message}
                </p>
              </label>
            </div>
            <div className="mt-1">
              <label htmlFor="" className="block">
                <span className="block text-xs font-medium text-blue-950">
                  Phone Number
                </span>
                <input
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "Please provide your Phone number",
                    },

                    maxLength: {
                      value: 10,
                      message: "Invalid format",
                    },
                  })}
                  type="tel"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
       disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
       invalid:border-red-500 invalid:text-red-600
       focus:invalid:border-red-500 focus:invalid:ring-red-500"
                />
                <p className="text-red-500 text-left text-xs">
                  {errors.phone?.message}
                </p>
              </label>
            </div>
            <div className="mt-1">
              <label htmlFor="" className="block">
                <span className="block text-xs font-medium text-blue-950">
                  Email Address
                </span>
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: "email is required",
                    },
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/,
                      message: "invalid email format",
                    },
                  })}
                  type="email"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
       disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
       invalid:border-red-500 invalid:text-red-600
       focus:invalid:border-red-500 focus:invalid:ring-red-500"
                />
                <p className="text-red-500 text-left text-xs">
                  {errors.email?.message}
                </p>
              </label>
            </div>
            <div className="mt-1">
              <label htmlFor="" className="block">
                <span className="block text-xs font-medium text-blue-950">
                  Password
                </span>
                <input
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Enter your password",
                    },
                    validate: {},
                    minLength: {
                      value: 8,
                      message: "password must be 8 character long",
                    },
                  })}
                  type="password"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
       disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
       invalid:border-red-500 invalid:text-red-600
       focus:invalid:border-red-500 focus:invalid:ring-red-500"
                />
                <p className="text-red-500 text-left text-xs">
                  {errors.password?.message}
                </p>
              </label>
            </div>
            <div className="mt-1">
              <label htmlFor="" className="block">
                <span className="block text-xs font-medium text-blue-950">
                  Confirm Password
                </span>
                <input
                  {...register("confirmPassword", {
                    required: {
                      value: true,
                      message: "confirm your password",
                    },
                    minLength: {
                      value: 8,
                      message: "password must be 8 character long",
                    },
                  })}
                  type="password"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
       disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
       invalid:border-red-500 invalid:text-red-600
       focus:invalid:border-red-500 focus:invalid:ring-red-500"
                />
                <p className="text-red-500 text-left text-xs">
                  {errors.confirmPassword?.message}
                </p>
              </label>
            </div>
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
                  disabled={!isDirty || !isValid || isSubmitting}
                  onClick={handleSubmit(onSubmit)}
                  variant="contained"
                  className="text-white bg-blue-950"
                  href="/signup/applicationdetails"
                >
                  Next
                </Button>
              </Stack>
            </div>
          </form>
          <DevTool control={control} />
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
