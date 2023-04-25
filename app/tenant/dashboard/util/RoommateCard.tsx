import React from "react";

interface RoommateProps {
  Title: string;
  Name?: string;
  Tel?: String;
  Email?: string;
  University?: string;
  Date?: string;
}

const RoommateCard = ({
  Name,
  Title,
  Tel,
  Email,
  University,
  Date,
}: RoommateProps) => {
  return (
    <div className="bg-blue-950 pl-2 pr-8 py-4 h-fit w-60 rounded">
      <h1 className="text-sm font-medium text-white underline">{Title}</h1>
      <div className="text-xs font-normal text-white pt-2">
        <p className="uppercase">
          <span className="normal-case opacity-80">Name: </span>
          {Name}
        </p>
        <p>
          <span className="normal-case opacity-80">Tel: </span>
          {Tel}
        </p>
        <p>
          <span className="normal-case opacity-80">Email: </span>
          {Email}
        </p>
        <p className="uppercase">
          <span className="normal-case opacity-80">University: </span>
          {University}
        </p>
        <p>
          <span className="normal-case opacity-80">Move in date: </span>
          {Date}
        </p>
      </div>
    </div>
  );
};

export default RoommateCard;
