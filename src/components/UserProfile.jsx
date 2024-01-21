import React from "react";
import { MdEmail } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearUsers } from "../slices/UserdataSlices";


const UserProfile = () => {
  const userimage = useSelector((state) => state.loginDetail.users);

   const dispatch = useDispatch()
   const navigate = useNavigate()

   const logoutuser = () => {
       sessionStorage.removeItem('token')
       dispatch(clearUsers())
       navigate('/')
       document.getElementById("my_modal_6").close()      
   }

  return (
    <>
      <dialog id="my_modal_6" className="modal modal-middle sm:modal-middle">
        <div className="modal-box">
          <div className="modal-action flex flex-col justify-center mt-0">
            <div className="border-b px-4 pb-6">
              <div className="text-center my-4">
                <img
                  className="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
                  src={`data:image/jpeg;base64,${userimage?.image}`}
                  alt="not load"
                />
                <div className="py-2">
                  <h3 className="font-bold text-2xl mb-1">
                    {userimage?.username}
                  </h3>
                </div>
                <div className="inline-flex space-x-1 items-center">
                  <MdEmail />
                  <h1>{userimage?.email}</h1>
                </div>
              </div>
              <div className="flex gap-2 px-2">
                <button className="lg:px-20 px-8 z-30 lg:py-2 py-2 bg-red-600 rounded-full text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-rose-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af]">
                  Track Order
                </button>


                <button  onClick={logoutuser}
                 className="lg:px-12 px-8 z-30 lg:py-2 py-2 bg-red-600 rounded-full text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-rose-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af]"> Logout </button>
    
              </div>
            </div>

            <button
              htmlFor="my_modal_6"
              onClick={() => document.getElementById("my_modal_6").close()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default UserProfile;
