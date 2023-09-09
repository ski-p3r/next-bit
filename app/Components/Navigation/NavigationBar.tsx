"use client";

import React, { useState } from "react";
import { IoWallet } from 'react-icons/io5'
import Logo from "../Logo";
import SearchInput from "../Input";

const NavigationBar = () => {
  const [isDark, setIsDark] = useState(true);
  return (
    <div className="w-full h-20 fixed flex flex-row justify-around items-center border-b-2">
      <div className="flex flex-row lg:gap-8 md:gap-6">
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
