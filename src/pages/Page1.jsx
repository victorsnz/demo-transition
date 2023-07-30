import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Page1() {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 100, transition: { duration: 0.1 } }}
      exit={{ x: window.innerWidth, opacity: 0, transition: { duration: 0.1 } }}
    >
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
        alt="Charmander"
        style={{ maxHeight: "200px" }}
      />
      <h1>Bulbasaur</h1>
      <p>
        There is a plant seed on its back right from the day this Pokémon is
        born. The seed slowly grows larger.
      </p>
      <h2>Type</h2>
      <p>Grass, Poison</p>
      <h2>Weaknesses</h2>
      <p>Fire, Psychic, Flying, Ice</p>
      <span style={{ color: "" }}>Anterior</span>{" "}
      <Link to="/page2">Siguiente</Link>
    </motion.div>
  );
}

export default Page1;
