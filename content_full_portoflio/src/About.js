import React, { useState } from "react";
import { motion } from "framer-motion";
import avatar from './img/remavatar.png';

function AboutMe() {
    const [activeTab, setActiveTab] = useState("programming");

    const tabContent = {
        programming: [
            { label: "C++", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
            { label: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { label: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
            { label: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        ],
        frontend: [
            { label: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { label: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { label: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { label: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { label: "Framer Motion", img: "https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png" },
            { label: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
            { label: "Tailwind CSS", img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
            { label: "EmailJS", img: "https://avatars.githubusercontent.com/u/57229339?s=200&v=4" },
            { label: "Contentful", img: "data:image/webp;base64,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" },
        ],

        soft: [
            "Problem Solving",
            "Teamwork",
            "Time Management",
            "Communication",
            "Adaptability",
            "Creativity"
        ],
    };

    const renderSkills = () => {
        const skills = tabContent[activeTab];

        return (
            <motion.div

                key={activeTab}
                className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
                initial={{opacity: 0, y: 30}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
            >


                {skills.map((skill, index) => {
                    const isString = typeof skill === "string";
                    return (
                        <motion.div
                            key={index}
                            className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-3 flex items-center gap-3 shadow-lg hover:shadow-indigo-500/20 transition-all ${
                                isString ? "justify-center" : ""
                            }`}

                        >
                            {!isString && skill.img && (
                                <img
                                    src={skill.img}
                                    alt={skill.label}
                                    className="w-6 h-6 object-contain"
                                />
                            )}
                            <span className="text-sm md:text-base">{isString ? skill : skill.label}</span>
                        </motion.div>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div className="h-full text-white flex flex-col p-6 lg:p-10 max-w-7xl   mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* Text Content */}
                <div className="flex-1">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent mb-4">
                            Turning Ideas into Impact
                        </h1>
                        <motion.p
                            className="text-gray-300 text-lg leading-relaxed mb-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            I'm <span className="text-indigo-300 font-medium">Sohaila Walid</span>, a Computer Science & AI student at Cairo University and a passionate Front-End Developer with <span className="text-indigo-300 font-medium">2 years</span> of hands-on experience. I've built and deployed over <span className="text-indigo-300 font-medium">30 real-world projects</span> using modern technologies.
                        </motion.p>
                        <motion.p
                            className="text-gray-300 text-lg leading-relaxed mb-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            My expertise spans <span className="text-indigo-300 font-medium">React</span>, <span className="text-indigo-300 font-medium">JavaScript</span>, and <span className="text-indigo-300 font-medium">Tailwind CSS</span>, with a focus on creating accessible, performant web experiences that users love.
                        </motion.p>
                        <motion.div
                            className="flex items-center gap-2 text-indigo-300 text-sm md:text-base"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            Based in Cairo, Egypt – Open to remote opportunities
                        </motion.div>
                    </motion.div>

                    {/* Tabs */}
                    <motion.div
                        className="flex flex-wrap gap-3 mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        {[
                            { id: "programming", label: "Programming" },
                            { id: "frontend", label: "Frontend" },
                            { id: "soft", label: "Soft Skills" },
                        ].map((tab) => (
                            <motion.button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                                    activeTab === tab.id
                                        ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30"
                                        : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/70 border border-gray-700"
                                }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                {tab.label}
                            </motion.button>
                        ))}
                    </motion.div>

                    {renderSkills()}
                </div>

                {/* Avatar Image */}
                <motion.div
                    className="hidden lg:flex  items-center  w-[30%] justify-center"
                    initial={{opacity: 0, x: 20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.8, delay: 0.2}}
                >
                    <div className="relative w-[200px] sm:w-[230px] md:w-[280px]">
                        <div
                            className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-3xl -rotate-6 scale-105"></div>
                        <motion.img
                            src={avatar}
                            alt="Sohaila Walid"
                            className="relative z-10 w-full h-auto rounded-2xl shadow-2xl border-4 border-white/10"
                            whileHover={{y: -5}}
                            transition={{duration: 0.3}}
                        />
                    </div>

                </motion.div>
            </div>
        </div>
    );
}

export default AboutMe;