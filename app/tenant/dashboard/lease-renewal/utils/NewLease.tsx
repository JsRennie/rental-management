import React from "react";
import LeaseCard from "../../util/LeaseCard";

const NewLease = () => {
  return (
    <div>
      <div>
        <p className="text-sm text-blue-950">
          This your current Lease Agreement
        </p>
        <LeaseCard Title="Lease Agreement" />
      </div>
    </div>
  );
};

export default NewLease;
