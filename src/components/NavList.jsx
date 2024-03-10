import { Input } from "antd";
import React from "react";

function NavList({darkMode}) {
  return (
    <div className={`w-[25%] px-2 pt-4 border-r 
    ${darkMode ? "bg-black border-r-gray-800" : "border-r-gray-300"} `}>
      <h2 className={`font-bold text-2xl px-2 ${darkMode ? "text-white" : ""}`}>Chats</h2>
      <Input className="mt-2 bg-gray-200/70 rounded-3xl" size="medium"></Input>
    </div>
  );
}

export default NavList;
