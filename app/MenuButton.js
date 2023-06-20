"use client";

import React from "react";
import { HiMenu } from "react-icons/hi";

export default function MenuButton() {
  return (
    <button className="flex justify-center text-neutral-500 items-center hover:bg-neutral-900  hover:border-b-emerald-400 hover:border-b hover:text-neutral-200 sm:w-32 w-auto px-3 text-sm">
      <span className="text-emerald-400  mr-1">
        <HiMenu />
      </span>
      Menu
    </button>
  );
}