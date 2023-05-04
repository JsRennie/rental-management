import React from "react";
import Link from "next/link";

const links = [
  {
    label: "Manage Profile",
    href: "/tenant/profile",
  },
  {
    label: "SignOut",
    href: "/signin",
  },
];

const ProfileModal = () => {
  return (
    <div className="w-fit h-fit py-4 px-3 mr-4 bg-blue-950 rounded fixed top-12 lg:top-11 right-0 z-10">
      <div>
        {links.map((item, index) => (
          <div className="text-sm font-medium text-white">
            <Link key={index} href={item.href}>
              <div className="mb-2">{item.label}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileModal;
