import React, { forwardRef } from "react";
import { assets } from "../assets/assets";

const Work = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="my-6">
      <p className="font-bold text-2xl md:text-4xl p-4 md:p-0">Work</p>
      <div className="flex md:flex-row flex-col gap-6 p-4 justify-around items-center">
        <div className="flex md:my-5 flex-col gap-6">
          <p className="font-semibold text-lg">
            Want to get in touch. Contact me on any platform.
          </p>
          <ul className="flex justify-center gap-4">
            <li>
              <img
                className="h-12 cursor-pointer"
                src={assets.linkedin}
                alt=""
              />
            </li>
            <li>
              <img className="h-12 cursor-pointer" src={assets.github} alt="" />
            </li>
            <li>
              <img
                className="h-12 cursor-pointer"
                src={assets.instagram}
                alt=""
              />
            </li>
            <li>
              <img
                className="h-12 cursor-pointer"
                src={assets.facebook}
                alt=""
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
});

export default Work;
