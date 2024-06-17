"use client";

import React, { useState, useEffect } from "react";
import { BsArrowUpShort } from "react-icons/bs";
import "../../../src/app/globals.css";

const TopArrow = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const top = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      disabled={!isVisible}
      style={{
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
        color: "#fff",
        border: "none",
        cursor: isVisible ? "pointer" : "not-allowed",
        transition: "opacity 0.3s ease-in-out",
        opacity: isVisible ? 1 : 0,
      }}
      onClick={top}
      data-aos="fade-left"
      className=" z-50 w-[40px] h-[40px] cursor-pointer flex justify-center align-middle items-center bg-custom-blue text-white  hover:bg-[#2383c4]  "
    >
      <BsArrowUpShort size={28} />
    </button>
  );
};

export default TopArrow;
