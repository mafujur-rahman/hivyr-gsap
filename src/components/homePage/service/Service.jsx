"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { LuLightbulb } from "react-icons/lu";
import { MdOutlinePayments } from "react-icons/md";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Service = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const cards = cardRefs.current;
    const lastCard = cards[cards.length - 1]; 

    cards.forEach((card) => {
      if (!card) return;

      gsap.to(card, {
        scale: 0.95, 
        scrollTrigger: {
          trigger: card,
          start: "top 20%", 
          endTrigger: lastCard,
          end: "center center", 
          pin: true,
          pinSpacing: false,
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[#f7b518] text-sm font-semibold text-center uppercase mb-2">SERVICES</p>
        <h2 className="text-4xl xl:text-6xl font-bold text-gray-900 text-center mb-20">
          Our software streamlines your <br /> existing delivery process
        </h2>

        {[0, 1, 2].map((i) => (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            className={`relative bg-gray-100 rounded-3xl p-16 flex items-start overflow-hidden shadow-lg h-[600px] mt-10 z-[${i + 10}]`}
          >
            {/* Left side content */}
            <div className="w-1/2 pr-10 pt-8">
              <div className="mb-4">
                <div className="bg-gray-200 p-3 rounded-full w-fit mb-5">
                  {i === 0 && <LuLightbulb className="w-8 h-8 text-gray-800" />}
                  {i === 1 && <MdOutlinePayments className="w-8 h-8 text-gray-800" />}
                  {i === 2 && <IoIosCheckmarkCircleOutline className="w-8 h-8 text-gray-800" />}
                </div>
                <h3 className="text-4xl xl:text-5xl font-bold text-gray-900 mb-8">
                  {i === 0 && "Simple and efficient"}
                  {i === 1 && "Payments made easy"}
                  {i === 2 && "Secure and compliant"}
                </h3>
              </div>
              <p className="text-gray-600 text-lg lg:text-2xl max-w-md font-medium">
                {i === 0 &&
                  "Leverage AI to seamlessly create, manage and track your deliveries"}
                {i === 1 &&
                  "Our patented payment solution eliminates clunky payment experiences and manual keypad credits"}
                {i === 2 &&
                  "Compliant data security and storage according to industry standards."}
              </p>
            </div>

            {/* Right side content */}
            <div className="w-1/2 relative h-full flex items-center justify-center">
              {i === 0 && (
                <video
                  src="/video/service/service-1.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-[55%] h-full object-cover rounded-3xl shadow-xl"
                ></video>
              )}
              {i === 1 && (
                <Image
                  src="/images/service/service-2.avif"
                  alt="Payments Illustration"
                  fill
                  className="object-contain rounded-3xl"
                  priority
                />
              )}
              {i === 2 && (
                <img
                  src="/images/service/service-3.avif"
                  alt="Mobile App Mockup"
                  className="w-full h-[75%] object-cover rounded-3xl shadow-2xl"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
