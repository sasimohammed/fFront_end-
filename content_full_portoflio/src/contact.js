import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import contact from './img/contact.jpg';
import { motion } from "framer-motion";

function Contact() {
    const formRef = useRef();
    const [status, setStatus] = useState("");
    const [isHovered, setIsHovered] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_hgbx7s7",
                "template_hiwbg1z",
                formRef.current,
                "8SSE6tRNZnUADAYYP"
            )
            .then(() => {
                setStatus("success");
                formRef.current.reset();
            })
            .catch(() => {
                setStatus("error");
            });
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const formVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 120
            }
        }
    };

    return (
        <motion.div
            className="flex flex-col lg:flex-row items-center  justify-between text-white p-6  mx-auto gap-20"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Contact Form - Animated from left */}
            <motion.div
                className="w-full lg:w-[48%] bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 shadow-lg"
                variants={formVariants}
            >
                <motion.h2
                    className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent"
                    variants={itemVariants}
                >
                    Let's Connect
                </motion.h2>

                <motion.form
                    ref={formRef}
                    onSubmit={sendEmail}
                    className="space-y-4"
                    variants={containerVariants}
                >
                    <motion.div className="space-y-2" variants={itemVariants}>
                        <label className="text-gray-300 text-sm font-medium">Your Name</label>
                        <input
                            type="text"
                            name="from_name"
                            required
                            className="w-full p-3 rounded-lg bg-gray-700/60 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                        />
                    </motion.div>

                    <motion.div className="space-y-2" variants={itemVariants}>
                        <label className="text-gray-300 text-sm font-medium">Your Email</label>
                        <input
                            type="email"
                            name="reply_to"
                            required
                            className="w-full p-3 rounded-lg bg-gray-700/60 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                        />
                    </motion.div>

                    <motion.div className="space-y-2" variants={itemVariants}>
                        <label className="text-gray-300 text-sm font-medium">Your Message</label>
                        <textarea
                            name="message"
                            rows="4"
                            required
                            className="w-full p-3 rounded-lg bg-gray-700/60 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                        />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <button
                            type="submit"
                            className="w-full mt-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white py-3 px-5 rounded-lg shadow-md hover:shadow-indigo-500/20 transition-all duration-300 font-medium flex items-center justify-center gap-2"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Send Message
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </motion.div>

                    {status === "success" && (
                        <motion.div
                            className="mt-3 p-2 bg-green-500/10 border border-green-500/30 rounded-md text-green-400 text-sm text-center"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring" }}
                        >
                            🎉 Message sent! I'll get back to you soon.
                        </motion.div>
                    )}
                    {status === "error" && (
                        <motion.div
                            className="mt-3 p-2 bg-red-500/10 border border-red-500/30 rounded-md text-red-400 text-sm text-center"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring" }}
                        >
                            ⚠️ Something went wrong. Please try again.
                        </motion.div>
                    )}
                </motion.form>
            </motion.div>

            {/* Right-side Image - Animated from right */}
            <motion.div
                className="w-full lg:w-[48%] relative group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                variants={imageVariants}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-xl group-hover:opacity-80 transition-opacity duration-500 z-10" />

                <motion.img
                    src={contact}
                    alt="Contact Illustration"
                    className={`w-full h-auto max-h-[400px] rounded-xl shadow-lg object-cover transform transition-all duration-500 ${
                        isHovered ? 'scale-[1.02]' : 'scale-100'
                    }`}
                    whileHover={{ scale: 1.02 }}
                />

                <motion.div
                    className="absolute bottom-4 left-4 z-20 max-w-xs"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <h3 className="text-xl font-bold text-white drop-shadow-md">
                        Ready to Start Your Project?
                    </h3>
                    <p className="text-gray-300 mt-1 text-sm drop-shadow-md">
                        Whether you have a question or want to discuss potential collaboration.
                    </p>
                </motion.div>

                <motion.div
                    className="absolute top-4 right-4 z-20 bg-black/40 rounded-full p-1.5 backdrop-blur-sm border border-gray-600"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default Contact;