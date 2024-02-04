import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    image: null,
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleImageChange = (event) => {
    setFormData({ ...formData, image: event.target.files[0] });
  };

  const [showPassword, setShowPassword] = useState(false);

  const visibilityPassword = () => {
    setShowPassword(!showPassword);
  };
   const navigate = useNavigate()
  const handleRegister = async (event) => {
    event.preventDefault();
  
    const { username, email, image, password } = formData;
  
    const formDataToSend = new FormData();
    formDataToSend.append("username", username);
    formDataToSend.append("email", email);
    formDataToSend.append("password", password);
  
    if (image) {
      formDataToSend.append("image", image);
    }
  
    try {
      const registerUser = "https://ruby-tricky-greyhound.cyclic.app/register";
      //https://ruby-tricky-greyhound.cyclic.app/register
      //http://localhost:7000/register
      const response = await axios.post(registerUser, formDataToSend);
      console.log("Node Response", response);
      const { message } = response.data;
      console.log(message)
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: message,
        showConfirmButton: false,
        timer: 1500,
      });
      
      // Reset the form fields
      setFormData({
        username: "",
        image: null,
        email: "",
        password: "",
      });
      navigate('/')
    } catch (error) {
      console.error("Error during fetch:", error);
      const { message } = error.response.data
      console.log(message)
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: message,
        showConfirmButton: false,
        timer: 1500,
      });

      // Reset the form fields
      setFormData({
        username: "",
        image: null,
        email: "",
        password: "",
      });
    }
  };
  

  return (
    <>
       <div className="w-full bg-grey-lightest pt-10">
    <div className="container mx-auto py-8">
        <div className="w-5/6 lg:w-1/2 mx-auto bg-gray-100 rounded shadow">
            <form
                className="space-y-4 md:space-y-6"
                action=""
                onSubmit={handleRegister}
            >
                <div className="py-4 px-8 text-black text-xl border-b border-grey-lighter">
                    Register for an Account
                </div>
                <div className="py-4 px-8">
                    <div className="flex mb-4">
                        <div className="w-1/2 mr-1">
                            <label
                                className="block text-grey-darker text-sm font-bold mb-2"
                                htmlFor="username"
                            >
                                UserName
                            </label>
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                name="username"
                                id="name"
                                type="text"
                                placeholder="Name"
                                autoComplete=""
                                value={formData.username}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="profileImage"
                                className="block text-sm leading-6 font-bold"
                            >
                                Profile Image
                            </label>
                            <div className="mt-2">
                                <input
                                    id="profile"
                                    name="profileImage"
                                    type="file"
                                    onChange={handleImageChange}
                                    className="block w-full rounded-md py-1.5 text-gray-900"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-grey-darker text-sm font-bold mb-2"
                            htmlFor="email"
                        >
                            Email Address
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                            autoComplete=""
                            id="E-mail"
                            type="email"
                            name="email"
                            placeholder="Your E-mail Address"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-grey-darker text-sm font-bold mb-2"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                className="input block border border-gray-300 focus:border-pitch-black py-3 px-3 w-full focus:outline-none "
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter Password"
                                onChange={handleInputChange}
                                name="password"
                                id="pass"
                                value={formData.password}
                                autoComplete=""
                            />
                            <div className="flex space-x-1">
                                <input
                                    type="checkbox"
                                    checked={showPassword}
                                    onChange={visibilityPassword}
                                />
                                <p>Show Password</p>
                            </div>
                        </div>
                        <p className="text-xs mt-1 text-red-600">
                            At least 8 characters
                        </p>
                    </div>
                    <div className="flex items-center justify-between mt-8">
                        <button
                            className="bg-red-500 hover:bg-red-700 text-white hover:text-black font-bold py-2 px-4 rounded-full"
                            type="submit">Save</button>
                        <p className="text-center my-4">
                            I already have an account
                             <Link to='/'>
                            <button className="text-black hover:underline lg:ml-1 cursor-pointer text-sm font-bold">Login</button>
                            </Link>
                           
                        </p>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>;


    </>
  );
};

export default RegistrationPage;
