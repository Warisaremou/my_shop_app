import React from "react";
import { Github, Linkedin, Dribbble } from "react-bootstrap-icons";
import Link from "next/link";
import Image from "next/image";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import profileImg from "../public/image/profile.png";

function Hero() {
  return (
    <div className="flex flex-wrap md:flex:nowrap">
      <nav className="lg:mr-24 lg:w-4 fixed top-64 left-percentage hidden lg:block">
        <div className="absolute -mt-12 left-4 transform -translate-x-1/2 space-y-6">
          <Link href="#" className="nav-dot selected-circle"></Link>
          <Link href="#about" className="nav-dot"></Link>
          <Link href="#skills" className="nav-dot"></Link>
          <Link href="#services" className="nav-dot"></Link>
          <Link href="#projects" className="nav-dot"></Link>
          <Link href="#contact" className="nav-dot"></Link>
        </div>
      </nav>
      <div className="flex flex-wrap lg:ml-20 justify-center md:justify-start max-w-xl mt-0 md:my-32">
        <div className="relative">
          <div aria-hidden="true" className="image-background-blur"></div>
          <Image
            src={profileImg}
            alt="profile"
            width={80}
            height={80}
            className="rounded-full mb-8 border-2 dark:border-gray-600 md:hidden z-10"
          />
        </div>
        <h1 className="section-title text-3xl md:text-[40px]">Front-End Developer & Web Designer .</h1>
        <div className="mt-6 md:mt-12 flex flex-col md:flex-row gap-7 md:gap-16 justify-center items-center">
          <div className="flex gap-6">
            <Link href="#">
              <Linkedin className="fill-[#699BF7] text-xl cursor-pointer" />
            </Link>
            <Link href="#">
              <Github className="fill-black dark:fill-white text-xl cursor-pointer" />
            </Link>
            <Link href="#">
              <Dribbble className="fill-[#FB509C] text-xl cursor-pointer" />
            </Link>
          </div>
          <button className="btn">
            <Link href="#contact" className="flex items-center gap-2">
              Let&#39;s Talk <PaperAirplaneIcon className="send-icon" />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
