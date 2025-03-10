import React from 'react';
import Navbar from './Navbar'; // Ensure Navbar component is correctly imported
import './App.css';
import './index.css';
import img2 from './home2.png';
import {Link} from "react-router-dom";

function Home() {
    return (
        <div className="flex flex-col justify-between min-h-screen relative">
            {/* Navbar Component */}


            {/* Image as Background with Content Over it */}
            <div className="w-full h-screen relative bg-cover bg-center" style={{ backgroundImage: `url(${img2})` }}>
                {/* Content Over the Image */}
                <div className="flex flex-col justify-center items-center w-full h-full bg-black bg-opacity-50">
                    {/* Modern Text with Custom Font */}
                    <p className="text-white text-4xl sm:text-7xl font-bold mt-20 pt-10 text-center uppercase font-mono">
                        Find Your Style Here
                    </p>

                    {/* Start Shopping Button with Gradient */}

                    <div className="mt-6 text-center"><Link to="/Trending">
                        <button
                            className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white py-3 px-6 rounded-full text-2xl font-semibold hover:opacity-70 transition duration-300"> start
                             Shoping
                        </button>
                    </Link></div>
                </div>
            </div>
        </div>
    );
}

export default Home;
