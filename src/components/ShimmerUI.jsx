import React from "react";

const ShimmerUI = () => {
  return (
    <div className="flex flex-col gap-4 w-52">
      <span className="skeleton h-32 w-full"></span>
      <span className="skeleton h-4 w-28"></span>
      <span className="skeleton h-4 w-full"></span>
      <span className="skeleton h-4 w-full"></span>
    </div>
  );
};

function ShimmerList(){
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {Array.from({ length: 6 }).map((_, index) => (
        <ShimmerUI key={index} />
      ))}
    </div>
  );
};

export default ShimmerList;
