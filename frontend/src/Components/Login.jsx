import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast'

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();


  // Submit handler function
  const onSubmit = async (data) => {
    console.log(data);
        const userInfo ={
            email:data.email,
            password:data.password
        }
       await axios.post("http://localhost:4001/user/login",userInfo)
        .then((res)=>{
            console.log(res.data);
            if(res.data){
                toast.success('Login Successfull'); 
                document.getElementById("my_modal_5").close();
                setTimeout(()=>{
                localStorage.setItem("Users",JSON.stringify(res.data.user));//to authenticate user
                 navigate('/')
                  window.location.reload();
                },2000)
                }
            }).catch((err)=>{
            if(err.response){
                console.log(err);
                toast.error("Error:"+err.response.data.message);
                setTimeout(()=>{},2000);
            }
        })
  };

  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Login</h3>
          <p className="py-2">Press ESC key or click the button below to close</p>

          {/* Form container with reduced spacing */}
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start gap-2">
            {/* Email Input */}
            <div className="w-72">
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: "Email is required" })} // Register input field with validation
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>} {/* Error message */}
            </div>

            {/* Password Input */}
            <div className="w-72">
              <label className="block text-gray-700 font-medium">Password</label>
              <input
                className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                type="password"
                placeholder="Enter your password"
                {...register("password", { required: "Password is required" })} // Register password field with validation
              />
              {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>} {/* Error message */}
            </div>

            <div className="flex gap-8 mt-4">
              <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700">Login
              </button>
              <p>Not registered?{" "}
                <Link to='/signup'>
                  <span className='underline text-blue-500 cursor-pointer'>Signup</span>
                </Link>
              </p>
            </div>
          </form>

          {/* Close button aligned bottom-right */}
          <div className="modal-action justify-end">
            <button className="btn" onClick={() => document.getElementById("my_modal_5").close()}>
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
