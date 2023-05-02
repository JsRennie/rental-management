"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CiSettings, CiMenuFries, CiGrid42, CiViewList } from "react-icons/ci";
import { VscChromeClose } from "react-icons/vsc";
import Badges from "./Badges";

const Nav = [
  {
    icon: <CiGrid42 size={24} />,
    label: "Dashboard",
    href: "/tenant/dashboard",
  },
  {
    icon: <CiViewList size={24} />,
    label: "Application",
    href: "/tenant/application",
  },
  {
    icon: <Badges />,
    label: "Notification",
    href: "/tenant/notification",
  },
];

const TopNav = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav>
      <div className="bg-blue-950 py-2 flex items-center lg:justify-between">
        <div>
          <button onClick={() => setMenu(!menu)} className="px-2 lg:hidden">
            {menu ? (
              <VscChromeClose size={24} color="white" />
            ) : (
              <CiMenuFries size={24} color="white" />
            )}
          </button>
          <div className={`lg:hidden ${menu ? "block" : "hidden"}`}>
            <div className="pl-3 my-2 space-y-3 text-white">
              {Nav.map((item, index) => {
                return (
                  <Link
                    href={item.href}
                    key={index}
                    className={"flex gap-2"}
                    onClick={() => setMenu(!menu)}
                  >
                    {item.icon} {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <button className="px-2 ml-auto">
          <CiSettings
            size={24}
            color="white"
            className="hover:cursor-pointer"
          />
        </button>
      </div>
    </nav>
  );
};

export default TopNav;
