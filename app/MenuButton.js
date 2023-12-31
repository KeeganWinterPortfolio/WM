"use client";

import React from "react";
import { HiMenu } from "react-icons/hi";

export default function MenuButton({ onClick, mainMenu }) {
  return (
    <button
      className="flex justify-center text-neutral-200 items-center hover:bg-neutral-900  hover:border-b-emerald-400 hover:border-b hover:text-white sm:w-32 w-auto px-3 text-sm"
      onClick={onClick}
    >
      <span className="text-emerald-400  mr-1">
        <HiMenu />
      </span>
      Menu
    </button>
  );
}
