"use client";

import React from "react";
import Image from "next/image";
import MainImageWMDragonCard from "../public/images/MainImageWMDragonCard.png";
import MainImageWMBeastCard from "../public/images/MainImageWMBeastCard.png";
import MainImageWMSpiritCard from "../public/images/MainImageWMSpiritCard.png";
import MainImageWMFairyCard from "../public/images/MainImageWMFairyCard.png";
import Link from "next/link";
import { motion } from "framer-motion";

function CardContainer() {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <div className="px-3">
        <div className=" rounded-2xl border-2 bg-black/70 border-neutral-500 relative w-full h-full max-w-lg">
          <div className=" text-neutral-300 text-xl font-bold tracking-wide p-3">
            <h3>Choose A Creature</h3>
          </div>
          <div className="p-3 text-neutral-400">
            <p>
              Immerse yourself in the ancient lore of Wales, where mythical
              creatures roam and the boundaries between our world and the
              Otherworld blur.{" "}
            </p>
          </div>
        </div>
      </div>
      <ul className="flex flex-wrap justify-center w-full h-full py-6 sm:py-0">
        {/* Dragon Card */}
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
              src={MainImageWMDragonCard}
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
                Dragons
              </h1>
              <p className=" text-neutral-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </motion.li>
        </Link>
        {/* Beast Card */}
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
              src={MainImageWMBeastCard}
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
                Beasts
              </h1>
              <p className=" text-neutral-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </motion.li>
        </Link>
        {/* Spirit Card */}
        <Link href="/Spirits">
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
              src={MainImageWMSpiritCard}
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
                Spirits And Ghosts
              </h1>
              <p className=" text-neutral-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </motion.li>
        </Link>
        {/* Fairy Card */}
        <Link href="/Fairies">
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
              src={MainImageWMFairyCard}
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
                Fairies
              </h1>
              <p className=" text-neutral-300">
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
