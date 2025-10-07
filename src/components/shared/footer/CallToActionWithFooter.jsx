"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CallToActionWithFooter = () => {
    const sectionRef = useRef(null);
    const ctaRef = useRef(null);
    const footerRef = useRef(null);
    const [footerHeight, setFooterHeight] = useState(0);

    useEffect(() => {
        if (footerRef.current) {
            setFooterHeight(footerRef.current.offsetHeight);
        }
    }, []);

    useEffect(() => {
        if (!ctaRef.current || !footerHeight || !footerRef.current) return;

        // CTA animation: moves up to reveal footer
        gsap.to(ctaRef.current, {
            y: -footerHeight,
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom", 
                end: `bottom bottom`, 
                scrub: true,
            },
        });

        // Footer fixed **only when CTA starts moving**
        ScrollTrigger.create({
            trigger: ctaRef.current, 
            start: "top 70%",    
            endTrigger: sectionRef.current,
            end: "bottom bottom",
            onEnter: () => footerRef.current.style.position = "fixed",
            onEnterBack: () => footerRef.current.style.position = "fixed",
            onLeave: () => footerRef.current.style.position = "absolute",
            onLeaveBack: () => footerRef.current.style.position = "absolute",
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, [footerHeight]);

    return (
        <section
            ref={sectionRef}
            className="relative w-full bg-white"
            style={{ minHeight: `${footerHeight + 400}px` }}
        >
            {/* CTA */}
            <div
                ref={ctaRef}
                className="absolute top-0 w-full flex flex-col justify-center items-center px-6 z-20 bg-white"
                style={{ minHeight: `${footerHeight + 400}px` }}
            >
                <h2 className="text-3xl md:text-5xl font-semibold max-w-4xl mx-auto text-center leading-snug">
                    Cost-effective, reliable and used by hundreds of pharmacies today
                </h2>
                <button className="mt-8 bg-[#f7b518] text-black font-semibold py-3 px-6 rounded-full transition-all hover:bg-[#fdd204]">
                    Get started
                </button>
            </div>

            {/* Footer */}
            <footer
                ref={footerRef}
                className="absolute bottom-0 left-0 w-full bg-[#f7b518] text-black px-6 md:px-10 xl:px-48 pt-8 pb-16 overflow-hidden"
            >
                <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-3">
                    <div className="flex flex-col md:flex-row items-center gap-3">
                        <p>© 2025 Hivyr. All rights reserved.</p>
                        <p className="cursor-pointer hover:underline">Privacy Policy</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-5 items-center">
                        <a href="mailto:hivyrsales@.ai" className="hover:underline" target="_blank">
                            sales@hivyr.ai ↗
                        </a>
                        <a href="#" className="hover:underline" target="_blank">
                            Book a demo ↗
                        </a>
                        <a href="#" className="hover:underline" target="_blank">
                            Linkedin ↗
                        </a>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <h1 className="text-[18vw] md:text-[10vw] font-extrabold leading-none">
                        Hivyr
                    </h1>
                </div>
            </footer>
        </section>
    );
};

export default CallToActionWithFooter;
