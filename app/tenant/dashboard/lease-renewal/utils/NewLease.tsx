import React from "react";
import LeaseCard from "../../util/LeaseCard";
import Link from "next/link";

const NewLease = () => {
  return (
    <div>
      <p className="text-xs text-left pl-4 pb-6 text-red-500">
        <Link href={"/tenant/dashboard"}>Cancel</Link>
      </p>
      <div className="pl-6">
        <p className="text-lg font-medium text-blue-950 block mb-2">
          Your current Lease Agreement..
        </p>
        <LeaseCard
          Title="Lease Agreement"
          Date="Jan 15 2021"
          Duration="24 Months"
          EvictionDate="Jan 30 2022"
          Notice="2 Weeks"
          Roommate="Yes"
        />
      </div>
    </div>
  );
};

export default NewLease;
