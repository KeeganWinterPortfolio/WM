"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { GiDoubleDragon } from "react-icons/gi";
import { BsFillHouseFill } from "react-icons/bs";
import { BsChevronDoubleRight } from "react-icons/bs";
import { GiBeastEye } from "react-icons/gi";
import { GiGhost } from "react-icons/gi";
import { GiFairyWings } from "react-icons/gi";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

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
                  onClick={mainMenuToggle}
                  className="flex text-neutral-300 items-center hover:bg-neutral-900  hover:text-neutral-100 w-auto bg-black rounded-lg  text-xl"
                >
                  <Link href="/Dragons" className="py-3 px-3 flex w-auto">
                    <GiDoubleDragon />
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
                        Dragons
                      </motion.span>
                    )}
                  </Link>
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
                  onClick={mainMenuToggle}
                  className="flex text-neutral-300 items-center hover:bg-neutral-900  hover:text-neutral-100 w-auto bg-black rounded-lg text-xl"
                >
                  <Link href="/Beasts" className="py-3 px-3 flex w-auto">
                    <GiBeastEye />
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
                        Beasts
                      </motion.span>
                    )}
                  </Link>
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
                  onClick={mainMenuToggle}
                  className="flex text-neutral-300 items-center hover:bg-neutral-900  hover:text-neutral-100 w-auto bg-black rounded-lg text-xl"
                >
                  <Link href="/Ghosts" className="py-3 px-3 flex w-auto">
                    <GiGhost />
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
                        Ghosts
                      </motion.span>
                    )}
                  </Link>
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
                  onClick={mainMenuToggle}
                  className="flex text-neutral-300 items-center hover:bg-neutral-900  hover:text-neutral-100 w-auto bg-black rounded-lg text-xl"
                >
                  <Link href="/Fairies" className="py-3 px-3 flex w-auto">
                    <GiFairyWings />
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
                        Fairies
                      </motion.span>
                    )}
                  </Link>
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
            className="absolute z-20 xl:w:1/4 lg:w-1/3 sm:w-1/2 w-2/3 h-full top-12 left-20"
          >
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0.5, x: -100 }}
              animate={{ opacity: 0.5, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{
                duration: 0.75,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              layout
              className="h-full bg-black opacity-50 w-full absolute"
            ></motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
