import React from "react";
import { GiCancel } from "react-icons/gi";

export const Modal = ({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) => {
  const handleOnClose = (e: React.MouseEvent<HTMLElement>) => {
    onClose();
  };

  if (!visible) return null;

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="bg-white p-2 rounded h-48 flex flex-col justify-center items-center">
        <p className="text-blue-950 font-extrabold text-lg">Not Eligible</p>
        <span className="text-sm font-semibold opacity-60 text-center">
          Sorry, we are only Accepting current and
          <span className="block">incomming Students At the Moment</span>
        </span>
        <GiCancel
          size={34}
          color="red"
          onClick={onClose}
          className="mt-6 hover:cursor-pointer"
        />
      </div>
    </div>
  );
};
