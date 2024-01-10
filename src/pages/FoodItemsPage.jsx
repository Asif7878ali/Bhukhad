import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { FaRupeeSign } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { additems } from "../slices/CardFoodSlice";
import Swal from 'sweetalert2';


const FoodItemsPage = () => {
  const { id } = useParams();
  // console.log(id)
  const [specificRestua, setSpecificRestua] = useState([]);
  const fetchData = async () => {
    const myApiData = `https://restuarent-list.onrender.com/restaurants/${id}`;
    try {
      const responce = await axios.get(myApiData);
      setSpecificRestua(responce.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);
  const {
    image,
    name,
    rating,
    Despription,
    deliveryCharge,
    cuisine,
    location,
  } = specificRestua;
    
  const foodItems = specificRestua.foodItems;

    // data send to redux
    const dispatch = useDispatch();

    const dataSendRedux = (item) => {
        dispatch(additems(item));
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Add Succesfully",
            showConfirmButton: false,
            timer: 1500
          });
    };
  return (
    <>
           <div className="w-full lg:h-[40rem]">
        <div className="lg:flex">
          <div className="lg:w-[50%] lg:mt-32 lg:pl-20 pt-16 pl-8">
            <h1 className="text-4xl font-bold mb-3">Name : {name}</h1>
            <h1 className="text-4xl font-bold text-red-600 mb-3">Ratings : {rating} stars</h1>
            <p className="italic mb-5 sm:font-bold text-lg"> {Despription}</p>
              <div className="italic mb-5 sm:font-bold flex text-lg">
              DeliveryCharges : <FaRupeeSign/> 
              <p>{deliveryCharge}</p>
              </div>

            <p className="italic mb-5 sm:font-bold text-lg">Cousine : {cuisine}</p>
            <p className="italic mb-5 sm:font-bold text-lg">Area : {location}</p>          
          </div>

          <div className="lg:mt-32 lg:pl-24">
            <img className="h-96 w-full" src={image} alt="khana-kazana" />
          </div>
        </div>
      </div>

      {/* mapFood */}
      <div className="flex flex-wrap ml-32">
        {foodItems?.map((items) => (
             <div key={items.id}>
            <div className="lg:ml-10 mb-3 max-w-sm h-72 lg:w-60 rounded overflow-hidden shadow-lg">
            <img className="w-60 h-[40%]" src={items.image} alt="Sunset in the mountains" />
            <div className="h-[20%] mt-2 text-2xl font-bold text-center">
                <h1>{items.name}</h1>
            </div>
             <div className="h-[15%] flex pl-20">
             <FaRupeeSign/>
             <h3>{items.price}</h3>
             </div>
           
            <div className="flex pl-6 space-x-5">
              <button  onClick={() => dataSendRedux(items)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transform hover:scale-105 transition-transform duration-300">
                Add
              </button>
            </div>
          </div>
          </div>  
        ))}
      </div>
    </>
  );
};

export default FoodItemsPage;
