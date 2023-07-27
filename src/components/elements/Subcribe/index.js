import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Subscriber() {
  const [address, setAddress] = useState("");

  const handleChange = (e) => {
    setAddress(e.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (address.trim() === "") {
      toast.error("Please enter an email address");
      return;
    }

    const isValidEmail = address.includes("@") && address.includes(".com");

    if (isValidEmail) {
      try {
        // Send email using emailjs
        await emailjs.send(
          "service_1v8l5j4",
          "template_twj7zn9",
          {
            to_email: "devkoxy@gmail.com",
            from_name: address,
            message: "Hello, i am a subscriber from weaveDB!",
          },
          "EK04mlc-t5tm-hZjF"
        );

        // Reset form field
        setAddress("");

        // Display success message or perform any other actions
        toast.success("Subscription added successfully!");
      } catch (error) {
        console.error("Error adding email:", error);
        // Display error message or perform any other error handling
        toast.error("Error adding. Please try again later.");
      }
    } else {
      toast.error("Please add a valid email");
    }
  };

  return (
    <div>
      <div className="px-8 py-[120px] container mx-auto">
        <h2 className="text-center text-white text-[23px] sm:text-[44px] font-bold leading-10">
          Subscribe to our mailing list
        </h2>
        <p className="pt-[32px] text-center text-white text-opacity-80  sm:text-[18px] font-normal leading-7">
          Stay informed about the latest feature releases, NFT drops, and
          valuable tips <br /> and tricks for navigating the WeaveNFT
          Marketplace. 
        </p>
        <form
          onSubmit={handleFormSubmit}
          className="flex justify-center align-center pt-[30px]"
        >
          <div className="flex">
            <input
              type="text"
              className="mr-2 px-[10px] sm:px-4 py-2 border 
            border-gray-300 rounded-l-md 
            focus:outline-none focus:border-blue-500"
              placeholder="Email Address"
              value={address}
              onChange={handleChange}
            />
            <button
              className="px-2 sm:px-4 py-2 bg-gradient-to-br 
            from-pink-700 to-violet-950 text-white
            rounded-r-md hover:bg-blue-600 
            focus:outline-none"
              type="submit"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
