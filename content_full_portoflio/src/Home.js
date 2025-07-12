import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import me from './img/me.png';

function Home() {
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);

    const roles = ["Front-End Developer", "UI/UX Designer", "React Developer"];
    const typingSpeed = 100;
    const deletingSpeed = 70;
    const delayBetweenWords = 1500;

    useEffect(() => {
        const handleTyping = () => {
            const currentWord = roles[loopNum % roles.length];

            if (!isDeleting) {
                setCurrentText(currentWord.substring(0, currentIndex + 1));
                setCurrentIndex(currentIndex + 1);

                if (currentIndex === currentWord.length) {
                    setTimeout(() => setIsDeleting(true), delayBetweenWords);
                }
            } else {
                setCurrentText(currentWord.substring(0, currentIndex - 1));
                setCurrentIndex(currentIndex - 1);

                if (currentIndex === 0) {
                    setIsDeleting(false);
                    setLoopNum(loopNum + 1);
                }
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
        return () => clearTimeout(timer);
    }, [currentIndex, isDeleting, loopNum]);

    return (
        <div className="w-full h-full bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex flex-col lg:flex-row items-center justify-center p-6 md:p-8 gap-6 md:gap-12">
            {/* Image Section */}
            <div className="relative w-full lg:w-2/5 h-64 lg:h-96 flex items-center justify-center group">
                <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
                    {/* Modern floating card effect */}
                    <div className="absolute inset-0 border-2 border-indigo-400/50 rounded-2xl transform rotate-3 transition-all duration-700 group-hover:rotate-4 group-hover:scale-[1.02] shadow-lg shadow-indigo-500/20 backdrop-blur-[1px]"></div>
                    <div className="absolute inset-0 bg-gray-800/30 backdrop-blur-[2px] rounded-2xl shadow-lg overflow-hidden transform -rotate-2 transition-all duration-700 group-hover:-rotate-3 group-hover:shadow-indigo-500/20">
                        <img
                            src={me}
                            alt="Sohila Walid"
                            className="w-full h-full object-cover rounded-2xl grayscale-[15%] group-hover:grayscale-0 transition-all duration-500"
                        />
                        {/* Subtle overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                </div>
            </div>

            {/* Text Content Section */}
            <motion.div
                className="w-full lg:w-3/5 flex flex-col justify-center space-y-4 md:space-y-6 text-center lg:text-left"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
                <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-white">
                    Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 bg-[length:200%_auto] animate-text-gradient">Sohila Walid</span>
                </h1>

                <div className="text-xl md:text-2xl font-medium h-10 md:h-12 flex items-center justify-center lg:justify-start">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">
                        {currentText}
                    </span>
                    <motion.span
                        className="ml-1 text-indigo-400"
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    >|</motion.span>
                </div>

                <motion.p
                    className="text-base md:text-lg text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0 bg-gray-900/30 p-4 rounded-lg backdrop-blur-[2px] border border-gray-700/30"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    I'm a Front-End Developer who specializes in building responsive, modern web applications using React. With a strong focus on clean code and user-first design, I transform ideas into elegant and engaging digital experiences.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    className="mt-4"
                >
                    {/* Button placeholder remains unchanged */}
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Home;