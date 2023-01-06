import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';
import Button from './Button';
import '../styles/pokedex.css';

class Pokedex extends React.Component {
  constructor() {
    super();

    this.state = {
      pokemonIndex: 0,
      filteredType: 'all',
    };
  }

  nextPokemon = (pokemonLength) => {
    this.setState((state) => ({
      pokemonIndex: (state.pokemonIndex + 1) % pokemonLength,
    }));
  }

  fetchPokemonTypes = () => {
    const { pokemons } = this.props;
    const pokemonTypes = [];
  
    pokemons.forEach((pokemon) => {
      if (!pokemonTypes.includes(pokemon.type)) pokemonTypes.push(pokemon.type);
    });
    return pokemonTypes;
  }

  filterPokemon = (filteredType) => {
    this.setState({ filteredType, pokemonIndex: 0 });
  }

  fetchFilteredPokemon = () => {
    const { pokemons } = this.props;
    const { filteredType } = this.state;
  
    return pokemons.filter((pokemon) => {
      if (filteredType === 'all') return true;
      return pokemon.type === filteredType;
    });
  }

  render() {
    const { pokemonIndex } = this.state;
    const filteredPokemon = this.fetchFilteredPokemon();
    const pokemon = filteredPokemon[pokemonIndex];
    const pokemonTypes = this.fetchPokemonTypes();
    
    return (
      <div className="pokedex">
        <div className="pokedex-buttons-panel">
          <Button
            onClick={ () => this.filterPokemon('all') }
            className="filter-button"
          >
            All
          </Button>
          {pokemonTypes.map((type) => (
          <Button
            key={ type }
            onClick={ () => this.filterPokemon(type) }
            className="filter-button"
          >
            { type }
          </Button>
        ))}
        </div>
        <Pokemon pokemon={ pokemon } />
        <Button
          onClick={ () => this.nextPokemon(filteredPokemon.length) }
          className="filter-button"
          disabled={ filteredPokemon.length <= 1 }
        >
          Próximo pokémon
        </Button>
      </div>
    );
  }
}

Pokedex.defaultProps = {
  pokemons: [],
};

Pokedex.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
    moreInfo: PropTypes.string,
  })),
};

export default Pokedex;
