import React from "react";
import { Carousel } from "react-responsive-carousel";
import img2 from "./assets/imgg.png";

const Hero = () => {
  return (
    <div className=" px-10 mt-16">
      <div className=" flex justify-between items-center">
        <div>
          <p>Welcome to GreenShop</p>
          <h1 className=" text-6xl font-bold w-[530px]">
            Let’s Make A Better <span className=" text-green-600">Planet</span>
          </h1>
          <p className=" w-[550px] mt-2">
            We are an online plant shop offering a wide range of cheap and
            trendy plants. Use our plants to create an unique Urban Jungle.
            Order your favorite plants!
          </p>
          <button className=" py-2 px-5  bg-green-500 rounded">SHOP NOW</button>
        </div>
        <div className=" flex justify-end">
          <img
            className=" ml-[px] h-[100px] mt-[330px] w-[200px]"
            src={img2}
            alt=""
          />
          <img className=" w-[500px]" src={img2} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
