import React from "react";
import "../index.css";
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function About() {
  const [expanded, setExpanded] = useState(false);

  function toggleExpanded() {
    setExpanded(!expanded);
  }

  return (
    <>
      <div>
        <Navbar />
        <div
          className="pb-[60px] pt-[10px] bg-gradient-to-r from-fuchsia-900
         to-slate-950 "
        >
          <h1
            className="text-white text-[40px] sm:text-[54px] flex flex-col items-center 
          justify-center font-bold"
          >
            ABOUT US
          </h1>
        </div>

        <div className=" bg-zinc-300 bg-opacity-70">
          <div className=" flex flex-col items-center justify-center py-[88px] ">
            <img
              src="../images/logoHeader.png"
              alt="logoHeader "
              className="p-[50px] md:p-[0]"
            />
          </div>
        </div>

        {/** weavenft mission */}
        <div
          className="bg-gradient-to-r from-slate-900
         to-slate-950 px-[50px] sm:px-[100px] grid grid-cols-1 
         md:flex md:flex-row gap-4"
        >
          <div className="md:flex md:flex-row md:space-x-10">
            <div
              className="text-white text-[32px] font-bold 
           "
            >
              <h3 className=" md:w-[419px] md:h-[88px] mt-[100px] mb-[50px] text-[20px] sm:text-[36px]">
                WeaveNFT Marketplace <br /> mission
              </h3>
            </div>
            <div
              className="mb-[100px] 
            "
            >
              <p
                className=" text-white md:mt-[100px] text-[15px] sm:text-[20px] flex flex-wrap
                 font-normal "
              >
                Our aim is to empower artists and creators by providing a
                website that enables them to mint, sell, and trade NFTs
                directly, eliminating the need for intermediaries. Our mission{" "}
                is to foster a decentralized and inclusive NFT ecosystem, where
                artists have full control over their digital creations and can
                connect directly with their audience.
              </p>
              <p
                className={`text ${
                  expanded ? "max-h-full" : "hidden"
                } text-white flex flex-wrap
                 text-[15px] sm:text-[20px] font-normal mt-5`}
              >
                WeaveNFT Marketplace is dedicated to promoting artistic freedom
                and supporting the exploration of new digital frontiers. Our
                mission is to provide a platform that empowers artists and
                creators to unleash their creativity, push the boundaries of
                digital art, and redefine the concept of ownership in the
                digital era. By removing barriers and intermediaries, we aim to
                democratize the NFT space and create a platform where artists
                can fully express their artistic vision, connect directly with
                their audience, and establish meaningful relationships within
                the NFT community.
              </p>
              <button
                className={`text-blue-500 font-medium ${
                  expanded ? "hidden" : "visible"
                }`}
                onClick={toggleExpanded}
              >
                See More
              </button>
            </div>
          </div>
        </div>

        {/** what is weavenft*/}
        <div
          className="bg-gradient-to-r from-slate-950
         to-slate-950 px-[50px] sm:px-[100px] grid grid-cols-1 
         md:flex md:flex-row gap-4"
        >
          <div className="md:flex md:flex-row md:space-x-10">
            <div
              className="text-white text-[32px] font-bold 
           "
            >
              <h3 className=" md:w-[419px] md:h-[88px] mt-[100px] mb-[50px] text-[20px] sm:text-[36px]">
                What is WeaveNFT <br /> Marketplace
              </h3>
            </div>
            <div
              className="mb-[100px] 
            "
            >
              <p
                className=" text-white md:mt-[100px] text-[15px] sm:text-[20px] flex flex-wrap
                 font-normal "
              >
                Our aim is to empower artists and creators by providing a
                website that enables them to mint, sell, and trade NFTs
                directly, eliminating the need for intermediaries. Our mission{" "}
                is to foster a decentralized and inclusive NFT ecosystem, where
                artists have full control over their digital creations and can
                connect directly with their audience.
              </p>
              <p
                className={`text ${
                  expanded ? "max-h-full" : "hidden"
                } text-white flex flex-wrap
                 font-normal mt-5 text-[15px] sm:text-[20px]`}
              >
                Our aim is to empower artists and creators by providing a
                website that enables them to mint, sell, and trade NFTs
                directly, eliminating the need for intermediaries. Our mission{" "}
                is to foster a decentralized and inclusive NFT ecosystem, where
                artists have full control over their digital creations and can
                connect directly with their audience.
              </p>
              <button
                className={`text-blue-500 font-medium ${
                  expanded ? "hidden" : "visible"
                }`}
                onClick={toggleExpanded}
              >
                See More
              </button>
            </div>
          </div>
        </div>

        {/** weavenft corePrinciples*/}
        <div
          className="bg-gradient-to-r from-slate-900
         to-slate-950 px-[50px] sm:px-[100px] grid grid-cols-1 
         md:flex md:flex-row gap-4"
        >
          <div className="md:flex md:flex-row md:space-x-10">
            <div
              className="text-white text-[32px] font-bold 
           "
            >
              <h3 className=" md:w-[419px] md:h-[88px] mt-[100px] mb-[50px] text-[20px] sm:text-[36px]">
                WeaveNFT Marketplace <br /> Core principles
              </h3>
            </div>
            <div
              className="mb-[100px] 
            "
            >
              <p
                className=" text-white md:mt-[100px] text-[15px] sm:text-[20px] flex flex-wrap
                 font-normal "
              >
                <span className="font-bold">Empowerment:</span> We believe in
                empowering artists and creators to take control of their own
                work. NFT Direct provides them with the tools and platform to
                independently mint, showcase, and sell their NFTs, enabling them
                to retain ownership and maximize the value of their digital
                creations. <br /> <br />{" "}
                <span className="font-bold">Decentralization:</span> We are
                committed to fostering a decentralized NFT ecosystem. By
                eliminating intermediaries and leveraging blockchain
                technology,WeaveNFT Marketplace ensures transparent and secure
                transactions, without relying on centralized platforms or
                gatekeepers. Artists and collectors have direct ownership and
                control over their digital assets. <br /> <br />
                <span className="font-bold">Accessibility: </span>We strive to
                make NFTs accessible to artists and collectors of all
                backgrounds. Our website is designed to be intuitive,
                user-friendly, and inclusive, enabling artists with varying
                levels of technical expertise to participate in the NFT
                marketplace and reach a global audience.
              </p>
              <p
                className={`text ${
                  expanded ? "max-h-full" : "hidden"
                } text-white flex flex-wrap
                 font-normal mt-5 text-[15px] sm:text-[20px]`}
              >
                <span className="font-bold">Community-driven:</span> We believe
                in the power of community. NFT Direct encourages collaboration,
                engagement, and meaningful connections between artists and
                collectors. We provide social features, forums, and networking
                opportunities to foster a vibrant community where artists can
                gain recognition, gather feedback, and connect with like-minded
                individuals.
                <br /> <br />
                <span className="font-bold">Transparency and Fairness: </span>
                Transparency and fairness are at the core of our platform. We
                prioritize clear and transparent information regarding fees,
                royalties, and ownership rights. We aim to create a level
                playing field for all participants, ensuring fair compensation
                for artists and fostering trust within the community. <br />{" "}
                <br />
                <span className="font-bold">
                  Innovation and Sustainability:
                </span>{" "}
                NFT Direct is committed to fostering innovation in the NFT
                space. We continuously explore emerging technologies, such as
                environmentally friendly blockchain solutions, to minimize the
                ecological impact of NFT creation and transactions. We aim to
                contribute to the long-term sustainability of the NFT ecosystem.
              </p>
              <button
                className={`text-blue-500 font-medium ${
                  expanded ? "hidden" : "visible"
                }`}
                onClick={toggleExpanded}
              >
                See More
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default About;
