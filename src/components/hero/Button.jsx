// eslint-disable-next-line no-unused-vars
import React from "react";

const Button = () => {
  return (
    <div className="flex justify-center text-center items-center">
      <div>
        <p className="text-black tracking-wide">We are open until 22.00</p>
        <button className="bg-yellow-500 p-3 mb-3 mt-3 text-black  hover:bg-yellow-300 ">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Button;
