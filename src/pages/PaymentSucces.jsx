import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const PaymentSucces = () => {
  return (
    <>
      <div className="h-[30rem] lg:pt-32 pt-20">
        <div className="lg:ml-[43rem] lg:h-[30rem] lg:w-[20rem]">
          <div className="pl-[7.5rem] pb-3">
            <BsCheckCircleFill size={70} className="text-green-500" />
          </div>

          <div className="text-center">
            <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
              Payment Done!
            </h3>
            <p className="text-gray-600 my-2">Thank you for Shoping with us</p>
            <p>Have a great day!</p>
            <div className="py-10 text-center">
              <Link to='/restuarentmenu'>
              <button className="px-12 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-lg py-3">
                Continue Shop
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentSucces;
