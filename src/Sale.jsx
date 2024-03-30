import { Slider } from "@mui/material";
import React from "react";
import superr from "./assets/super.png";
import gul from "./assets/image1.png";
import icon1 from "./assets/icon1.svg";
import imege3 from "./assets/image3.png";
import imege4 from "./assets/image4.png";
import imege8 from "./assets/image8.png";
import imege10 from "./assets/image10.png";
import imege11 from "./assets/image11.png";
import imege12 from "./assets/01.png";
import imege13 from "./assets/02.png";
import imege14 from "./assets/03.png";
import imege15 from "./assets/04.png";

const Sale = () => {
  return (
    <div>
      <main>
        <div className=" container px-10">
          <div className=" flex">
            <div>
              <div className=" h-[550px] chaptaraf w-[310px]  bg-[#F6F6F6]">
                <div className=" w-[268px] h-[383px] pl-4 pr-6 pt-3">
                  <h2 className=" w-[93px] font-bold">Categories</h2>
                  <div className=" flex justify-between ">
                    <h2 className=" text-green-400">House Plants</h2>
                    <h2 className=" text-green-300">(33)</h2>
                  </div>
                  <div className=" flex justify-between ">
                    <h2 className="">Potter Plants</h2>
                    <h2 className="">(12)</h2>
                  </div>
                  <div className=" flex justify-between ">
                    <h2 className="">Seeds</h2>
                    <h2 className="">(65)</h2>
                  </div>
                  <div className=" flex justify-between">
                    <h2 className=" ">Small Plants</h2>
                    <h2 className=" ">(39)</h2>
                  </div>
                  <div className=" flex justify-between ">
                    <h2 className=" ">Big Plants</h2>
                    <h2 className=" ">(23)</h2>
                  </div>
                  <div className=" flex justify-between ">
                    <h2 className="">Succulents</h2>
                    <h2 className="">(17)</h2>
                  </div>
                  <div className=" flex justify-between ">
                    <h2 className="">Trerrariums</h2>
                    <h2 className="">(19)</h2>
                  </div>
                  <div className=" flex justify-between ">
                    <h2 className=" ">Gardening</h2>
                    <h2 className=" ">(13)</h2>
                  </div>
                  <div className=" flex justify-between ">
                    <h2 className=" ">Accessories</h2>
                    <h2 className=" ">(18)</h2>
                  </div>
                  <div>
                    <h1 className=" mt-6 text-2xl font-bold">Price Range</h1>
                    <div className=" text-green-400 mt-4 w-[150px]">
                      <Slider
                        defaultValue={50}
                        color="green"
                        aria-label="Default"
                        valueLabelDisplay="auto"
                      />
                    </div>
                    <span className=" flex gap-2">
                      <h2>Price:</h2>
                      <span className=" text-green-300 font-medium">
                        $39 - $1230
                      </span>
                    </span>
                    <div className=" mt-[46px]">
                      <h2 className=" font-bold mb-3">Size</h2>
                      <div className=" flex justify-between ">
                        <h2 className=" ">Small</h2>
                        <h2 className=" ">(119)</h2>
                      </div>{" "}
                      <div className=" flex justify-between ">
                        <h2 className=" ">Medium</h2>
                        <h2 className=" ">(86)</h2>
                      </div>
                      <div className=" flex justify-between ">
                        <h2 className=" ">Large</h2>
                        <h2 className=" ">(78)</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" mt-100 bg-[#EEF6F0] w-[310px]">
                <img className=" px-4" src={superr} alt="" />
                <h2 className=" px-4 font-bold text-2xl">UP TO 75% OFF</h2>
                <img className=" px-4 bg-inherit" src={gul} alt="" />
              </div>
            </div>
            <div className=" ong taraf ml-6">
              <div className=" flex justify-between w-[1008px]">
                <ul className=" flex gap-6">
                  <li className=" text-green-300">All Plants</li>
                  <li>New Arrials</li>
                  <li>Sale</li>
                </ul>
                <div className=" flex">
                  <h2>Short by:</h2>
                  <h2>Default sorting</h2>
                  <img src={icon1} alt="" />
                </div>
              </div>
              <div className=" grid grid-cols-3 gap-20 mt-7">
                <div>
                  <div className=" w-[258px] h-[280px] bg-[#FBFBFB]">
                    <img
                      className=" items-center flex px-1 "
                      src={imege3}
                      alt="gul"
                    />
                  </div>
                  <h2>Barberton Daisy</h2>
                  <p className=" text-green-300">$119.00</p>
                </div>
                <div>
                  <div className=" w-[258px] h-[280px] bg-[#FBFBFB]">
                    <img
                      className=" items-center flex px-1 "
                      src={imege4}
                      alt="gul"
                    />
                  </div>
                  <h2>Barberton Daisy</h2>
                  <p className=" text-green-300">$119.00</p>
                </div>
                <div>
                  <div className=" w-[258px] h-[280px] bg-[#FBFBFB]">
                    <img
                      className=" items-center flex px-1 "
                      src={imege3}
                      alt="gul"
                    />
                  </div>
                  <h2>Barberton Daisy</h2>
                  <p className=" text-green-300">$119.00</p>
                </div>
                <div>
                  <div className=" w-[258px] h-[280px] bg-[#FBFBFB]">
                    <img
                      className=" items-center flex px-1 "
                      src={imege3}
                      alt="gul"
                    />
                  </div>
                  <h2>Barberton Daisy</h2>
                  <p className=" text-green-300">$119.00</p>
                </div>
                <div>
                  <div className=" w-[258px] h-[280px] bg-[#FBFBFB]">
                    <img
                      className=" items-center flex px-1 "
                      src={imege4}
                      alt="gul"
                    />
                  </div>
                  <h2>Barberton Daisy</h2>
                  <p className=" text-green-300">$119.00</p>
                </div>
                <div>
                  <div className=" w-[258px] h-[280px] bg-[#FBFBFB]">
                    <img
                      className=" items-center flex px-1 "
                      src={imege8}
                      alt="gul"
                    />
                  </div>
                  <h2>Barberton Daisy</h2>
                  <p className=" text-green-300">$119.00</p>
                </div>
                <div>
                  <div className=" w-[258px] h-[280px] bg-[#FBFBFB]">
                    <img
                      className=" items-center flex px-1 "
                      src={imege3}
                      alt="gul"
                    />
                  </div>
                  <h2>Barberton Daisy</h2>
                  <p className=" text-green-300">$119.00</p>
                </div>
                <div>
                  <div className=" w-[258px] h-[280px] bg-[#FBFBFB]">
                    <img
                      className=" items-center flex px-1 "
                      src={imege4}
                      alt="gul"
                    />
                  </div>
                  <h2>Barberton Daisy</h2>
                  <p className=" text-green-300">$119.00</p>
                </div>
                <div>
                  <div className=" w-[258px] h-[280px] bg-[#FBFBFB]">
                    <img
                      className=" items-center flex px-1 "
                      src={imege8}
                      alt="gul"
                    />
                  </div>
                  <h2>Barberton Daisy</h2>
                  <p className=" text-green-300">$119.00</p>
                </div>
              </div>
              <div className=" flex mt-7 justify-end gap-3">
                <h2 className=" border p-2 hover:bg-green-300 rounded w-6">
                  1
                </h2>
                <h2 className=" border p-2 hover:bg-green-300  rounded w-6">
                  2
                </h2>
                <h2 className=" border p-2  hover:bg-green-300 rounded w-6">
                  3
                </h2>
                <h2 className=" border p-2 hover:bg-green-300 rounded w-6">
                  4
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex mt-10 justify-between container px-20">
          <div className=" items-center w-[586px] flex">
            <img className=" w-[292px] h-[292px]" src={imege10} alt="" />
            <span>
              <h1 className=" w-[150px ] text-2xl font-bold">
                Summer cactus & succulents
              </h1>
              <p className=" w-[292px]">
                We are an online plant shop offering a wide range of cheap and
                trendy plants
              </p>
              <span className=" ml-[150px]">
                <button className=" px-6 mt-5 py-2 bg-green-300 rounded">
                  Find More
                </button>
              </span>
            </span>
          </div>{" "}
          <div className=" items-center w-[586px] flex">
            <img className=" w-[292px] h-[292px]" src={imege11} alt="" />
            <span>
              <h1 className=" w-[150px ] text-2xl font-bold">
                Styling Trends & much more{" "}
              </h1>
              <p className=" w-[292px]">
                We are an online plant shop offering a wide range of cheap and
                trendy plants
              </p>
              <span className=" ml-[150px]">
                <button className=" px-6 mt-5 py-2 bg-green-300 rounded">
                  Find More
                </button>
              </span>
            </span>
          </div>
        </div>
      </main>
      <main className=" container px-20">
        <div>
          <h1 className=" w-[209px] mx-auto font-bold text-2xl mt-[130px]">
            Our Blog Posts
          </h1>
          <p className=" w-[557px] mx-auto mb-3">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>
        <div className=" mb-[135px] flex gap-10 container justify-between mt-10">
          <div>
            <img src={imege12} alt="" />
            <p className=" text-green-300">September 12 I Read in 6 minutes</p>
            <h1 className=" text- font-bold w-[179px]">
              Cactus & Succulent Care Tips
            </h1>
            <p className=" w-[242px]">
              Cacti are succulents are easy care plants for any home or patio.{" "}
            </p>
            <h2>Read More</h2>
          </div>
          <div>
            <img src={imege13} alt="" />
            <p className=" text-green-300">September 12 I Read in 6 minutes</p>
            <h1 className=" text- font-bold w-[179px]">
              Cactus & Succulent Care Tips
            </h1>
            <p className=" w-[242px]">
              Cacti are succulents are easy care plants for any home or patio.{" "}
            </p>
            <h2>Read More</h2>
          </div>
          <div>
            <img src={imege14} alt="" />
            <p className=" text-green-300">September 12 I Read in 6 minutes</p>
            <h1 className=" text- font-bold w-[179px]">
              Cactus & Succulent Care Tips
            </h1>
            <p className=" w-[242px]">
              Cacti are succulents are easy care plants for any home or patio.{" "}
            </p>
            <h2>Read More</h2>
          </div>
          <div>
            <img src={imege15} alt="" />
            <p className=" text-green-300">September 12 I Read in 6 minutes</p>
            <h1 className=" text- font-bold w-[179px]">
              Cactus & Succulent Care Tips
            </h1>
            <p className=" w-[242px]">
              Cacti are succulents are easy care plants for any home or patio.{" "}
            </p>
            <h2>Read More</h2>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Sale;
