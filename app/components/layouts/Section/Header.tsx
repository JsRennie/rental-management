import React from "react";
import Link from "next/link";

interface Nav {
  label: string;
  href: string;
}

const NAV_ITEMS: Array<Nav> = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/aboutus",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
  {
    label: "Join Us",
    href: "/signup",
  },
  {
    label: "Login",
    href: "/signin",
  },
];

const Header = () => {
  return (
    <nav className="hidden md:flex md:justify-between md:items-center md:border-b md:border-white md:py-2 mx-20">
      <div className="text-white text-base font-bold uppercase">
        <Link href={"/"}>Kwetu Hostels</Link>
      </div>
      <div>
        <div className="flex items-center gap-8">
          {NAV_ITEMS.map((item, index) => (
            <div key={index}>
              <Link href={item.href}>
                <div className="text-xl text-white font-semibold">
                  {item.label}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
