import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Page3() {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 100, transition: { duration: 0.1 } }}
      exit={{ x: window.innerWidth, opacity: 0, transition: { duration: 0.1 } }}
    >
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
        alt="Squirtle"
        style={{ maxHeight: "200px" }}
      />
      <h1>Squirtle</h1>
      <p>
        When it retracts its long neck into its shell, it squirts out water with
        vigorous force.
      </p>
      <h2>Type</h2>
      <p>Water</p>
      <h2>Weaknesses</h2>
      <p>Grass, Electric</p>
      <Link to="/page2">Anterior</Link>{" "}
      <span style={{ color: "grey" }}>Siguiente</span>
    </motion.div>
  );
}
export default Page3;
