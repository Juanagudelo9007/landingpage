import { useRef } from "react";
import img1 from "../img/img1.avif";
import { useScroll, useTransform, motion } from "framer-motion";

const HeroSection = () => {
  const hero = useRef(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: hero,
    offset: ["start start", "end start"],
  });

  
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

 
  const y = useTransform(scrollY, [0, 600], [0, -550]);

  return (
    <motion.div
      ref={hero}
      style={{ scale, opacity, y }}
      className="h-screen w-full flex items-center justify-center px-6 text-2xl bg-amber-400"
    >
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="text-center md:text-left max-w-xl">
          <motion.h1 style={{ scale, opacity, y }} className="font-bold mb-4">
            New Release
          </motion.h1>
          <motion.p style={{ y }} className="text-lg text-gray-200">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum quis
            esse quod atque mollitia minima soluta suscipit libero, architecto
            ipsum expedita deleniti ipsam? Nisi sed voluptas, inventore
            cupiditate porro in.
          </motion.p>
        </div>

        <motion.img
          style={{ y }}
          src={img1}
          alt="Hero"
          className="w-80 h-auto rounded"
        />
      </div>
    </motion.div>
  );
};

export default HeroSection;
