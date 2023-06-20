"use client";

import React from "react";
import MenuButton from "./MenuButton";
import AboutUsButton from "./AboutUsButton";
import Menu from "./Menu";
import PortfolioButton from "./PortfolioButton";
import { useState } from "react";

function NavBar() {
  const [mainMenu, setMainMenu] = useState(false);

  const mainMenuToggle = () => {
    setMainMenu((mainMenu) => !mainMenu);
  };

  return (
    <>
      <nav className="w-screen flex justify-between items-center top-0 bg-black border-b border-neutral-600 absolute z-20">
        <div className="flex">
          <h1 className="border-r border-neutral-600 w-32 px-4 font-bold text-neutral-300 py-3">
            WMyth
          </h1>
          <MenuButton onClick={mainMenuToggle} />
          <AboutUsButton />
        </div>
        <PortfolioButton />
      </nav>
      <Menu mainMenu={mainMenu} />
    </>
  );
}

export default NavBar;
