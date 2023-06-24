"use client";

import React from "react";
import Image from "next/image";
import TheRedDragonCard from "../../public/images/TheRedDragonCard.png";
import AfancCard from "../../public/images/AfancCard.png";
import Link from "next/link";
import { motion } from "framer-motion";

function CardContainer() {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <div className="px-3">
        <div className=" rounded-2xl border-2 bg-black/70 border-neutral-500 relative w-full h-full max-w-lg">
          <div className=" text-neutral-300 text-xl font-bold tracking-wide p-3">
            <h3>Lorem ipsum dolor sit amet</h3>
          </div>
          <div className="p-3 text-neutral-400">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
          </div>
        </div>
      </div>
      <ul className="flex flex-wrap justify-center w-full h-full py-6">
        {/* The Red Dragon Card */}
        <Link href="/Dragons">
          <motion.li
            initial={{ opacity: 0, x: 100 }}
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
            className="relative max-w-sm p-3 flex justify-center items-center shrink-0"
          >
            <Image
              src={TheRedDragonCard}
              width={4000}
              height={4800}
              alt=""
              className="w-full max-w-sm rounded-3xl border-2 border-emerald-800"
            />
            <div className="w-full h-full p-3 absolute">
              <div className="w-full h-full bg-black opacity-30 rounded-3xl"></div>
            </div>
            <div className="absolute max-w-sm bottom-6 rounded-2xl bg-black/70 p-3 mx-6 z-20 border-2 border-neutral-500">
              <h1 className="text-emerald-400 text-2xl mb-6 font-bold tracking-wide">
                The Red Dragon
              </h1>
              <p className="text-neutral-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </motion.li>
        </Link>
        {/* Afanc Card */}
        <Link href="/Beasts">
          <motion.li
            initial={{ opacity: 0, x: 100 }}
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
            className="relative max-w-sm p-3 flex justify-center items-center shrink-0"
          >
            <Image
              src={AfancCard}
              width={4000}
              height={4800}
              alt=""
              className="w-full max-w-sm rounded-3xl border-2 border-emerald-800"
            />
            <div className="w-full h-full p-3 absolute">
              <div className="w-full h-full bg-black opacity-30 rounded-3xl"></div>
            </div>
            <div className="absolute max-w-sm bottom-6 rounded-2xl bg-black/70 p-3 mx-6 z-20 border-2 border-neutral-500">
              <h1 className="text-emerald-400 text-2xl mb-6 font-bold tracking-wide">
                Afanc The Lake Monster
              </h1>
              <p className="text-neutral-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </motion.li>
        </Link>
      </ul>
    </div>
  );
}

export default CardContainer;
