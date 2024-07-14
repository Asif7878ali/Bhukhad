import React from "react";

const RestuaCardsMap = ({ restuarent }) => {
  const { name, Despription, rating, image, deliveryTime } = restuarent;
  return (
    <>
      <div className="w-64 mt-5 mb-10 lg:mr-10 bg-gray-100 shadow-md rounded-md overflow-hidden hover:-translate-y-4 transition-all duration-300">
        <div className="relative">
          <img className="w-full object-cover lg:h-40" src={image} alt="not lodd" />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>

          <div className="text-sm absolute top-0 right-0 bg-red-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-red-600 transition duration-500 ease-in-out">
            <span className="font-bold">{rating}</span>
            <small>Ratings</small>
          </div>
        </div>
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-2">{name}</h1>
          <h3 className="text-lg text-gray-700 mb-2">{Despription}</h3>
          <p className="text-gray-600 font-bold">Rating :- {rating}</p>
          <p className="text-gray-600 font-bold">Delivery :- {deliveryTime}</p>
        </div>
      </div>
    </>
  );
};

export default RestuaCardsMap;
