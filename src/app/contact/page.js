import React from "react";
import { RiMapPinLine, RiMailSendLine, RiPhoneLine } from "react-icons/ri";

const Contact = () => {
  return (
    <div className="lg:w-full lg:h-[full] relative md:w-full md:h-full sm:w-full sm:h-full mt-28 ">
      <div className="container-lg lg:w-full lg:h-full md:w-full md:h-full   flex flex-col gap-4 ">
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
            className=" lg:text-[32px] md:text-[32px] text-[25px]  font-bold text-custom-text-black m-3 "
          >
            CONTACT US
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
      </div>

      <div className="container-lg lg:w-full lg:h-full md:w-full md:h-full w-full h-fit   lg:flex md:flex   md:flex-wrap lg:flex-nowrap   justify-between mt-5 gap-3 ">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          className=" lg:w-[439px] lg:h-[378px] md:w-[360px] md:h[190px] mb-5   "
        >
          <div>
            <h3 className="text-[28px] font-bold text-custom-blue tracking-wide mb-[10px]	">
              Akeshya
            </h3>
            <p className="text-[14px]">
              Designers, developers & marketeers capable of delivering solutions
              according to your needs,
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          className="lg:w-[330px] lg:h-[378px] md:w-[360px] md:h[190px] mb-5   "
        >
          <div className="w-full h-full flex flex-col gap-10 ">
            <div className="flex ">
              <div className="pb-[10]">
                <RiMapPinLine size={32} color="14279b" />
              </div>
              <p className="text-[14px] pl-[10px] font-sans ">
                26-2-789, 7th street, Jyothi Nagar, Nellore, Andhra Pradesh
                524004
              </p>
            </div>
            <div className="flex">
              <div>
                <RiMailSendLine size={32} color="14279b" />
              </div>
              <p className="text-[14px] pl-[10px] font-sans">nfo@akeshya.com</p>
            </div>
            <div className="flex">
              <div>
                <RiPhoneLine size={32} color="14279b" />
              </div>
              <p className="text-[14px] pl-[10px] font-sans">+91 94942 40922</p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          className="lg:w-[526px] lg:h-fit md:w-full md:h-fit w-full h-[376px] mb-5   "
        >
          <form className="flex flex-col gap-4">
            <div className=" lg:h-[42px] lg:w-full">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="  lg:h-[42px] lg:w-full md:w-full md:h-fit w-full h-[42px] bg-white border-1 px-4 py-3 border-solid border-[#ced4da] appearance-none outline-none  duration-100 focus:border-[#14279b]  "
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                required
                className="  lg:h-[42px] lg:w-full md:w-full md:h-fit w-full h-[42px] bg-white border-1 px-4 py-3 border-solid border-[#ced4da] appearance-none outline-none  duration-100 focus:border-[#14279b] "
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                required
                className="  lg:h-[42px] lg:w-full md:w-full md:h-fit w-full h-[42px] bg-white border-1 px-4 py-3 border-solid border-[#ced4da] appearance-none outline-none  duration-100 focus:border-[#14279b] "
              />
            </div>
            <div>
              <textarea
                type="text"
                placeholder="Message"
                required
                className="  lg:h-[126px] lg:w-full md:w-full md:h-[126px] w-full h-[80px]  bg-white border-1 px-4 py-3 border-solid border-[#ced4da] appearance-none outline-none  duration-100 focus:border-[#14279b] "
                rows="20"
              />
            </div>
            <div className="lg:h-[42px] lg:w-full md:w-full md:h-fit flex justify-center mb-5 ">
              <button
                type="submit"
                className="lg:h-fit lg:w-[154px] text-center bg-custom-text-bule text-custom-white  font-sans text-[16px] px-4 py-3 rounded-full hover:bg-[#2383c4]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
