import { motion } from "framer-motion";
import background from "../img/back.png"; // Fix the import name

const transition = (OgComponent) => {
    return () => (
        <>
            <motion.div
                className="fixed top-0 left-0 w-full h-full origin-right z-10"
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            ></motion.div>

            <motion.div
                className="fixed top-0 left-0 w-full h-full  origin-left"
                initial={{ x: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 1 }}
                transition={{ duration: 0.7, ease: "easeIn" }}
            >
                <OgComponent />
            </motion.div>
        </>
    );
};

export default transition;
