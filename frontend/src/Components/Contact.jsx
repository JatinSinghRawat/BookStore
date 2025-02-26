import React, { useEffect } from "react";
import Login from "./Login";
import { useForm } from "react-hook-form";
import Navbar from "./Navbar";
import toast from 'react-hot-toast'

function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    useEffect(() => {
        const mode = localStorage.getItem("theme");
        if (mode === "dark") {
            document.querySelector("html").setAttribute("data-theme", "dark");
        } else {
            document.querySelector("html").setAttribute("data-theme", "light");
        }
    }, []);
    
    // Submit handler function
    const onSubmit = async (data) => {
        console.log(data); // Check the form data in the console

        // Add the access key directly to the data object
        const formData = {
            ...data,
            access_key: "" // Add your access key from web3forms
        };

        const json = JSON.stringify(formData);
        
        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json())
        .catch((err) => {
            console.log("Error in contact:", err);
            toast.error("Error: " + err.message);
        });
        
        if (res?.success) {
            console.log("Success", res);
            toast.success("Your message is received.");
        } else {
            toast.error("Something went wrong. Please try again.");
        }
    };

    return (
        <>
        <Navbar />
        <div className="flex h-45 items-center justify-center mt-60">
            <div className="border-[2px] border-gray-200 shadow-md p-5 rounded-md w-[600px]">
                <h3 className="font-bold text-lg">Contact Us</h3>

                {/* Form wrapped correctly */}
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
                            className="mt-2 w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" 
                            type="email" 
                            placeholder="Enter your email"
                            {...register("email", { required: "Email is required" })}
                        />
                        {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                    </div>

                    {/* Message Input */}
                    <div className="w-full">
                        <label className="block font-medium">Message</label>
                        <textarea 
                            className="mt-2 w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" 
                            placeholder="Type your Message"
                            {...register("message", { required: "Message is required" })}
                        />
                        {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-between items-center w-full mt-4">
                        <button type="submit" className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700">
                            Submit
                        </button>
                    </div>
                </form>

                {/* Login Modal */}
                <Login />
            </div>
        </div>
        </>
    );
}

export default Contact;
