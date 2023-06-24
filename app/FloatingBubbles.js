"use client";
import { motion } from "framer-motion";

function FloatingBubbles() {
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
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          type: "spring",
          damping: 6,
          stiffness: 90,
          restDelta: 0.001,
          delay: 0.1,
        }}
        className=""
      >
        <motion.div
          initial="initial"
          animate="variant1"
          variants={containerVariants}
          style={{
            boxShadow: "0px 0px 12px #10b981",
          }}
          className="w-2 h-2 rounded-full absolute bg-gradient-to-tr from-emerald-800 via-green-400 to-emerald-900 top-12 left-44 shadow text-black flex justify-center items-center text-2xl"
        ></motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          type: "spring",
          damping: 6,
          stiffness: 90,
          restDelta: 0.001,
          delay: 0.6,
        }}
        className=""
      >
        <motion.div
          initial="initial"
          animate="variant2"
          variants={containerVariants}
          style={{
            boxShadow: "0px 0px 12px #10b981",
          }}
          className=" w-3 h-3 rounded-full absolute bg-gradient-to-tr from-emerald-800 via-green-400 to-emerald-900 top-28 left-32 shadow text-black flex justify-center items-center"
        ></motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          type: "spring",
          damping: 6,
          stiffness: 90,
          restDelta: 0.001,
          delay: 2,
        }}
        className=""
      >
        <motion.div
          initial="initial"
          animate="variant1"
          variants={containerVariants}
          style={{
            boxShadow: "0px 0px 12px #10b981",
          }}
          className=" w-2 h-2 rounded-full absolute bg-gradient-to-tr from-emerald-800 via-green-400 to-emerald-900 top-40 left-6 shadow text-black flex justify-center items-center"
        ></motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          type: "spring",
          damping: 6,
          stiffness: 90,
          restDelta: 0.001,
          delay: 1.2,
        }}
        className=""
      >
        <motion.div
          initial="initial"
          animate="variant3"
          variants={containerVariants}
          style={{
            boxShadow: "0px 0px 12px #10b981",
          }}
          className="w-5 h-5 rounded-full absolute bg-gradient-to-tr from-emerald-800 via-green-400 to-emerald-900 top-6 left-8 shadow text-black flex justify-center items-center"
        ></motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          type: "spring",
          damping: 6,
          stiffness: 90,
          restDelta: 0.001,
          delay: 0.8,
        }}
        className=""
      >
        <motion.div
          initial="initial"
          animate="variant4"
          variants={containerVariants}
          style={{
            boxShadow: "0px 0px 12px #10b981",
          }}
          className=" w-4 h-4 rounded-full absolute bg-gradient-to-tr from-emerald-800 via-green-400 to-emerald-900 top-24 left-60 shadow text-black"
        ></motion.div>
      </motion.div>
    </div>
  );
}

export default FloatingBubbles;
