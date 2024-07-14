import React from "react";
import serviceLists from "../utils/servicelist.json";

const OurServices = () => {
 
  return (
    <>
      <div className="section-container mb-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="lg:w-[50%] mt-3 lg:pl-20 pl-8">
            <h1 className="text-4xl font-bold mb-3">
              Our Story & Culinary Journey
            </h1>
            <h1 className="text-4xl font-bold text-red-600 mb-3">Services</h1>
            <p className="italic mb-5 sm:font-bold">
              Our Services Food website, where culinary excellence meets
              convenience. Our mission is to bring you a delightful dining
              experience with a range of services tailored to satisfy your
              cravings. From delectable meals prepared with the finest
              ingredients to prompt and reliable delivery services, we are
              dedicated to providing you with a hassle-free and enjoyable food
              experience.
            </p>
            <button className="bg-red-500 hover:bg-red-900 border border-gray-400 border-b-4 font-medium overflow-hidden px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
              <span className="bg-gray-400 shadow-gray-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
              Explore
            </button>
          </div>
          <div className="md:w-1/2">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 items-center">
              {serviceLists.map((service) => (
                <div key={service.id}
                  className="shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-green cursor-pointer hover:border hover:border-indigo-60 transition-all duration-200">
                  <img src={service.img} alt="not load" className="mx-auto sm:h-5 lg:h-20 w-full object-cover"/>
                  <h5 className="pt-3 font-bold"> {service.title}</h5>
                  <p className="text-red-600">{service.des}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
