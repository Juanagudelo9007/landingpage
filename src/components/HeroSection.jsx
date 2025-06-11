import img1 from "../img/img1.avif";

const HeroSection = () => {
  return (
    <section className="h-screen w-full flex items-center justify-center px-6 text-2xl">
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

        <img src={img1} alt="Hero" className="w-80 h-auto rounded" />
      </div>
    </section>
  );
};

export default HeroSection;
