import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomNavbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer"; // Import Footer

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer /> {/* Wrap Footer inside the main component */}
    </BrowserRouter>
  );
}

export default App;
