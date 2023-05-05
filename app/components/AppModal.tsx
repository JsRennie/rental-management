import Link from "next/link";
import React from "react";

const AppModal = () => {
  return (
    <div className=" w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div className="relative w-full max-w-2xl max-h-full">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* <!-- Modal header --> */}
          <div className="flex items-start justify-between p-4 border-b rounded-t ">
            <h3 className="text-2xl font-semibold text-blue-950 dark:text-white">
              Application Sent Successfully!
            </h3>
          </div>
          {/* <!-- Modal body --> */}
          <div className="p-6 space-y-6">
            <p className="text-base leading-relaxed text-gray-500">
              We, have receive your application, please check your notification
              hub on your portal for more information and updates.
            </p>
          </div>
          {/* <!-- Modal footer --> */}
          <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b ">
            <Link href={"/tenant/application"}>
              <button
                data-modal-hide="staticModal"
                type="button"
                className="text-white bg-blue-950 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                View Applications
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppModal;
