<<<<<<< HEAD:src/App.js
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Create from "./pages/Create";
import Explore from "./pages/explore";
import Navbar from "./components/Navbar";
import {NFTDetails, detailsLoader} from "./pages/Details";
import Footer from "./components/Footer";
=======
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "pages/Home";
import About from "pages/About";
import Create from "pages/Create";
import Navbar from "components/Navbar";
import { NFTDetails, detailsLoader } from "pages/Details";
import Artist from "pages/Artist";
import Explore from "pages/Explore";
import Footer from "components/Footer";
>>>>>>> 20d77caf4d0ef5c571294208dbfcd7625c514883:src/App.jsx

import "./App.css";


export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/explore/nft/:id" loader={detailsLoader} element={<NFTDetails />} />
        <Route path="/explore/Artist" element={<Artist />} />
        <Route path="/explore" element={<Explore />} />
      </Route>
    )
  );

  return (
    <div className="app">
      <RouterProvider router={router} />
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
