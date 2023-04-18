"use client";
import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Modal } from "../Modal";

const joining = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOnClose = () => setShowModal(false);

  return (
    <div className="flex justify-center items-center mt-12">
      <div className="text-center">
        <article>
          <h1 className="text-bg-blue-950 font-extrabold text-lg px-8">
            Are you a Student
          </h1>
          <p className="text-sm font-semibold opacity-60">
            Are you a current or incoming student?
          </p>
        </article>
        <div className=" flex justify-center mt-8">
          <Stack spacing={2} direction="row">
            <Button
              size="large"
              variant="outlined"
              className="text-blue-950"
              href="/signup/personalinfo"
            >
              Yes
            </Button>
            <Button
              size="large"
              variant="outlined"
              className="text-sky-900"
              onClick={() => setShowModal(true)}
            >
              No
            </Button>
          </Stack>
        </div>
      </div>
      <Modal onClose={handleOnClose} visible={showModal} />
    </div>
  );
};

export default joining;
