import { useTransform, motion} from "framer-motion";
import img1 from "../img/img1.avif";

const HeroSection = ({ scrollYProgress }) => {
  const y = useTransform(scrollYProgress, [0, 0.33], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.33, 0], [0.6, 1]);

  return (
    <motion.div
      style={{ y, opacity, scale }}
      className=" sticky top-0 h-screen w-full flex items-center justify-center px-6 text-2xl"
    >
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="text-center md:text-left max-w-xl">
          <h1 className=" font-bold mb-4">New Release</h1>
          <p className="text-lg text-gray-200">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum quis
            esse quod atque mollitia minima soluta suscipit libero, architecto
            ipsum expedita deleniti ipsam? Nisi sed voluptas, inventore
            cupiditate porro in.
          </p>
        </div>

        <motion.img
          style={{ y, opacity, scale }}
          src={img1}
          alt="Hero"
          className="w-80 h-auto rounded"
        />
      </div>
    </motion.div>
  );
};

export default HeroSection;
