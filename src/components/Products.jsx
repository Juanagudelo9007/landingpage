import React from "react";
import can1 from "../img/can1.avif";

const Products = () => {
  return (
    <div className="flex  h-screen w-full ">
      <div className="flex h-full items-center flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-5 font-bold ">
          <h1>Product Name</h1>
          <img className="w-80 h-auto rounded-[6px]" src={can1} alt="" />
        </div>
        <div className="flex flex-col gap-5 font-bold ">
          <h1>Product Name</h1>
          <img className="w-80 h-auto rounded-[6px]" src={can1} alt="" />
        </div>
        <div className="flex flex-col gap-5 font-bold ">
          <h1>Product Name</h1>
          <img className="w-80 h-auto rounded-[6px]" src={can1} alt="" />
        </div>
        <div className="flex flex-col gap-5 font-bold ">
          <h1>Product Name</h1>
          <img className="w-80 h-auto rounded-[6px]" src={can1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Products;
