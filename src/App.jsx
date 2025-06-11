import React from "react";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Products from "./components/Products";

const App = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <About />
      <Products />
    </div>
  );
};

export default App;
