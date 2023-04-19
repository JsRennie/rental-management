import React from "react";
import { CiSettings, CiMenuFries } from "react-icons/ci";

const TopNav = () => {
  return (
    <nav>
      <div className="bg-blue-950 py-2 flex items-center justify-between">
        <div className="px-2">
          <CiMenuFries size={24} color="white" />
        </div>
        <div className="px-2">
          <CiSettings size={24} color="white" />
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
