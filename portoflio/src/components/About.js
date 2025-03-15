import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../index.css";
import background from "../img/back.png";
import transition from "./transition";

function About() {
    const [years, setYears] = useState(0);
    const [projects, setProjects] = useState(0);
    const [selectedTab, setSelectedTab] = useState("About Me");

    useEffect(() => {
        const yearsInterval = setInterval(() => {
            setYears((prev) => (prev < 1 ? prev + 1 : prev));
        }, 100);

        const projectsInterval = setInterval(() => {
            setProjects((prev) => (prev < 20 ? prev + 1 : prev));
        }, 50);

        return () => {
            clearInterval(yearsInterval);
            clearInterval(projectsInterval);
        };
    }, []);

    const [openSection, setOpenSection] = useState(null); // Track which section is open
    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section); // Toggle open/close
    };

    const skills = [
        { name: "React", img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
        { name: "Tailwind CSS", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
        { name: "Bootstrap", img: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" },
        { name: "Photoshop", img: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" },
        { name: "C++", img: "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg" },
        { name: "Java", img: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" },
        { name: "JavaScript", img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
        { name: "HTML", img: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
        { name: "CSS", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
        { name: "Figma", img: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
        { name: "Framer Motion", img: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg" }
    ];



    return (
        <div className="w-full  flex sm:flex-row   flex-col min-h-screen overflow-x-hidden  ">
            <div
                className="w-full min-h-screen   flex flex-col  top-0 left-0  h-full bg-cover bg-center   md:flex-row items-center justify-start px-6 md:px-16 relative text-white  overflow-x-hidden "
                style={{backgroundImage: `url(${background})`}}>
                <motion.div
                    initial={{y: 30, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 1, delay: 0.1}}
                    className="relative z-10    text-center md:text-left flex flex-col    sm:mt-0 mt-[20%]  items-center md:items-start w-full md:w-[40%]">
                    <h1 className="text-4xl md:text-5xl  font-bold bg-gradient-to-r w-full  sm:mt-0  abso mb-6 md:mb-10 from-[#FE45F7] to-[#F14FA2] bg-clip-text text-transparent font-maven">
                        Innovate, Create and Grow
                    </h1>
                    <p className="text-sm md:text-md font-thin leading-relaxed max-w-md">
                        Technology is constantly evolving, and so is innovation. It’s about pushing boundaries.
                        Creativity is about thinking differently, and growth is about embracing every challenge.
                        Through coding, I bring ideas to life while continuously improving and expanding my knowledge.
                    </p>

                    <div className="mt-8 md:mt-10 flex  md:flex-row gap-6 md:gap-16">
                        <div className="flex flex-col items-center md:items-start">
                            <motion.span
                                className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#FE45F7] to-[#F14FA2] bg-clip-text text-transparent">
                                {years}+
                            </motion.span>
                            <span className="text-sm md:text-xl font-thin mt-2">Year of Experience</span>
                        </div>

                        <div className="flex flex-col items-center md:items-start">
                            <motion.span
                                className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#FE45F7] to-[#F14FA2] bg-clip-text text-transparent">
                                {projects}+
                            </motion.span>
                            <span className="text-sm md:text-xl font-thin mt-2">Projects Completed</span>
                        </div>
                    </div>
                </motion.div>


            {/* Tabs Section */}
            <div className="sm:w-[40%]   w-[90%]   absolute  sm:mt-0  sm:right-[17%]  right-[4%] sm:top-[27%]  top-[60%] text-left">
                <div className="flex sm:items-start space-x-8 mb-4 relative justify-center items-center">
                    {/* About Me Button */}
                    <motion.button
                        className={`px-4 py-2 font-medium relative ${
                            selectedTab === "About Me" ? "bg-gradient-to-r  from-[#FE45F7] to-[#F14FA2] bg-clip-text text-transparent font-maven" : "text-white"
                        }`}
                        onClick={() => setSelectedTab("About Me")}
                        whileHover={{scale: 1.1}}
                    >
                        About me
                        {selectedTab === "About Me" && (
                            <motion.div
                                layoutId="underline"
                                className="absolute left-0 right-0 bottom-[-4px] h-0.5  bg-gradient-to-r  from-[#FE45F7] to-[#F14FA2] "
                                transition={{type: "spring", stiffness: 500, damping: 40}}
                            />
                        )}
                    </motion.button>

                    {/* Skills Button */}
                    <motion.button
                        className={`px-6 py-2 font-medium relative ${
                            selectedTab === "Skills" ? "bg-gradient-to-r  from-[#FE45F7] to-[#F14FA2] bg-clip-text text-transparent font-maven\" : \"text-white" : "text-white"
                        }`}
                        onClick={() => setSelectedTab("Skills")}
                        whileHover={{scale: 1.1}}
                    >
                        Skills
                        {selectedTab === "Skills" && (
                            <motion.div
                                layoutId="underline"
                                className="absolute left-0 right-0 bottom-[-4px] h-0.5  bg-gradient-to-r  from-[#FE45F7] to-[#F14FA2] "
                                transition={{type: "spring", stiffness: 500, damping: 40}}
                            />
                        )}
                    </motion.button>
                </div>

                {/* Content Section */}
                <div className="p-4 text-white font-thin  ">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedTab}
                            initial={{opacity: 0, y: 10}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: -10}}
                            transition={{duration: 0.3}}>

                            {/* About Me Section */}
                            {selectedTab === "About Me" && (
                                <div>


                                    {/* Education Section */}
                                    <div className="cursor-pointer mb-2" onClick={() => toggleSection("education")}>
                                        <div className="flex justify-between items-center">
                                            <span className="text-pink-500 font-medium">Education</span>
                                            <motion.span animate={{rotate: openSection === "education" ? 90 : 0}}>➤
                                            </motion.span>
                                        </div>
                                        {openSection === "education" && (
                                            <motion.p initial={{height: 0, opacity: 0}}
                                                      animate={{height: "auto", opacity: 1}}
                                                      exit={{height: 0, opacity: 0}} transition={{duration: 0.3}}
                                                      className="text-md text-white mt-1">
                                                Second-year student at the Faculty of Computers and Artificial
                                                Intelligence Cairo University.
                                            </motion.p>
                                        )}
                                    </div>

                                    {/* Age Section */}
                                    <div className="cursor-pointer mb-2" onClick={() => toggleSection("age")}>
                                        <div className="flex justify-between items-center">
                                            <span className="text-pink-500 font-medium">Age</span>
                                            <motion.span animate={{rotate: openSection === "age" ? 90 : 0}}>➤
                                            </motion.span>
                                        </div>
                                        {openSection === "age" && (
                                            <motion.p initial={{height: 0, opacity: 0}}
                                                      animate={{height: "auto", opacity: 1}}
                                                      exit={{height: 0, opacity: 0}} transition={{duration: 0.3}}
                                                      className="text-sm text-gray-300 mt-1">
                                                19 years old.
                                            </motion.p>
                                        )}
                                    </div>

                                    {/* Location Section */}
                                    <div className="cursor-pointer mb-2" onClick={() => toggleSection("location")}>
                                        <div className="flex justify-between items-center">
                                            <span className="text-pink-500 font-medium">Location</span>
                                            <motion.span animate={{rotate: openSection === "location" ? 90 : 0}}>➤
                                            </motion.span>
                                        </div>
                                        {openSection === "location" && (
                                            <motion.p initial={{height: 0, opacity: 0}}
                                                      animate={{height: "auto", opacity: 1}}
                                                      exit={{height: 0, opacity: 0}} transition={{duration: 0.3}}
                                                      className="text-sm text-gray-300 mt-1">
                                                Giza, Egypt.
                                            </motion.p>
                                        )}
                                    </div>
                                </div>
                            )}


                            {selectedTab==="Skills" && (
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4  mb-[20%]  ">
                                    {skills.map((skill, index) => (
                                        <motion.div
                                            key={index}
                                            className="flex flex-col items-center space-y-2 p-2 bg-gray-800 rounded-lg shadow-lg"
                                            whileHover={{scale: 1.1}}
                                        >
                                            <img src={skill.img} alt={skill.name} className="w-14 h-14 object-contain"/>
                                            <p className="text-white text-sm">{skill.name}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
            </div>
        </div>
    );
}

export default transition(About);
