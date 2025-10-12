"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#f7b518] text-black px-6 md:px-10 xl:px-48 pt-8 pb-16 overflow-hidden relative">
      <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-3">
        <div className="flex flex-col md:flex-row items-center gap-3">
          <p>© 2025 Hivyr. All rights reserved.</p>
          <p className="cursor-pointer hover:underline">Privacy Policy</p>
        </div>
        <div className="flex flex-wrap justify-center gap-5 items-center">
          <a href="mailto:hivyrsales@.ai" className="hover:underline" target="_blank">
            sales@hivyr.ai ↗
          </a>
          <a href="#" className="hover:underline" target="_blank">
            Book a demo ↗
          </a>
          <a href="#" className="hover:underline" target="_blank">
            Linkedin ↗
          </a>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h1 className="text-[18vw] md:text-[10vw] font-extrabold leading-none">
          Hivyr
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
