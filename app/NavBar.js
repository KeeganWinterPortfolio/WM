"use client";

import React from "react";
import MenuButton from "./MenuButton";
import AboutUsButton from "./AboutUsButton";
import Menu from "./Menu";
import PortfolioButton from "./PortfolioButton";

function NavBar() {
  return (
    <>
      <nav className="w-screen flex justify-between items-center top-0 bg-transparent border-b border-neutral-800 absolute z-20">
        <div className="flex">
          <h1 className="border-r border-neutral-800 w-32 px-4 font-bold text-neutral-300 py-3">
            WMyth
          </h1>
          <MenuButton />
          <AboutUsButton />
        </div>
        <PortfolioButton />
      </nav>
      <Menu />
    </>
  );
}

export default NavBar;
