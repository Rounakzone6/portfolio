import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faHeadset,
  faLaptopCode,
  faPenToSquare,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({
  onScrollToProjects,
  onScrollToSkills,
  onScrollToWork,
  onScrollToContact,
}) => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between p-4 md:px-0 font-medium relative">
      {/* Logo */}
      <p
        onClick={() => navigate("/")}
        className="font-bold text-[#8a2be2] text-3xl cursor-pointer"
      >
        Rounak Gupta
      </p>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-lg md:text-xl">
        <li
          onClick={onScrollToProjects}
          className="flex hover:scale-110 transition-all duration-300 gap-1 items-center cursor-pointer"
        >
          <FontAwesomeIcon icon={faPenToSquare} />
          Projects
        </li>
        <li
          onClick={onScrollToSkills}
          className="flex hover:scale-110 transition-all duration-300 gap-1 items-center cursor-pointer"
        >
          <FontAwesomeIcon icon={faLaptopCode} />
          Skills
        </li>
        <li
          onClick={onScrollToWork}
          className="flex hover:scale-110 transition-all duration-300 gap-1 items-center cursor-pointer"
        >
          <FontAwesomeIcon icon={faBriefcase} />
          Work
        </li>
        <li
          onClick={onScrollToContact}
          className="flex hover:scale-110 transition-all duration-300 gap-1 items-center cursor-pointer"
        >
          <FontAwesomeIcon icon={faHeadset} />
          Contact
        </li>
      </ul>

      {/* Hamburger Icon for Small Screens */}
      <button
        onClick={() => setVisible(true)}
        className="md:hidden text-3xl text-[#8a2be2]"
      >
        &#9776;
      </button>

      {/* Sidebar menu for small screens */}
      <div
        className={`fixed top-0 right-0 h-full bg-white z-50 transition-all duration-300 ease-in-out ${
          visible ? "w-full" : "w-0"
        } overflow-hidden`}
      >
        <div className="flex flex-col text-gray-700 h-full p-5">
          {/* Close Button */}
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 text-xl cursor-pointer mb-8"
          >
            <FontAwesomeIcon icon={faX} />
            <p>Back</p>
          </div>

          {/* Sidebar Menu Items */}
          <ul className="flex flex-col gap-6 text-xl">
            <li className="flex gap-2 items-center cursor-pointer">
              <FontAwesomeIcon icon={faPenToSquare} />
              Projects
            </li>
            <li className="flex gap-2 items-center cursor-pointer">
              <FontAwesomeIcon icon={faLaptopCode} />
              Skills
            </li>
            <li className="flex gap-2 items-center cursor-pointer">
              <FontAwesomeIcon icon={faBriefcase} />
              Work
            </li>
            <li className="flex gap-2 items-center cursor-pointer">
              <FontAwesomeIcon icon={faHeadset} />
              Contact
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
