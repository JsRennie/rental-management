import React from "react";
import { BiDollarCircle } from "react-icons/bi";
import { RiCommunityLine, RiPlantFill } from "react-icons/ri";
import { BsStack } from "react-icons/bs";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { GiReceiveMoney } from "react-icons/gi";

const Desc = () => {
  return (
    <section className="my-8">
      <div>
        <h1 className="text-xl md:text-3xl font-bold mb-5 flex gap-2">
          <div className="border-b-4 pb-1 w-fit border-orange-600">
            Minimum Living Cost
          </div>
          <span> Takes Care Of Everthing</span>
        </h1>
        <div className="block lg:flex gap-10">
          <div className="bg-desc bg-cover bg-no-repeat bg-center h-96 w-full md:w-2/5 drop-shadow-lg rounded-tl-3xl rounded-br-3xl"></div>
          <div className="space-y-6 py-10">
            <div className="flex flex-wrap justify-center gap-10 md:flex md:gap-16 text-base md:text-lg font-medium">
              <div>
                <div className="bg-white drop-shadow-xl rounded w-fit">
                  <div className="p-3">
                    <BiDollarCircle size={40} color="orange" />
                  </div>
                </div>
                <h3>Pay As Little</h3>
                <h3>As Possible!</h3>
              </div>
              <div>
                <div className="bg-white drop-shadow-xl rounded w-fit">
                  <div className="p-3">
                    <RiCommunityLine size={40} color="orange" />
                  </div>
                </div>
                <h3>Enjoy Wisdom</h3>
                <h3>Of Community!</h3>
              </div>
              <div>
                <div className="bg-white drop-shadow-xl rounded w-fit">
                  <div className="p-3">
                    <BsStack size={40} color="orange" />
                  </div>
                </div>
                <h3>Let Somebody Else</h3>
                <h3>Take Care Of Your Demands!</h3>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-10 md:flex md:gap-16 text-base md:text-lg font-medium">
              <div>
                <div className="bg-white drop-shadow-xl rounded w-fit">
                  <div className="p-3">
                    <RiPlantFill size={40} color="orange" />
                  </div>
                </div>
                <h3>Enjoy Peaceful</h3>
                <h3>Environment!</h3>
              </div>
              <div>
                <div className="bg-white drop-shadow-xl rounded w-fit">
                  <div className="p-3">
                    <AiFillSafetyCertificate size={40} color="orange" />
                  </div>
                </div>
                <h3>Stay Safe!</h3>
                <h3>Save Money!</h3>
              </div>
              <div>
                <div className="bg-white drop-shadow-xl rounded w-fit">
                  <div className="p-3">
                    <GiReceiveMoney size={40} color="orange" />
                  </div>
                </div>
                <h3>Pay For What</h3>
                <h3>You Use!</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Desc;
