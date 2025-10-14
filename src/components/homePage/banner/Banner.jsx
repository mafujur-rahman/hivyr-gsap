"use client";
import { useEffect, useRef } from "react";
import Navbar from "@/components/shared/navbar/Navbar";

export default function Banner() {
  const headingRef = useRef(null);
  const subTextRef = useRef(null);

  // 🔹 Title scramble animation
  const scrambleText = (finalText, element) => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";
    const totalFrames = 25;
    let frame = 0;
    const revealProgress = Array(finalText.length).fill(false);

    const update = () => {
      let output = "";
      for (let i = 0; i < finalText.length; i++) {
        if (revealProgress[i] || finalText[i] === " ") {
          output += finalText[i];
        } else {
          output += chars.charAt(Math.floor(Math.random() * chars.length));
        }
      }

      if (element.current) {
        element.current.textContent = output;
        element.current.style.opacity = Math.min(1, frame / totalFrames + 0.4);
      }

      frame++;
      const revealIndex = Math.floor((frame / totalFrames) * finalText.length);
      if (revealIndex < finalText.length) {
        revealProgress[revealIndex] = true;
        requestAnimationFrame(update);
      } else {
        if (element.current) {
          element.current.textContent = finalText;
          element.current.style.opacity = "1";
        }
      }
    };

    requestAnimationFrame(update);
  };

  // 🔹 Smooth description animation (fade + slide from left)
  const revealDescriptionSmooth = (finalText, element) => {
    const words = finalText.split(" ");
    element.current.innerHTML = "";

    words.forEach((word, i) => {
      const span = document.createElement("span");
      span.textContent = word + " ";
      span.style.opacity = "0";
      span.style.display = "inline-block";
      span.style.transform = "translateX(10px)";
      span.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      element.current.appendChild(span);

      // smoother reveal per word
      setTimeout(() => {
        span.style.opacity = "1";
        span.style.transform = "translateX(0)";
      }, i * 80);
    });
  };

  useEffect(() => {
    const headingText = "Empower Your Business with AI Agents";
    const subText =
      "Automate tasks, enhance productivity, and deliver intelligent solutions with AI-powered agents designed for your business.";

    // ✨ Start both animations together
    setTimeout(() => {
      scrambleText(headingText, headingRef);
      revealDescriptionSmooth(subText, subTextRef);
    }, 300);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden px-4 sm:px-8 lg:px-16 py-8 sm:py-12 bg-white z-10">
      {/* Background video */}
      <div className="absolute inset-0 m-2 sm:m-4 xl:m-5 rounded-2xl overflow-hidden">
        <video
          className="w-full h-full object-cover rounded-2xl"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video/banner/banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/45 rounded-2xl"></div>
      </div>

      {/* Navbar */}
      <div className="absolute top-0 left-0 right-0 z-20 px-4 sm:px-8 lg:px-16 py-4 pt-6">
        <Navbar />
      </div>

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white max-w-5xl px-4 sm:px-8">
        <h1
          ref={headingRef}
          className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-tight transition-opacity duration-700"
        ></h1>
        <p
          ref={subTextRef}
          className="text-base sm:text-lg lg:text-xl mt-6 text-gray-100 leading-relaxed transition-opacity duration-700"
        ></p>
      </div>
    </section>
  );
}
