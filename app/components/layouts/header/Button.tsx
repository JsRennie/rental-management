import Link from "next/link";
import React from "react";

const Button = () => {
  return (
    <Link href={"/signin"}>
      <button className="px-3 w-32 py-2 bg-blue-950 text-white text-center rounded-3xl">
        Sign In
      </button>
    </Link>
  );
};

export default Button;
