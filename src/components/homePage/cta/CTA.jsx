"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const ctaRef = useRef(null);
  const h2Ref = useRef(null);

  // Circular gradient hover effect
  useEffect(() => {
    const h2 = h2Ref.current;
    if (!h2) return;

    const handleMouseMove = (e) => {
      const rect = h2.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      h2.style.background = `radial-gradient(circle at ${x}px ${y}px, #fdd204, #f7b518 60%)`;
      h2.style.webkitBackgroundClip = "text";
      h2.style.backgroundClip = "text";
      h2.style.color = "transparent";
    };

    const resetGradient = () => {
      h2.style.background = "linear-gradient(135deg, #f7b518, #fdd204)";
      h2.style.webkitBackgroundClip = "text";
      h2.style.backgroundClip = "text";
      h2.style.color = "transparent";
    };

    h2.addEventListener("mousemove", handleMouseMove);
    h2.addEventListener("mouseleave", resetGradient);

    return () => {
      h2.removeEventListener("mousemove", handleMouseMove);
      h2.removeEventListener("mouseleave", resetGradient);
    };
  }, []);

  return (
    <section className="relative w-full bg-white py-24 px-6 flex flex-col justify-center items-center">
      <h2
        ref={h2Ref}
        className="text-3xl md:text-5xl font-semibold max-w-4xl mx-auto text-center leading-snug select-none transition-all duration-300"
        style={{
          background: "linear-gradient(135deg, #f7b518, #fdd204)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Cost-effective, reliable and used by hundreds of pharmacies today
      </h2>
      <button className="mt-8 bg-[#f7b518] text-black font-semibold py-3 px-6 rounded-full transition-all hover:bg-[#fdd204]">
        Get started
      </button>
    </section>
  );
};

export default CTA;
