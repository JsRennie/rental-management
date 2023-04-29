import React from "react";
import Header from "./header/Header";
import Image from "next/image";
import Footer from "./Footer";

const landing = () => {
  return (
    <section>
      <Header />
      {/* <div className="block md:flex md:justify-center items-center">
        <div className="block  items-center md:flex">
          <div>
            <h4 className="text-xs">Pick Your Fit</h4>
            <h1 className="text-blue-950 text-2xl md:text-4xl font-bold">
              We Rent, You Use,
              <span className="block">Its Yours!</span>
              <span>Affordable Housing...</span>
            </h1>
            <p className="text-base py-4 w-1/2">
              Choose from a range of hostels available for your preference, We
              offer flexible lease terms to accommodate your unique needs and
              situation.
            </p>
            <div className="mt-2 flex gap-6">
              <button className="px-3 w-32 py-2 bg-blue-950 text-white text-center rounded-3xl hover:shadow-xl hover:shadow-blue-950/50">
                Explore
              </button>
              <button className="px-3 py-2 text-blue-950 border border-blue-950 text-center rounded-3xl w-32 hover:shadow-xl hover:shadow-blue-950/50">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <Image src="/banner.png" alt="banner" width={560} height={560} />
        </div>
      </div>
      <Footer /> */}
    </section>
  );
};

export default landing;
