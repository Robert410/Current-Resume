import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import NavBar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { Projects } from "./Components/Projects";

function App() {
  const location = useLocation();

  return (
    <>
      <NavBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
