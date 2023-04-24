import React from "react";
import { Button } from "@mui/material";

export const LoginModal = ({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) => {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-2 rounded h-80 flex flex-col justify-center items-center">
        <p className="text-blue-950 font-extrabold text-lg">
          Account created successfully!
        </p>
        <div className="h-40 w-40 bg-modal bg-cover bg-no-repeat bg-center"></div>
        <Button
          onClick={handleOnClose}
          id="container"
          size="large"
          variant="contained"
          className="text-white bg-blue-950"
          href="/signin"
        >
          Log In
        </Button>
      </div>
    </div>
  );
};
