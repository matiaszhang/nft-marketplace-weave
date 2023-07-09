import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import About from "./pages/About";
import Create from "./pages/Create";
import NftDetails from "./pages/NftDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/NtfDetails" element={<NftDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
