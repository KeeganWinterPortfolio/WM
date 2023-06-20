"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Menu({ mainMenu }) {
  return (
    <>
      {mainMenu && (
        <motion.div className="absolute bg-black border-t border-r border-neutral-600 h-full mt-12 w-32 z-20">
          <ul>
            <motion.li
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                type: "spring",
                damping: 6,
                stiffness: 90,
                restDelta: 0.001,
                delay: 0.1,
              }}
              className="flex text-neutral-400 items-center hover:bg-neutral-900  hover:border-r-emerald-400 hover:border-r-2 hover:text-neutral-200 w-32  text-sm"
            >
              <Link href="#" className="py-3 px-3">
                Home
              </Link>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                type: "spring",
                damping: 6,
                stiffness: 90,
                restDelta: 0.001,
                delay: 0.2,
              }}
              className="w-full text-emerald-700 py-3 px-3"
            >
              Creatures
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                type: "spring",
                damping: 6,
                stiffness: 90,
                restDelta: 0.001,
                delay: 0.3,
              }}
              className="flex text-neutral-400 items-center hover:bg-neutral-900  hover:border-r-emerald-400 hover:border-r-2 hover:text-neutral-200 w-32 text-sm"
            >
              <Link href="#" className="py-3 px-3">
                Dragons
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                type: "spring",
                damping: 6,
                stiffness: 90,
                restDelta: 0.001,
                delay: 0.4,
              }}
              className="flex text-neutral-400 items-center hover:bg-neutral-900  hover:border-r-emerald-400 hover:border-r-2 hover:text-neutral-200 w-32 text-sm"
            >
              <Link href="#" className="py-3 px-3">
                Beasts
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                type: "spring",
                damping: 6,
                stiffness: 90,
                restDelta: 0.001,
                delay: 0.5,
              }}
              className="flex text-neutral-400 items-center hover:bg-neutral-900  hover:border-r-emerald-400 hover:border-r-2 hover:text-neutral-200 w-32 text-sm"
            >
              <Link href="#" className="py-3 px-3">
                Spirits
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                type: "spring",
                damping: 6,
                stiffness: 90,
                restDelta: 0.001,
                delay: 0.6,
              }}
              className="flex text-neutral-400 items-center hover:bg-neutral-900  hover:border-r-emerald-400 hover:border-r-2 hover:text-neutral-200 w-32 text-sm"
            >
              <Link href="#" className="py-3 px-3">
                Fair Folk
              </Link>
            </motion.li>
          </ul>
        </motion.div>
      )}
    </>
  );
}
