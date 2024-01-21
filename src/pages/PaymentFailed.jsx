import React from "react";
import { Link } from "react-router-dom";
import { BsShieldFillX } from "react-icons/bs";

const PaymentFailed = () => {
  return (
    <>
      <div className="h-[30rem] lg:pt-32 pt-20">
        <div className="lg:ml-[43rem] lg:h-[30rem] lg:w-[20rem]">
          <div className="pl-[7.5rem] pb-3">
            <BsShieldFillX size={70} className="text-red-600" />
          </div>

          <div className="text-center">
            <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
              Payment Failed!
            </h3>
            <p className="text-gray-600 my-2">Sorry for incanvinance</p>
            <p>Have a great day!</p>
            <div className="py-10 text-center">
              <Link to="/addcard">
                <button className="px-12 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-lg py-3">
                  Retry
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentFailed;
