import React, { useState } from "react";
import transition from "./transition";
import background from "../img/back.png";
import { motion } from "framer-motion";
import  p2 from'../img/p2.png'
import  p3 from'../img/p3.png'
import  p4 from'../img/p4.png'
import  p5 from'../img/p5.png'
import  p6 from'../img/p6.png'
import  p7 from'../img/p7.png'
import  p8 from'../img/p8.png'
import  p9 from'../img/p9.png'
import  p10 from'../img/p10.png'
import  p11 from '../img/p11.png'
import  p12 from '../img/p12.png'
import  p1 from '../img/p1.png'
import p13 from '../img/p13.png'
function Projects() {
    const projects = [
        [
            { id: 1, name: "Landing Page", link: "https://majestic-capybara-352f6e.netlify.app", image: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/r2ntg9yanvjruk8rbdxn.jpg" },
            { id: 2, name: "Agency landing page", link: "https://precious-gumption-7c08c6.netlify.app/", image: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/wqzotbyfysz9pbfk9jus.jpg" },
            { id: 3, name: "Intro ", link: "https://spiffy-pavlova-1ba948.netlify.app/", image: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/zp74vhrxan0bpg43z2uu.jpg" },
            { id: 4, name: "E-commerce ", link: "https://sparkling-granita-5c0f58.netlify.app/", image: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/xde5z4efoocyw2mcuqod.jpg" },
            { id: 5, name: "Product preview card", link: "https://ephemeral-souffle-8ee63b.netlify.app/", image: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/d0bm3lh8bp36gyi3jiop.jpg" },
            { id: 6, name: "Sliding Puzzle game ", link: "https://enchanting-banoffee-d72946.netlify.app/", image: p2 },
        ],
        [
            { id: 7, name: "University website", link: "https://enchanting-banoffee-d72946.netlify.app/", image: p3 },
            { id: 8, name: "Old portfolio", link: "https://exquisite-mooncake-c461d5.netlify.app/", image: p4 },
            { id: 9, name: "Weather App", link: "https://lustrous-licorice-5d624f.netlify.app/", image: p5 },
            { id: 10, name: "YouTube Music Clone ", link: "https://deft-choux-b5684a.netlify.app/", image: p6},
            { id: 11, name: "Real State Website ", link: "https://vermillion-sfogliatella-41ab72.netlify.app/", image: p7 },
            { id: 12, name: "Registration Form", link: "https://candid-fudge-0fa662.netlify.app/", image: p8 },
        ],
        [
            { id: 13, name: "Ecommerce website ", link: "https://startling-monstera-02f4ea.netlify.app/", image: p9 },
            { id: 14, name: "Charity website ", link: "https://symphonious-cendol-f7caf9.netlify.app/", image: p10 },
            { id: 15, name: "Agriculture website ", link: "https://profound-gnome-be744c.netlify.app/", image: p11 },
            { id: 16, name: "Financial website", link: "https://jovial-longma-393984.netlify.app/", image: p12 },
            { id: 17, name: "Image Engine", link: "https://search-image-903578.netlify.app/", image: p1 },
            { id: 18, name: "Speech Converter", link: "https://text-voices.netlify.app/", image: p13 },
        ],
    ];

    const [currentPage, setCurrentPage] = useState(0);

    return (

        <div className="w-full  flex sm:flex-row    flex-col    ">
            <div
                className="w-full min-h-screen   flex flex-col  top-0 left-0  h-full bg-cover bg-center   md:flex-row items-center justify-start px-6 md:px-16 relative text-white  overflow-x-hidden "
                style={{backgroundImage: `url(${background})`}}>


            <motion.div
                className="flex flex-col sm:w-[30%] w-[90%] h-[30%]  sm:ml-10  absolute sm:top-36  top-20 sm:h-[60%] sm:items-start  items-center  justify-center p-6 z-10">
                <h1 className="text-4xl font-bold font-maven bg-gradient-to-r from-[#FE45F7] to-[#F14FA2] bg-clip-text text-transparent">
                    My work.
                </h1>
                <p className="text-white font-thin mt-4 sm:text-left text-center">
                    These 18 front-end projects showcase my journey in web development—where creativity meets code.
                    Each project represents a challenge solved, a new skill mastered, and a step toward building
                    seamless, user-friendly experiences.
                    From responsive layouts to interactive components, this collection reflects my passion for
                    transforming designs into functional and engaging websites.
                </p>
            </motion.div>

            {/* Projects Grid */}
            <motion.div
                key={currentPage} // Triggers animation on page change
                initial={{y: 30, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.8, ease: "easeOut"}}

                className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:w-[50%] w-[90%] h-[80%] sm:h-[50%] absolute mb-80 sm:left-[38%] sm:top-[25%] left-[5%] top-[50%]"

            >
                {projects[currentPage].map((project) => (
                    <motion.div
                        whileHover={{scale: 1.1}}
                        key={project.id}
                        className="relative flex flex-col items-center rounded-xl    shadow-lg cursor-pointer group transition-transform transform hover:scale-105"
                        onClick={() => window.open(project.link)}
                    >
                        {/* Project Image */}
                        <img src={project.image} alt={project.name}
                             className="w-full h-full object-cover rounded-xl"/>

                        {/* Project Name on Hover */}
                        <div
                            className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <p className="text-white text-lg font-semibold">{project.name}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Pagination Dots */}
                {/* Pagination Dots */}
                <div className="absolute bottom-[55%] left-1/2 transform -translate-x-1/2 flex space-x-2 sm:left-[60%] sm:bottom-[20%]">
                    {projects.map((_, index) => (
                        <motion.button
                            key={index}
                            className={`h-3 w-3 rounded-full transition-all ${
                                currentPage === index ? "bg-white scale-125" : "bg-gray-500"
                            }`}
                            onClick={() => setCurrentPage(index)}
                        />
                    ))}
                </div>




            </div>
        </div>
    );
}

export default transition(Projects);
