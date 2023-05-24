import React from "react";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import { ImFacebook2 } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { GrYoutube } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="border-t border-orange-600 mx-6 md:mx-20 mt-8 py-10">
      <div className="block md:flex md:w-full">
        <div className="md:w-1/2">
          <Image src="" alt="logo" />
        </div>
        <div className="md:w-1/2">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <FaLocationArrow color="orange" size={20} />
              <p className="text-sm">345 Lenana Drive, Nairobi Kenya.</p>
            </div>
            <div className="block md:flex md:justify-between">
              <div className="flex my-2 md:my-0 items-center gap-3">
                <AiFillPhone color="orange" size={24} />
                <p className="text-sm">(+254)734567878</p>
              </div>
              <div className="flex items-center gap-3">
                <GrMail color="orange" size={24} />
                <p className="text-sm">Kwetu@hostels.com</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 pt-3">
            <p className="text-sm opacity-80">Socials</p>
            <div className="flex gap-6">
              <AiFillInstagram color="orange" size={24} />
              <ImFacebook2 color="orange" size={24} />
              <BsTwitter color="orange" size={24} />
              <GrYoutube color="orange" size={24} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
