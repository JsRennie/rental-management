import Link from "next/link";
import React from "react";

const Button = () => {
  return (
    <Link href={"/signin"}>
      <button
        type="submit"
        className="px-3 w-32 py-2 bg-blue-950 text-white text-center rounded-3xl hover:shadow-xl hover:shadow-blue-950/50"
      >
        Sign In
      </button>
    </Link>
  );
};

export default Button;
