import React from "react";

const Form = () => {
  return (
    <div>
      <h2 className="text-blue-950 text-sm text-left mb-4">
        Please provide accurate information before updating your details{" "}
      </h2>
      <form action="">
        <div className="grid gap-6 mb-6 md:grid-cols-2 w-1/2">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-blue-950"
            >
              First name
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="John"
              required
            />
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block mb-2 text-sm font-medium text-blue-950"
            >
              Last name
            </label>
            <input
              type="text"
              id="last_name"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Doe"
              required
            />
          </div>
          <div>
            <label
              htmlFor="university"
              className="block mb-2 text-sm font-medium text-blue-950"
            >
              University
            </label>
            <input
              type="text"
              id="university"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Kabarak"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-blue-950"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="123-45-678"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
          <div>
            <label
              htmlFor="course"
              className="block mb-2 text-sm font-medium text-blue-950"
            >
              Course
            </label>
            <input
              type="url"
              id="course"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="computer science"
              required
            />
          </div>
          <div>
            <label
              htmlFor="id"
              className="block mb-2 text-sm font-medium text-blue-950"
            >
              ID No
            </label>
            <input
              type="number"
              id="national"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder=""
              required
            />
          </div>
        </div>
        <div className="mb-6 w-1/2">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-blue-950"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="yehudi@design.com"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Form;
