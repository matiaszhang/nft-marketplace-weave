import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

export default function NftDetails() {
  return (
    <div>
      <Navbar />
      <div
        className="bg-gradient-to-r from-fuchsia-900
         to-slate-950"
      >
        <div>
          <div className="">
            <img src="" alt="nftImage" />
          </div>
          {/* flex this item */}

          <div className="">
            <h2 className="">TechUniverse</h2>
            <p className="">Description</p>
            <p></p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
