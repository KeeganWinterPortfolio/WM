"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { GiDragonHead } from "react-icons/gi";
import { BsFillHouseFill } from "react-icons/bs";
import { BsChevronDoubleRight } from "react-icons/bs";
import { GiBeastEye } from "react-icons/gi";
import { GiGhost } from "react-icons/gi";
import { GiFairyWings } from "react-icons/gi";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import SpiritMenu from "./SpiritMenu";
import DragonMenu from "./DragonMenu";
import BeastMenu from "./BeastMenu";
import FairyMenu from "./FairyMenu";

export default function Menu({ mainMenu, mainMenuToggle }) {
  const [extendedMenu, setExtendedMenu] = useState(false);
  const [stopper, setStopper] = useState(true);

  const extendedMenuToggle = () => {
    setExtendedMenu((extendedMenu) => !extendedMenu);
    setStopper(false);
  };

  // Close Extended Menu When Main Menu Closes

  if (!mainMenu && !stopper) {
    setExtendedMenu(false);
    setStopper(true);
  }

  // Functions For Extended Menu

  const [dragonMenu, setDragonMenu] = useState(true);
  const [beastMenu, setBeastMenu] = useState(false);
  const [spiritMenu, setSpiritMenu] = useState(false);
  const [fairyMenu, setFairyMenu] = useState(false);

  const dragonMenuToggle = () => {
    setDragonMenu(true);
    setBeastMenu(false);
    setSpiritMenu(false);
    setFairyMenu(false);
  };
  const beastMenuToggle = () => {
    setDragonMenu(false);
    setBeastMenu(true);
    setSpiritMenu(false);
    setFairyMenu(false);
  };
  const spiritMenuToggle = () => {
    setDragonMenu(false);
    setBeastMenu(false);
    setSpiritMenu(true);
    setFairyMenu(false);
  };
  const fairyMenuToggle = () => {
    setDragonMenu(false);
    setBeastMenu(false);
    setSpiritMenu(false);
    setFairyMenu(true);
  };

  return (
    <>
      <AnimatePresence>
        {/* Main Menu */}
        {mainMenu && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{
              duration: 0.75,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            layout
            className="absolute bg-black border-t border-r border-neutral-600 h-full mt-12 w-auto p-2.5 z-30"
          >
            <ul className="flex flex-col items-center">
              <motion.li
                initial={{ opacity: 0, x: -100 }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                  delay: 0.1,
                }}
                onClick={extendedMenuToggle}
                className="flex text-neutral-300 items-center hover:bg-neutral-900  hover:text-neutral-100 w-auto bg-neutral-800 rounded-lg  text-xl mb-2"
              >
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{
                    rotate: extendedMenu ? 180 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                  className="py-3 px-3"
                >
                  <BsChevronDoubleRight />
                </motion.div>
              </motion.li>
              <motion.ul
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],

                  delay: 0.3,
                }}
                className="space-y-2 bg-neutral-800 p-2 rounded-xl"
              >
                {/* Home Button */}
                <motion.li
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                    delay: 0.4,
                  }}
                  onClick={mainMenuToggle}
                  className="flex text-neutral-300 items-center hover:bg-neutral-900 hover:text-neutral-100 w-auto bg-black rounded-lg text-xl relative"
                >
                  <Link href="/" className="py-3 px-3 flex w-auto">
                    <BsFillHouseFill />
                    {extendedMenu && (
                      <motion.span
                        initial={{ width: 0 }}
                        animate={{
                          width: "auto",
                        }}
                        transition={{
                          duration: 0.3,
                          ease: [0, 0.71, 0.2, 1.01],
                        }}
                        className="text-sm text-center ml-2"
                      >
                        Home
                      </motion.span>
                    )}
                  </Link>
                </motion.li>
                {/* Dragon Button */}
                <motion.li
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                    delay: 0.6,
                  }}
                  onClick={extendedMenu ? dragonMenuToggle : mainMenuToggle}
                  className="flex text-neutral-300 items-center hover:bg-neutral-900  hover:text-neutral-100 w-auto bg-black rounded-lg  text-xl cursor-pointer"
                >
                  {!extendedMenu && (
                    <Link href="/Dragons" className="py-3 px-3 flex w-auto">
                      <GiDragonHead />
                    </Link>
                  )}
                  {extendedMenu && (
                    <>
                      <div href="/Dragons" className="py-3 pl-3 flex w-auto">
                        <GiDragonHead />
                      </div>
                      <motion.span
                        initial={{ width: 0 }}
                        animate={{
                          width: "auto",
                        }}
                        transition={{
                          duration: 0.3,
                          ease: [0, 0.71, 0.2, 1.01],
                        }}
                        className="text-sm text-center mx-2"
                      >
                        Dragons
                      </motion.span>
                    </>
                  )}
                </motion.li>
                {/* Beast Button */}
                <motion.li
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                    delay: 0.7,
                  }}
                  onClick={extendedMenu ? beastMenuToggle : mainMenuToggle}
                  className="flex text-neutral-300 items-center hover:bg-neutral-900  hover:text-neutral-100 w-auto bg-black rounded-lg text-xl cursor-pointer"
                >
                  {!extendedMenu && (
                    <Link href="/Beasts" className="py-3 px-3 flex w-auto">
                      <GiBeastEye />
                    </Link>
                  )}
                  {extendedMenu && (
                    <>
                      <div href="/Beasts" className="py-3 pl-3 flex w-auto">
                        <GiBeastEye />
                      </div>
                      <motion.span
                        initial={{ width: 0 }}
                        animate={{
                          width: "auto",
                        }}
                        transition={{
                          duration: 0.3,
                          ease: [0, 0.71, 0.2, 1.01],
                        }}
                        className="text-sm text-center mx-2"
                      >
                        Beasts
                      </motion.span>
                    </>
                  )}
                </motion.li>
                {/* Ghost Button */}
                <motion.li
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                    delay: 0.8,
                  }}
                  onClick={extendedMenu ? spiritMenuToggle : mainMenuToggle}
                  className="flex text-neutral-300 items-center hover:bg-neutral-900  hover:text-neutral-100 w-auto bg-black rounded-lg text-xl cursor-pointer"
                >
                  {!extendedMenu && (
                    <Link href="/Spirits" className="py-3 px-3 flex w-auto">
                      <GiGhost />
                    </Link>
                  )}
                  {extendedMenu && (
                    <>
                      <div href="/Spirits" className="py-3 pl-3 flex w-auto">
                        <GiGhost />
                      </div>
                      <motion.span
                        initial={{ width: 0 }}
                        animate={{
                          width: "auto",
                        }}
                        transition={{
                          duration: 0.3,
                          ease: [0, 0.71, 0.2, 1.01],
                        }}
                        className="text-sm text-center mx-2"
                      >
                        Spirits
                      </motion.span>
                    </>
                  )}
                </motion.li>
                {/* Fairy Button */}
                <motion.li
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                    delay: 0.9,
                  }}
                  onClick={extendedMenu ? fairyMenuToggle : mainMenuToggle}
                  className="flex text-neutral-300 items-center hover:bg-neutral-900  hover:text-neutral-100 w-auto bg-black rounded-lg text-xl cursor-pointer"
                >
                  {!extendedMenu && (
                    <Link href="/Fairies" className="py-3 px-3 flex w-auto">
                      <GiFairyWings />
                    </Link>
                  )}
                  {extendedMenu && (
                    <>
                      <div href="/Fairies" className="py-3 pl-3 flex w-auto">
                        <GiFairyWings />
                      </div>
                      <motion.span
                        initial={{ width: 0 }}
                        animate={{
                          width: "auto",
                        }}
                        transition={{
                          duration: 0.3,
                          ease: [0, 0.71, 0.2, 1.01],
                        }}
                        className="text-sm text-center mx-2"
                      >
                        Fairies
                      </motion.span>
                    </>
                  )}
                </motion.li>
              </motion.ul>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {/* Extended Menu */}
        {extendedMenu && (
          <motion.div
            layout
            style={{ left: "135px" }}
            className="absolute z-40 max-w-xl w-1/2 sm:w-2:3 h-full top-12"
          >
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 1, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{
                duration: 0.75,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              layout
              className="h-full bg-neutral-950 opacity-50 w-full absolute"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{
                duration: 0.75,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              layout
              className="w-full h-full absolute overflow-y-scroll overflow-x-hidden flex justify-end scrollbar-track-emerald-900 scrollbar-thumb-emerald-600"
            >
              {dragonMenu && <DragonMenu />}
              {beastMenu && <BeastMenu />}
              {spiritMenu && <SpiritMenu />}
              {fairyMenu && <FairyMenu />}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
