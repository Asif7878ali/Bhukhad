import React from "react";
import khana from '../assets/Khana.png'

const Banner = () => {
  return (
    <>
      <div className="w-full lg:h-[40rem]">
        <div className="lg:flex">
          <div className="lg:w-[50%] lg:mt-52 lg:pl-20 pt-16 pl-8">
            <h1 className="text-4xl font-bold mb-3">Deep dive into Diligious Food from</h1>
            <h1 className="text-4xl font-bold text-red-600 mb-3">Khana-Kazana</h1>
            <p className="italic mb-5 sm:font-bold">
              Explore our meticulously curated menu that showcases a symphony of
              flavors, each dish a testament to the artistry of our skilled
              chefs. From mouthwatering appetizers that tantalize your taste
              buds to decadent desserts that provide a sweet crescendo to your
              meal, every bite is a celebration of culinary excellence.
            </p>
            <button className="bg-red-500 hover:bg-red-900 border border-gray-400 border-b-4 font-medium overflow-hidden px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
  <span className="bg-gray-400 shadow-gray-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
  Order Now
</button>
          </div>
          <div className="lg:mt-36 lg:pl-14">
            <img className="h-96" src={khana} alt="khana-kazana" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
