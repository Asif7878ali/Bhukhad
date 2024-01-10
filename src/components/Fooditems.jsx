import React, { useEffect, useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { data } from "../utils/foodItemsData";

const Fooditems = () => {
  const [box, setBox] = useState(null);
  const { foodItems } = data;
  // console.log(foodItems);

  useEffect(() => {
    let element = document.getElementById("52");
    setBox(element);
  }, []);

  const previos = () => {
    const width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    // console.log(width);
  };
  const next = () => {
    const width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    // console.log(width);
  };

  return (
    <>
      <div className="pl-20 mt-10">
        <div className="flex">
          <div>
            <h2 className="text-4xl md:text-5xl md:leading-snug font-bold">
              Experiance Great & Tasty
            </h2>
            <h1 className="text-4xl md:text-5xl md:leading-snug font-bold text-red-700">
              Food
            </h1>
          </div>
          <div className="md:absolute lg:right-3 flex md:mr-24">
            <button
              onClick={previos}
              className="btn p-2 rounded-full lg:ml-5 hover:bg-red-700 hover:text-white"
            >
              <FaAngleLeft className=" h-8 w-8 p-1" />
            </button>
            <button
              onClick={next}
              className="btn p-2 rounded-full lg:ml-5 hover:bg-red-700 hover:text-white"
            >
              <FaAngleRight className=" h-8 w-8 p-1" />
            </button>
          </div>
        </div>
        {/* map cards */}
        <div id="52" className="flex overflow-hidden scroll-smooth">
          {foodItems.map((item) => (
            <div key={item.id}>
              <div className="w-64 mt-5 mb-10 ml-5  lg:mr-[4.2rem] shadow-md rounded-md">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h1 className="text-2xl font-bold mb-2">{item.name}</h1>
                  <h3 className="text-lg text-gray-700 mb-2">
                    {item.Despription}
                  </h3>
                  <p className="text-gray-600 font-bold">{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Fooditems;
