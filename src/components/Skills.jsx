import React, { forwardRef } from "react";
import { assets } from "../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss,
  faGitAlt,
  faGithubAlt,
  faHtml5,
  faJs,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

import { SiCplusplus } from "react-icons/si";

const Skills = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="my-6 p-4 md:py-4">
      <p className="font-bold text-2xl md:text-4xl md:p-0">Skills</p>
      <div className="flex flex-col md:flex-row justify-between mt-2">
        <p className="text-2xl mt-4">Web Development</p>
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              className="text-8xl"
              icon={faHtml5}
              style={{ color: "#e54d26" }}
            />
            <p>HTML</p>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              className="text-8xl"
              icon={faCss}
              style={{ color: "#3d8fc6" }}
            />
            <p>CSS</p>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              className="text-8xl"
              icon={faJs}
              style={{ color: "#f0db4f" }}
            />
            <p>JavaScript</p>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              className="text-8xl"
              icon={faReact}
              style={{ color: "#61dafb" }}
            />
            <p>React</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between mt-4">
        <p className="text-2xl mt-4">Programming Language</p>
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <SiCplusplus className="text-blue-600 text-8xl" />
            <p>CPP</p>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              className="text-8xl"
              icon={faPython}
              style={{ color: "#3d8fc6" }}
            />
            <p>Python</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between mt-4">
        <p className="text-2xl mt-4">Miscellaneous</p>
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              className="text-8xl"
              icon={faGitAlt}
              style={{ color: "#f34f29" }}
            />
            <p>Git</p>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              className="text-8xl"
              icon={faGithubAlt}
              style={{ color: "#000000" }}
            />
            <p>Github</p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Skills;
