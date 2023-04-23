import React from "react";
import Link from "next/link";
import Button from "./Button";
import ButtonOutlined from "./ButtonOutlined";
import { CiMenuFries } from "react-icons/ci";

interface nav {
  label: string;
  href: string;
}

const nav: Array<nav> = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/aboutus",
  },
];

const Header = () => {
  return (
    <header className="py-4">
      <div className="flex justify-between md:justify-around w-screen">
        <div className="text-blue-950 font-bold text-lg md:text-xl">
          <h1 className="">My CareTaker</h1>
        </div>
        <div className="hidden md:flex md:items-center md:gap-14 md:justify-center">
          <div>
            {nav.map((item, index) => (
              <Link key={index} href={item.href} className="mx-2 font-semibold">
                {item.label}
              </Link>
            ))}
          </div>
          <div className=" flex gap-4">
            <Button />
            <ButtonOutlined />
          </div>
        </div>
        <div className="md:hidden pr-10">
          <CiMenuFries size={24} color="black" />
        </div>
      </div>
    </header>
  );
};

export default Header;
