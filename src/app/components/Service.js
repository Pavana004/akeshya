import React from "react";
import { FaDribbble } from "react-icons/fa";
import { BiWorld, BiTachometer } from "react-icons/bi";
import Link from "next/link";
import "../../../src/app/globals.css";

const Service = () => {
  return (
    <div
      id="service"
      className="lg:w-full lg:h-[full] relative md:w-full md:h-full sm:w-full sm:h-full "
    >
      <div className="container-lg lg:w-full lg:h-full md:w-full md:h-full   flex flex-col gap-4 mt-7 ">
        <div className=" w-full h-[58px]  flex justify-center items-center align-middle mx-auto mt-11    ">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="150"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className=" w-[50px]  h-[3px] bg-custom-text-bule"
          ></div>
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="150"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className=" text-[32px] font-bold text-custom-text-black m-3"
          >
            SERVICES
          </h1>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="150"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className=" w-[50px]  h-[3px] bg-custom-text-bule"
          ></div>
        </div>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          className="lg:w-full lg:h-fit text-center"
        >
          Akeshya will serve as your consultant and development partner to help
          you turn your idea into a reality.
        </p>
        <div className=" grid lg:grid-cols-4 md:grid-cols-2 md:gap-10 md:mx-auto gap-4    ">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className="card lg:w-[306px] lg:h-[400px]  md:w-[360px] md:h-[370px] w-[401px] h-[316px]   rounded-lg shadow-white shadow-md  p-[30px] flex flex-col gap-4   "
          >
            <div className="card-icon">
              <div className="icon lg:w-[60px] lg:h-[60px] md:w-[60px] md:h-[60px] w-[60px] h-[60px]  bg-custom-blue rounded-[50%] mb-[20px] mt-0 text-white   text-[36px] flex align-middle justify-center items-center">
                <FaDribbble className="i" />
              </div>
              <h4 className=" lg:w-full lg:h-fit text-[18px] mb-[15px] font-bold font-sans">
                <Link href="/" className="title">
                  Design
                </Link>
              </h4>
              <p className="description lg:w-full lg:h-fit text-[15px] text-custom-black leading-relaxed ">
                Our web design services can assist you in reclaiming your
                company's online image. Your business will flourish on the
                Internet thanks to the combination of style and technology we
                provide, as well as our experience.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className="card lg:w-[306px] lg:h-[400px] md:w-[336px] md:h-[370px]   w-[401px] h-[316px]  rounded-lg shadow-white  shadow-md p-[30px] flex flex-col gap-4   "
          >
            <div className="card-icon">
              <div className="icon lg:w-[60px] lg:h-[60px] md:w-[60px] md:h-[60px] w-[60px] h-[60px] bg-custom-blue rounded-[50%] mb-[20px] mt-0 text-white   text-[36px] flex align-middle justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="i"
                >
                  <path
                    fill="currentColor"
                    d="M19.903 8.586a.997.997 0 0 0-.196-.293l-6-6a.997.997 0 0 0-.293-.196c-.03-.014-.062-.022-.094-.033a.991.991 0 0 0-.259-.051C13.04 2.011 13.021 2 13 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-.021-.011-.04-.013-.062a.952.952 0 0 0-.051-.259c-.01-.032-.019-.063-.033-.093M16.586 8H14V5.414zM6 20V4h6v5a1 1 0 0 0 1 1h5l.002 10z"
                  />
                  <path
                    fill="currentColor"
                    d="M8 12h8v2H8zm0 4h8v2H8zm0-8h2v2H8z"
                  />
                </svg>
              </div>
              <h4 className=" lg:w-full lg:h-fit text-[18px] mb-[15px] font-bold font-sans">
                <Link href="/" className="title">
                  Development
                </Link>
              </h4>
              <p className="description lg:w-full lg:h-fit text-[15px] text-custom-black leading-relaxed ">
                Our development team can construct platforms to help your
                business thrive by creating powerful customised solutions
                tailored to your particular requirements. Akeshya makes use of
                established and effective web development tools.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className="card lg:w-[306px] lg:h-[400px] md:w-[336px] md:h-[370px]  w-[401px] h-[316px]  rounded-lg shadow-white  shadow-md p-[30px] flex flex-col gap-4   "
          >
            <div className="card-icon">
              <div className="icon lg:w-[60px] lg:h-[60px] md:w-[60px] md:h-[60px] w-[60px] h-[60px] bg-custom-blue rounded-[50%] mb-[20px] mt-0 text-white   text-[36px] flex align-middle justify-center items-center">
                <BiWorld className="i" />
              </div>
              <h4 className=" lg:w-full lg:h-fit text-[18px] mb-[15px] font-bold font-sans">
                <Link href="/" className="title">
                  Marketing
                </Link>
              </h4>
              <p className="description lg:w-full lg:h-fit text-[15px] text-custom-black leading-relaxed ">
                A beautiful website is the foundation of effective marketing.
                Our customers achieve success where it counts—in the real
                world—by combining our proven approach with our passion for
                improving conversions and increasing ROI
              </p>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className="card lg:w-[306px] lg:h-[400px] md:w-[336px] md:h-[370px]   w-[401px] h-[316px]  rounded-lg shadow-white  shadow-md p-[30px] flex flex-col gap-4   "
          >
            <div className="card-icon">
              <div className="icon lg:w-[60px] lg:h-[60px] md:w-[60px] md:h-[60px] w-[60px] h-[60px] bg-custom-blue rounded-[50%] mb-[20px] mt-0 text-white   text-[36px] flex align-middle justify-center items-center">
                <BiTachometer className="i" />
              </div>
              <h4 className=" lg:w-full lg:h-fit text-[18px] mb-[15px] font-bold font-sans">
                <Link href="/" className="title">
                  Support
                </Link>
              </h4>
              <p className="description lg:w-full lg:h-fit text-[15px] text-custom-black leading-relaxed ">
                Since the beginning, we at Akeshya have specialised in website
                maintenance. We recognise the significance of having your
                business online 24 hours a day, seven days a week, and we've
                created a system to ensure that we're always available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
