"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Navbar from "@/components/shared/navbar/Navbar";

export default function Banner() {
    const headingRef = useRef(null);
    const subTextRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            headingRef.current,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }
        );

        gsap.fromTo(
            subTextRef.current,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 1 }
        );
    }, []);

    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden  px-4 sm:px-8 lg:px-16 py-8 sm:py-12 bg-white z-10">

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
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/45 rounded-2xl"></div>
            </div>

            {/* Navbar on top of video */}
            <div className="absolute top-0 left-0 right-0 z-20 px-4 sm:px-8 lg:px-16 py-4 pt-6">
                <Navbar />
            </div>

            {/* Center Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center text-white max-w-5xl px-4 sm:px-8">
                <h1
                    ref={headingRef}
                    className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-tight"
                >
                    Empower Your Business <br /> with AI Agents
                </h1>
                <p
                    ref={subTextRef}
                    className="text-base sm:text-lg lg:text-xl mt-6 text-gray-100"
                >
                    Automate tasks, enhance productivity, and deliver intelligent solutions with AI-powered agents designed for your business.
                </p>
            </div>
        </section>
    );
}
