import React from "react";
import Table from "./Table";

const invoice = () => {
  return (
    <div className="py-3 px-2 border border-slate-300 rounded-sm">
      <div className="mb-5">
        <h1 className="text-blue-950 font-bold text-lg md:text-2xl text-center pb-2">
          Billing & Invoices
        </h1>
        <div>
          <p className="text-sm w-full md:w-1/2">
            View all your invoices and receipts and make sure you pay your bills
            on time.!
          </p>
          <p className="text-xs mt-3 text-right font-semibold underline">
            By Management
          </p>
        </div>
      </div>
      <div className="border-b">
        <div className="text-sm font-medium py-2">Invoices</div>
      </div>
      <div className="mt-2">
        <Table />
      </div>
    </div>
  );
};

export default invoice;
