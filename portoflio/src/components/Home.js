import React from 'react';
import background from '../img/back.png';
import '../index.css';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
     faArrowCircleRight
} from "@fortawesome/free-solid-svg-icons";
import me from '../img/img_1.png';
import brush from '../img/brush.png';
import { ReactTyped } from 'react-typed';
import '../index.css'
function Home() {
    return (
        <div className="bg-cover bg-center relative bg-no-repeat h-[100vh] w-full overflow-x-hidden overflow-y-auto"

        style={{ backgroundImage: `url(${background})` }}>



            <div className="hero flex sm:flex-row   flex-col justify-between  relative min-h-screen">
                {/* Profile Image */}
                <motion.div
                  >
                    <div className="sm:w-1/2 w-full    absolute sm:left-40 sm:top-48 left-[30%] top-28">
                        <motion.img
                            src={me}
                            initial={{x: -100, opacity: 0}} // Start position (left)
                            animate={{x: 0, opacity: 1}}    // End position (normal)
                            transition={{duration: 1}}      // Smooth transition time
                            className="rounded-full w-[45%] h-auto bg-gradient-to-r from-[#FE45F7] to-[#F14FA2] p-[8px]"
                        />
                    </div>
                    <motion.div
                        initial={{y: 50, opacity: 0}} // Start below
                        animate={{y: 0, opacity: 1}}  // Move up & fade in
                        transition={{duration: 1, delay: 0.5}} // Delayed effect
                        className="my-text   sm:w-[40%] w-[80%] absolute sm:right-[23%] right-[10%] flex sm:items-start items-center  flex-col sm:top-48 top-[50%] p-2 min-h-[50%]">
                        <p className="text-white text-md font-thin">Hello My Name is</p>
                        <h1 className="text-white font-extrabold sm:text-6xl text-4xl font-maven relative">
                            Sohaila<span className="relative inline-block px-6 py-2 z-10">
                            <img src={brush}
                                 className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-auto -z-10"/>Walid
                        </span>
                        </h1>

                        <h1 className="sm:text-4xl text-3xl  font-maven mt-5 font-bold bg-gradient-to-r from-[#FE45F7] to-[#F14FA2] bg-clip-text text-transparent">
                            <ReactTyped
                                strings={[
                                    "Front-end Developer",
                                    "React Developer",
                                    "Web Designer",
                                    "UI/UX Enthusiast",
                                    "Graphic Designer"
                                ]}
                                typeSpeed={50}
                                backSpeed={30}
                                loop
                            />
                        </h1>

                        <p className="text-white sm:text-md text-sm font-thin sm:text-left   text-center  mt-2 sm:mt-3 max-w-2xl sm:w-[90%]  w-[92%] leading-relaxed">
                            I'm a passionate front-end developer with a deep love for crafting engaging, interactive,
                            and
                            visually appealing
                            digital experiences. With an eye for detail and a strong focus on user-centered design, I
                            enjoy
                            transforming ideas
                            into fully functional and aesthetically pleasing websites and applications. I thrive on the
                            challenge of creating
                            seamless, intuitive, and responsive designs that enhance user experience across all devices.
                        </p>

                        <a href={`${process.env.PUBLIC_URL}/resume.pdf`} target="_blank" rel="noopener noreferrer">
                            <button
                                className="relative rounded-xl sm:mb-0 mb-20 py-1 px-8 bg-gradient-to-r mt-3 from-[#FE45F7] to-[#F14FA2] text-[#3F073D] font-bold text-lg flex items-center gap-2">
                                Resume
                                <FontAwesomeIcon icon={faArrowCircleRight} className="w-6 animate-arrow h-6"/>
                            </button>
                        </a>


                    </motion.div>

                </motion.div>


            </div>
        </div>
    );
}

export default (Home);
