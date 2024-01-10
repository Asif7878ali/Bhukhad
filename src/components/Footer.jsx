import React from 'react'
import khana from '../assets/Khana.png'

const Footer = () => {
  return (
    <>
     <div>
        <div className="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
          <div className="p-5">
            <img src={khana} alt="error"/>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-red-600 font-bold">
              Services
            </div>
            <p className="my-3 block">
              Food Deleviry <span className="text-teal-600 text-xs p-1"></span>
            </p>
            <p className="my-3 block">
              Order Food <span className="text-teal-600 text-xs p-1"></span>
            </p>
            <p className="my-3 block">
              Free Charge <span className="text-teal-600 text-xs p-1">New</span>
            </p>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-red-600 font-bold">
              Support
            </div>
            <p className="my-3 block">
              Help Center <span className="text-teal-600 text-xs p-1"></span>
            </p>
            <p className="my-3 block">
              Privacy Policy <span className="text-teal-600 text-xs p-1"></span>
            </p>
            <p className="my-3 block">
              Conditions <span className="text-teal-600 text-xs p-1"></span>
            </p>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-red-600 font-bold">
              Contact us
            </div>
            <p className="my-3 block">
              KhanaKhazana, C-block Sec-2 , Noida , Uttar Pradesh,India
              <span className="text-teal-600 text-xs p-1"></span>
            </p>
            <p className="my-3 block">
              khazana@gmail.com{" "}
              <span className="text-teal-600 text-xs p-1"></span>
            </p>
          </div>
        </div>
      </div>

      <div className="pt-2">
        <div className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col max-w-screen-lg items-center">
          <div className="my-5">© Copyright 2023-24. All Rights Reserved.</div>
        </div>
      </div>

    </>
  )
}

export default Footer