import React from "react";

const Lease = () => {
  return (
    <div className="pl-6">
      <div className="text-blue-950">
        <h1 className="text-base font-black">
          <span className="uppercase">NOTE: </span>
          The new lease contract will take effect after the current one runs
          out.
        </h1>
      </div>
      <div>
        <h1 className="flex flex-wrap text-blue-950 mt-2">
          Please provide a details summary on why you want to extend your
          contact and the proceed to fill the form
        </h1>
        <div className="pt-3">
          <ol className="text-blue-950 text-sm">
            <li>1.State your reasons for extension</li>
            <li>2.Provide a date for your new contract</li>
            <li>3.Provide your new contact timeframe</li>
          </ol>
        </div>
        <form className="px-3 md:px-0 w-2/3 md:w-1/4" action="">
          <textarea
            id="New-lease"
            rows={4}
            className="block mt-2 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Why do you want a lease extension..."
          ></textarea>
          <div className="my-6">
            <input
              type="date"
              id="new-lease-date"
              required
              className="bg-gray-50 border border-gray-300 text-blue-950 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <select
            id="duration"
            required
            className="bg-gray-50 border border-gray-300 text-blue-950 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option selected>How long do you want to extend your stay</option>
            <option>3 Months</option>
            <option>6 Months</option>
            <option>9 Months</option>
            <option>12 Months</option>
            <option>15 Months</option>
            <option>21 Months</option>
            <option>24 Months</option>
            <option>More than 24 Months</option>
          </select>
          <button
            type="button"
            className="py-2 mt-4 px-4 w-full text-white bg-blue-950 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Lease;
