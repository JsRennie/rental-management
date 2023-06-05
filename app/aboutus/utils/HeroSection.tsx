import React from "react";

const HeroSection = () => {
  return (
    <section>
      <div className="mt-8">
        <div className="block space-y-4 md:space-y-0 lg:flex lg:flex-row-reverse lg:gap-14">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold">
              Flexibility and options
              <span className="block">to suit your lifestyle.</span>
            </h1>
            <article className="w-full lg:w-1/2">
              <p className="text-lg pt-3">
                You need it? We got it. We make finding your next home easy,
                comfortable, and simple. From our happiness guarantee to our
                selective roommate finder option. We provide you the flexibility
                that you most desire.
              </p>
            </article>
            <button
              type="button"
              className="bg-orange-600 text-lg text-white py-4 px-3 rounded-lg my-6 lg:mt-6 lg:my-0 hover:bg-white hover:text-orange-600 hover:border-b-4 hover:border-orange-600"
            >
              Search Rooms
            </button>
          </div>
          <div className="text-white space-y-5">
            <div className="space-y-4 md:space-y-0 md:flex md:gap-2">
              <div className="bg-lease bg-cover bg-center h-72 w-80 md:h-64 md:w-52 rounded-xl text-xl text-center">
                Flexible Leases
              </div>
              <div className="bg-happy bg-cover bg-center h-72 w-80 md:h-52 md:w-72 rounded-xl text-xl text-center">
                7-Day Happiness Guaranteed
              </div>
            </div>
            <div className="space-y-4 md:space-y-0 md:flex md:gap-2">
              <div className="bg-clean bg-cover bg-center h-72 w-80 md:h-52 md:w-44 rounded-xl text-xl text-center">
                Monthly House Cleaning
              </div>
              <div className="bg-roommate bg-cover bg-center h-72 w-80 rounded-xl text-xl text-center">
                Choose Your Own Roommate
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
