"use client";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FiSettings, FiBarChart2 } from "react-icons/fi";
import { MdSmartToy } from "react-icons/md";

const Pricing = () => {
    return (
        <section className="bg-white text-black py-20 flex justify-center">
            <div className="max-w-7xl w-full px-6">
                {/* Top heading section */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                    <h2 className="text-4xl font-bold mb-4 md:mb-0">Plans</h2>
                    <p className="text-gray-600 text-center md:text-right max-w-md">
                        Choose an AI Agent plan that scales with your business. Automate,
                        analyze, and accelerate with Script Runner.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    {/* Starter */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Starter</h3>
                            <p className="text-4xl font-bold mb-6">
                                $1,990
                                <span className="text-lg font-medium text-gray-500">/month</span>
                            </p>
                            <ul className="space-y-3 text-gray-700 mb-8">
                                <li className="flex items-center gap-2">
                                    <FaCheckCircle className="text-[#fdd204]" />
                                    1 AI Agent (Chat or Email)
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheckCircle className="text-[#fdd204]" />
                                    Basic automation workflows
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheckCircle className="text-[#fdd204]" />
                                    Standard analytics
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheckCircle className="text-[#fdd204]" />
                                    Email support
                                </li>
                            </ul>
                        </div>
                        <button className="bg-black text-white font-semibold py-3 rounded-xl hover:bg-gray-900 transition">
                            Get Started
                        </button>
                    </div>

                    {/* Pro */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg flex flex-col justify-between">
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-xl font-semibold">Pro</h3>
                                <span className="text-sm bg-[#fdd204] text-black font-medium px-2 py-1 rounded">
                                    Most Popular
                                </span>
                            </div>
                            <p className="text-4xl font-bold mb-6">
                                $3,490
                                <span className="text-lg font-medium text-gray-500">/month</span>
                            </p>
                            <ul className="space-y-3 text-gray-700 mb-8">
                                <li className="flex items-center gap-2">
                                    <FaCheckCircle className="text-[#fdd204]" />
                                    Up to 3 AI Agents
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheckCircle className="text-[#fdd204]" />
                                    Advanced automation logic
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheckCircle className="text-[#fdd204]" />
                                    Real-time analytics dashboard
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheckCircle className="text-[#fdd204]" />
                                    Priority chat support
                                </li>
                            </ul>
                        </div>
                        <button className="bg-black text-white font-semibold py-3 rounded-xl hover:bg-gray-900 transition">
                            Get Started
                        </button>
                    </div>

                    {/* Enterprise */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg flex flex-col justify-between">
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-xl font-semibold">Enterprise</h3>
                                <span className="text-sm bg-[#fdd204] text-black font-medium px-2 py-1 rounded">
                                    Save $1,000
                                </span>
                            </div>
                            <p className="text-4xl font-bold mb-6">
                                $5,490
                                <span className="text-lg font-medium text-gray-500">/month</span>
                            </p>
                            <ul className="space-y-3 text-gray-700 mb-8">
                                <li className="flex items-center gap-2">
                                    <FaCheckCircle className="text-[#fdd204]" />
                                    Unlimited AI Agents
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheckCircle className="text-[#fdd204]" />
                                    Custom integrations & APIs
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheckCircle className="text-[#fdd204]" />
                                    Dedicated success manager
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheckCircle className="text-[#fdd204]" />
                                    24/7 priority support
                                </li>
                            </ul>
                        </div>
                        <button className="bg-black text-white font-semibold py-3 rounded-xl hover:bg-gray-900 transition">
                            Get Started
                        </button>
                    </div>
                </div>

                {/* Bottom Add-on */}
                <div className="bg-black text-white rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center shadow-lg">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Custom AI Agent Setup</h3>
                        <p className="text-gray-400 text-sm flex items-center space-x-4">
                            <span className="flex items-center space-x-1">
                                <FiSettings /> <span>Workflow mapping</span>
                            </span>
                            <span>•</span>
                            <span className="flex items-center space-x-1">
                                <MdSmartToy /> <span>Model fine-tuning</span>
                            </span>
                            <span>•</span>
                            <span className="flex items-center space-x-1">
                                <FiBarChart2 /> <span>Analytics dashboard</span>
                            </span>
                        </p>
                    </div>
                    <div className="flex items-center gap-6 mt-6 md:mt-0">
                        <p className="text-3xl font-bold">$2,000</p>
                        <button className="bg-white text-black font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 transition">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
