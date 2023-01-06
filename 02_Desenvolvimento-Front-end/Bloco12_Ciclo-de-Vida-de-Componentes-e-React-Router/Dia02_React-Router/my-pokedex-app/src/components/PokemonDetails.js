import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { pokemonType } from '../types';
import '../styles/pokemonDetails.css';
import Pokemon from './Pokemon';

class PokemonDetails extends Component {
  render() {
    const {
      pokemons,
      match: {
        params: { id },
      },
    } = this.props;
    const pokemonFound = pokemons.find((pok) => pok.id === Number(id));

    return (
      <section className="pokemon-details">
        <h1>
          {`${pokemonFound.name} details`}
        </h1>
        <Pokemon
          pokemon={ pokemonFound }
          hideLink
        />
        <h2>Sumário:</h2>
        <p>{pokemonFound.summary}</p>
        <h2>Hábitat:</h2>
        <section className="pokemon-habitat">
          { pokemonFound.foundAt.map((location) => (
            <section key={ location.location }>
              <span>{ location.location }</span>
              <img src={ location.map } alt="mapa do pokemon" />
            </section>
          )) }
        </section>
      </section>
    );
  }
}

PokemonDetails.propTypes = {
  pokemons: PropTypes.arrayOf(pokemonType.isRequired).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default PokemonDetails;
