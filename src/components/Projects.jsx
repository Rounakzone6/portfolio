import React, { forwardRef } from "react";
import { assets } from "../assets/assets";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";

const Projects = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="my-6">
      <p className="font-bold text-2xl md:text-4xl p-4 md:p-0">Projects</p>
      <div className="flex flex-col md:flex-row my-3 gap-4">
        <div>
          <p className="text-xl mb-2">ScholarNest</p>
          <div className="flex gap-3">
            <span
              onClick={() =>
                window.open(
                  "https://forever-frontend-beta-plum.vercel.app/",
                  "_blank"
                )
              }
              className="flex gap-1 px-4 py-1 items-center bg-[#7fffd4] rounded-4xl"
            >
              <FontAwesomeIcon icon={faGlobe} />
              Demo
            </span>
            <span
              onClick={() =>
                window.open(
                  "https://github.com/Rounakzone6/ScholarNest",
                  "_blank"
                )
              }
              className="flex gap-1 px-4 py-1 items-center bg-[#7fffd4] rounded-4xl"
            >
              <FontAwesomeIcon icon={faGithubAlt} />
              Github
            </span>
          </div>
          <p className="my-2">
            ScholarNest is a smart and scalable educational platform built with
            the powerful MERN stack (MongoDB, Express.js, React, Node.js). It
            provides students with an interactive learning experience — making
            academic resources, live sessions, and progress tracking available
            at their fingertips.
          </p>
          <div className="flex gap-3">
            <span className="flex gap-1 px-4 py-1 items-center bg-[#7fffd4] rounded-4xl">
              MongoDB
            </span>
            <span className="flex gap-1 px-4 py-1 items-center bg-[#7fffd4] rounded-4xl">
              Express
            </span>
            <span className="flex gap-1 px-4 py-1 items-center bg-[#7fffd4] rounded-4xl">
              React
            </span>
            <span className="flex gap-1 px-4 py-1 items-center bg-[#7fffd4] rounded-4xl">
              NodeJS
            </span>
          </div>
        </div>
        <img className="w-86" src={assets.scholarnest} alt="" />
      </div>
      <hr />
      <div className="flex flex-col md:flex-row my-3 gap-4">
        <div>
          <p className="text-xl mb-2">
            Prescripto - Hospital Management System
          </p>
          <div className="flex gap-3">
            <span
              onClick={() =>
                window.open(
                  "https://prescripto-frontend-murex.vercel.app/",
                  "_blank"
                )
              }
              className="flex gap-1 px-4 py-1 items-center bg-[#7fffd4] rounded-4xl"
            >
              <FontAwesomeIcon icon={faGlobe} />
              Demo
            </span>
            <span
              onClick={() =>
                window.open(
                  "https://github.com/Rounakzone6/Prescripto",
                  "_blank"
                )
              }
              className="flex gap-1 px-4 py-1 items-center bg-[#7fffd4] rounded-4xl"
            >
              <FontAwesomeIcon icon={faGithubAlt} />
              Github
            </span>
          </div>
          <p className="my-2">
            Prescripto is a smart hospital appointment booking and management
            system built using the MERN stack (MongoDB, Express.js, React,
            Node.js). It empowers patients to easily find doctors, book
            appointments, and manage their medical visits — all in one place,
            from any device.
          </p>
          <div className="flex gap-3">
            <span className="flex gap-1 px-4 py-1 items-center bg-[#7fffd4] rounded-4xl">
              MongoDB
            </span>
            <span className="flex gap-1 px-4 py-1 items-center bg-[#7fffd4] rounded-4xl">
              Express
            </span>
            <span className="flex gap-1 px-4 py-1 items-center bg-[#7fffd4] rounded-4xl">
              React
            </span>
            <span className="flex gap-1 px-4 py-1 items-center bg-[#7fffd4] rounded-4xl">
              NodeJS
            </span>
          </div>
        </div>
        <img className="w-86" src={assets.prescripto} alt="" />
      </div>
      <hr />
      <div className="flex flex-col md:flex-row my-3 gap-4">
        <div>
          <p className="text-xl mb-2">Forever | E-Commerce platfrom</p>
          <div className="flex gap-3">
            <span
              onClick={() =>
                window.open(
                  "https://forever-frontend-beta-plum.vercel.app/",
                  "_blank"
                )
              }
              className="flex gap-1 px-4 py-1 items-center bg-[#7fffd4] rounded-4xl"
            >
              <FontAwesomeIcon icon={faGlobe} />
              Demo
            </span>
            <span
              onClick={() =>
                window.open(
                  "https://github.com/Rounakzone6/forever-E-Commerce-platform",
                  "_blank"
                )
              }
              className="flex gap-1 px-4 py-1 items-center bg-[#7fffd4] rounded-4xl"
            >
              <FontAwesomeIcon icon={faGithubAlt} />
              Github
            </span>
          </div>
          <p className="my-2">
            Forever is a modern clothing e-commerce platform designed to deliver
            a seamless shopping experience. Built with the powerful MERN stack
            (MongoDB, Express.js, React, Node.js), Forever offers users a
            responsive, intuitive, and secure way to browse, buy, and manage
            their fashion needs online.
          </p>
          <div className="flex gap-3">
            <span className="flex gap-1 px-4 py-1 items-center bg-[#7fffd4] rounded-4xl">
              MongoDB
            </span>
            <span className="flex gap-1 px-4 py-1 items-center bg-[#7fffd4] rounded-4xl">
              Express
            </span>
            <span className="flex gap-1 px-4 py-1 items-center bg-[#7fffd4] rounded-4xl">
              React
            </span>
            <span className="flex gap-1 px-4 py-1 items-center bg-[#7fffd4] rounded-4xl">
              NodeJS
            </span>
          </div>
        </div>
        <img className="w-86" src={assets.forever} alt="" />
      </div>
    </div>
  );
});

export default Projects;
