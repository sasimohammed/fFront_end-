import React from 'react';
import Navbar from './Navbar'; // Ensure Navbar component is correctly imported
import aboutImage from './img/about.png'; // Import the image from the img folder

function About() {
    return (
        <>
            <Navbar /> {/* Add the Navbar to keep consistency in the app */}

            <div
                className="bg-cover bg-center pt-20 w-full min-h-screen"
                style={{ backgroundImage: `url(${aboutImage})`, backgroundAttachment: 'fixed' }}
            >
                <div className="bg-black bg-opacity-70 w-full min-h-screen flex items-center justify-center">
                    <div className="mx-auto px-4 py-20 text-center ">
                        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 mb-6">About Us</h1>
                        <p className="text-xl text-gray-300 mb-10 w-full">
                            Welcome to <span
                            className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">Borcelle</span>, your ultimate destination for stylish and elegant fashion. We bring you the latest trends,
                            exclusive collections, and timeless pieces that elevate your wardrobe.
                            Fashionista was born out of a passion for high-quality, timeless fashion. Our mission is to
                            provide you
                            with a collection of clothing that makes you feel confident and stylish, every day.
                            From sophisticated formal wear to casual chic, we have something for every occasion.

                        </p>
                        <p className="text-lg text-gray-300 mb-10">
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
