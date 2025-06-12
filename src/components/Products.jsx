import React from "react";
import can1 from "../img/can1.avif";
import can from "../img/can.avif"
import coca from "../img/coca-can.avif"
import { motion } from "framer-motion";

const Products = () => {
  return (
    <div className="flex  h-screen w-full ">
      <div className="flex h-full items-center flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-5 font-bold ">
          <h1>Source-Candy</h1>
          <img className="w-80 h-auto rounded-[6px]" src={can1} alt="" />
        </div>
        <div className="flex flex-col gap-5 font-bold ">
          <h1>Guaca-lime</h1>
          <img className="w-80 h-80 rounded-[6px]" src={can} alt="" />
        </div>
        <div className="flex flex-col gap-5 font-bold ">
          <h1>Spark-Night</h1>
          <img className="w-80 h-auto rounded-[6px]" src={can1} alt="" />
        </div>
        <div className="flex flex-col gap-5 font-bold ">
          <h1>Coca-Zero</h1>
          <img className="w-80 h-auto rounded-[6px]" src={coca} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Products;
