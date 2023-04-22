import React from "react";
import { CiMail } from "react-icons/ci";
import { Badge } from "@mui/material";

const Badges = () => {
  return (
    <Badge color="success" variant="dot">
      <CiMail color="action" size={24} />
    </Badge>
  );
};

export default Badges;
