import React from "react";
import Header from "./Section/Header";
import Footer from "./Section/Footer";
import Desc from "./Section/Desc";

const Landing = () => {
  return (
    <section className="bg-hero bg-cover bg-center bg-no-repeat h-screen">
      <Header />
      <div className="mx-20 flex flex-col justify-center h-full">
        <div className="flex">
          <div>
            <p className="text-white text-6xl font-bold w-2/3">
              The Most Affordable Place To Live In Nairobi Area
            </p>
          </div>
          <div className="w-1/2 mr-8">
            <div className="bg-map bg-cover bg-center bg-no-repeat h-full"></div>
            <div className="flex justify-center mt-1">
              <p className="bg-white text-base rounded font-medium py-2 px-2">
                Locate Us
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-20">
        <Desc />
        <Footer />
      </div>
    </section>
  );
};

export default Landing;
