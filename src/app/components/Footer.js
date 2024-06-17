import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-[97px] bg-custom-white shadow-lg shadow-custom-black ">
      <div className="container-lg flex justify-between align-middle items-center w-full h-full">
        <div>
          <p>© Copyright Akeshya. All Rights Reserved</p>
        </div>
        <div className="flex justify-evenly gap-3 text-custom-text-bule ">
          <Link href="/">
            <p className="hover:text-[#2383c4]">Terms and conditions</p>
          </Link>
          <Link href="/">
            <p className="hover:text-[#2383c4]">Refund policy</p>
          </Link>
          <Link href="/">
            <p className="hover:text-[#2383c4]">Privacy policy</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
