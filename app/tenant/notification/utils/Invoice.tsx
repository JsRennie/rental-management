import React from "react";
import Table from "./Table";

const invoice = () => {
  return (
    <div className="py-3 px-2 border border-slate-300 rounded-sm">
      <div className="mb-5">
        <h1 className="text-blue-950 font-semibold text-xl pb-2">
          Billing & Invoices
        </h1>
        <p className="text-sm">
          View all your invoices and receipts and make sure you pay your bills
          on time.!
          <p className="text-xs text-right font-semibold underline">
            By Management
          </p>
        </p>
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
