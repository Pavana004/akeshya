"use client";

import React, { useEffect } from "react";
import client1 from "../../../public/client-1.png";
import client2 from "../../../public/client-2.png";
import client3 from "../../../public/client-3.png";
import client4 from "../../../public/client-4.png";
import client5 from "../../../public/client-5.png";
import client6 from "../../../public/client-6.png";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Client = () => {
  const data = [
    { id: 1, name: "client1", image: client1, delay: 0, duration: 1000 },
    { id: 2, name: "client2", image: client2, delay: 100, duration: 1000 },
    { id: 3, name: "client3", image: client3, delay: 200, duration: 1000 },
    { id: 4, name: "client4", image: client4, delay: 300, duration: 1000 },
    { id: 5, name: "client5", image: client5, delay: 400, duration: 1000 },
    { id: 6, name: "client6", image: client6, delay: 500, duration: 1000 },
  ];
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className=" transition ease-in duration-300 lg:w-full  lg:h-[140px] md:w-full md:h-fit sm:w-full sm:h-fit bg-custom-gray relative mb-3">
      <div className="container-lg  w-full h-fit  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-center mx- items-center ">
        {data.map((rep, key) => {
          return (
            <div className="grayscale transition-all ease-in-out duration-100 hover:grayscale-0 lg:w-[98px] lg:h-[98px] md:w-[86px] md:h-[110px] w-[56px] h-[76px] text-center flex justify-center align-middle items-center mx-auto relative">
              <Image
                src={rep.image}
                alt={rep.name}
                fill
                objectFit="contain"
                data-aos="zoom-in"
                data-aos-delay={rep.delay}
                data-aos-once="true"
                data-aos-duration={rep.duration}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Client;
