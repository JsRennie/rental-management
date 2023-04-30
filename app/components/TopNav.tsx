"use client";
import Link from "next/link";
import React from "react";
import { CiSettings, CiMenuFries } from "react-icons/ci";

const TopNav = () => {
  return (
    <nav>
      <div className="bg-blue-950 py-2 flex items-center lg:justify-between">
        <div className="px-2 lg:hidden">
          <CiMenuFries
            size={24}
            color="white"
            className="hover:cursor-pointer"
          />
        </div>
        <div className="px-2 ml-auto">
          <CiSettings
            size={24}
            color="white"
            className="hover:cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
