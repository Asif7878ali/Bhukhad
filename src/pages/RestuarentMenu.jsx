import React, { useState, useEffect } from "react";
import axios from "axios";
import RestuaCardsMap from "../components/RestuaCardsMap";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";

const RestuarentMenu = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [search, setSearch] = useState("");
 
  const fetchData = async () => {      
    const myApiData = "https://restuarent.onrender.com/restaurants";
    try {
      const responce = await axios.get(myApiData);
      setRestaurants(responce.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
     fetchData();
  }, []);
  console.log(restaurants);
 
  //Search
  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(search.toLowerCase())
  );

  //pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredRestaurants.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto xl:px-24 p-4 bg-gradient-to-r">
        <div className="lg:pt-48 pt-12 pb-5 flex flex-col items-center justify-center">
          {/* content */}
          <div className="text-center px-4 space-y-7">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
              For the Love of Delicious{" "}
              <span className="text-red-600">Food</span>
            </h2>
            <p className="text-gray-700 text-xl md:w-4/5 mx-auto">
              Come with family & feel the joy of mouthwatering food such as
              Muttons, Chicken, Butter Nan, Malia Kurma, Aloo Panner veg and
              more...
            </p>
            <div className="justify-center items-center flex">
              <input
                className="w-full lg:w-[70rem] font-normal px-4 py-3 my-4 border border-gray-600 text-lg shadow-lg outline-none bg-gray-100 rounded-md"
                placeholder="Search Restuerents..."
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* ml-20 lg:ml-[43rem] */}
      {/* cards */}
      {loading ? (
        <div className="flex flex-col gap-4 w-52 ml-20 lg:ml-[43rem]">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      ) : (
        <>
          {/* cards */}
          <div className="pl-[5rem] lg:pl-[7rem] flex flex-wrap">
            {currentItems.map((restaurantItem) => (
              <Link
                to={"/fooditems/" + restaurantItem.id}
                key={restaurantItem.id}
              >
                <RestuaCardsMap
                  key={restaurantItem.id}
                  restuarent={restaurantItem}
                />
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={filteredRestaurants.length}
            paginate={paginate}
          />
        </>
      )}
    </>
  );
};

export default RestuarentMenu;
