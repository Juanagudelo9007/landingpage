import React from "react";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Products from "./components/Products";
import { useScroll } from "framer-motion";
import { useRef } from "react";

const App = () => {

  const container = useRef();
  const {scrollYProgress} =  useScroll({
    target: container,
    offset: ["start start", "end end"]
  })

  return (
    <div ref={container}
    className="relative"
    >
      <NavBar scrollYProgress={scrollYProgress} />
      <HeroSection scrollYProgress={scrollYProgress} />
      <About scrollYProgress={scrollYProgress} />
      <Products scrollYProgress={scrollYProgress} />
    </div>
  );
};

export default App;
