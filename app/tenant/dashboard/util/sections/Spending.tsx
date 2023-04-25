import Card from "../Card";
import React from "react";
import { FcSalesPerformance } from "react-icons/fc";
import { BsBank2, BsWallet2 } from "react-icons/bs";
import { GiBanknote } from "react-icons/gi";
import { MdAutoFixHigh } from "react-icons/md";

const Spending = () => {
  return (
    <div className="flex gap-2 flex-wrap md:flex md:gap-6 md:items-center md:justify-center">
      <Card
        icon={<FcSalesPerformance />}
        paragraph="$ 12,876"
        footer="Total Expenses"
      />
      <Card
        icon={<BsWallet2 />}
        paragraph="$ 6,876"
        footer="Monthly Expenses"
      />
      <Card icon={<GiBanknote />} paragraph="7 Pending" footer="Charges" />
      <Card icon={<BsBank2 />} paragraph="2 Pending" footer="Payments" />
      <Card
        icon={<MdAutoFixHigh />}
        paragraph="2 Active"
        footer="Maintainance"
      />
    </div>
  );
};

export default Spending;
