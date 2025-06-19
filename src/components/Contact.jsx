import React, { forwardRef } from "react";
import { assets } from "../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Contact = forwardRef((props, ref) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/My Resume.pdf"; // path to your resume file in the public folder
    link.download = "Resume.pdf"; // Name of the file after download
    link.click();
  };
  return (
    <div ref={ref} className="my-6 p-4 md:py-4">
      <p className="font-bold text-2xl md:text-4xl md:p-0">Contact</p>
      <div className="flex md:flex-row flex-col gap-6 py-4 justify-around items-center">
        <div className="flex md:my-5 flex-col gap-6">
          <p className="font-semibold text-lg">
            Want to get in touch. Contact me on any platform.
          </p>
          <ul className="flex justify-center gap-4">
            <li
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/rounak-gupta-256536259/",
                  "_blank"
                )
              }
            >
              <img
                className="h-12 cursor-pointer"
                src={assets.linkedin}
                alt=""
              />
            </li>
            <li
              onClick={() =>
                window.open("https://github.com/Rounakzone6", "_blank")
              }
            >
              <img className="h-12 cursor-pointer" src={assets.github} alt="" />
            </li>
            <li
              onClick={() =>
                window.open("https://www.instagram.com/", "_blank")
              }
            >
              <img
                className="h-12 cursor-pointer"
                src={assets.instagram}
                alt=""
              />
            </li>
            <li
              onClick={() => window.open("https://www.facebook.com/", "_blank")}
            >
              <img
                className="h-12 cursor-pointer"
                src={assets.facebook}
                alt=""
              />
            </li>
          </ul>
        </div>
        <div>
          <div
            onClick={handleDownload}
            className="py-3 px-8 hover:scale-110 transition-all duration-300 text-2xl rounded-2xl cursor-pointer bg-[#7fffd4] flex items-center justify-center gap-2"
          >
            <FontAwesomeIcon icon={faDownload} />
            <p>Download Resume</p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Contact;
