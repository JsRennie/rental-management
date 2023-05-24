import React from "react";
import { GiShower } from "react-icons/gi";
import { IoIosBed } from "react-icons/io";
import { FiCpu } from "react-icons/fi";

const RoomDetailSection = () => {
  return (
    <section className="my-14 pt-6">
      <div className="flex justify-between mb-8">
        <p className="text-xl md:text-4xl font-bold">
          List <span>Of Properties</span>
        </p>
        <button
          type="button"
          className="bg-orange-600 rounded-lg text-white text-base md:text-lg py-2 px-1 md:py-4 md:px-3"
        >
          View All Proterty
        </button>
      </div>
      <div className="flex flex-wrap lg:flex lg:justify-center">
        <div className="space-y-8">
          {/* Roomcards */}
          <div className="flex justify-center flex-wrap lg:flex gap-6">
            <div className="h-fit w-72 bg-white rounded-lg drop-shadow-2xl">
              <div className="bg-lease bg-cover rounded-t-lg bg-center h-64 w-full"></div>
              <div>
                <div className="pb-3 pl-2">
                  <h1 className="text-xl font-medium pt-2">Single Unit</h1>
                  <p className="text-base opacity-60 pt-4">
                    Not Self-Contained | Shared Bathroom
                  </p>
                  <span className="text-lg opacity-100 text-orange-600 font-medium">
                    $1200/Month
                  </span>
                </div>
                <div className="border-t w-full text-sm flex">
                  <div className="w-1/3 py-2 flex justify-center items-center gap-2">
                    <IoIosBed />
                    <p>1</p>
                  </div>
                  <div className="w-1/3 py-2 border-x flex justify-center items-center gap-2">
                    <GiShower />
                    <p>2</p>
                  </div>
                  <div className="w-1/3 py-2 flex justify-center items-center gap-2">
                    <FiCpu />
                    <p>3</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-fit w-72 bg-white rounded-lg drop-shadow-2xl">
              <div className="bg-bunk bg-cover rounded-t-lg bg-center h-64 w-full"></div>
              <div>
                <div className="pb-3 pl-2">
                  <h1 className="text-xl font-medium pt-2">Bunk Bed</h1>
                  <p className="text-base opacity-60 pt-4">Self-Contained</p>
                  <span className="text-lg opacity-100 text-orange-600 font-medium">
                    $1450/Month
                  </span>
                </div>
                <div className="border-t w-full text-sm flex">
                  <div className="w-1/3 py-2 flex justify-center items-center gap-2">
                    <IoIosBed />
                    <p>1</p>
                  </div>
                  <div className="w-1/3 py-2 border-x flex justify-center items-center gap-2">
                    <GiShower />
                    <p>1</p>
                  </div>
                  <div className="w-1/3 py-2 flex justify-center items-center gap-2">
                    <FiCpu />
                    <p>1</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-fit w-72 bg-white rounded-lg drop-shadow-2xl">
              <div className="bg-double bg-cover rounded-t-lg bg-center h-64 w-full"></div>
              <div>
                <div className="pb-3 pl-2">
                  <h1 className="text-xl font-medium pt-2">Double Unit</h1>
                  <p className="text-base opacity-60 pt-4">Studio Apartment</p>
                  <span className="text-lg opacity-100 text-orange-600 font-medium">
                    $2200/Month
                  </span>
                </div>
                <div className="border-t w-full text-sm flex">
                  <div className="w-1/3 py-2 flex justify-center items-center gap-2">
                    <IoIosBed />
                    <p>2</p>
                  </div>
                  <div className="w-1/3 py-2 border-x flex justify-center items-center gap-2">
                    <GiShower />
                    <p>2</p>
                  </div>
                  <div className="w-1/3 py-2 flex justify-center items-center gap-2">
                    <FiCpu />
                    <p>4</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-wrap lg:flex gap-6">
            <div className="h-fit w-72 bg-white rounded-lg drop-shadow-2xl">
              <div className="bg-condo bg-cover rounded-t-lg bg-center h-64 w-full"></div>
              <div>
                <div className="pb-3 pl-2">
                  <h1 className="text-xl font-medium pt-2">Condos</h1>
                  <p className="text-base opacity-60 pt-4">
                    Self-Contained | Deluxe
                  </p>
                  <span className="text-lg opacity-100 text-orange-600 font-medium">
                    $3500/Month
                  </span>
                </div>
                <div className="border-t w-full text-sm flex">
                  <div className="w-1/3 py-2 flex justify-center items-center gap-2">
                    <IoIosBed />
                    <p>2</p>
                  </div>
                  <div className="w-1/3 py-2 border-x flex justify-center items-center gap-2">
                    <GiShower />
                    <p>2</p>
                  </div>
                  <div className="w-1/3 py-2 flex justify-center items-center gap-2">
                    <FiCpu />
                    <p>3</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-fit w-72 bg-white rounded-lg drop-shadow-2xl">
              <div className="bg-deluxe bg-cover rounded-t-lg bg-center h-64 w-full"></div>
              <div>
                <div className="pb-3 pl-2">
                  <h1 className="text-xl font-medium pt-2">One Bedroom Unit</h1>
                  <p className="text-base opacity-60 pt-4">Double Deluxe</p>
                  <span className="text-lg opacity-100 text-orange-600 font-medium">
                    $4500/Month
                  </span>
                </div>
                <div className="border-t w-full text-sm flex">
                  <div className="w-1/3 py-2 flex justify-center items-center gap-2">
                    <IoIosBed />
                    <p>3</p>
                  </div>
                  <div className="w-1/3 py-2 border-x flex justify-center items-center gap-2">
                    <GiShower />
                    <p>2</p>
                  </div>
                  <div className="w-1/3 py-2 flex justify-center items-center gap-2">
                    <FiCpu />
                    <p>5</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-fit w-72 bg-white rounded-lg drop-shadow-2xl">
              <div className="bg-platinum bg-cover rounded-t-lg bg-center h-64 w-full"></div>
              <div>
                <div className="pb-3 pl-2">
                  <h1 className="text-xl font-medium pt-2">Two Bedroom Unit</h1>
                  <p className="text-base opacity-60 pt-4">Platinum</p>
                  <span className="text-lg opacity-100 text-orange-600 font-medium">
                    $5200/Month
                  </span>
                </div>
                <div className="border-t w-full text-sm flex">
                  <div className="w-1/3 py-2 flex justify-center items-center gap-2">
                    <IoIosBed />
                    <p>4</p>
                  </div>
                  <div className="w-1/3 py-2 border-x flex justify-center items-center gap-2">
                    <GiShower />
                    <p>3</p>
                  </div>
                  <div className="w-1/3 py-2 flex justify-center items-center gap-2">
                    <FiCpu />
                    <p>6</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5 flex justify-center">
        <div className="w-fit h-fit flex font-medium border rounded">
          <button className="py-4 px-3 border-r">Back</button>
          <div className="flex text-orange-600">
            <div className="py-4 px-5">1</div>
            <div className="bg-orange-600 py-4 px-5 text-white">2</div>
            <div className="py-4 px-5">3</div>
          </div>
          <button className="text-orange-600 py-4 px-3 border-l">Next</button>
        </div>
      </div>
    </section>
  );
};

export default RoomDetailSection;
