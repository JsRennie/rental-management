import Link from "next/link";
import React from "react";

const Nav = [
  {
    label: "Personal Info",
    href: "/tenant/profile",
  },
  {
    label: "Guardian Info",
    href: "/tenant/profile/guardian-info",
  },
  {
    label: "Password",
    href: "/tenant/profile/password",
  },
  {
    label: "Notification",
    href: "/tenant/profile/notifications",
  },
];

const Navigation = () => {
  return (
    <div className="md:mt-6 pt-2 md:pt-0 inline-flex md:block">
      {Nav.map((item, index) => (
        <div className="py-1">
          <Link href={item.href} key={index}>
            <div className="text-blue-950 text-sm pl-10 font-medium">
              {item.label}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Navigation;
