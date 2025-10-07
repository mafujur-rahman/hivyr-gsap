"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhyHivyr = () => {
    const textRef = useRef(null);
    const pillsRef = useRef(null);
    const leftPillRef = useRef(null);
    const centerPillRef = useRef(null);
    const rightPillRef = useRef(null);

    useEffect(() => {
        const textEl = textRef.current;
        const pillsEl = pillsRef.current;
        const leftPill = leftPillRef.current;
        const centerPill = centerPillRef.current;
        const rightPill = rightPillRef.current;

        // Pin the top text when it reaches 90% of viewport
        ScrollTrigger.create({
            trigger: textEl,
            start: "top 10%",
            endTrigger: pillsEl,
            end: "top-=320 15%",
            pin: true,
            pinSpacing: false,

        });

        gsap.timeline({
            scrollTrigger: {
                trigger: centerPill,
                start: "center 70%",
                end: "bottom+=300 center",
                scrub: 1,
                pin: pillsEl,
                anticipatePin: 1,
            },
        })
            // Move left pill horizontally to center line and straighten
            .to(leftPill, {
                x: window.innerWidth * 0.324,
                rotate: 0,
                ease: "none",
            }, 0)
            // Move right pill horizontally to center line and straighten
            .to(rightPill, {
                x: -window.innerWidth * 0.270,
                rotate: 0,
                ease: "none",
            }, 0)
            // Straighten center pill rotation without moving vertically
            .to(centerPill, {
                rotate: 0,
                ease: "none",
            }, 0);
    }, []);

    return (
        <section className="relative bg-[#f7b518] text-black py-32 overflow-hidden z-10">
            {/* Text Content */}
            <div ref={textRef} className="text-center max-w-2xl mx-auto">
                <p className="uppercase tracking-wide text-sm mb-3">STATS</p>
                <h2 className="text-4xl font-semibold mb-6">Why Hivyr?</h2>
                <p className="text-lg leading-relaxed text-black/90">
                    As the scope of pharmacy expands, Hivyr's mission is to free up the
                    time of pharmacists to allow them to focus on patient care and not on
                    delivery and logistics.
                </p>
            </div>

            {/* Pills Container */}
            <div ref={pillsRef} className="relative w-full flex justify-center py-40 mt-[500px]">

                {/* Left Pill */}
                <div
                    ref={leftPillRef}
                    className="absolute left-[12%] -top-36 rotate-[-20deg] flex items-center"
                >
                    <div className="bg-[#f15a29] text-black font-semibold text-2xl w-28 h-20 flex items-center justify-center rounded-l-full">
                        6-15
                    </div>
                    <div className="bg-gray-200 text-black text-sm w-48 h-20 flex items-center justify-center text-center rounded-r-full">
                        Labour hours<br />saved per week
                    </div>
                </div>

                {/* Center Pill */}
                <div
                    ref={centerPillRef}
                    className="absolute left-[45%] top-20 rotate-[10deg] flex items-center"
                >
                    <div className="bg-[#e9463c] text-black font-semibold text-2xl w-28 h-20 flex items-center justify-center rounded-l-full">
                        1-3
                    </div>
                    <div className="bg-gray-200 text-black text-sm w-48 h-20 flex items-center justify-center text-center rounded-r-full">
                        Delivery customer<br />disputes resolved
                    </div>
                </div>

                {/* Right Pill */}
                <div
                    ref={rightPillRef}
                    className="absolute right-[12%] -top-8 rotate-[15deg] flex items-center"
                >
                    <div className="bg-[#f8a234] text-black font-semibold text-2xl w-28 h-20 flex items-center justify-center rounded-l-full">
                        2-6
                    </div>
                    <div className="bg-gray-200 text-black text-sm w-48 h-20 flex items-center justify-center text-center rounded-r-full">
                        Errors prevented<br />per week
                    </div>
                </div>

            </div>

        </section>
    );
};

export default WhyHivyr;
