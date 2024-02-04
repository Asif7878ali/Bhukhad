import React, { useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { addLoginUsers } from "../slices/UserdataSlices";
import khana from "../assets/Khana.png";
import { FcAlarmClock } from "react-icons/fc";
import { IoPersonAdd } from "react-icons/io5";
import { LuFileSpreadsheet } from "react-icons/lu";
import { MdEmojiTransportation } from "react-icons/md";

const AboutusPage = () => {
  const dispatch = useDispatch();

  const token = sessionStorage.getItem("token");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const verifyUser = async () => {
    const url = "http://localhost:7000/verify";
    //https://vast-tan-seagull-slip.cyclic.app/verify
    try {
      const response = await axios.get(url, { headers });
    //   console.log(response.data);
      const { msg } = response.data;
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: msg,
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch(addLoginUsers(response.data.data));
    } catch (error) {
      console.warn("Error fetching user data:", error);
    }
  };
  useEffect(() => {
    verifyUser();
  });

  return (
    <>
      <section className="py-20 lg:py-20 bg-white font-poppin">
        <div className="max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="flex flex-wrap ">
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
              <div className="lg:max-w-md">
                <div className="px-4 pl-4 mb-6 border-l-4 border-red-500">
                  <span className="text-sm uppercase">Who we are?</span>
                  <h1 className="mt-2 text-3xl font-black text-red-600  md:text-5xl">
                    About Us
                  </h1>
                </div>
                <p className="px-4 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                  Explore our meticulously curated menu that showcases a
                  symphony of flavors, each dish a testament to the artistry of
                  our skilled chefs. From mouthwatering appetizers that
                  tantalize your taste buds to decadent desserts that provide a
                  sweet crescendo to your meal, every bite is a celebration of
                  culinary excellence.
                </p>
                <div className="flex flex-wrap items-center">
                  <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                    <div className="p-6 bg-white">
                      <LuFileSpreadsheet size={30} className="text-red-600" />
                      <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">
                        200+
                      </p>
                      <h2 className="text-sm text-gray-700 dark:text-gray-400">
                        Projects
                      </h2>
                    </div>
                  </div>
                  <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                    <div className="p-6 bg-white">
                      <IoPersonAdd size={30} className="text-red-600" />
                      <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">
                        300
                      </p>
                      <h2 className="text-sm text-gray-700 dark:text-gray-400">
                        People work
                      </h2>
                    </div>
                  </div>
                  <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                    <div className="p-6 bg-white">
                      <MdEmojiTransportation
                        size={30}
                        className="text-red-600"
                      />
                      <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">
                        Free
                      </p>
                      <h2 className="text-sm text-gray-700 dark:text-gray-400">
                        Delivery
                      </h2>
                    </div>
                  </div>
                  <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                    <div className="p-6 bg-white">
                      <FcAlarmClock size={30} className="text-red-600" />
                      <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">
                        24hr
                      </p>
                      <h2 className="text-sm">Available</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 mb-10 lg:w-1/2 lg:mb-0">
              <img
                className="object-cover lg:w-[40rem] lg:h-[20rem] rounded"
                src={khana}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutusPage;
