import React from "react";
import Link from "next/link";
import ProfileInfo from "../ProfileInfo";
import RoommateCard from "../RoommateCard";
import LeaseCard from "../LeaseCard";

const Profile = () => {
  return (
    <div>
      <h1 className="text-blue-950 text-sm md:text-base font-semibold pb-2">
        Tenant Profile
      </h1>
      <div className="block md:flex gap-4">
        <div className="w-28 h-28 bg-profile rounded bg-cover bg-center bg-no-repeat"></div>
        <div>
          <ProfileInfo
            Name="Renson Gerald"
            Unit="#71-BU"
            Requested="Jan 10 2021"
            University="CUEA"
          />
        </div>
      </div>
      <div className="flex flex-wrap md:flex gap-8 mt-8">
        <div>
          <RoommateCard
            Title="Roommate Details"
            Name="Yehudi maritus"
            Tel="07xxxxxx05"
            Email="Yehudi@m.com"
            University="Cooperative University"
            Date="Jan 17 2021"
          />
          <div className="mt-3">
            <Link href={"/tenant/dashboard/change-roommate"}>
              <button className="bg-blue-950 p-2 uppercase text-white text-xs font-semibold rounded hover:cursor-pointer hover:shadow-blue-900/50 hover:shadow-xl">
                Change Roommate
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-2 md:mt-0">
          <LeaseCard
            Title="Lease Agreement"
            Date="Jan 15 2021"
            Duration="24 Months"
            EvictionDate="Jan 30 2022"
            Notice="2 Weeks"
            Roommate="Yes"
          />
          <div className="mt-3">
            <Link href={"/tenant/dashboard/lease-renewal"}>
              <button className="bg-blue-950 p-2 uppercase text-white text-xs font-semibold rounded hover:cursor-pointer hover:shadow-blue-900/50 hover:shadow-xl">
                Renew Lease
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
