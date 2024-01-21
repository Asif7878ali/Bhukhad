import React from "react";
import { MdDelete } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { changeQuantity, deleteItems } from "../slices/CardFoodSlice";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import khana from "../assets/Khana.png";
import axios from "axios";
import { useNavigate } from "react-router";


const AddtoCard = () => {
  const carditems = useSelector((state) => state.fooditemsCard.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(carditems)
  const handleQuantityChange = (itemId, change) => {
    // Dispatch the changeQuantity action with the product ID and change
    dispatch(changeQuantity({ id: itemId, change }));
  };

  // Calculate the total price by summing up totalPrice of all items
  const totalPrice = carditems.reduce((acc, item) => acc + item.totalPrice, 0);

  const handleDelete = (itemId) => {
    // console.log(itemId)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Dispatch the deleteFoodItem action with the itemId as payload
        dispatch(deleteItems(itemId));
        Swal.fire({
          title: "Deleted!",
          text: "Your item has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const makePayment = async () => {
    try {
      const responceSession = await axios.post( "http://localhost:7000/checkout/session" , carditems );
      console.log('grse',responceSession);
      console.log(responceSession.data.amount)
      var options = {
        "key": "rzp_test_bJJlbt2vey71GA",
        "amount": responceSession.data.amount,
        "currency": responceSession.data.currency,
        "name": "Khana-Kazana",
        "description": "Transaction",
        "image": khana,
        "order_id":  responceSession.data.id,
        "handler": async function (response){
              try {
                   const responceVerifySign =  await axios.post('http://localhost:7000/checkout/verify' , {responce : response} )
                   console.log(responceVerifySign)
                      navigate('/success')
              } catch (error) {
                  console.log(error)
                  navigate('/failed')
              }
          
        },

    };
    var rzp = new window.Razorpay(options);
    rzp.open();

    } catch (error) {
      console.warn("Error during Payment", error);
    }
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto xl:px-24 p-4 bg-gradient-to-r">
        <div className="lg:pt-48 pt-12 pb-5 flex flex-col items-center justify-center">
          <div className="text-center px-4 space-y-7">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
              Items Added to the
              <span className="text-red-600 pl-5">Card</span>
            </h2>
          </div>
        </div>

        {/* table */}
        {carditems.map((items) => (
          <div key={items.id}>
            <div className="">
              <table className="table">
                {/* head */}
                <thead className="bg-red-600 text-white">
                  <tr>
                    <th>No.</th>
                    <th>Food</th>
                    <th>Items Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {/* Numberofitems */}
                    <th className="lg:w-[5rem]">{items.id}</th>
                    {/* foodimage */}
                    <td className="lg:w-[20rem]">
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={items.image} alt="Avatar" />
                          </div>
                        </div>
                      </div>
                    </td>
                    {/* itemsname */}
                    <td className="lg:w-[20rem]">{items.name}</td>
                    {/* Quantity */}
                    <td className="lg:w-[15rem] flex pt-6 space-x-2">
                      <button
                        onClick={() => handleQuantityChange(items.id, -1)}
                      >
                        <FaMinus className="text-red-600" size={10} />
                      </button>
                      <p>{items.quantity}</p>
                      <button onClick={() => handleQuantityChange(items.id, 1)}>
                        <FaPlus className="text-red-600" size={10} />
                      </button>
                    </td>
                    {/* price */}
                    <th className="lg:w-[15rem]">
                      <button className="btn btn-ghost btn-xs">
                        {" "}
                        <FaRupeeSign /> {items.totalPrice}
                      </button>
                    </th>
                    {/* delete */}
                    <th className="text-red-600 w-[10rem] ">
                      <button onClick={() => handleDelete(items.id)}>
                        <MdDelete size={25} />
                      </button>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}

        {/* customer details */}
        <div className="my-12 flex flex-col md:flex-row justify-between items-start">
          <div className="space-x-3 md:w-1/2">
            <h2 className="font-bold mb-4">Customer Details</h2>
            <p>Name :- Asif Ali</p>
            <p>Email :- exaple@gmail.com</p>
          </div>

          <div className="space-x-3 md:w-1/2">
            <h2 className="font-bold mb-4">Shoping Details</h2>
            <p className="pb-2">Total items :- {carditems.length}</p>
            <div className="flex pb-2">
              Total Price :- <FaRupeeSign />
              <p>{totalPrice}</p>
            </div>

            <button
              onClick={makePayment}
              className="cursor-pointer rounded-md font-semibold overflow-hidden relative z-100 border border-red-500 group px-8 py-2"
            >
              <span className="relative z-10 text-red-500 group-hover:text-white text-xl duration-500">
                Checkout
              </span>
              <span className="absolute w-full h-full bg-red-500 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
              <span className="absolute w-full h-full bg-red-500 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddtoCard;
