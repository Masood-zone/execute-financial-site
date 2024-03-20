import React from "react";
import ReactPlayer from "react-player";

function Demo() {
  return (
    <div className="grid grid-cols-2 gap-5 pt-32 pr-4 pb-32 pl-4 max-w-7xl h-[650px] items-center m-auto">
      {/* Content */}
      <div className="flex flex-col items-start justify-start">
        <p className="italic text-2xl capitalize py-3">
          More than 100 financial planners,
        </p>
        <p className="font-medium text-4xl capitalize">One philosophy</p>
        <p className="py-5">
          Every single one of our financial advisors receives rigorous training
          according to John Doe's philosophy based on academic research
          (including that of a Nobel laureate in Economic) and Behavioural
          Finance.
        </p>
        <button className="button w-full">
          Get your free financial analysis
        </button>
      </div>
      {/* YouTube Link */}
      <div className="flex items-center justify-center">
        <ReactPlayer
          url="https://www.youtube.com/embed/oeqP5JtihMA"
          width={550}
          height={280}
        />
      </div>
    </div>
  );
}

export default Demo;
