import React from "react";
import "../index.css";

function About() {
  return (
    <>
      <div className="flex flex-col px-4">
        <img src="./images/logo.png" alt="logo" />
        <h2 className="text-4xl font-bold">Hello</h2>
        <button class="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
          connect wallet
        </button>
      </div>
    </>
  );
}

export default About;
