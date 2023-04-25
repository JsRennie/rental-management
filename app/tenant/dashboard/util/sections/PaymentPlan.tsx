import React from "react";
import PaymentCard from "../PaymentCard";
import Table from "../Table";

const PaymentPlan = () => {
  return (
    <div>
      <h1 className="text-blue-950 text-sm md:text-base font-medium">
        Your Payment Plan:
      </h1>
      <p className="text-blue-950 text-sm mb-2">
        Please select one during payments...
      </p>
      <div className="block md:flex gap-8">
        <div className="pb-2 md:pb-0">
          <div className="block md:flex items-center">
            <input
              id="payment_method"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 bg-gray-100 border-gray-300 focus:ring-blue-950 focus:ring-2"
            />
          </div>
          <PaymentCard
            title="Card"
            h1="Status: Active"
            paragraph="Card No: XXX-XXX-XXX-XXXX"
            h2="Last Used: Jan 15 2021"
            h3="Holder's Name: Renson Gerald"
          />
        </div>
        <div>
          <div className="block md:flex items-center">
            <input
              id="payment_method"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 bg-gray-100 border-gray-300 focus:ring-blue-950 focus:ring-2"
            />
          </div>
          <PaymentCard
            title="Mobile"
            h1="Status: Active"
            paragraph="Mobile No: 07X-XXX-XX503"
            h2="Last Used: Jan 15 2021"
            h3="Holder's Name: Renson Gerald"
          />
        </div>
      </div>
      <div>
        <div className="mt-3">
          <h1 className="text-blue-950 font-medium text-sm md:text-base">
            Your Payments
          </h1>
          <p className="text-blue-950 text-xs md:text-sm">
            Payments made by you in the last 12 months;
          </p>
        </div>
        <Table />
      </div>
    </div>
  );
};

export default PaymentPlan;
