import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCalendar, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { ContentContext, content_types } from "./Contentcontext";

function ProjectsData() {
    const { state, dispatch } = useContext(ContentContext);
    const project = state.selectedProject;


    const handleBack = () => {
        dispatch({ type: "SET_PAGE", payload: content_types.WORK });
    };

    console.log("Project:", project);


    if (!project) {
        return (
            <div className="h-full flex items-center justify-center text-white">
                <div className="text-center p-8 bg-gray-900/80 rounded-xl backdrop-blur-sm border border-gray-700/50">
                    <p className="text-xl mb-4">Project not found</p>
                    <button
                        onClick={handleBack}
                        className="px-6 py-2 flex items-center gap-2 text-indigo-300 hover:text-white bg-indigo-900/30 hover:bg-indigo-800/50 rounded-lg transition-all duration-300 border border-indigo-700/50"
                    >
                        <FontAwesomeIcon icon={faArrowLeft} />
                        Back to Projects
                    </button>
                </div>
            </div>
        );
    }
console.log(project.about)


    return (
        <div className="h-full text-white flex flex-col p-5 md:p-10 max-w-7xl mx-auto">
            <motion.button
                onClick={handleBack}
                className="mb-8 flex items-center gap-3 text-indigo-300 hover:text-white group"
                whileHover={{ x: -3 }}
                whileTap={{ scale: 0.95 }}
            >
                <motion.div
                    className="w-8 h-8 rounded-full bg-indigo-900/40 flex items-center justify-center group-hover:bg-indigo-800/60 transition-all duration-300"
                    whileHover={{ rotate: -10 }}
                >
                    <FontAwesomeIcon icon={faArrowLeft} className="text-sm" />
                </motion.div>
                <span>Back to Projects</span>
            </motion.button>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col lg:flex-row gap-8"
            >

                {/* Left Column - Project Image and Metadata */}
                <div className="lg:w-[50%] space-y-6 ">
                    <motion.div
                        className="relative rounded-2xl overflow-hidden border border-white/10"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        {project.imageUrl ? (
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="w-auto h-auto"
                            />
                        ) : (
                            <div className="bg-gradient-to-br from-gray-800 to-gray-900 w-full h-64 md:h-80 flex items-center justify-center">
                                <span className="text-white/50">No Image Available</span>
                            </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <div className="translate-y-4 hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-xl font-semibold">{project.title}</h3>
                                <p className="text-gray-300 text-sm">{project.category}</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Project Metadata */}
                    <motion.div
                        className="bg-gray-900/50 p-5 rounded-xl backdrop-blur-sm border border-gray-700/30"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-indigo-900/30 flex items-center justify-center">
                                    <FontAwesomeIcon icon={faCodeBranch} className="text-indigo-300"/>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400">Category</p>
                                    <p className="text-gray-300">{project.category}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column - Project Details */}
                <div className="lg:w-[45%] space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                            {project.title}
                        </h2>
                        <div className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-4"></div>
                    </motion.div>

                    <motion.div
                        className="bg-gray-900/30 p-6 rounded-xl backdrop-blur-sm border border-gray-700/30"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h3 className="text-xl font-semibold mb-3 text-indigo-200 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></div>
                            Description
                        </h3>
                        <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                            {project.about}
                        </p>
                    </motion.div>

                    {project.tech && (
                        <motion.div
                            className="bg-gray-900/30 p-6 rounded-xl backdrop-blur-sm border border-gray-700/30"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <h3 className="text-xl font-semibold mb-3 text-indigo-200 flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></div>
                                Technologies
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {project.tech.map((tech, index) => (
                                    <motion.span
                                        key={index}
                                        className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 px-4 py-2 rounded-lg text-sm text-indigo-100 border border-indigo-700/30 hover:border-indigo-500/50 transition-all"
                                        whileHover={{ scale: 1.05, backgroundColor: "rgba(99, 102, 241, 0.3)" }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 pt-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        {project.github && (
                            <motion.a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3.5 rounded-xl shadow-lg transition-all duration-300 border border-gray-700 hover:border-gray-600"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <FontAwesomeIcon icon={faGithub} className="text-lg" />
                                <span>View Code</span>
                            </motion.a>
                        )}

                        {project.link && (
                            <motion.a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3.5 rounded-xl shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <FontAwesomeIcon icon={faArrowLeft} rotation={180} />
                                <span>Live Demo</span>
                            </motion.a>
                        )}
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}

export default ProjectsData;