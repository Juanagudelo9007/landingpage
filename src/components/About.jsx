import { useTransform, useScroll, motion } from "framer-motion";
import React, { useRef } from "react";

const About = () => {
  const about = useRef();
  const { scrollY } = useScroll({
    target: about,
    offset: ["start center", "end start"],
  });

  const y = useTransform(scrollY, [0, 500], [0, -500])

  return (
    <motion.div 
      ref={about}
    className="bg-white text-2xl md:text-4xl text-black h-screen w-full flex justify-center px-6">
      <div className="h-full flex flex-col md:flex-row items-center gap-8">
        <motion.h1 
        style={{y}}
        className="font-extrabold">
          About Us
        </motion.h1>
        <p className="text-2xl md:text-3xl font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero rem
          voluptates fugit tenetur reprehenderit harum, doloremque iure...
        </p>
      </div>
    </motion.div>
  );
};

export default About;
