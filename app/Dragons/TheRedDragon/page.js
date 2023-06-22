import MainImageWM from "../../../public/images/MainImageWM.png";
import MainImageWMLarge from "../../../public/images/MainImageWMLarge.png";
import MainImageWMMedium from "../../../public/images/MainImageWMMedium.png";
import Image from "next/image";
import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"], weight: ["800"] });

export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-6 z-10">
      {/* Large Image And Overlay Start */}
      <div className="w-full hidden justify-end xl:flex">
        <div className="w-auto relative">
          {/* Image */}
          <Image src={MainImageWMLarge} alt="" className="" />
          {/* Left Border Black Gradient */}
          <div className="w-full h-full absolute  top-0 bg-black opacity-40"></div>
          {/* Left Border Black Gradient */}
          <div className="w-1/3 h-full absolute left-0 top-0 bg-gradient-to-r from-black"></div>
          {/* Bottom Border Black Gradient */}
          <div className="bottom-0 h-1/4 absolute bg-gradient-to-t from-black w-full"></div>
        </div>
      </div>
      {/* Large Image And Overlay End */}
      {/* Medium Image And Overlay Start */}
      <div className="w-full hidden justify-end lg:flex xl:hidden">
        <div className="w-auto relative">
          {/* Image */}
          <Image src={MainImageWMMedium} alt="" className="" />
          {/* Left Border Black Gradient */}
          <div className="w-full h-full absolute  top-0 bg-black opacity-60"></div>
          {/* Left Border Black Gradient */}
          <div className="w-1/3 h-full absolute left-0 top-0 bg-gradient-to-r from-black"></div>
          {/* Bottom Border Black Gradient */}
          <div className="bottom-0 h-1/4 absolute bg-gradient-to-t from-black w-full"></div>
        </div>
      </div>
      {/* Medium Image And Overlay End */}
      {/* Small Image And Overlay Start */}
      <div className="w-full flex justify-end lg:hidden">
        <div className="w-auto relative">
          {/* Image */}
          <Image src={MainImageWM} alt="" className="mt-6" />
          {/* Left Border Black Gradient */}
          <div className="w-full h-full absolute  top-0 bg-black opacity-10"></div>
          {/* Left Border Black Gradient */}
          <div className="w-1/4 h-full absolute left-0 top-0 bg-gradient-to-r from-black"></div>
          {/* Bottom Border Black Gradient */}
          <div className="bottom-0 h-1/5 absolute bg-gradient-to-t from-black w-full"></div>
        </div>
      </div>
      {/* Small Image And Overlay End */}
      {/* Content Container Large */}
      <div className="absolute h-auto pt-12  text-start w-full px-4 pb-4 hidden sm:flex">
        <div className="text-neutral-200 sm:text-neutral-300 sm:opacity-100 sm:text-6xl text-4xl font-bold">
          {/* 1st Part Heading */}
          <div className="max-w-md ">
            <h1 className={sora.className}>Y Ddraig Goch </h1>
          </div>
          {/* Floating Buttons */}
          {/* 2nd Part Heading */}
          <div className="mt-52 sm:mt-5 text-emerald-700">
            <h2 className={sora.className}>The Red Dragon</h2>
          </div>
        </div>
      </div>
    </div>
  );
}