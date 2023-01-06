import React from 'react';
import '../styles/about.css';

function About() {
  const URL = 'https://archives.bulbagarden.net/media/upload/8/86/Gen_I_Pok%C3%A9dex.png';
  return (
    <section>
      <h1>About Pokédex</h1>
      <section>
        <p>
          This application simulates a Pokedex,
          a digital encyclopedia containing all Pokémons
        </p>
        <p>One can filter Pokémons by type, and see more details for each one of them</p>
        <img
          className="pokedex-image"
          src={ URL }
          alt="Pokedex"
        />
      </section>
    </section>
  );
}

export default About;
