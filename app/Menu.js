"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Menu() {
  const [mainMenu, setMainMenu] = useState(false);

  return (
    <motion.div className="absolute bg-gradient-to-r from-black border-t border-r border-neutral-800 h-full mt-12 w-32 z-20">
      <ul>
        <li className="flex text-neutral-500 items-center hover:bg-neutral-900  hover:border-r-emerald-400 hover:border-r hover:text-neutral-200 w-32  text-sm">
          <Link href="#" className="py-3 px-3">
            Home
          </Link>
        </li>

        <li className="text-center w-futext border-b border-neutral-800 text-emerald-700 py-3">
          Creatures
        </li>
        <li className="flex text-neutral-500 items-center hover:bg-neutral-900  hover:border-r-emerald-400 hover:border-r hover:text-neutral-200 w-32 text-sm">
          <Link href="#" className="py-3 px-3">
            Dragons
          </Link>
        </li>
        <li className="flex text-neutral-500 items-center hover:bg-neutral-900  hover:border-r-emerald-400 hover:border-r hover:text-neutral-200 w-32 text-sm">
          <Link href="#" className="py-3 px-3">
            Beasts
          </Link>
        </li>
        <li className="flex text-neutral-500 items-center hover:bg-neutral-900  hover:border-r-emerald-400 hover:border-r hover:text-neutral-200 w-32 text-sm">
          <Link href="#" className="py-3 px-3">
            Spirits
          </Link>
        </li>
        <li className="flex text-neutral-500 items-center hover:bg-neutral-900  hover:border-r-emerald-400 hover:border-r hover:text-neutral-200 w-32 text-sm">
          <Link href="#" className="py-3 px-3">
            Fair Folk
          </Link>
        </li>
      </ul>
    </motion.div>
  );
}
