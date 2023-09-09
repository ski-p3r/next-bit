"use client";

import React from "react";

const SearchInput = () => {
  return (
    <div className="opacity-70">
      <input
        type="text"
        className="rounded-full p-2 pl-5 focus:outline-none focus:border-white text-black hidden md:block opacity-75"
      />
    </div>
  );
};

export default SearchInput;
