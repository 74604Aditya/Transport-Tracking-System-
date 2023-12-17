import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import TrackingPage from "./components/TrackingPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContactUs } from "./components/ContactUs";
import { About } from './components/About';
import { Location } from './components/Location';
import { Login } from './components/Login';
import { SignUp } from './components/SignUp';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<TrackingPage />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/location' element={<Location/>}></Route>


      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
