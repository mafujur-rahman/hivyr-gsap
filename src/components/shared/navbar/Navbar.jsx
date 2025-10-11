"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";

export default function Navbar() {
    const linksRef = useRef([]);
    const loginRef = useRef(null);
    const contactRef = useRef(null);

    useEffect(() => {
        linksRef.current.forEach((link) => {
            const underline = link.querySelector(".underline");
            gsap.set(underline, { scaleX: 0, transformOrigin: "left" });

            link.addEventListener("mouseenter", () => {
                gsap.to(underline, {
                    scaleX: 1,
                    duration: 0.4,
                    ease: "power2.out",
                });
            });

            link.addEventListener("mouseleave", () => {
                gsap.to(underline, {
                    scaleX: 0,
                    duration: 0.4,
                    ease: "power2.in",
                });
            });
        });

        // Log In underline (shorter)
        const loginUnderline = loginRef.current.querySelector(".underline");
        gsap.set(loginUnderline, { scaleX: 0, transformOrigin: "left" });
        loginRef.current.addEventListener("mouseenter", () => {
            gsap.to(loginUnderline, { scaleX: 1, duration: 0.3, ease: "power2.out" });
        });
        loginRef.current.addEventListener("mouseleave", () => {
            gsap.to(loginUnderline, { scaleX: 0, duration: 0.3, ease: "power2.in" });
        });

        // Contact hover effect
        const contact = contactRef.current;
        const contactUnderline = contact.querySelector(".underline");
        gsap.set(contactUnderline, { scaleX: 0, transformOrigin: "left" });

        contact.addEventListener("mouseenter", () => {
            gsap.to(contact, {
                backgroundColor: "#000",
                color: "#fff",
                duration: 0.3,
                ease: "power2.out",
            });
            gsap.to(contactUnderline, {
                scaleX: 1,
                duration: 0.4,
                ease: "power2.out",
            });
        });

        contact.addEventListener("mouseleave", () => {
            gsap.to(contact, {
                backgroundColor: "#ffffff",
                color: "#1f2937",
                duration: 0.3,
                ease: "power2.in",
            });
            gsap.to(contactUnderline, {
                scaleX: 0,
                duration: 0.4,
                ease: "power2.in",
            });
        });
    }, []);

    return (
        <nav className="w-full flex items-center justify-between">
            {/* Logo */}
            <div className="px-6 py-4 w-40 h-20 flex items-center">
                <Image
                    src="/images/logo/logo.png"
                    alt="Hivyr Logo"
                    width={800}
                    height={800}
                    className="object-contain"
                    priority
                />
            </div>


            {/* Black Nav Section */}
            <div className="flex-1 bg-black text-white flex items-center justify-between px-12 py-5">
                <ul className="flex items-center space-x-12 text-sm tracking-wide">
                    {["Products", "Agents", "Survices +", "About", "Pricing"].map(
                        (text, index) => (
                            <li key={index}>
                                <Link
                                    href="#"
                                    ref={(el) => (linksRef.current[index] = el)}
                                    className="relative inline-block"
                                >
                                    {text}
                                    <span className="underline absolute left-0 -bottom-1 h-[1px] w-full bg-white"></span>
                                </Link>
                            </li>
                        )
                    )}
                </ul>

                {/* Log In */}
                <Link
                    href="#"
                    ref={loginRef}
                    className="relative inline-block text-sm"
                >
                    Log In
                    <span className="underline absolute left-0 -bottom-1 h-[1px] w-full bg-white"></span>
                </Link>
            </div>

            {/* Contact */}
            <div
                ref={contactRef}
                className="bg-white text-gray-800 px-8 py-4.5 relative cursor-pointer overflow-hidden"
            >
                <Link href="#" className="relative inline-block text-sm font-medium">
                    Contact
                    <span className="underline absolute left-0 -bottom-1 h-[1px] w-full bg-white"></span>
                </Link>
            </div>
        </nav>
    );
}
