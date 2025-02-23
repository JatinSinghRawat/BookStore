import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import Navbar from "./Navbar";

function Contact() {
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
    const onSubmit = (data) => {
        console.log("Form Data:", data);
    };

    return (
        <>
        <Navbar/>
        <div className="flex h-45 items-center justify-center mt-60">
            <div className="border-[2px] border-gray-200 shadow-md p-5 rounded-md w-[600px]">
                <h3 className="font-bold text-lg">Contact Us</h3>

                {/* ✅ Form wrapped correctly */}
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 mt-8">
                    {/* Name Input */}
                    <div className="w-full">
                        <label className="block font-medium">Name</label>
                        <input 
                            className="mt-2 w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" 
                            type="text" 
                            placeholder="Enter your full name"
                            {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
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
                        <label className="block font-medium">Message</label>
                        <textarea 
                            className="mt-2 w-full px-3 py-2  placeholder-gray-500 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" 
                            type="password" 
                            placeholder="Type your Message"
                            {...register("message", { required: "Message is required"})}
                        />
                        {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
                    </div>

                    {/* Signup & Login Buttons */}
                    <div className="flex justify-between items-center w-full mt-4">
                        <button type="submit" className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700">
                            Submit
                        </button>
                    </div>
                </form>

                {/* ✅ Move Login Modal Outside the Form */}
                <Login />

            </div>
        </div>
        </>
    );
}

export default Contact;
