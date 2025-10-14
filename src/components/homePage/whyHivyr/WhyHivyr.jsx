"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import BottomText from "./BottomText";

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
        const sectionEl = pillsEl.closest("section");

        // --- Pin the intro text
        ScrollTrigger.create({
            trigger: textEl,
            start: "top 10%",
            endTrigger: pillsEl,
            end: "top-=320 15%",
            pin: true,
            pinSpacing: false,
        });

        // --- Pills main animation
        const pillsTl = gsap.timeline({
            scrollTrigger: {
                trigger: centerPill,
                start: "center 70%",
                end: "bottom+=300 center",
                scrub: 1,
                pin: pillsEl,
                anticipatePin: 1,
            },
        })
            .to(
                leftPill,
                {
                    x: window.innerWidth * 0.324,
                    rotate: 0,
                    ease: "none",
                },
                0
            )
            .to(
                rightPill,
                {
                    x: -window.innerWidth * 0.27,
                    rotate: 0,
                    ease: "none",
                },
                0
            )
            .to(
                centerPill,
                {
                    rotate: 0,
                    ease: "none",
                },
                0
            );

        // --- Revert + full-screen background fadeout
        const revertTl = gsap.timeline({
            scrollTrigger: {
                trigger: pillsEl,
                start: "bottom 65%",
                end: "bottom+=300 center",
                scrub: 1,
            },
        });

        revertTl
            .to(
                leftPill,
                {
                    x: 0,
                    rotate: -20,
                    ease: "power2.out",
                },
                0
            )
            .to(
                rightPill,
                {
                    x: 0,
                    rotate: 15,
                    ease: "power2.out",
                },
                0
            )
            .to(
                centerPill,
                {
                    rotate: 10,
                    ease: "power2.out",
                },
                0
            )
            .to(
                sectionEl,
                {
                    backgroundColor: "rgba(247,181,24,1)",
                    duration: 0,
                },
                0
            )
            .to(
                sectionEl,
                {
                    backgroundColor: "rgba(247,181,24,0)",
                    ease: "power2.out",
                    duration: 1.5,
                },
                0.2
            );
    }, []);

    return (
        <>
            {/* --- Pills Section --- */}
            <section className="relative bg-[#f7b518] text-black py-32 overflow-hidden z-10">
                {/* Text Content */}
                <div ref={textRef} className="text-center max-w-2xl mx-auto">
                    <p className="uppercase tracking-wide text-sm mb-3">STATS</p>
                    <h2 className="text-4xl xl:text-6xl font-bold mb-6">Why Hivyr?</h2>
                    <p className="text-lg leading-relaxed text-black/90">
                        At Hivyr, we harness the power of AI to streamline complex
                        processes and automate repetitive tasks. Our solutions free up your
                        time so you can focus on what truly matters—making smarter
                        decisions, improving productivity, and driving innovation.
                    </p>
                </div>

                {/* Pills Container */}
                <div ref={pillsRef} className="relative w-full flex justify-center py-40 mt-[500px]">
                    {/* Left Pill */}
                    <div
                        ref={leftPillRef}
                        className="absolute left-[12%] -top-36 rotate-[-20deg] flex items-center"
                    >
                        <div className="w-28 h-20 flex items-center justify-center rounded-l-full font-semibold text-2xl text-black 
            bg-gradient-to-br from-[#3b82f6] to-[#1e3a8a] shadow-[inset_0_4px_10px_rgba(255,255,255,0.5),0_6px_12px_rgba(0,0,0,0.25)]
            relative overflow-hidden">
                            <span className="relative z-10">50+</span>
                            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/30 to-transparent rounded-l-full opacity-60"></div>
                        </div>
                        <div className="bg-gradient-to-br from-gray-100 to-gray-300 text-black text-sm w-48 h-20 flex items-center justify-center text-center rounded-r-full shadow-[inset_0_2px_8px_rgba(255,255,255,0.4),0_4px_10px_rgba(0,0,0,0.25)] relative overflow-hidden">
                            <span className="relative z-10">
                                Tasks automated<br />per week
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/30 to-transparent rounded-r-full opacity-60"></div>
                        </div>
                    </div>

                    {/* Center Pill */}
                    <div
                        ref={centerPillRef}
                        className="absolute left-[45%] top-20 rotate-[10deg] flex items-center"
                    >
                        <div className="w-28 h-20 flex items-center justify-center rounded-l-full font-semibold text-2xl text-black bg-gradient-to-br from-[#38bdf8] to-[#0ea5e9] shadow-[inset_0_4px_10px_rgba(255,255,255,0.5),0_6px_12px_rgba(0,0,0,0.25)] relative overflow-hidden">
                            <span className="relative z-10">120+</span>
                            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/30 to-transparent rounded-l-full opacity-60"></div>
                        </div>
                        <div className="bg-gradient-to-br from-gray-100 to-gray-300 text-black text-sm w-48 h-20 flex items-center justify-center text-center rounded-r-full shadow-[inset_0_2px_8px_rgba(255,255,255,0.4),0_4px_10px_rgba(0,0,0,0.25)] relative overflow-hidden">
                            <span className="relative z-10">
                                Decisions optimized<br />daily
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/30 to-transparent rounded-r-full opacity-60"></div>
                        </div>
                    </div>

                    {/* Right Pill */}
                    <div
                        ref={rightPillRef}
                        className="absolute right-[12%] -top-8 rotate-[15deg] flex items-center"
                    >
                        <div className="w-28 h-20 flex items-center justify-center rounded-l-full font-semibold text-2xl text-black bg-gradient-to-br from-[#ffd36e] to-[#e39a00] shadow-[inset_0_4px_10px_rgba(255,255,255,0.5),0_6px_12px_rgba(0,0,0,0.25)] relative overflow-hidden">
                            <span className="relative z-10">99%</span>
                            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/30 to-transparent rounded-l-full opacity-60"></div>
                        </div>
                        <div className="bg-gradient-to-br from-gray-100 to-gray-300 text-black text-sm w-48 h-20 flex items-center justify-center text-center rounded-r-full shadow-[inset_0_2px_8px_rgba(255,255,255,0.4),0_4px_10px_rgba(0,0,0,0.25)] relative overflow-hidden">
                            <span className="relative z-10">
                                Accuracy achieved<br />in AI predictions
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/30 to-transparent rounded-r-full opacity-60"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Bottom Text Section --- */}
            <BottomText />
        </>
    );
};

export default WhyHivyr;
