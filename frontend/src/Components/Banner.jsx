import axios from 'axios';
import React, { useState } from 'react';

function Banner() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!email) return;

        setLoading(true);
        try {
            // Send the email to your backend to trigger the email
            const response = await axios.post("http://localhost:4001/send-email",{
                email:email
            });

            if (response.data.success) {
                setResponseMessage('Email sent successfully!');
            } else {
                setResponseMessage('There was an error sending the email.');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setResponseMessage('An error occurred. Please try again.');
        }
        setLoading(false);
    };

    return (
        <div className='max-w-screen-2xl container mx-auto px-4 flex flex-col gap-4 md:px-20 md:flex-row'>
            <div className='order-2 md:order-1 w-full md:w-1/2 mt-6 md:mt-32'>
                <div className='space-y-8'>
                    <h1 className='text-4xl font-bold'>
                        Hello, welcome here to learn something <span className='text-pink-600'>new everyday!!!</span>
                    </h1>
                    <p className='text-xl font-semibold'>
                        Free and Paid books available for you to learn<br />
                        things you are curious about.<br />
                        <span className='text-green-600'>Here, you make books your friends!!</span>
                    </p>
                    <form onSubmit={handleSubmit}>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70"
                            >
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
                                />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
                                />
                            </svg>
                            <input
                                type="email"
                                className="grow"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                        <button type="submit" className="btn btn-secondary mt-6" disabled={loading}>
                            {loading ? 'Sending...' : 'Get Started'}
                        </button>
                    </form>
                    {responseMessage && <p>{responseMessage}</p>}
                </div>
            </div>
            <div className='w-full order-1 md:order-2 md:w-1/2 mt-30'>
                <img src={"../../public/Banner.png"} className='w-100 h-100' alt="book picture" />
            </div>
        </div>
    );
}

export default Banner;
