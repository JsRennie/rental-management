import React from "react";

interface ProgressProp {
  percentage: Number;
}

const ProgressBar = ({ percentage }: ProgressProp) => {
  const progressBarWidth = `${percentage}%`;

  return (
    <section className="flex justify-center mb-10">
      <div className="w-96 bg-blue-100 rounded-full h-2.5 mt-4">
        <div
          id="progress-bar"
          className="bg-blue-950 h-2.5 rounded-full"
          style={{ width: progressBarWidth }}
        ></div>
      </div>
    </section>
  );
};

export default ProgressBar;
