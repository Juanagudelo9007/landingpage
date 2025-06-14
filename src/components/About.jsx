import { useTransform, useScroll, motion } from "framer-motion";
import React, { useRef } from "react";

const About = () => {
  const about = useRef();
  const { scrollY } = useScroll({
    target: about,
    offset: ["start center", "end start"],
  });

const yContainer = useTransform(scrollY, [0, 700], [0, -700]);
const yTitle = useTransform(scrollY, [0, 600], [0, -600]);
const  yText = useTransform(scrollY, [0, 700], [0, -700]);

  return (
    <motion.div 
      ref={about}
      style={{y: yContainer}}
    className="bg-white text-2xl md:text-4xl text-black h-screen w-full flex justify-center px-6">
      <div className="h-full flex flex-col md:flex-row items-center gap-8">
        <motion.h1 
         style={{y: yTitle}}
        className="font-extrabold">
          About Us
        </motion.h1>
        <motion.p 
          style={{y:yText}}
        className="text-2xl md:text-3xl font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero rem
          voluptates fugit tenetur reprehenderit harum, doloremque iure...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default About;
