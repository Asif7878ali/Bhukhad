import React, { } from "react";
import khana from "../assets/Khana.png";
import { RiContactsFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCartPlus } from "react-icons/fa6";
import Login from "./Login";
import { useSelector } from "react-redux";

const Navbar = () => {
  const carditems = useSelector((state) =>  state.fooditemsCard.items);
  const userimage = useSelector((state) => state.loginDetail.users )
  console.log(userimage)
  const isUserLoggedIn = userimage !== null;
 
    
  return (
    <div className="navbar bg-base-100 fixed">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <GiHamburgerMenu />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <p>Home</p>
            </li>
            <li>
              <p>Menu</p>
              <ul className="p-2">
                <Link to="/restuarentmenu">
                  <li>
                    <p>All</p>
                  </li>
                  <li>
                    <p>Veg</p>
                  </li>
                  <li>
                    <p>Non-Veg</p>
                  </li>
                </Link>
              </ul>
            </li>
            <li>
              <p>About us</p>
            
            </li>
            <li>
              <p>Contact</p>
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
          <li className="text-red-600 hover:bg-red-600 hover:text-white rounded-md">
            <p>Home</p>
          </li>
          <li>
            <details>
              <summary className="hover:bg-red-600 text-red-600 hover:text-white">
                Menu
              </summary>
              <ul className="p-2">
                <Link to="/restuarentmenu">
                  <li>
                    <p>All</p>
                  </li>
                  <li>
                    <p>Veg</p>
                  </li>
                  <li>
                    <p>Non-Veg</p>
                  </li>
                </Link>
              </ul>
            </details>
          </li>
          <li>
           
              <summary className="hover:bg-red-600 text-red-600 hover:text-white">
                About us
              </summary>
           
          </li>
          <li className="hover:text-white hover:bg-red-600 text-red-600 rounded-md">
            <p>Contact</p>
          </li>
        </ul>
      </div>
      <div className="navbar-end md:space-x-2 lg:space-x-4">
       

        {/* Add to Card */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
            <FaCartPlus size={30}/>
              <span className="badge badge-sm indicator-item">{carditems?.length}</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-red-600 text-lg">Items : {carditems?.length}</span>
             
              <div className="card-actions">
                <Link to='/addcard'>
                <button className="btn btn-primary bg-red-700 hover:bg-red-800 text-white font-bold btn-block">
                  View cart
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>


        {isUserLoggedIn ? (
          // Show user image if logged in
          <img
            className="rounded-full h-10 w-10 object-cover"
            src={`data:image/jpeg;base64,${userimage.image}`}  
            alt="User"
          />
        ) : (
          // Show login button if not logged in
          <button
            onClick={() => document.getElementById('my_modal_5').showModal()}
            className="btn bg-red-700 hover:bg-red-800 rounded-full items-center text-white flex px-6">
            <RiContactsFill />
            Login
          </button>
        )}


       
        <Login/>
      </div>
    </div>
  );
};

export default Navbar;
