import React, { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import { createClient } from "contentful";
import { ContentContext } from "./Contentcontext";

// 🔑 Initialize Contentful client
const client = createClient({
    space: "dfhuezzh3ldp",
    environment: "master",
    accessToken: "3K65Z1jan71any41wstD_prHilFjTm7jSCFepI-pZX0"
});

function Projects() {
    const { dispatch } = useContext(ContentContext);

    const tabs = [
        { id: "1", label: "HTML & CSS" },
        { id: "2", label: "JavaScript & HTML & CSS" },
        { id: "3", label: "React & Tailwind" },
    ];

    const [activeTab, setActiveTab] = useState(tabs[0].label);
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        client
            .getEntries({
                content_type: "portoflio",
            })
            .then((response) => {
                const allProjects = response.items.map((item) => {
                    const imageId = item.fields.img?.sys?.id;
                    const image = response.includes?.Asset?.find((a) => a.sys.id === imageId);
                    const imageUrl = image?.fields?.file?.url ? `https:${image.fields.file.url}` : "";

                    return {
                        id: item.sys.id,
                        title: item.fields.title,
                        tech: item.fields.tech || [],
                        category: item.fields.category,
                        link: item.fields.link,
                        github: item.fields.github,
                        imageUrl,
                        about: item.fields.about || "",

                    };
                });


                setProjects(allProjects);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Contentful error:", err);
                setLoading(false);
            });
    }, []);

    const filtered = projects.filter(
        (p) => p.category?.trim().toLowerCase() === activeTab.trim().toLowerCase()
    );

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
            },
        },
    };

    return (
        <motion.div
            className="h-full text-white flex flex-col p-6 lg:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.h1 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                My Projects
            </motion.h1>

            {/* Tabs */}
            <div className="flex flex-wrap gap-3 mb-8">
                {tabs.map((tab) => (
                    <motion.button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.label)}
                        className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                            activeTab === tab.label
                                ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
                                : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/70 border border-gray-700"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {tab.label}
                    </motion.button>
                ))}
            </div>

            {loading ? (
                <p className="text-white">Loading...</p>
            ) : (
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {filtered.length > 0 ? (
                        filtered.map((item) => (
                            <motion.div
                                key={item.id}
                                className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden shadow-xl"
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => dispatch({ type: "SET_PROJECT", payload: item })}
                            >
                                <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
                                    {item.imageUrl ? (
                                        <img
                                            src={item.imageUrl}
                                            alt={item.title}
                                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : (
                                        <span className="text-gray-400">No Preview</span>
                                    )}
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold truncate">{item.title}</h3>

                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12 bg-gray-800/30 rounded-xl border border-dashed border-gray-700">
                            <p className="text-gray-400">No projects found in this category.</p>
                            <p className="text-sm text-gray-500 mt-2">Try another tab or check your data.</p>
                        </div>
                    )}
                </motion.div>
            )}
        </motion.div>
    );
}

export default Projects;
