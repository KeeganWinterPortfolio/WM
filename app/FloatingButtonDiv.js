"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  GiDragonHead,
  GiBeastEye,
  GiGhost,
  GiFairyWings,
} from "react-icons/gi";
import Link from "next/link";

function FloatingButtonDiv() {
  const containerVariants = {
    initial: { x: 0, y: 0 },
    variant1: {
      x: [0, 3, -2, 0, 2, -1, 0, -3, 1, -3, 0, 3, 0],
      y: [0, 2, -1, 0, 3, -3, 0, 3, -2, 0, -3, 1, 0],
      transition: {
        duration: 19,
        repeat: Infinity,
        // repeatType: "reverse",
        ease: "easeInOut",
      },
    },
    variant2: {
      x: [0, 1, -3, 0, -2, 3, 0, 2, -3, 0, -1, 3, 0, -3, 2],
      y: [0, 3, -1, 0, -3, 1, 0, 2, -3, 0, 3, -2, 0, -1, 3],
      transition: {
        duration: 21,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
    variant3: {
      x: [0, -2, 3, 0, -3, 2, 0, 1, -3, 0, 3, -1, 0, -3],
      y: [0, -3, 1, 0, 2, -3, 0, -2, 3, 0, 1, -3, 0, 2],
      transition: {
        duration: 20,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
    variant4: {
      x: [0, -1, 3, 0, 3, -2, 0, -3, 2, 0, 2, -3, 0, 1, -3, 2],
      y: [0, 2, -3, 0, 3, -1, 0, 3, -2, 0, -2, 3, 0, -1, 3, -2],
      transition: {
        duration: 18,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="w-full h-full relative text-lg">
      <Link href="/Dragons">
        <motion.div
          initial="initial"
          animate="variant1"
          variants={containerVariants}
          style={{
            boxShadow: "0px 0px 12px #10b981",
          }}
          className="p-3 w-16 h-16 rounded-full absolute bg-gradient-to-tr from-emerald-800 via-green-400 to-emerald-900 top-36 left-52 shadow text-black flex justify-center items-center text-3xl"
        >
          <GiDragonHead />
        </motion.div>
      </Link>
      <Link href="/Beasts">
        <motion.div
          initial="initial"
          animate="variant2"
          variants={containerVariants}
          style={{
            boxShadow: "0px 0px 12px #10b981",
          }}
          className="p-3 w-14 h-14 rounded-full absolute bg-gradient-to-tr from-emerald-800 via-green-400 to-emerald-900 top-12 left-24 shadow text-black flex justify-center items-center text-2xl"
        >
          <GiBeastEye />
        </motion.div>
      </Link>
      <Link href="/Fairies">
        <motion.div
          initial="initial"
          animate="variant3"
          variants={containerVariants}
          style={{
            boxShadow: "0px 0px 12px #10b981",
          }}
          className="p-3 w-12 h-12 rounded-full absolute bg-gradient-to-tr from-emerald-800 via-green-400 to-emerald-900 top-36 left-8 shadow text-black flex justify-center items-center text-xl"
        >
          <GiFairyWings />
        </motion.div>
      </Link>
      <Link href="/Spirits">
        <motion.div
          initial="initial"
          animate="variant4"
          variants={containerVariants}
          style={{
            boxShadow: "0px 0px 12px #10b981",
          }}
          className="p-3 w-12 h-12 rounded-full absolute bg-gradient-to-tr from-emerald-800 via-green-400 to-emerald-900 top-10 left-60 shadow text-black flex justify-center items-center text-xl"
        >
          <GiGhost />
        </motion.div>
      </Link>
    </div>
  );
}

export default FloatingButtonDiv;
