import React from "react";
import khana from "../assets/Khana.png";
import { RiContactsFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCartPlus } from "react-icons/fa6";
import Login from "./Login";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import UserProfile from "./UserProfile";

const Navbar = () => {
  const carditems = useSelector((state) => state.fooditemsCard.items);
  const userimage = useSelector((state) => state.loginDetail.users);
  // console.log(userimage)
  const isUserLoggedIn = userimage !== null;

  const isUserLogged = () => {
    const token = sessionStorage.getItem("token");
    return !!token;
  };
  const navigate = useNavigate();
  const checkifuserlogin = (path) => {
    if (isUserLogged()) {
      navigate(path);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Login First",
      });
    }
  };
  return (
    <div className="navbar bg-base-100 fixed z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <GiHamburgerMenu />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <Link to="/">
              <li>
                <p>Home</p>
              </li>
            </Link>
            <li>
              <Link to="/restuarentmenu">
                <p>Menu</p>
              </Link>
            </li>
            <li>
              <p>About us</p>
            </li>

              <li>
                <p  onClick={()=> checkifuserlogin('/contact')} >Contact</p>
              </li>
         
          </ul>
        </div>
        <div>
          <img
            className="btn btn-ghost text-xl"
            src={khana}
            alt="Khana-Kazana"
          />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal font-bold px-1">
          <Link to="/">
            <li className="text-red-600 hover:bg-red-600 hover:text-white rounded-md">
              <p>Home</p>
            </li>
          </Link>
          <li className="hover:bg-red-600 text-red-600 hover:text-white rounded-md">
            <Link to="/restuarentmenu">
              <p>Menu</p>
            </Link>
          </li>
          <li>
            <summary className="hover:bg-red-600 text-red-600 hover:text-white">
              About us
            </summary>
          </li>

          
            <li  onClick={() => checkifuserlogin('/contact')}
             className="hover:text-white hover:bg-red-600 text-red-600 rounded-md">
              <p>Contact</p>
            </li>
        
        </ul>
      </div>
      <div className="navbar-end md:space-x-2 lg:space-x-4">
        {/* Add to Card */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <FaCartPlus size={30} />
              <span className="badge badge-sm indicator-item">
                {carditems?.length}
              </span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-red-600 text-lg">
                Items : {carditems?.length}
              </span>

              <div className="card-actions">
                <button
                  onClick={() => checkifuserlogin('/addcard')}
                  className="btn btn-primary bg-red-700 hover:bg-red-800 text-white font-bold btn-block"
                >
                  View cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {isUserLoggedIn ? (
          // Show user image if logged in
          <button
            onClick={() => document.getElementById("my_modal_6").showModal()}
          >
            <img
              className="rounded-full h-10 w-10 object-cover"
              src={`data:image/jpeg;base64,${userimage.image}`}
              alt="User"
            />
          </button>
        ) : (
          // Show login button if not logged in
          <button
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="btn bg-red-700 hover:bg-red-800 rounded-full items-center text-white flex px-6"
          >
            <RiContactsFill />
            Login
          </button>
        )}

        <UserProfile />
        <Login />
      </div>
    </div>
  );
};

export default Navbar;
