"use client";
import React, { useState, useRef, useEffect } from "react";
import { Plus, Minus } from "lucide-react";
import { gsap } from "gsap";

// Updated FAQ Data
const faqData = [
    {
        question: "What is Hivyr AI Agents?",
        answer:
            "Hivyr AI Agents is a platform that automates repetitive tasks, optimizes workflows, and provides intelligent insights to help businesses work smarter and faster.",
    },
    {
        question: "How does Hivyr improve productivity?",
        answer:
            "By automating mundane tasks and providing real-time analytics, Hivyr allows teams to focus on strategy, innovation, and decision-making instead of manual operations.",
    },
    {
        question: "Is my data secure?",
        answer:
            "Absolutely. We follow strict data privacy standards, encrypt all information, and never share sensitive data with unauthorized parties.",
    },
    {
        question: "Can I integrate Hivyr with existing systems?",
        answer:
            "Yes! Hivyr is designed to integrate seamlessly with most existing platforms via APIs, ensuring smooth adoption without disrupting your current workflows.",
    },
    {
        question: "What kind of support is available?",
        answer:
            "Our team provides dedicated onboarding, training, and 24/7 support to ensure you get the most out of Hivyr AI Agents.",
    },
];

// FAQ Item Component
const FaqItem = ({ item, isOpen, onClick }) => {
    const contentRef = useRef(null);
    const iconRef = useRef(null);

    useEffect(() => {
        const content = contentRef.current;
        const icon = iconRef.current;

        if (isOpen) {
            gsap.to(content, {
                height: "auto",
                opacity: 1,
                duration: 0.6,
                ease: "power2.out",
            });
            gsap.to(icon, { rotate: 180, duration: 0.4, ease: "power2.out" });
        } else {
            gsap.to(content, {
                height: 0,
                opacity: 0,
                duration: 0.5,
                ease: "power2.inOut",
            });
            gsap.to(icon, { rotate: 0, duration: 0.4, ease: "power2.inOut" });
        }
    }, [isOpen]);

    return (
        <div className="w-full bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <button
                className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
                onClick={onClick}
            >
                <span className="text-lg font-medium text-gray-800">{item.question}</span>
                <span ref={iconRef} className="text-[#f7b518] flex-shrink-0">
                    {isOpen ? (
                        <Minus className="w-6 h-6 stroke-2" />
                    ) : (
                        <Plus className="w-6 h-6 stroke-2" />
                    )}
                </span>
            </button>

            <div
                ref={contentRef}
                style={{ height: 0, opacity: 0 }}
                className="px-6 overflow-hidden"
            >
                <p className="pb-6 pt-2 text-gray-700 leading-relaxed">{item.answer}</p>
            </div>
        </div>
    );
};

// Main FAQ Section Component
export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="min-h-screen py-20 bg-white z-20 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16">
                {/* Left Side - FAQ Text */}
                <div className="h-fit">
                    <p className="text-[#f7b518] font-semibold uppercase text-sm mb-4">
                        FAQ
                    </p>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                        Frequently Asked Questions
                    </h1>
                    <p className="mt-2 text-xl text-gray-600 max-w-md">
                        Find answers to common questions about Hivyr AI Agents and how it can transform your business.
                    </p>
                </div>

                {/* Right Side - FAQ List */}
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <FaqItem
                            key={index}
                            item={item}
                            isOpen={index === openIndex}
                            onClick={() => toggleFaq(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
