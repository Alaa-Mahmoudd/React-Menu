// eslint-disable-next-line no-unused-vars
import React from "react";
import img1 from "../images/foca1.avif";
import img2 from "../images/pizza2.avif";
import img3 from "../images/pizza3.avif";
const Content = () => {
  return (
    <div>
      <div className="flex justify-center m-5">
        <img width={140} src={img1} alt="pizza" />
        <div className="ml-5">
          <p className="pb-3 text-black">Focaccia</p>
          <p className="text-gray-400 pb-1 text-sm">
            Bread With Italian Olive oli and rosemary
          </p>
          <p className="text-black">6</p>
        </div>
      </div>

      <div className="flex justify-center m-5">
        <img width={140} src={img2} alt="pizza" />
        <div className="ml-5">
          <p className="pb-3 text-black">pizza Spinaci</p>
          <p className="text-gray-400 pb-1 text-sm">
            Tomato,mozarello,Spinaci, ricotta cheese{" "}
          </p>
          <p className="text-black">12</p>
        </div>
      </div>
      <div className="flex justify-center m-5 relative">
        <div className="relative">
          <img width={140} src={img3} alt="pizza" className="block" />

          <div className="absolute inset-0 bg-gray-700 opacity-40"></div>
        </div>

        <div className="ml-5">
          <p className="pb-3 text-gray-400">pizza Salmamion</p>
          <p className="text-gray-400 pb-1 text-sm">
            Tomato, mozzarella, cheese, and pepperoni
          </p>
          <p className="text-gray-400">Sold Out</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
