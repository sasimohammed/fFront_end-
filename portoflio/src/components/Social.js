import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import '../index.css'
function Social() {
    return (
        <nav className="fixed top-0 left-0 w-[100%] sm:w-full bg-[#240422]   z-50 flex justify-between items-center p-4 shadow-lg">
            <div className="flex items-center gap-3 ml-5 sm:ml-20">
                <div className="bg-white rounded-full sm:w-10 sm:h-10 w-8 h-8 flex items-center justify-center">
                    <h1 className="text-[#3F073D] font-black sm:text-3xl text-2xl">S</h1>
                </div>
                <h1 className="text-white font-maven font-bold sm:text-2xl text-xl">Sohaila . W</h1>
            </div>
            <div className="flex space-x-4 mr-14 sm:mr-20">
                <a href="https://www.facebook.com/walid.sohila.7"><FontAwesomeIcon icon={faFacebook} className="text-white sm:text-2xl text-xl"/></a>
                <a href="https://github.com/sasimohammed/fFront_end-"><FontAwesomeIcon icon={faGithub} className="text-white sm:text-2xl text-xl"/></a>
                <a href="https://www.linkedin.com/in/sohaila-walid-25a817313/"><FontAwesomeIcon icon={faLinkedin} className="text-white sm:text-2xl text-xl"/></a>
            </div>
        </nav>
    );
}

export default Social;
