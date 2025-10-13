"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import {
  FaChartLine,
  FaMicrophoneAlt,
  FaClosedCaptioning,
  FaVolumeUp,
  FaStore,
} from "react-icons/fa";

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
      image: "/images/service/speech.png",
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


            {/* Right side section */}
            <div className="w-1/2 relative h-full flex items-center justify-center">
              {i === 0 || i === 3 ? (
                // 1st & 4th card layout
                <div className="relative w-[75%] h-[100%] flex items-center justify-center">
                  <div className="relative w-[75%] h-[90%]">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      className="object-cover rounded-3xl"
                      priority
                    />
                  </div>

                  {/* Mini cards for 1st & 4th */}
                  <div className="absolute top-10 left-[-80px] bg-white shadow-xl rounded-2xl p-5 w-[200px]">
                    <p className="text-sm text-gray-400 uppercase font-semibold mb-1">
                      AI METRICS
                    </p>
                    <p className="text-black font-bold text-lg">
                      Accuracy: <span className="text-[#fdd204]">99.4%</span>
                    </p>
                  </div>

                  <div className="absolute bottom-10 right-[-80px] bg-white shadow-xl rounded-2xl p-5 w-[220px]">
                    <p className="text-sm text-gray-400 uppercase font-semibold mb-1">
                      Processing Time
                    </p>
                    <p className="text-black font-bold text-lg">1.2s avg</p>
                    <button className="mt-3 text-sm text-white bg-black px-4 py-2 rounded-full">
                      View Report
                    </button>
                  </div>
                </div>
              ) : i === 1 || i === 4 ? (
                // 2nd & 5th card layout 
                <div className="relative w-[100%] h-[100%] flex items-center justify-center">
                  <div className="relative w-[100%] h-[65%]">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      className="object-cover rounded-3xl"
                      priority
                    />
                  </div>

                  {/* Mini cards for 2nd & 5th */}
                  <div className="absolute top-10 left-[-80px] bg-[#fdd204] shadow-xl rounded-2xl p-5 w-[200px]">
                    <p className="text-sm text-black uppercase font-semibold mb-1">
                      Active Items
                    </p>
                    <p className="text-black font-bold text-lg">
                      120+ available
                    </p>
                  </div>

                  <div className="absolute bottom-1 right-[-40px] bg-white shadow-xl rounded-2xl p-5 w-[220px]">
                    <p className="text-sm text-gray-400 uppercase font-semibold mb-1">
                      Details
                    </p>
                    <p className="text-black font-bold text-lg">
                      Explore latest updates
                    </p>
                    <button className="mt-3 text-sm text-white bg-black px-4 py-2 rounded-full">
                      View
                    </button>
                  </div>

                </div>
              ) : (
                // Default layout for other cards
                <div className="relative w-[100%] h-[100%]">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-contain rounded-3xl"
                    priority
                  />
                </div>
              )}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
