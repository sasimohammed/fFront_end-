import React from "react";
import { motion } from "framer-motion";
import transition from "./transition";
import background from "../img/back.png";

function Contact() {
    return (
        <div className="bg-cover bg-center relative bg-no-repeat h-[100vh] w-full flex items-center justify-center p-4"
             style={{ backgroundImage: `url(${background})` }}>

            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
                autoPlay
                loop
                muted
            >
                <source src="https://videos.pexels.com/video-files/946146/946146-hd_1920_1080_30fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="flex flex-col sm:flex-row absolute sm:left-[35%] items-center justify-between w-[80%] sm:w-full max-w-5xl">
                {/* Contact Form */}
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="bg-[#3C073A] text-white p-8 rounded-2xl shadow-lg w-full sm:w-[400px] relative z-10"
                >
                    <h2 className="text-3xl mb-6 font-maven font-bold bg-gradient-to-r from-[#FE45F7] to-[#F14FA2] bg-clip-text text-transparent text-center">
                        Get in Touch
                    </h2>
                    <form>
                        <input type="text" placeholder="Your Name"
                               className="w-full p-3 mb-4 bg-white/20 text-white rounded-md focus:outline-none backdrop-blur-md placeholder-white"/>
                        <input type="email" placeholder="Your Email"
                               className="w-full p-3 mb-4 bg-white/20 text-white rounded-md focus:outline-none backdrop-blur-md placeholder-white"/>
                        <textarea placeholder="Your Message"
                                  className="w-full p-3 mb-4 bg-white/20 text-white rounded-md focus:outline-none backdrop-blur-md placeholder-white"
                                  rows="5"></textarea>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-[#FE45F7] to-[#F14FA2] py-3 rounded-md font-bold text-white transition hover:opacity-80 shadow-lg"
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}

export default transition(Contact);
