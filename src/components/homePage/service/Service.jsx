"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { FaChartLine, FaMicrophoneAlt, FaClosedCaptioning, FaVolumeUp, FaStore } from "react-icons/fa";


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

  // Card content data
  const services = [
    {
      title: "Hivyr Analytics",
      description:
        "Improve quality of experience with real-time monitoring, measurement, alerts, and diagnostics.",
      image: "/images/service/analytics.jpg",
      alt: "A graph detailing an upward growth trend",
      icon: <FaChartLine />,
    },
    {
      title: "Recording",
      description:
        "Flexible options to record audio streams, video streams, and web pages for archive, review, or distribution.",
      image: "/images/service/recording.jpg",
      alt: "Recording interface visualization",
      icon: <FaMicrophoneAlt />,
    },
    {
      title: "Real-Time Speech to Text",
      description:
        "Add live captions to calls and streams, generate transcripts, and integrate with large language models (LLMs).",
      image: "/images/service/speech.jpg",
      alt: "A glowing blue orb surrounded by iridescent rings",
      icon: <FaClosedCaptioning />,
    },
    {
      title: "AI Noise Suppression",
      description:
        "Reduce background noise for real-time audio and video with powerful AI enhancement.",
      image: "/images/service/noise-supresion.jpg",
      alt: "Overlapping transparent rectangles with gradients",
      icon: <FaVolumeUp />,
    },
    {
      title: "Extensions Marketplace",
      description:
        "Easily integrate powerful, fun, and interactive features into your real-time app.",
      image: "/images/service/marketplace.jpg",
      alt: "Marketplace of interactive extensions",
      icon: <FaStore />,
    },
  ];


  return (
    <section className="bg-white py-20 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[#fdd204] text-sm font-semibold text-center uppercase mb-2">
          SERVICES
        </p>
        <h2 className="text-4xl xl:text-6xl font-bold text-black text-center mb-20">
          Powerful tools to elevate your <br /> real-time communication
        </h2>

        {services.map((service, i) => (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            className={`relative bg-gray-100 rounded-3xl p-16 flex items-start overflow-hidden shadow-lg h-[600px] mt-10 z-[${i + 10}]`}
          >
            {/* Left side content */}
            <div className="w-1/2 pr-10 pt-8">

              <p className="text-xl text-black bg-[#fdd204] rounded-full w-fit p-5 mb-8">
                {service.icon}
              </p>
              <h3 className="text-4xl xl:text-5xl font-bold text-black mb-8">
                {service.title}
              </h3>
              <p className="text-gray-600 text-lg lg:text-2xl max-w-md font-medium">
                {service.description}
              </p>
            </div>

            {/* Right side image */}
            <div className="w-1/2 relative h-full flex items-center justify-center">
              <div className="relative w-[80%] h-[100%]">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-contain rounded-3xl "
                  priority
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
