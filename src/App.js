import React from 'react';
import Navbar from "./component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Services from './component/Services';
import Footer from './component/Footer';
import Contact from './component/Contact';
import About from './component/About';

function App() {
  return (
 <>
<BrowserRouter>
<Navbar/>
<Routes>
<Route path="/home" element={<Home/>}/>
<Route path="/services" element={<Services/>}/>
<Route path="/Contact" element={<Contact/>}/>
<Route path="/about" element={<About/>}/>
</Routes>
<Footer/>
</BrowserRouter>
 </>
  );
}

export default App;
