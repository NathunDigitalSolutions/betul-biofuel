import React from "react";
import { aboutUsContent, highlights } from "../../data/aboutHighlightData";
import { FaLeaf, FaCogs, FaRecycle, FaBolt } from "react-icons/fa";

const icons = [FaLeaf, FaCogs, FaRecycle, FaBolt];

const AboutHighlights = () => {
    return (
        <section className="py-16 px-4 md:px-20 bg-background">
            {/* About Us Section */}
            <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="md:w-1/2">
                    <img
                        src={aboutUsContent.image}
                        alt="About Us"
                        className="w-full rounded-lg shadow-lg"
                    />
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        {aboutUsContent.title}
                    </h2>
                    {aboutUsContent.description.map((para, idx) => (
                        <p key={idx} className="text-gray-700 leading-relaxed text-lg mb-4">
                            {para}
                        </p>
                    ))}
                </div>
            </div>

            {/* Highlights Section */}
            <div className="mt-16">
                <h3 className="text-2xl md:text-4xl font-bold text-primary mb-10 text-center">
                    What Sets Us Apart?
                </h3>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                    {highlights.map((item, index) => {
                        const Icon = icons[index % icons.length];
                        return (
                            <div
                                key={index}
                                className="flex items-start gap-4 p-4 bg-white rounded-lg shadow hover:shadow-md transition"
                            >
                                <div className="text-secondary text-3xl">
                                    <Icon />
                                </div>
                                <p className="text-gray-800 text-base md:text-lg">
                                    {item}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AboutHighlights;
