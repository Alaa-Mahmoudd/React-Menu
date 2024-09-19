// eslint-disable-next-line no-unused-vars
import React from "react";
import img4 from "../images/pizza4.avif";
import img5 from "../images/pizza5.avif";
import img6 from "../images/pizza6.avif";

const Content2 = () => {
  return (
    <div>
      <div className="flex justify-center m-5">
        <img width={140} src={img4} alt="pizza" />
        <div className="ml-5">
          <p className="pb-3 text-black">Pizza Margherita</p>
          <p className="text-gray-400 pb-1 text-sm">
            Tomato, vegetables ,and a lot of mozerlla
          </p>
          <p className="text-black">10</p>
        </div>
      </div>

      <div className="flex justify-center m-5">
        <img width={140} src={img5} alt="pizza" />
        <div className="ml-5">
          <p className="pb-3 text-black">pizza Funghi</p>
          <p className="text-gray-400 pb-1 text-sm">
            Tomato,mozarello,mushrooms and onion
          </p>
          <p className="text-black">12</p>
        </div>
      </div>
      <div className="flex justify-center m-5">
        <img width={140} src={img6} alt="pizza" />
        <div className="ml-5">
          <p className="pb-3 text-black">pizza Prosciutto</p>
          <p className="text-gray-400 pb-1 text-sm">
            Tomato , mozarello , and burrata cheese
          </p>
          <p className="text-black">18</p>
        </div>
      </div>
    </div>
  );
};

export default Content2;
