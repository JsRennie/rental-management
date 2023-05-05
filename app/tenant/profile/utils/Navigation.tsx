"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

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
  const [activeHref, setActiveHref] = useState<string>("");

  useEffect(() => {
    setActiveHref(window.location.pathname);
  }, []);

  const handleLinkClick = (href: string) => {
    setActiveHref(href);
  };

  return (
    <div className="md:mt-6 pt-2 md:pt-0 inline-flex md:block">
      {Nav.map((item, index) => (
        <div className="py-1" key={index}>
          <Link href={item.href}>
            <div
              className={`text-sm pl-10 font-medium ${
                activeHref === item.href ||
                activeHref === item.href.split("/")[1]
                  ? "text-blue-950"
                  : "text-gray-300"
              }`}
              onClick={() => handleLinkClick(item.href)}
            >
              {item.label}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Navigation;
