import React from "react";
import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-transparent border-r-transparent">
      <div className="container p-12  flex justify-between mx-auto">
      <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <Image src="/images/fslogo.png" width={70} height={70} alt="fs logo"/>
        </Link>
        <p className="text-slate-600 ">All rights reserved by Clifford Thompson</p>
      </div>
    </footer>
  );
};

export default Footer;
