"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Offerings = () => {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);

    // Cards data
    const cards = [
        {
            id: 1,
            title: "Use your own drivers",
            description:
                "Empower your existing in-house drivers to become more efficient.",
            image: "/images/offering/offering-1.avif",
        },
        {
            id: 2,
            title: "Partner with couriers",
            description:
                "Integrate seamlessly with third-party courier services.",
            image: "/images/offering/offering-2.avif",
        },
        {
            id: 3,
            title: "Hybrid model",
            description:
                "Combine in-house drivers and couriers for maximum reach.",
            image: "/images/offering/offering-3.avif",
        },
    ];

    useEffect(() => {
        const section = sectionRef.current;
        const content = contentRef.current;

        gsap.set(content, { xPercent: 0 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "+=2000",
                scrub: 1.5,
                pin: true,
                anticipatePin: 1,
            },
        });

        // Smooth, steady left scroll
        tl.to(content, {
            xPercent: -55,
            ease: "none",
        });

        return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    }, []);


    return (
        <section
            ref={sectionRef}
            className="relative bg-white py-24 lg:py-40 overflow-hidden z-10"
        >
            {/* Masked Area */}
            <div className="relative max-w-7xl mx-auto overflow-hidden px-6">
                {/* Scrollable Content */}
                <div
                    ref={contentRef}
                    className="flex items-center gap-20 w-[200%]"
                >
                    {/* Left Side */}
                    <div className="flex flex-col lg:flex-row items-center justify-between w-1/2 gap-12 flex-shrink-0">
                        {/* Video */}
                        <div className="lg:w-1/2 flex justify-center shrink-0">
                            <div className="rounded-2xl overflow-hidden shadow-2xl w-full max-w-xl">
                                <video
                                    src="/video/offering/offering.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Text */}
                        <div className="lg:w-1/2 text-center lg:text-left">
                            <p className="text-[#f7b518] font-semibold uppercase tracking-widest text-sm mb-3">
                                OFFERINGS
                            </p>
                            <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-6">
                                Unparalleled flexibility that will fit any pharmacy&apos;s needs
                            </h2>
                            <p className="text-lg lg:text-2xl font-medium text-gray-600 leading-relaxed">
                                We give you the flexibility to deploy various last-mile
                                offerings.
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Mapped Cards */}
                    <div className="flex flex-row items-center justify-center gap-8 w-1/2">
                        {cards.map((card) => (
                            <div
                                key={card.id}
                                className="bg-gray-100 rounded-3xl p-8 w-[400px] flex-shrink-0"
                            >
                                <p className="text-lg font-semibold bg-white text-black w-12 h-12 flex items-center justify-center rounded-full mb-6">
                                    {card.id}
                                </p>
                                <div className="relative w-full h-[320px] mb-6">
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        fill
                                        className="object-contain rounded-2xl"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    {card.title}
                                </h3>
                                <p className="text-gray-600 text-lg font-medium">
                                    {card.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offerings;
