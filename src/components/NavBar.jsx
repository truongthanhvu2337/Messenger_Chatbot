import React, { useState } from "react";
import {
  AiFillAliwangwang,
  AiOutlineComment,
  AiOutlineTeam,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { GrActions, GrMoon } from "react-icons/gr";

function NavBar({ darkMode, dark }) {
  return (
    <div
      className={`${
        dark ? "bg-neutral-700" : "bg-gray-100"
      } w-[80px] p-2 pt-[20px] sm:w-[5%]`}
    >
      <div
        className={`flex flex-col items-center space-y-5 cursor-pointer text-2xl ${
          dark ? "text-white" : ""
        }`}
      >
        <AiOutlineComment />
        <AiOutlineTeam />
        <AiOutlineWhatsApp />
        {dark ? (
          <GrMoon onClick={darkMode} />
        ) : (
          <GrActions onClick={darkMode} />
        )}
      </div>
    </div>
  );
}

export default NavBar;
