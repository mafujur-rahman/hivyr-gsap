"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      {
        rotateX: 15, 
        transformPerspective: 1000,
        transformOrigin: "center center",
      },
      {
        rotateX: 0, 
        scrollTrigger: {
          trigger: imageRef.current,
          start: "bottom bottom", 
          end: "top bottom",      
          scrub: 1.5,             
        },
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <section className="relative w-full flex flex-col items-center justify-center py-20 overflow-hidden">

      {/* Image Container */}
      <div className="w-full flex justify-center mb-12 perspective-1000">
        <div
          ref={imageRef}
          className="w-full max-w-4xl"
        >
          <img
            src="/images/about.avif"
            alt="AI Agent Illustration"
            className="w-full h-auto object-cover rounded-3xl shadow-xl"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="text-center px-6 sm:px-12 max-w-5xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Next-generation prescription logistics software designed to streamline your workflow and boost efficiency.
        </h2>
        <p className="text-gray-600 text-base sm:text-2xl font-medium mb-8 max-w-2xl mx-auto">
          Intelligently designed to streamline workflows and boost efficiency.
        </p>
        <button className="bg-[#f7b518] text-black px-6 py-3 rounded-full hover:bg-[#fdd204] transition-all duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
}
