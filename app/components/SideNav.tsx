"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsFillPersonFill } from "react-icons/bs";
import { CiViewList, CiGrid42 } from "react-icons/ci";
import Badges from "./Badges";

const nav = [
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

const SideNav = () => {
  const [activeHref, setActiveHref] = useState<string>("");

  useEffect(() => {
    setActiveHref(window.location.pathname);
  }, []);

  const handleLinkClick = (href: string) => {
    setActiveHref(href);
  };

  return (
    <aside className="bg-slate-50 lg:h-screen lg:border-r lg:border-slate-500 lg:shadow-md lg:shadow-blue-950/40">
      <div className="bg-blue-950 py-2">
        <header className="flex pl-2 gap-1 items-center">
          <BsFillPersonFill size={24} color="white" />
          <p className="text-white font-semibold">Tenant Portal</p>
        </header>
      </div>
      <div className="mt-8">
        <div>
          {nav.map((item, index) => (
            <div key={index}>
              <Link href={item.href} className="pb-2 flex text-lg">
                <div
                  className={`flex pl-8 mx-1 items-center gap-2 w-full rounded py-2 ${
                    activeHref === item.href ||
                    activeHref === item.href.split("/")[1]
                      ? "bg-blue-950 text-white"
                      : "bg-slate-50 text-blue-950"
                  }`}
                  onClick={() => handleLinkClick(item.href)}
                >
                  {item.icon} {item.label}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default SideNav;
