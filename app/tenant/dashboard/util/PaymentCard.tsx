import React from "react";

interface CardProps {
  title: string;
  h1: string;
  paragraph: string;
  h2: string;
  h3: string;
}

const PaymentCard = ({ title, h1, paragraph, h2, h3 }: CardProps) => {
  return (
    <div className="bg-blue-950 pl-2 pr-8 py-4 h-fit w-60 mt-5 rounded">
      <div className="text-white text-lg font-semibold underline">{title}</div>
      <div className="space-y-2">
        <div className="text-sm font-normal text-white">{h1}</div>
        <div className="text-sm font-normal text-white">{paragraph}</div>
        <div className="text-sm font-normal text-white">{h2}</div>
        <div className="text-sm font-normal text-white">{h3}</div>
      </div>
    </div>
  );
};

export default PaymentCard;
