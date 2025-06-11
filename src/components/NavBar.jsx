import { IoLogoGithub } from "react-icons/io";

const NavBar = () => {
  return (
    <nav className="top-0 z-50 w-screen bg-white flex p-6 justify-between">
      <div>
        <IoLogoGithub className=" w-8 h-8 text-black" />
      </div>
      <div className="flex gap-5">
        <a href="">About us</a>
        <a href="">Products</a>
        <a href="">Price</a>
        <a href="">Contact</a>
      </div>
    </nav>
  );
};

export default NavBar;
