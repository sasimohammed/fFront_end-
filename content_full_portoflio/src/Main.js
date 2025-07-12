import React, { useContext } from "react";
import '@fontsource/madimi-one';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faHome, faUser, faEnvelope, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { ContentContext } from "./Contentcontext";
import { content_types } from "./Contentcontext";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import avatar from './img/avatar.png';
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import ProjectsData from "./ProjectsData";
import Contact from "./contact";

function Main() {
    const { state, dispatch } = useContext(ContentContext);

    const contentComponents = {
        [content_types.HOME]: <Home />,
        [content_types.ABOUT]: <About />,
        [content_types.WORK]: <Projects />,
        [content_types.PROJECT]: <ProjectsData/>,
        [content_types.CONTACT]:<Contact/>
    };

    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 z-0 ">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="https://videos.pexels.com/video-files/8554337/8554337-uhd_2560_1440_25fps.mp4"
                            type="video/mp4"/>
                </video>
                <div
                    className="absolute inset-0 bg-gradient-to-br from-gray-900/5 via-gray-900 to-gray-900/30"></div>
            </div>


    {/* Content */
    }
    <div className="relative z-10 w-full min-h-screen flex flex-col items-center font-madimi p-4 md:p-8">
        {/* Modern Header */}
        <header
            className="sm:w-[80%] w-full flex justify-between items-center p-2 sm:p-4 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 shadow-lg mb-8"
        >
            <div className="flex items-center gap-3 sm:gap-4 group">
                <div
                            className="relative rounded-full w-12 h-12 sm:w-14 sm:h-14 overflow-hidden shadow-lg border-2 border-indigo-400/30 group-hover:border-indigo-400 transition-all duration-500"
                        >
                            <img
                                src={avatar}
                                alt="Sohila Walid"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div
                                className="absolute inset-0 bg-indigo-500/10 group-hover:bg-transparent transition-all duration-500"></div>
                        </div>
                        <h1 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent animate-text-shimmer">
                            Sohila Walid
                        </h1>
                    </div>

                    <div className="flex items-center gap-3 sm:gap-4">
                        {/* Social Icons */}
                        <div className="flex gap-2 sm:gap-3">
                            <a
                                href="https://github.com/sasimohammed/fFront_end-/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative group w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg"
                                aria-label="GitHub"
                            >
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    className="text-base sm:text-xl text-white transition-transform duration-300 group-hover:scale-110"
                                />
                            </a>

                            <a
                                href="http://www.linkedin.com/in/sohaila-walid-25a817313
"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative group w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    className="text-base sm:text-xl text-white transition-transform duration-300 group-hover:scale-110"
                                />
                            </a>
                        </div>

                        {/* Resume Button */}
                        <div className="relative group">
                            <div
                                className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-xl blur opacity-0"></div>
                            <a
                                href="/resume.pdf"
                                download
                                className="relative bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 sm:px-6 sm:py-2.5 flex items-center gap-2 rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
                            >
                                <FontAwesomeIcon icon={faDownload} className="text-sm sm:text-lg"/>
                                <span className="font-medium text-sm sm:text-base">Resume</span>
                            </a>
                        </div>
                    </div>
                </header>

                <div className="sm:w-[80%] w-full flex flex-col md:flex-row gap-8">
                    <div
                        className="md:w-16 bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-700 p-3 flex md:flex-col items-center justify-center gap-4 md:gap-6">
                        {[
                            {icon: faHome, type: content_types.HOME},
                            {icon: faUser, type: content_types.ABOUT},
                            {icon: faBriefcase, type: content_types.WORK},
                            {icon: faEnvelope, type: content_types.CONTACT}
                        ].map((item) => (
                            <button
                                key={item.type}
                                onClick={() => dispatch({type: "SET_PAGE", payload: item.type})}
                                className={`p-3 rounded-xl transition-all duration-300 ${state.currentPage === item.type
                                    ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md shadow-indigo-500/30"
                                    : "bg-gray-700/50 hover:bg-gray-700 text-gray-300 hover:text-white"}`}
                                aria-label={item.type.toLowerCase()}
                            >
                                <FontAwesomeIcon icon={item.icon} className="text-lg"/>
                            </button>
                        ))}
                    </div>

                    {/* Content Container */}
                    <div
                        className="flex-1 bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-700 p-6 md:p-8 overflow-y-auto">
                        <div className="animate-fadeIn">
                            {contentComponents[state.currentPage]}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;