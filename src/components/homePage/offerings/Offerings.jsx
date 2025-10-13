"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Offerings = () => {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);

    const cards = [
        {
            id: 1,
            title: "Phone Agent",
            description:
                "A smart voice-based AI that handles calls, schedules appointments, and supports customers with natural, human-like conversation flow anytime.",
            image: "/images/ai-agents/offering-1.avif",
        },
        {
            id: 2,
            title: "Chatbot Agent",
            description:
                "An intelligent chatbot that instantly answers queries, guides users, and improves engagement through seamless, context-aware conversations.",
            image: "/images/ai-agents/offering-2.avif",
        },
        {
            id: 3,
            title: "Voice Agent",
            description:
                "A lifelike virtual assistant that understands voice commands and responds naturally, creating smooth and interactive communication experiences.",
            image: "/images/ai-agents/offering-3.avif",
        },
        {
            id: 4,
            title: "WhatsApp Agent",
            description:
                "Automate WhatsApp chats, send updates, and assist customers 24/7 with personalized, AI-driven responses that enhance satisfaction and sales.",
            image: "/images/ai-agents/offering-1.avif",
        },
        {
            id: 5,
            title: "Messenger Agent",
            description:
                "Engage your Facebook audience instantly using AI automation that answers FAQs, manages promotions, and boosts real-time interaction.",
            image: "/images/ai-agents/offering-2.avif",
        },
        {
            id: 6,
            title: "Instagram Agent",
            description:
                "Automate Instagram DMs, handle product queries, and respond to comments to increase engagement and convert followers into loyal customers.",
            image: "/images/ai-agents/offering-3.avif",
        },
        {
            id: 7,
            title: "Shopify Agent",
            description:
                "An AI sales assistant that helps customers, tracks orders, and recommends products, streamlining eCommerce operations and boosting revenue.",
            image: "/images/ai-agents/offering-1.avif",
        },
        {
            id: 8,
            title: "Gmail Agent",
            description:
                "A smart inbox assistant that reads, categorizes, and replies to emails automatically, helping you manage communication effortlessly.",
            image: "/images/ai-agents/offering-2.avif",
        },
        {
            id: 9,
            title: "Presentation Agent",
            description:
                "Create stunning presentations from text or ideas in seconds. The AI formats slides with design and content precision automatically.",
            image: "/images/ai-agents/offering-3.avif",
        },
        {
            id: 10,
            title: "SMS Agent",
            description:
                "Send automated reminders, alerts, and promotional texts instantly to maintain timely customer communication and increase engagement.",
            image: "/images/ai-agents/offering-1.avif",
        },
    ];


    useEffect(() => {
        const section = sectionRef.current;
        const content = contentRef.current;
        const cardsContainer = content?.querySelector(".cards-container");

        if (!section || !content || !cardsContainer) return;

        // Calculate dimensions
        const totalWidth = cardsContainer.scrollWidth;
        const visibleWidth = section.offsetWidth;

        const scrollDistance = totalWidth - visibleWidth + 2000;

        const ctx = gsap.context(() => {
            gsap.set(content, { x: 0 });

            gsap.to(content, {
                x: -scrollDistance,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: () => `+=${scrollDistance * 1.0}`,
                    scrub: 1.3,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                },
            });
        }, section);

        return () => ctx.revert();
    }, []);


    return (
        <section
            ref={sectionRef}
            className="relative bg-white py-24 lg:py-40 overflow-hidden z-10"
        >
            <div className="relative max-w-7xl mx-auto overflow-hidden px-6">
                <div ref={contentRef} className="flex items-start gap-20">
                    {/* Intro Section */}
                    <div className="flex flex-col lg:flex-row items-center justify-center w-full flex-shrink-0 gap-12 text-center lg:text-left min-h-[600px]">
                        {/* Video */}
                        <div className="lg:w-1/2 flex justify-center items-center">
                            <div className="rounded-2xl overflow-hidden w-full max-w-xl">
                                <video
                                    src="/video/ai-agents/ai-agents.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Text */}
                        <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start">
                            <p className="text-[#f7b518] font-semibold uppercase tracking-widest text-sm mb-3">
                                AI Agents
                            </p>
                            <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-6">
                                Meet the Intelligent Agents Powering Your Business
                            </h2>
                            <p className="text-lg lg:text-2xl font-medium text-gray-600 leading-relaxed">
                                Discover how each specialized AI agent helps automate communication, streamline workflows, and enhance customer experiences across every platform. From voice and chat to email and social media, these agents empower your business to operate smarter and faster than ever before.
                            </p>
                        </div>
                    </div>

                    {/* Cards Section */}
                    <div className="cards-container flex flex-row items-center gap-10 flex-nowrap">
                        {cards.map((card) => (
                            <div
                                key={card.id}
                                className="bg-gray-100 rounded-3xl p-10 w-[400px] flex-shrink-0 flex flex-col justify-between h-[600px]"
                            >
                                <div className="flex items-center justify-start mb-6">
                                    <span className="bg-[#fdd204] text-black w-10 h-10 flex items-center justify-center rounded-full font-semibold text-lg">
                                        {card.id}
                                    </span>
                                </div>
                                <div className="relative w-full h-[400px] mb-8">
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        fill
                                        className="object-contain rounded-2xl scale-105"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                        {card.title}
                                    </h3>
                                    <p className="text-gray-600 text-lg font-medium leading-relaxed">
                                        {card.description}
                                    </p>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offerings;