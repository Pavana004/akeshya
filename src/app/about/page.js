"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { RiCheckDoubleLine } from "react-icons/ri";
import count from "../../../public/counts-img.svg";
import CountUp from "react-countup";
import {
  BsEmojiSmile,
  BsJournalRichtext,
  BsClock,
  BsGlobe2,
} from "react-icons/bs";

import "../../../src/app/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div
        id="about"
        className="lg:w-full lg:h-[440px] relative md:w-full md:h-full sm:w-full sm:h-full mt-28 "
      >
        <div className="container-lg w-full h-full flex flex-col gap-4 ">
          <div className=" w-full h-[58px]   flex justify-center items-center align-middle mx-auto mt-11    ">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="150"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              className=" w-[50px]  h-[3px] bg-custom-text-bule transition-all ease-in-out duration-500"
            ></div>
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="150"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              className=" text-[32px] font-bold text-custom-text-black m-3 transition-all ease-in-out duration-500"
            >
              ABOUT US
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="150"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              className=" w-[50px]  h-[3px] bg-custom-text-bule transition-all ease-in-out duration-500"
            ></div>
          </div>
          <div className="contanier w-full h-full transition-all ease-in-out duration-300   lg:flex lg:flex-row md:flex md:flex-col  gap-5">
            <div className=" w-full h-full flex flex-col gap-3">
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="150"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                className="transition-all ease-in-out duration-500 "
              >
                We are Akeshya, a firm that specializes in web design and
                marketing. We help transform ideas into reality with a team of
                passionate graphic designers, web developers, and seasoned
                marketing advisors.
              </p>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="150"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                className="flex gap-2 transition-all ease-in-out duration-500"
              >
                <div>
                  <RiCheckDoubleLine size={20} color="#14279b" />
                </div>
                <p>
                  We started with a simple idea: do what is best for the client.
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="150"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                className="flex  gap-2 transition-all ease-in-out duration-500"
              >
                <div>
                  <RiCheckDoubleLine size={20} color="#14279b" />
                </div>
                <p>
                  Our methodical and individual approach to each project
                  delivers the finest possible results for your media.
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="150"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                className="flex  gap-2 transition-all ease-in-out duration-500"
              >
                <div>
                  <RiCheckDoubleLine size={20} color="#14279b" />
                </div>
                <p>
                  Our day-to-day work is to solve your problems utilising the
                  most up-to-date, practical adaptive technology, and we have a
                  lot of fun doing it.
                </p>
              </div>
            </div>
            <div className="w-full h-full">
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                className="mb-4 transition-all ease-in-out duration-500"
              >
                We're professional, but we're also friendly, and we'll always
                pay attention to your concerns. We expect to work with
                innovative people that have an open mind and are dedicated to
                making every idea a reality. We want to hear from you if you're
                interested in SEO, have Web Development ideas, or require a
                graphic designer who can match your goals.
              </p>
              <Link href="/" className="w-[25%]">
                <button
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-once="true"
                  className="btn p-2 transition-all ease-in-out duration-500 font-bold  border-custom-blue text-custom-blue text-[16px] rounded-full w-[150px] h-[40px] pt-[10px]  pr-[30px] hover:bg-custom-blue hover:text-white "
                >
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-full lg:h-[360px] md:w-full md:h-[100vh] ml:w-full ml:h-fit w-[100%] h-[100vh] pt-[20px]top-0 left-0 ">
        <div className="container-lg lg:w-full lg:h-full lg:flex  md:w-full md:h-[100vh] lg:gap-6 ml:flex ml:flex-col    ">
          <div className="transition-all ease-in-out duration-300 w-[45%] h-full  md:w-full md:h-[374px] lg:w-[526px] lg:h-[300px] md:flex md:flex-col ml:gap-2 ml:justify-center ml:align-middle ml:mx-auto ">
            <div className="transition-all ease-in-out duration-500 w-[380px] h-[250px]  md:w-[487px] md:h-[277px] lg:w-[526px] lg:h-[300px] relative mx-auto ">
              <Image
                data-aos="fade-right"
                data-aos-delay="150"
                data-aos-duration="1000 "
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                src={count}
                alt="count"
                fill
              />
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className="grid lg:grid-cols-2 md:grid-cols-2 transition-all ease-in-out duration-500 lg:w-[50%] lg:h-fit md:w-full md:h-fit lg:my-auto grid-cols-1  ml:w-[80%] "
          >
            <div className=" w-[70%] h-[100px]">
              <div className="flex justify-start   items-center w-full h-fit  my-auto ">
                <BsEmojiSmile size={36} color="#14279b" className="mt-2" />
                <CountUp
                  end={3835039}
                  duration={5}
                  delay={1}
                  className="text-[38px] font-bold font-sans ml-5"
                />
              </div>
              <p className=" ml-14 w-full h-full">
                <strong>Organic Reach</strong>
                (Global)
              </p>
            </div>
            <div className="  w-[70%] h-[100px] ">
              <div className="flex justify-start   items-center w-full h-fit  my-auto">
                <BsJournalRichtext size={36} color="#14279b" className="mt-2" />
                <CountUp
                  end={85}
                  duration={5}
                  delay={1}
                  className="text-[38px] font-bold font-sans ml-5"
                />
              </div>
              <p className=" ml-14 w-full h-full">
                <strong>Campaigns</strong>
              </p>
            </div>
            <div className=" w-[70%] h-[100px] ">
              <div className="flex justify-start   items-center w-full h-fit  my-auto">
                <BsClock size={36} color="#14279b" className="mt-2" />
                <CountUp
                  end={14081}
                  duration={5}
                  delay={1}
                  className="text-[38px] font-bold font-sans ml-5"
                />
              </div>
              <p className=" ml-16 w-full h-full">
                <strong>Watch Hours</strong> (Asia)
              </p>
            </div>
            <div className="  w-[70%] h-[100px] ">
              <div className="flex justify-start   items-center w-full h-fit  my-auto">
                <BsGlobe2 size={36} color="#14279b" className="mt-2" />
                <CountUp
                  end={17}
                  duration={5}
                  delay={1}
                  className="text-[38px] font-bold font-sans ml-5"
                />
              </div>
              <p className=" ml-16 w-full h-full">
                <strong>Excellent CTR</strong>
                %(Asia)
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
