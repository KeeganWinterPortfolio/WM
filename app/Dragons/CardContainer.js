import React from "react";
import Image from "next/image";
import MainImageWMDragonCard from "../../public/images/MainImageWMDragonCard.png";
import Link from "next/link";

function CardContainer() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <ul className="flex flex-wrap justify-center w-full h-full px-2 py-2">
        {/* Dragon Card */}
        <Link href="Dragons/TheRedDragon">
          <li className="relative max-w-sm p-3 flex justify-center items-center shrink-0">
            <Image
              src={MainImageWMDragonCard}
              alt=""
              className="w-full max-w-sm rounded-3xl"
            />
            <div className="w-full h-full p-3 absolute">
              <div className="w-full h-full bg-black opacity-30 rounded-3xl"></div>
            </div>
            <div className="absolute max-w-sm bottom-6 rounded-3xl backdrop-blur-sm bg-white/10 p-3 mx-6 z-20 border-2 border-neutral-300">
              <h1 className="text-xl mb-6">Lorem ipsum dolor sit amet,</h1>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </li>
        </Link>
        {/* Beast Card */}
        <Link href="/Beasts">
          <li className="relative max-w-sm p-3 flex justify-center items-center">
            <Image
              src={MainImageWMDragonCard}
              alt=""
              className="w-full max-w-sm rounded-3xl"
            />
            <div className="w-full h-full p-3 absolute">
              <div className="w-full h-full bg-black opacity-30 rounded-3xl"></div>
            </div>
            <div className="absolute max-w-sm bottom-6 rounded-3xl backdrop-blur-sm bg-white/10 p-3 mx-6 z-20 border-2 border-neutral-300">
              <h1 className="text-xl mb-6">Lorem ipsum dolor sit amet,</h1>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </li>
        </Link>
        {/* Spirit Card */}
        <Link href="/Spirits">
          <li className="relative max-w-sm p-3 flex justify-center items-center">
            <Image
              src={MainImageWMDragonCard}
              alt=""
              className="w-full max-w-sm rounded-3xl"
            />
            <div className="w-full h-full p-3 absolute">
              <div className="w-full h-full bg-black opacity-30 rounded-3xl"></div>
            </div>
            <div className="absolute max-w-sm bottom-6 rounded-3xl backdrop-blur-sm bg-white/10 p-3 mx-6 z-20 border-2 border-neutral-300">
              <h1 className="text-xl mb-6">Lorem ipsum dolor sit amet,</h1>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </li>
        </Link>
        {/* Fairy Card */}
        <Link href="/Fairies">
          <li className="relative max-w-sm p-3 flex justify-center items-center">
            <Image
              src={MainImageWMDragonCard}
              alt=""
              className="w-full max-w-sm rounded-3xl"
            />
            <div className="w-full h-full p-3 absolute">
              <div className="w-full h-full bg-black opacity-30 rounded-3xl"></div>
            </div>
            <div className="absolute max-w-sm bottom-6 rounded-3xl backdrop-blur-sm bg-white/10 p-3 mx-6 z-20 border-2 border-neutral-300">
              <h1 className="text-xl mb-6">Lorem ipsum dolor sit amet,</h1>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default CardContainer;
