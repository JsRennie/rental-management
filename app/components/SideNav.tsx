import React from "react";
import Link from "next/link";
import { BsFillPersonFill } from "react-icons/bs";
import { CiHome, CiViewList, CiGrid42 } from "react-icons/ci";

const nav = [
  {
    icon: <CiHome size={20} />,
    label: "Home",
    href: "/tenant/home",
  },
  {
    icon: <CiViewList size={20} />,
    label: "Application",
    href: "/tenant/application",
  },
  {
    icon: <CiGrid42 size={20} />,
    label: "Dashboard",
    href: "/tenant/dashboard",
  },
];

const SideNav = () => {
  return (
    <nav className="h-screen border-r border-slate-500 shadow-md shadow-blue-950/40">
      <div className="bg-blue-950 py-2">
        <header className="flex justify-center gap-1 items-center">
          <BsFillPersonFill size={24} color="white" />
          <p className="text-white font-semibold">Tenant Portal</p>
        </header>
      </div>
      <div className="mt-8">
        <div className="">
          {nav.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="pb-2 pl-4 flex gap-2 items-center text-sm text-blue-950 hover:translate-x-2"
            >
              {item.icon} {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default SideNav;
