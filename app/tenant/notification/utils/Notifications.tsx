import React from "react";

const Notifications = () => {
  return (
    <div className="py-3 border border-slate-300 rounded-sm">
      <h1 className="text-blue-950 font-bold text-lg md:text-2xl text-center px-2 mb-3">
        Notifications
      </h1>
      <div className="border-y py-2 px-0">
        <h1 className="text-sm font-medium px-2">
          Inbox
          <div className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full">
            2
          </div>
        </h1>
      </div>

      <div className="mt-2">
        <div className="pt-4 mx-2 border rounded">
          <p>messages here</p>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
