import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Create from "./pages/Create";
import NftDetails from "./pages/NftDetails";
import Navbar from "./components/Navbar";
import NFTDetails from "./pages/Details";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main bg-[#130B2B]">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Create" element={<Create />} />
            <Route path="/NtfDetails" element={<NftDetails />} />
            <Route path="/explore/nft" element={<NFTDetails />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
