import React from "react";

interface RoommateProps {
  Title: string;

  Date?: string;
  Roommate?: String;
  Duration?: string;
  Notice?: string;
  EvictionDate?: string;
}

const LeaseCard = ({
  Title,

  Date,
  Roommate,
  Duration,
  Notice,
  EvictionDate,
}: RoommateProps) => {
  return (
    <div className="bg-blue-950 pl-2 pr-8 py-4 h-fit w-60 rounded">
      <h1 className="text-sm font-medium text-white underline">{Title}</h1>
      <div className="text-xs font-normal text-white pt-2">
        <p>
          <span className="normal-case opacity-80">Moving in date: </span>
          {Date}
        </p>
        <p>
          <span className="normal-case opacity-80">Duration: </span>
          {Duration}
        </p>
        <p className="uppercase">
          <span className="normal-case opacity-80">Eviction date: </span>
          {EvictionDate}
        </p>
        <p>
          <span className="normal-case opacity-80">Eviction notice: </span>
          {Notice}
        </p>
        <p>
          <span className="normal-case opacity-80">Roommate: </span>
          {Roommate}
        </p>
      </div>
    </div>
  );
};

export default LeaseCard;
