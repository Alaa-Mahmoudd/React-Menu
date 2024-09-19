// eslint-disable-next-line no-unused-vars
import React from "react";

import MenuContent from "./MenuContent";
import FirstHeader from "./FirstHeader";
import ThirdHeader from "./ThirdHeader";
import Button from "./Button";
import SecondHeader from "./SecondHeader";
const Hero = () => {
  return (
    <div>
      <FirstHeader />
      <SecondHeader />
      <ThirdHeader />
      <MenuContent />
      <Button />
      <div className="border-b-8 border-yellow-500"></div>
    </div>
  );
};

export default Hero;
