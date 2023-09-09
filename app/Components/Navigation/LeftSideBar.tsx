"use client";

import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const LeftSideBar = () => {
  const [isHide, setIsHide] = useState();
  return (
    <div className="w-[80vw] absolute left-0 top-[0px] bg-gray-500 pt-3 rounded-[10px] h-[100vh] flex flex-col items-center">
      <input
        type="text"
        className=" rounded focus:outline-none h-9 w-[54vw] p-4 text-black"
      />
      <div className="flex items-center justify-center bg-green-400 p-[5px] rounded absolute left-[62vw] top-[12px] pt-[6px]">
        <FiSearch size={25} />
      </div>
      <ul className="flex flex-col items-center ">
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
      </ul>
    </div>
  );
};

export default LeftSideBar;
