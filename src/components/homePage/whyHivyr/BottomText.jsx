"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BottomText = () => {
    const fadeTextRef = useRef(null);
    const h2Ref = useRef(null);

    useEffect(() => {
        const fadeText = fadeTextRef.current;
        const h2 = h2Ref.current;

        // --- Scroll fade-in animation ---
        gsap.fromTo(
            fadeText,
            { y: 0, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.4,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: fadeText,
                    start: "top 80%",
                },
            }
        );

        // --- Gradient hover animation ---
        if (!h2) return;

        const handleMouseMove = (e) => {
            const rect = h2.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

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
            h2.style.transition = "background 0.2s ease";
        };

        const resetGradient = () => {
            h2.style.background = `
        linear-gradient(90deg, #ff5423 0%, #ffaa22 60%, #6be09c 100%)
      `;
            h2.style.webkitBackgroundClip = "text";
            h2.style.backgroundClip = "text";
            h2.style.color = "transparent";
        };

        // Initialize + attach events
        resetGradient();
        h2.addEventListener("mousemove", handleMouseMove);
        h2.addEventListener("mouseleave", resetGradient);

        return () => {
            h2.removeEventListener("mousemove", handleMouseMove);
            h2.removeEventListener("mouseleave", resetGradient);
        };
    }, []);

    return (
        <section
            ref={fadeTextRef}
            className="relative bg-black text-center py-32 flex justify-center overflow-hidden"
        >
            <h2
                ref={h2Ref}
                className="text-3xl md:text-4xl xl:text-6xl font-bold leading-snug max-w-6xl mx-auto"
            >
                More time to focus on innovation<br />
                More time to make smarter decisions<br />
                More time to grow your business
            </h2>
        </section>
    );
};

export default BottomText;
