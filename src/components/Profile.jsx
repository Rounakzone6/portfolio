import React from "react";
import { assets } from "../assets/assets";

const Profile = () => {
  return (
    <div className="my-6 p-4 md:py-4">
      <p className="font-bold text-2xl md:text-4xl md:p-0">
        Coding Profile
      </p>
      <div className="flex md:flex-row flex-col gap-4 justify-center items-center">
        <ul className="flex flex-wrap gap-6 justify-center items-center p-4">
          <li
            onClick={() =>
              window.open("https://leetcode.com/u/rounakgupta750/", "_blank")
            }
            className="cursor-pointer hover:scale-110 transition-all duration-300 flex flex-col gap-1 py-4 px-6 bg-[#fbf8ff] rounded-xl"
          >
            <p>Leetcode</p>
            <img className="h-16" src={assets.leetcode} alt="" />
          </li>
          <li
            onClick={() =>
              window.open(
                "https://www.geeksforgeeks.org/user/rounakcy3j/",
                "_blank"
              )
            }
            className="cursor-pointer hover:scale-110 transition-all duration-300 flex flex-col gap-1 py-4 px-6 bg-[#fbf8ff] rounded-xl"
          >
            <p>GeeksforGeeks</p>
            <img className="h-15" src={assets.gfg} alt="" />
          </li>
          <li
            onClick={() =>
              window.open(
                "https://codeforces.com/profile/rounakzone6",
                "_blank"
              )
            }
            className="cursor-pointer hover:scale-110 transition-all duration-300 flex flex-col gap-1 py-4 px-6 bg-[#fbf8ff] rounded-xl"
          >
            <p>Codeforces</p>
            <img className="h-16" src={assets.codeforces} alt="" />
          </li>
          <li
            onClick={() =>
              window.open(
                "https://www.codechef.com/users/rounak_zone",
                "_blank"
              )
            }
            className="cursor-pointer hover:scale-110 transition-all duration-300 flex flex-col gap-1 py-4 px-6 bg-[#fbf8ff] rounded-xl"
          >
            <p>CodeChef</p>
            <img className="h-16" src={assets.codechef} alt="" />
          </li>
          <li
            onClick={() =>
              window.open("https://github.com/Rounakzone6", "_blank")
            }
            className="cursor-pointer hover:scale-110 transition-all duration-300 flex flex-col gap-1 py-4 px-6 bg-[#fbf8ff] rounded-xl"
          >
            <p>Github</p>
            <img className="h-16" src={assets.github} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
