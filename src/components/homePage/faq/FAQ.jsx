"use client";
import React, { useState, useRef, useEffect } from "react";
import { Plus, Minus } from "lucide-react";
import { gsap } from "gsap";

// FAQ Data
const faqData = [
    {
        question: "Is Script Runner a pharmacy or drug manufacturer?",
        answer:
            "Script Runner is a logistics and delivery platform, not a pharmacy or drug manufacturer. We partner with licensed pharmacies to provide safe, compliant, and timely medication delivery services to consumers.",
    },
    {
        question: "How long does it take to onboard?",
        answer:
            "Onboarding typically takes 3-5 business days, depending on the complexity of your integration needs and regulatory requirements. We offer dedicated support to ensure a smooth transition.",
    },
    {
        question: "How about security, data, and privacy?",
        answer:
            "We adhere to strict data protection standards, including HIPAA and GDPR compliance. All data is encrypted, and we never share customer-specific delivery information with unauthorized third parties.",
    },
    {
        question: "Can I use my own drivers?",
        answer:
            "Yes, our platform is flexible. While we offer a network of vetted drivers, you can integrate your own driver fleet for deliveries, managing them seamlessly through our dispatch system.",
    },
    {
        question: "What kind of drones do we deploy?",
        answer:
            "We deploy custom-built, medical-grade delivery drones optimized for weight, distance, and weather conditions. They are routinely inspected and certified for aerial logistics.",
    },
    {
        question: "What is your pricing?",
        answer:
            "Our pricing is determined by volume and distance. We offer tiered subscription models and pay-as-you-go options. Please contact our sales team for a custom quote.",
    },
    {
        question: "Do you enable payment collection?",
        answer:
            "Yes, our delivery process includes secure, integrated payment collection options, supporting credit cards, mobile wallets, and other popular payment methods at the point of delivery.",
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
        <div className="w-full bg-gray-50 rounded-2xl mb-4 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
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
        <section className="min-h-screen py-20 bg-white font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16">
                {/* Left Side */}
                <div className="md:sticky md:top-20 h-fit">
                    <p className="text-[#f7b518] font-semibold uppercase text-sm mb-4">
                        FAQ
                    </p>
                    <h1 className="text-6xl font-extrabold text-gray-900 leading-tight">
                        Questions?
                        <br />
                        Answers.
                    </h1>
                    <p className="mt-6 text-xl text-gray-600 max-w-md">
                        We have a lot to offer — here’s a sneak peek at what our partners ask
                        most often.
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
