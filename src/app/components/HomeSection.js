"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      id="home"
      className="w-full h-[100vh] lg:h-[70vh] lg:mt-[100px] relative mt-[40px]  "
    >
      <div className="container-lg  lg:grid lg:grid-cols-2 flex flex-col-reverse   h-full justify-center items-start">
        <div className=" transition ease-in duration-300 w-full h-full lg:h-full lg:w-full  md:h-[40%] gap-3  flex flex-col lg:justify-center ">
          <h1
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className=" text-custom-blue lg:text-[50px] text-[28px] font-extrabold"
          >
            Grow your business with Akeshya
          </h1>
          <h2
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className=" text-custom-black lg:text-[24px] lg:mb-[50px] text-[18px] mb-[27px] font-medium "
          >
            We are team of talented website designers, developers & digital
            marketeers
          </h2>
          <button
            data-aos="fade-up"
            data-aos-delay="800"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="btn p-2   border-custom-blue text-custom-blue text-[16px] rounded-full w-[150px] h-[50px] pt-[10px]  pr-[30px] hover:bg-custom-blue hover:text-white "
          >
            Get Started
          </button>
        </div>

        <div
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1000"
          className=" w-full h-full lg:h-full lg:w-full md:h-[60%] flex justify-center"
        >
          <div className="img-animation hidden lg:flex w-[487px] h-[362px] lg:w-[578px] lg:h-[430px] relative mx-auto mt-2  justify-center overflow-hidden ">
            <Image src="/hero-img.png" alt="logo" fill sizes="100vw" />
          </div>
          <div className="lg:hidden w-[487px] h-[362px] lg:w-[578px] lg:h-[430px] relative mx-auto mt-2  justify-center overflow-hidden ">
            <Image src="/hero-img.png" alt="logo" fill sizes="100vw" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
