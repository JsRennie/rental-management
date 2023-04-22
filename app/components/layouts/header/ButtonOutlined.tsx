import Link from "next/link";
import React from "react";

const ButtonOutlined = () => {
  return (
    <Link href={"/signup"}>
      <button className="px-3 py-2 text-blue-950 border border-blue-950 text-center rounded-3xl w-32">
        Sign Up
      </button>
    </Link>
  );
};

export default ButtonOutlined;
