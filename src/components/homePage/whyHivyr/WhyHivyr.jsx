"use client";
import React from "react";

const WhyHivyr = () => {
    return (
        <section className="relative bg-[#f45b25] text-white py-32 overflow-hidden z-10">
            {/* Text Content */}
            <div className="text-center max-w-2xl mx-auto">
                <p className="uppercase tracking-wide text-sm mb-3">STATS</p>
                <h2 className="text-4xl font-semibold mb-6">Why Hivyr?</h2>
                <p className="text-lg leading-relaxed text-white/90">
                    As the scope of pharmacy expands, Hivyr's mission is to free up the
                    time of pharmacists to allow them to focus on patient care and not on
                    delivery and logistics.
                </p>
            </div>

            {/* Pills */}
            <div className="absolute w-full  left-0 flex justify-center mt-40">
                {/* Left Pill */}
                <div
                    className="absolute left-[12%] top-[-30px] rotate-[-20deg] flex items-center shadow-xl"
                    style={{ filter: "drop-shadow(0px 5px 10px rgba(0,0,0,0.3))" }}
                >
                    <div className="bg-[#f15a29] text-black font-semibold text-2xl px-6 py-4 rounded-l-full">
                        6-15
                    </div>
                    <div className="bg-gray-200 text-black text-sm px-5 py-4 rounded-r-full">
                        Labour hours<br />saved per week
                    </div>
                </div>

                {/* Center Pill */}
                <div
                    className="absolute left-[45%] top-[80px] rotate-[10deg] flex items-center shadow-xl"
                    style={{ filter: "drop-shadow(0px 5px 10px rgba(0,0,0,0.3))" }}
                >
                    <div className="bg-[#e9463c] text-black font-semibold text-2xl px-6 py-4 rounded-l-full">
                        1-3
                    </div>
                    <div className="bg-gray-200 text-black text-sm px-5 py-4 rounded-r-full">
                        Delivery customer<br />disputes resolved
                    </div>
                </div>

                {/* Right Pill */}
                <div
                    className="absolute right-[12%] top-[10px] rotate-[15deg] flex items-center shadow-xl"
                    style={{ filter: "drop-shadow(0px 5px 10px rgba(0,0,0,0.3))" }}
                >
                    <div className="bg-[#f8a234] text-black font-semibold text-2xl px-6 py-4 rounded-l-full">
                        2-6
                    </div>
                    <div className="bg-gray-200 text-black text-sm px-5 py-4 rounded-r-full">
                        Errors prevented<br />per week
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyHivyr;
