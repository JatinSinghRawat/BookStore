import React, { useEffect } from "react";
import { Link,Navigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from 'axios'
import toast from 'react-hot-toast'

function Signup() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    

    useEffect(()=>{
    const mode = localStorage.getItem("theme");
    if(mode === "dark"){
        document.querySelector("html").setAttribute("data-theme","dark");
    }
    else{
        document.querySelector("html").setAttribute("data-theme","light");
    }
    },[])


    
    
    // Submit handler function
    const onSubmit = async (data) => {
        console.log(data);
        const userInfo ={
            fullname:data.fullname,
            email:data.email,
            password:data.password
        }
       await axios.post("http://localhost:4001/user/signup",userInfo)
        .then((res)=>{
            console.log(res.data);
            if(res.data){
                toast.success('Signup Successfull');
                <Navigate to ='/'/>
            }
            localStorage.setItem("Users",JSON.stringify(res.data.user));//to authenticate user
             // Set the user in auth context to trigger re-render and navigation
            setAuthUser(res.data.user);
        }).catch((err)=>{
            if(err.response){
                console.log(err);
                toast.error("Error:"+err.response.data.message);
            }
        })
    };

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="border-[2px] border-gray-200 shadow-md p-5 rounded-md w-[600px]">
                <h3 className="font-bold text-lg">Sign Up</h3>

                {/* ✅ Form wrapped correctly */}
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 mt-8">
                    {/* Name Input */}
                    <div className="w-full">
                        <label className="block font-medium">Name</label>
                        <input 
                            className="mt-2 w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" 
                            type="text" 
                            placeholder="Enter your full name"
                            {...register("fullname", { required: "Name is required" })}
                        />
                        {errors.fullname && <p className="text-red-500 text-xs">{errors.fullname.message}</p>}
                    </div>

                    {/* Email Input */}
                    <div className="w-full">
                        <label className="block font-medium">Email</label>
                        <input 
                            className="mt-2 w-full px-3 py-2  placeholder-gray-500 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" 
                            type="email" 
                            placeholder="Enter your email"
                            {...register("email", { required: "Email is required" })}
                        />
                        {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                    </div>

                    {/* Password Input */}
                    <div className="w-full">
                        <label className="block font-medium">Password</label>
                        <input 
                            className="mt-2 w-full px-3 py-2  placeholder-gray-500 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" 
                            type="password" 
                            placeholder="Enter your password"
                            {...register("password", { required: "Password is required"})}
                        />
                        {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
                    </div>

                    {/* Signup & Login Buttons */}
                    <div className="flex justify-between items-center w-full mt-4">
                        <button type="submit" className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700">
                            Signup
                        </button>
                        <p className="text-black">Already have an account?{" "}
                        {/* ✅ Login button (Doesn't interfere with form submission) */}
                        <button type="button" className="underline text-blue-500 cursor-pointer"
                            onClick={() => document.getElementById("my_modal_5").showModal()}>
                            Login
                        </button>
                        </p>
                    </div>
                </form>

                {/* ✅ Move Login Modal Outside the Form */}
                <Login />

                {/* Close Button */}
                <div className="flex justify-end mt-10">
                    <Link to="/"><button className="btn">Close</button></Link>                   
                </div>
            </div>
        </div>
    );
}

export default Signup;
