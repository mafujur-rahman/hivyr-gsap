"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const h2Ref = useRef(null);

  useEffect(() => {
    const h2 = h2Ref.current;
    if (!h2) return;

    const handleMouseMove = (e) => {
      const rect = h2.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // circular gradient + fade-to-black outside
      h2.style.background = `
        radial-gradient(circle at ${x}px ${y}px, 
          #6be09c 0%, 
          #ffaa22 40%, 
          #ff5423 70%, 
          #000000 100%)
      `;
      h2.style.webkitBackgroundClip = "text";
      h2.style.backgroundClip = "text";
      h2.style.color = "transparent";
    };

    const resetGradient = () => {
      // default static gradient fade to black
      h2.style.background = `
        linear-gradient(90deg, #ff5423 0%, #ffaa22 60%, #000000 100%)
      `;
      h2.style.webkitBackgroundClip = "text";
      h2.style.backgroundClip = "text";
      h2.style.color = "transparent";
    };

    h2.addEventListener("mousemove", handleMouseMove);
    h2.addEventListener("mouseleave", resetGradient);

    // initial setup
    resetGradient();

    return () => {
      h2.removeEventListener("mousemove", handleMouseMove);
      h2.removeEventListener("mouseleave", resetGradient);
    };
  }, []);

  return (
    <section className="relative w-full bg-black py-24 px-6 flex flex-col justify-center items-center">
      <h2
        ref={h2Ref}
        className="text-3xl md:text-5xl font-semibold max-w-4xl mx-auto text-center leading-snug select-none transition-all duration-300"
        style={{
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
         Automate. Optimize. Scale — with next-gen AI Agents built for your business.
      </h2>
      <button className="mt-8 bg-[#fdd204] text-black px-6 py-3 rounded-full hover:bg-[#f7b518] transition-all duration-300">
        Get started
      </button>
    </section>
  );
};

export default CTA;
