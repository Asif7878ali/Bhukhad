import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
// import { useSelector } from "react-redux";






const ContactPage = () => {
    
  // const userimage = useSelector((state) => state.loginDetail.users);


  return (
    <>
      <section className="min-h-screen bg-cover">
        <div className="flex flex-col min-h-screen">
          <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
            <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
              <div className="lg:w-1/2 lg:mx-6">
                <h1 className="text-2xl font-semibold capitalize lg:text-3xl">
                  Get in touch
                </h1>

                <p className="max-w-xl mt-6">
                  Explore our meticulously curated menu that showcases a
                  symphony of flavors, each dish a testament to the artistry of
                  our skilled chefs. From mouthwatering appetizers that
                  tantalize your taste buds to decadent desserts that provide a
                  sweet crescendo to your meal, every bite is a celebration of
                  culinary excellence.
                </p>

                <div className="mt-6 md:mt-8">
                  <h3>Follow us</h3>

                  <div className="flex mt-4 -mx-1.5 ">
                    <p
                      className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500"
                      href="#"
                    >
                      <FaSquareXTwitter size={30} className="text-red-600" />
                    </p>

                    <p
                      className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500"
                      href="#"
                    >
                      <FaLinkedinIn size={30} className="text-red-600" />
                    </p>

                    <p
                      className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500"
                      href="#"
                    >
                      <FaFacebookF size={30} className="text-red-600" />
                    </p>

                    <p
                      className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500"
                      href="#"
                    >
                      <GrInstagram size={30} className="text-red-600" />
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 lg:w-1/2 lg:mx-6">
                <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-gray-100 shadow-2xl rounded-xl lg:max-w-xl">
                  <h1 className="text-xl font-medium">Contact form</h1>

                  <p className="mt-2">Ask us everything</p>

                  <form className="mt-6">
                    <div className="flex-1">
                      <label className="block mb-2 text-sm">Full Name</label>
                      <input
                        type="text"
                        // value={userimage?.username}
                        placeholder="Name"
                        className="block w-full px-5 py-3 mt-2 bg-white border border-gray-200 rounded-md dark:border-gray-600 focus:border-red-600 focus:ring-red-600 focus:ring-opacity-40 dark:focus:border-red-600 focus:outline-none focus:ring"
                      />
                    </div>

                    <div className="flex-1 mt-6">
                      <label className="block mb-2 text-sm">
                        Email address
                      </label>
                      <input
                        // value={userimage?.email}
                        type="email"
                        placeholder="E-mail"
                        className="block w-full px-5 py-3 mt-2 bg-white border border-gray-200 rounded-md dark:border-gray-600 focus:border-red-600 focus:ring-red-600 focus:ring-opacity-40 dark:focus:border-red-600 focus:outline-none focus:ring"
                      />
                    </div>

                    <div className="w-full mt-6">
                      <label className="block mb-2 text-sm">Message</label>
                      <textarea
                        className="block w-full px-5 py-3 mt-2 bg-white border border-gray-200 rounded-md dark:border-gray-600 focus:border-red-600 focus:ring-red-600 focus:ring-opacity-40 dark:focus:border-red-600 focus:outline-none focus:ring"
                        placeholder="Message"
                      ></textarea>
                    </div>

                    <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-400 focus:ring-opacity-50">
                      get in touch
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
