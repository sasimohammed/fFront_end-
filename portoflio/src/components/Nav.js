import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faUser,
    faEnvelope,
    faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";
function Nav() {
    return(
        <div className="  ">
            <aside
                className="sm:bg-white/20 bg-[#420840]  z-10 sm:rounded-3xl  w-[100%] h-[6%] sm:w-[4%] sm:h-[45%] sm:absolute sm:right-20 sm:top-[30%]
                fixed bottom-0 flex flex-row sm:flex-col gap-y-6 justify-center
               items-center space-x-8 sm:space-x-0 sm:space-y-6  p-3">
                <Link to={'/'}>
                <FontAwesomeIcon
                    icon={faHome}
                    size="xl"
                    className="text-white hover:bg-gradient-to-r  sm:text-2xl text-xl  hover:text-[#FE45F7] transition-colors duration-300 cursor-pointer"/>
                </Link>
                <Link to={'/About'}>
                    <FontAwesomeIcon icon={faUser} size="xl"
                                     className="text-white  sm:text-2xl text-xl  hover:bg-gradient-to-r hover:text-[#FE45F7] transition-colors duration-300 cursor-pointer"/>
                </Link>
<Link to='/projects'>

                <FontAwesomeIcon icon={faProjectDiagram} size="xl"
                                 className="text-white hover:bg-gradient-to-r  sm:text-2xl text-xl   hover:text-[#FE45F7] transition-colors duration-300 cursor-pointer"/>

</Link>
                <Link to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} size="xl"
                                 className="text-white hover:bg-gradient-to-r  sm:text-2xl text-xl   hover:text-[#FE45F7] transition-colors duration-300 cursor-pointer"/>
                </Link>
            </aside>


        </div>
    )
}

export default Nav;