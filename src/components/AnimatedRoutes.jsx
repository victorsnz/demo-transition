import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import Page3 from "../pages/Page3";

import { AnimatePresence } from "framer-motion";
// import {} from "framer-motion/dist/framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Page1 />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
