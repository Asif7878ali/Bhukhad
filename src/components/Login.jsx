import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import axios from "axios";
import Swal from 'sweetalert2';
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import { addLoginUsers } from "../slices/UserdataSlices";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  // const dispatch = useDispatch()
  const navigate = useNavigate();
  // setInitialState
  const emptyValues = {
    email: "",
    password: "",
  };
  //setValidation
  const regSchema = Yup.object({
    email: Yup.string()
      .email("Enter a Valid E-mail")
      .required("E-mail is Required")
      .test("is-gmail", "Email domain must be @gmail.com", (value) => {
        if (value) {
          return value.endsWith("@gmail.com");
        }
        return false;
      }),
    password: Yup.string()
      .matches(
        /^(?=.{3,})/,
        "Password must meet the criteria"
      )
      .required("Please Enter Valid Password"),
  });

  const visibilityPassword = () => {
    setShowPassword(!showPassword);
  };

  //Submit Form
  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: emptyValues,
      validationSchema: regSchema,
      onSubmit: async (values, action) => {
        action.resetForm();
        console.log("React Data", values);

         // send data to nodejs
         try {
          const url = "http://localhost:7000/login";
          const responce = await axios.post(url, values);
          console.log("Node Responce", responce);
          const { token} = responce.data;  
          sessionStorage.setItem('token',token)
          navigate("/aboutus");
          
        } catch (error) {
          console.warn("Error during fetch:", error); 
          const {message} = error.response.data
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: message,
            showConfirmButton: false,
            timer: 1500
          });
        }
      },
    });

  return (
    <>

<dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
      <div className="modal-box">
        <div className="modal-action flex flex-col justify-center mt-0">
          <form className="card-body" method="dialog"  onSubmit={handleSubmit}>
            <h3 className="font-bold text-lg">Please Login!</h3>

            {/* email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input className="input input-bordered"
                     type="email"
                     name="email"
                     id="email"
                     placeholder="Enter E-mail"
                     autoComplete=""
                     required
                     value={values.email}
                     onBlur={handleBlur}
                     onChange={handleChange} />
               {errors.email && touched.email ? (
                    <p className="text-red-600">{errors.email}</p>
                  ) : null}
            </div>

            {/* password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input  className="input input-bordered" type={showPassword ? "text" : "password"} name="password" id="password"
                      placeholder="••••••••"  autoComplete="" required value={values.password}
                      onBlur={handleBlur} onChange={handleChange}/>
                  {errors.password && touched.password ? (
                    <p className="text-red-600">{errors.password}</p>
                  ) : null}
                  {/* show password */}
                  <div className="flex space-x-1">
               <input type="checkbox" checked={showPassword} onChange={visibilityPassword} />
                 <p>Show Password</p>
               </div>
                
              <div className="label mt-1">
                <p className="label-text-alt link link-hover">
                  Forgot password?
                </p>
              </div>
            </div>

         
            {/* login btn */}
            <div className="form-control mt-4">
                 <button onClick={() => document.getElementById("my_modal_5").close()} type="submit"
                  className="btn bg-red-600 hover:bg-red-700 text-white hover:text-black">
                     Login
                 </button>
            </div>

            <span className="text-center my-2 flex">
            Don’t have an account yet?
            <Link to='/registration'>
            <button  onClick={() => document.getElementById("my_modal_5").close()}
             className="font-bold text-blue-600 underline">Signin</button>
            </Link>
            </span>

            <button 
            htmlFor="my_modal_5"
            onClick={() => document.getElementById("my_modal_5").close()}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >✕</button>
          </form>

          {/* social sign in */}
          <div className="text-center space-x-3 mb-5">
            <button className="btn btn-circle hover:bg-red-600 hover:text-white">
              <FaGoogle />
            </button>
            <button className="btn btn-circle hover:bg-red-600 hover:text-white">
              <FaFacebookF />
            </button>
            <button className="btn btn-circle hover:bg-red-600 hover:text-white">
            <FaGithub />
            </button>
          </div>
        </div>
      </div>
    </dialog>
    
    </>
  );
};

export default Login;
