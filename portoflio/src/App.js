import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Nav from "./components/Nav";
import About from "./components/About";
import Home from "./components/Home";
import Social from "./components/Social";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
    return (
        <Router>
            <Nav />
            <Social />
            <AnimatePresence mode="wait">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </AnimatePresence>
        </Router>
    );
}

export default App;
