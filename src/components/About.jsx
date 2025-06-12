import { useTransform, motion } from "framer-motion";
import React from "react";

const About = ({ scrollYProgress }) => {
  const x = useTransform(scrollYProgress, [0.33, 0.66], [0.3, 0]);
  

  return (
    <motion.div
      style={{ x }}
      className=" bg-white text-2xl md:text-4xl text-black h-screen w-full flex justify-center px-6"
    >
      <div className="h-full flex flex-col md:flex-row items-center gap-8">
        <h1 className="font-extrabold">About Us</h1>
        <p className="text-2xl md:text-3xl font-bold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero rem
          voluptates fugit tenetur reprehenderit harum, doloremque iure,
          necessitatibus deserunt voluptatibus mollitia repellat impedit! Porro
          molestiae, cum reprehenderit esse a quod.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
