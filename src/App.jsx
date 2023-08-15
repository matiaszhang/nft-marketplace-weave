import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "pages/Home";
import About from "pages/About";
import Create from "pages/Create";
import Navbar from "components/Navbar";
import { NFTDetails, detailsLoader } from "pages/Details";
import Artist from "pages/Artist";
import Explore from "pages/Explore";
import Footer from "components/Footer";
import { useState,  useEffect } from "react";


import "./App.css";
import Preloader from "components/pre";

export default function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);


  
  


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/explore/nft/:tokenID" loader={detailsLoader} element={<NFTDetails />} />
        <Route path="/explore/Artist" element={<Artist />} />
        <Route path="/explore" element={<Explore />} />
      </Route>
    )
  );

  return (
    <div className="app">
       {load ? <Preloader /> : null}
       <div className={`${load ? 'hidden' : ''}`}>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

const Root = () => {
  return (
    <div className="flex flex-col h-full overflow-auto">
      <Navbar />
      <div className="main bg-[#130B2B]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
