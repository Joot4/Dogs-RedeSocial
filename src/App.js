import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";

 
function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element=  {<Home/>} />
      </Routes> 
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
