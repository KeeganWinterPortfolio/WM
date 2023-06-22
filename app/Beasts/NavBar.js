"use client";

import React from "react";
import MenuButton from "../MenuButton";
import AboutUsButton from "../AboutUsButton";
import Menu from "../Menu";
import PortfolioButton from "../PortfolioButton";
import { useState } from "react";
import Link from "next/link";

function NavBar() {
  const [mainMenu, setMainMenu] = useState(false);

  const mainMenuToggle = () => {
    setMainMenu((mainMenu) => !mainMenu);
  };

  return (
    <>
      <div className="w-screen flex justify-between items-center top-0 bg-black border-b border-neutral-600 absolute z-50">
        <div className="flex">
          <Link
            href="/"
            className="border-r border-neutral-600 w-32 px-4 font-bold text-neutral-300 py-3"
          >
            WMyth
          </Link>
          <MenuButton mainMenu={mainMenu} onClick={mainMenuToggle} />
          <AboutUsButton />
        </div>
        <PortfolioButton />
      </div>
      <Menu mainMenu={mainMenu} mainMenuToggle={mainMenuToggle} />
    </>
  );
}

export default NavBar;
