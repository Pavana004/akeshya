"use client";

import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import "../../../src/app/globals.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollColor, setScrollColor] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const changeColor = () => {
    if (window.scrollY >= 32) {
      setScrollColor(true);
    } else {
      setScrollColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <>
      <header
        className={
          scrollColor
            ? " shadow-sm shadow-gray-500 w-full h-32 fixed top-0 left-0  z-10 bg-white"
            : "w-full h-32 fixed top-0 left-0  z-10 bg-white"
        }
      >
        <div className="container-lg  w-full h-full flex justify-evenly mx-auto">
          <div className=" w-full h-full flex justify-start">
            <Link
              href="/"
              className="no-underline cursor-pointer flex my-auto "
            >
              <Image src="/logo.png" width={65} height={65} alt="logo" />

              <h1 className="uppercase flex my-auto text-3xl text-custom-blue font-extrabold text-center  ">
                Akeshya
              </h1>
            </Link>
          </div>
          <div className="hidden lg:flex  w-full h-full">
            <div className="  w-full h-full flex flex-col justify-center  ">
              <ul className="    w-full flex justify-end items-center align-middle h-[50%]">
                <li className=" hover:text-custom-blue py-2 px-4  ">
                  <Link href="#" className="">
                    Home
                  </Link>
                </li>
                <li className=" hover:text-custom-blue py-2 px-4  ">
                  <Link href="/about" className="">
                    About
                  </Link>
                </li>
                <li className="hover:text-custom-blue py-2 px-4  ">
                  <Link href="#service" className="">
                    Service
                  </Link>
                </li>
                <li className="hover:text-custom-blue   ">
                  <Link href="/contact" className="">
                    <button className=" bg-custom-blue py-2 px-4 w-[120px] rounded-full text-sm  text-white hover:bg-[#2383c4] hover:text-white">
                      Contact us
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="lg:hidden font-extrabold w-40 h-full flex items-center justify-center  "
            onClick={handleToggle}
          >
            <FaBars size={25} color="#444444" />
          </div>
        </div>
      </header>

      {isOpen && (
        <div className=" lg:hidden w-full h-full bg-black flex flex-col gap-3 z-10 fixed top-0 left-0">
          <div
            className="lg:hidden font-extrabold py-2 px-4 flex justify-end top-4 "
            onClick={handleToggle}
          >
            <MdClose size={30} color="white" />
          </div>

          <div className=" w-[95%] h-[92%] flex mx-auto rounded-lg bg-white">
            <ul className=" w-full flex flex-col justify-start gap-4  h-full">
              <li className=" hover:text-custom-blue py-2 px-4  ">
                <Link href="#" className="">
                  Home
                </Link>
              </li>
              <li className=" hover:text-custom-blue py-2 px-4  ">
                <Link href="#" className="">
                  About
                </Link>
              </li>
              <li className="hover:text-custom-blue py-2 px-4  ">
                <Link href="#" className="">
                  Service
                </Link>
              </li>
              <li className="hover:text-custom-blue p-4  ">
                <Link href="#" className="">
                  <div className="bg-custom-blue py-2 px-4 w-full rounded-full text-sm  text-white hover:bg-blue-600 hover:text-white">
                    Contact us
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
