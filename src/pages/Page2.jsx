import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Page2() {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 100, transition: { duration: 0.1 } }}
      exit={{ x: window.innerWidth, opacity: 0, transition: { duration: 0.1 } }}
    >
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
        alt="Charmander"
        style={{ maxHeight: "200px" }}
      />
      <h1>Charmander</h1>
      <p>
        It has a preference for hot things. When it rains, steam is said to
        spout from the tip of its tail.
      </p>
      <h2>Type</h2>
      <p>Fire</p>
      <h2>Weaknesses</h2>
      <p>Water, Ground, Rock</p>
      <Link to="/page1">Anterior</Link> <Link to="/page3">Siguiente</Link>
    </motion.div>
  );
}
export default Page2;
