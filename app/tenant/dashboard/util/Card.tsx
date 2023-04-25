import Link from "next/link";
import React from "react";

interface CardProps {
  icon: React.ElementType;
  paragraph: string;
  footer?: string;
}

const Card = ({ icon, paragraph, footer }: CardProps) => {
  return (
    <>
      <Link href={"#"}>
        <div className="bg-slate-300 hover:bg-blue-950 hover:text-white p-2 h-fit w-48 mt-5 rounded">
          <div className="mb-2">
            <div>{icon}</div>
          </div>
          <p className="text-sm font-bold mb-2">{paragraph}</p>
          <div className="text-xs font-semibold p-1">{footer}</div>
        </div>
      </Link>
    </>
  );
};

export default Card;
