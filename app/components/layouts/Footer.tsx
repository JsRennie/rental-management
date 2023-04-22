import Image from "next/image";
import React from "react";
import { BsRocketTakeoffFill } from "react-icons/bs";

const Footer = () => {
  return (
    <section>
      <div className="block items-center md:flex md:justify-center">
        <div className="block items-center md:flex md:items-center">
          <div className="">
            <Image src="/Service.png" alt="" height={90} width={90} />
          </div>
          <div className="pl-2">
            <h4 className="text-blue-950 text-xs font-medium">My CareTaker</h4>
            <p className="text-sm w-1/2">
              Our rental application process is quick and easy, and we welcome
              applicants with all types of credict backgrounds
            </p>
            <h4 className="text-blue-950 text-xs font-medium">Pick Your Fit</h4>
          </div>
        </div>
        <div className="flex items-center">
          <p className="text-sm font-semibold">
            Property brought closer to you By
            <span className="pl-2">&copy;Renson 2023</span>
          </p>
          <BsRocketTakeoffFill size={14} color="black" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
