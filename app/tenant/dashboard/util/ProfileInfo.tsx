import React from "react";

interface ProfileProps {
  Name: string;
  Unit: string;
  Requested: string;
  University: string;
}

const ProfileInfo = ({ Name, Unit, Requested, University }: ProfileProps) => {
  return (
    <div>
      <h1 className="text-lg font-bold">{Name}</h1>
      <div className="text-sm font-medium text-gray-700">
        <p className="uppercase">
          <span className="normal-case text-gray-400">Unit: </span>
          {Unit}
        </p>
        <p>
          <span className="normal-case text-gray-400">Requested at: </span>
          {Requested}
        </p>
        <p>
          <span className="normal-case text-gray-400">University: </span>
          {University}
        </p>
      </div>
    </div>
  );
};

export default ProfileInfo;
