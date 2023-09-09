"use client";

import React, { useState } from "react";
import { IoWallet } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../Logo";
import SearchInput from "../Input";
import LeftSideBar from "./LeftSideBar";

const NavigationBar = () => {
  const [isDark, setIsDark] = useState(true);
  const [isHide, setIsHide] = useState(true);
  return (
    <div className="w-full h-20 fixed flex flex-row justify-between items-center border-b-2 pl-5 pr-5 ">
      <div className="flex flex-row lg:gap-8 md:gap-6">
        <div
          className="flex items-center mr-4 font-extrabold text-[20px] cursor-pointer md:hidden"
          onClick={() => setIsHide(false)}
        >
          <HiMenu />
        </div>
        {!isHide && (
          <>
            <LeftSideBar />
            <div
              className="absolute top-2 left-[72vw] text-[20px] font-extrabold cursor-pointer"
              onClick={() => setIsHide(!isHide)}
            >
              <AiOutlineClose size={30} className="font-extrabold" />
            </div>
          </>
        )}
        <Logo first="Bita" second="kon" isDark={isDark} />
        <SearchInput />
        <ul className=" flex-row gap-3 hidden md:flex items-center">
          <li>home</li>
          <li>home</li>
          <li>home</li>
        </ul>
      </div>
      <div className="flex">
        <div className="rounded-full bg-blue-500 flex flex-row items-center justify-center gap-2 p-2 pl-5 pr-5 text-opacity-100 text-white">
          <IoWallet />
          <span>Wallet</span>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
