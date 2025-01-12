import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

function Footer({ isDarkMode, setIsDarkMode }) {
  return (
    <div>
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt=""
          className="w-36 mx-auto cursor-pointer"
        />
        <div className="w-max flex gap-2 items-center justify-center mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-6"
          />
          rounakgupta002@gmail.com
        </div>
        <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
          <p>© 2025 Rounak Gupta. All rights reserved.</p>
          <ul className="flex items-center justify-center gap-10 mt-4 sm:mt-0">
            <li>
              <a
                className="font-bold"
                target="_blank"
                href="https://github.com/Rounakzone6"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                className="font-bold"
                target="_blank"
                href="https://www.linkedin.com/in/rounak-gupta-256536259/"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className="font-bold"
                target="_blank"
                href="https://x.com/rounakgupta"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
