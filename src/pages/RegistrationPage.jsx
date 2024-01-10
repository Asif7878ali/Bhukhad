import React, { useState } from "react";
import Login from "../components/Login";
import axios from "axios";

const RegistrationPage = () => {

  const [formData, setFormData] = useState({
    username: '',
    image: null,
    email: '',
    password: '',
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
 
  const handleRegister = async (event) => {
    event.preventDefault();

    const { username, email, image , password } = formData;

    const formDataToSend = new FormData();
    formDataToSend.append('username', username);
    formDataToSend.append('email', email);
    formDataToSend.append('password', password);

    if (image) {
      formDataToSend.append('image', image);
    }
      console.log(formDataToSend)
        // send data to nodejs
        try {
          const registerUser = "http://localhost:7000/register";
          const responce = await axios.post(registerUser, formDataToSend);
          console.log("Node Responce", responce);
          
        } catch (error) {
          console.warn("Error during fetch:", error); 
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
                Register for a Account
              </div>
              <div className="py-4 px-8">
                <div className="flex mb-4">
                  {/* Username */}
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
                      id="username"
                      type="text"
                      placeholder="Name"
                      autoComplete=""
                      value={formData.username}
                      onChange={handleInputChange}
                    />
                
                  </div>

                  {/* Photo */}
                  <div>
                    <label htmlFor="profileImage" className="block text-sm leading-6 font-bold">
                      Profile Image
                    </label>
                    <div className="mt-2">
                      <input
                        id="profileImage"
                        name="profileImage"
                        type="file"
                        onChange={handleImageChange}
                        className="block w-full rounded-md py-1.5 text-gray-900"
                      />
                    </div>
                  </div>

                </div>

                {/* E-mail */}
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
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Your E-mail Address"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                
                </div>

                {/* Password */}
                <div className="mb-4">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>

                  <div className="relative">
                    <input
                      className="input block border border-gray-300 focus:border-pitch-black  py-3 px-3 w-full focus:outline-none "
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Password"
                      onChange={handleInputChange}
                      name="password"
                      value={formData.password}
                      autoComplete=""
                    />
                     <div className="flex space-x-1">
               <input type="checkbox" checked={showPassword} onChange={visibilityPassword} />
                 <p>Show Password</p>
               </div>
                  </div>
                

                  <p className="text-xs mt-1 text-red-600">
                    At least 8 characters
                  </p>
                </div>

                {/* Button */}
                <div className="flex items-center justify-between mt-8">
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white hover:text-black font-bold py-2 px-4 rounded-full"
                    type="submit"
                  > Save </button>
                  <p className="text-center my-4">
                    {" "}
                    I already have an account

                      <button onClick={()=>document.getElementById('my_modal_5').showModal()}
                       className="text-black hover:underline lg:ml-1 cursor-pointer text-sm font-bold">
                        Login
                      </button>
                      <Login/>
                   
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationPage;
