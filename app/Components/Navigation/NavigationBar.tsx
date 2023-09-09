"use client";

import React, { useState } from "react";
import Logo from "../Logo";

const NavigationBar = () => {
  const [isDark, setIsDark] = useState(true);
  return (
    <div className="w-full bg-white h-20 fixed flex flex-col justify-around items-center">
      <Logo first="Bita" second="kon" isDark={isDark} />
      
    </div>
  );
};

export default NavigationBar;
