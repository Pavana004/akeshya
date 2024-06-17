import Link from "next/link";
import React from "react";
import {
  RiWindowLine,
  RiCodeBoxLine,
  RiCreativeCommonsByLine,
  RiPlayCircleLine,
  RiSearchEyeLine,
  RiTodoLine,
  RiBarChartGroupedLine,
  RiMapPin2Line,
  RiContactsBookLine,
  RiDiscLine,
  RiCalendarEventLine,
  RiAdvertisementFill,
} from "react-icons/ri";

const OurCoreProcess = () => {
  return (
    <div className="lg:w-full lg:h-[full] relative md:w-full md:h-full sm:w-full sm:h-full ">
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
            OUR CORE FEATURES
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
          data-aos-delay="150"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          className="lg:w-full lg:h-fit text-center mb-5"
        >
          Akeshya is a forward-thinking and intelligent design firm that is
          technically and creatively capable of transforming your brand into its
          best digital self. Our approach to design and development results in
          compelling, engaging branding and immersive digital experiences that
          provide a value for money.
        </p>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        className="container-lg lg:w-full lg:h-full md:w-full md:h-full  flex flex-wrap justify-between gap-y-10  "
      >
        <div className="lg:w-[300px] lg:h-[72px] md:w-[215px] md:h-[72px] w-[401px] h-[72px]  bg-custom-card-white">
          <div className="box-1 lg:w-[300px] lg:h-[72px] font-bold">
            <RiWindowLine
              size={32}
              color="#ffbb2c"
              className=" leading-none "
            />
            <Link href="/">
              <h5>Web design</h5>
            </Link>
          </div>
        </div>
        <div className="lg:w-[300px] lg:h-[72px] bg-custom-card-white md:w-[215px] md:h-[72px] w-[401px] h-[72px] ">
          <div className="box-1 font-bold lg:w-[300px] lg:h-[72px] ">
            <RiCodeBoxLine size={32} color="#5578ff" />
            <Link href="/">
              <h5>Development</h5>
            </Link>
          </div>
        </div>
        <div className="lg:w-[300px] lg:h-[72px] bg-custom-card-white md:w-[215px] md:h-[72px] w-[401px] h-[72px] ">
          <div className=" box-1 font-bold lg:w-[300px] lg:h-[72px] ">
            <RiCreativeCommonsByLine size={32} color="#e80368" />
            <Link href="/">
              <h5>Branding</h5>
            </Link>
          </div>
        </div>
        <div className=" lg:w-[300px] lg:h-[72px] bg-custom-card-white md:w-[215px] md:h-[72px] w-[401px] h-[72px] ">
          <div className="box-1 font-bold lg:w-[300px] lg:h-[72px] ">
            <RiPlayCircleLine size={32} color="#e361ff" />
            <Link href="/">
              <h5>Media buying</h5>
            </Link>
          </div>
        </div>
        <div className="lg:w-[300px] lg:h-[72px] bg-custom-card-white md:w-[215px] md:h-[72px] w-[401px] h-[72px] ">
          <div className=" box-1 font-bold lg:w-[300px] lg:h-[72px] ">
            <RiSearchEyeLine size={32} color="#47aeff" />
            <Link href="/">
              <h5>Search engine</h5>
            </Link>
          </div>
        </div>
        <div className="lg:w-[300px] lg:h-[72px] bg-custom-card-white md:w-[215px] md:h-[72px] w-[401px] h-[72px] ">
          <div className=" box-1 font-bold lg:w-[300px] lg:h-[72px] ">
            <RiTodoLine size={32} color="#ffa76e" />
            <Link href="/">
              <h5>Brand strategy</h5>
            </Link>
          </div>
        </div>
        <div className="lg:w-[300px] lg:h-[72px] bg-custom-card-white md:w-[215px] md:h-[72px] w-[401px] h-[72px] ">
          <div className=" box-1 font-bold lg:w-[300px] lg:h-[72px] ">
            <RiMapPin2Line size={32} color="#dbce11" />
            <Link href="/">
              <h5>Local search marketing</h5>
            </Link>
          </div>
        </div>
        <div className="lg:w-[300px] lg:h-[72px] bg-custom-card-white md:w-[215px] md:h-[72px] w-[401px] h-[72px] ">
          <div className=" box-1 font-bold lg:w-[300px] lg:h-[72px] ">
            <RiBarChartGroupedLine size={32} color="#4233ff" />
            <Link href="/">
              <h5>Lead Tracking & Management</h5>
            </Link>
          </div>
        </div>
        <div className="lg:w-[300px] lg:h-[72px] bg-custom-card-white md:w-[215px] md:h-[72px] w-[401px] h-[72px] ">
          <div className=" box-1 font-bold lg:w-[300px] lg:h-[72px] ">
            <RiContactsBookLine size={32} color="#b2904f" />
            <Link href="/">
              <h5>Contact management</h5>
            </Link>
          </div>
        </div>
        <div className="lg:w-[300px] lg:h-[72px] bg-custom-card-white md:w-[215px] md:h-[72px] w-[401px] h-[72px] ">
          <div className="box-1 font-bold lg:w-[300px] lg:h-[72px] ">
            <RiDiscLine size={32} color="#b20969" />
            <Link href="/">
              <h5>Media management</h5>
            </Link>
          </div>
        </div>
        <div className="lg:w-[300px] lg:h-[72px] bg-custom-card-white md:w-[215px] md:h-[72px] w-[401px] h-[72px] ">
          <div className="box-1 font-bold lg:w-[300px] lg:h-[72px] ">
            <RiCalendarEventLine size={32} color="#ff5828" />
            <Link href="/">
              <h5>Social scheduling</h5>
            </Link>
          </div>
        </div>
        <div className="lg:w-[300px] lg:h-[72px] bg-custom-card-white md:w-[215px] md:h-[72px] w-[401px] h-[72px] ">
          <div className="box-1 font-bold lg:w-[300px] lg:h-[72px] ">
            <RiAdvertisementFill size={32} color="#29cc61" />
            <Link href="/">
              <h5>Ad retargeting</h5>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCoreProcess;
