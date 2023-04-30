import React from "react";

const ProfileSection = () => {
  return (
    <div>
      <div className="flex gap-3">
        <div className="bg-profile bg-cover bg-center bg-no-repeat rounded-full h-28 w-28"></div>
        <p className="text-blue-950 text-base font-semibold pt-10">
          Renson Gerald
        </p>
      </div>
      <button
        type="submit"
        className="text-blue-950 border border-blue-950 font-medium rounded-lg text-xs w-fit px-1.5 py-1 text-center my-3 ml-2"
      >
        Edit profile
      </button>
    </div>
  );
};

export default ProfileSection;
