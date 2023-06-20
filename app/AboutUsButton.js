import React from "react";
import { BsPersonFill } from "react-icons/bs";
import Link from "next/link";

export default function AboutUsButton() {
  return (
    <Link
      className="flex text-neutral-400 items-center justify-center hover:bg-neutral-800 hover:border-b-emerald-400 hover:border-b hover:text-neutral-200 sm:w-32 w-auto px-3 text-sm"
      href="/About"
    >
      <span className="text-emerald-400 mr-1">
        <BsPersonFill />
      </span>
      About
    </Link>
  );
}
