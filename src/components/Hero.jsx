import React from "react";
import { assets } from "../assets/assets";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="m-6">
      <div className="flex flex-col md:flex-row items-center gap-6 md:justify-between">
        <div className="flex flex-col gap-4 justify-center items-start text-3xl">
          <p>Hello There 👋,</p>
          <div>
            <span className="text-3xl font-medium">I'm a </span>
            <ReactTyped
              strings={["Software Engineer", "Web Developer", "UI/UX Designer"]}
              typeSpeed={40}
              backSpeed={50}
              loop
            >
              <span className="text-[#8a2be2] font-bold text-4xl relative">
                <span className="animate-blink absolute right-0">|</span>
              </span>
            </ReactTyped>
          </div>
        </div>
        <div>
          <img className="w-56 rounded-4xl" src={assets.profile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
