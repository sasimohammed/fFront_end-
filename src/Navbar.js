import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Navbar({ cartCount }) {  // cartCount now comes from App.js
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [menu, setMenu] = useState("Home");

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            <nav className="nav flex items-center justify-between bg-black p-5 text-white fixed w-full z-10">
                {/* Logo */}
                <h1 className="text-4xl font-bold">Borcelle</h1>

                {/* Hamburger Icon for mobile */}
                <div className="lg:hidden">
                    <FontAwesomeIcon
                        icon={sidebarOpen ? faTimes : faBars}
                        className="text-3xl cursor-pointer"
                        onClick={toggleSidebar}
                    />
                </div>

                {/* Navigation Links for larger screens */}
                <ul className="hidden lg:flex space-x-8">
                    <li className="group transform hover:scale-105" onClick={() => setMenu("Home")}>
                        <Link
                            to="/"
                            className="text-white text-xl group-hover:text-black px-4 py-2 rounded-full group-hover:bg-white transition-all duration-300"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="group transform hover:scale-105" onClick={() => setMenu("Trending")}>
                        <Link
                            to="/Trending"
                            className="text-white text-xl group-hover:text-black px-4 py-2 rounded-full group-hover:bg-white transition-all duration-200"
                        >
                            Trending
                        </Link>
                    </li>
                    <li className="group transform hover:scale-105" onClick={() => setMenu("About Us")}>
                        <Link
                            to="/About"
                            className="text-white text-xl group-hover:text-black px-4 py-2 rounded-full group-hover:bg-white transition-all duration-100"
                        >
                            About Us
                        </Link>
                    </li>
                </ul>

                {/* Search Bar and Icons for larger screens */}
                <div className="hidden lg:flex items-center space-x-6">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent text-white rounded-full pl-10 pr-4 py-2 border border-white/50 focus:outline-none"
                        />
                        <FontAwesomeIcon
                            icon={faSearch}
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        />
                    </div>

                    <Link to="/wishlist">
                        <div className="group relative">
                            <FontAwesomeIcon
                                icon={faShoppingCart}
                                className="text-2xl group-hover:text-black p-2 rounded-full group-hover:bg-white group-hover:scale-110 cursor-pointer transition-all duration-300"
                            />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm font-bold rounded-full px-2 py-1">
                                    {cartCount}
                                </span>
                            )}
                        </div>
                    </Link>

                    <div className="group">
                        <FontAwesomeIcon
                            icon={faUser}
                            className="text-2xl group-hover:text-black p-2 rounded-full group-hover:bg-white group-hover:scale-110 cursor-pointer transition-all duration-300"
                        />
                    </div>
                </div>
            </nav>

            {/* Sidebar for smaller screens */}
            <div
                className={`fixed right-0 top-0 h-full bg-black text-white p-5 z-20 transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden w-64`}
            >
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold">Menu</h1>
                    <FontAwesomeIcon
                        icon={faTimes}
                        className="text-2xl cursor-pointer"
                        onClick={toggleSidebar}
                    />
                </div>
                <ul className="space-y-6">
                    <li className="group transform hover:scale-105" onClick={() => { setMenu("Home"); toggleSidebar(); }}>
                        <Link
                            to="/"
                            className="text-white text-xl group-hover:text-black px-4 py-2 rounded-full group-hover:bg-white transition-all duration-300"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="group transform hover:scale-105" onClick={() => { setMenu("Trending"); toggleSidebar(); }}>
                        <Link
                            to="/Trending"
                            className="text-white text-xl group-hover:text-black px-4 py-2 rounded-full group-hover:bg-white transition-all duration-200"
                        >
                            Trending
                        </Link>
                    </li>
                    <li className="group transform hover:scale-105" onClick={() => { setMenu("About Us"); toggleSidebar(); }}>
                        <Link
                            to="/About"
                            className="text-white text-xl group-hover:text-black px-4 py-2 rounded-full group-hover:bg-white transition-all duration-100"
                        >
                            About Us
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}
