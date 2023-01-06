import { Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FilmsContext from './context/FilmsContext';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  const [films, setFilms] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch('https://api-trybe-frontend.vercel.app/api/ghibli-animations')
      .then((result) => result.json())
      .then((data) => setFilms(data))
      .catch((error) => console.error(error));
  }, []);

  function toggleFavorite(item) {
    const isAlreadyFavorite = favorites.find((favorite) => favorite.id === item.id);
    if (isAlreadyFavorite) {
      const newFavorites = favorites.filter((favorite) => favorite.id !== item.id);
      setFavorites(newFavorites);
    } else {
      setFavorites([...favorites, item]);
    }
  }

   const context = {
    films,
    favorites,
    toggleFavorite,
  };

  return (
    <FilmsContext.Provider value={ context }>
      <Switch>
        <Route path="/favorites" component={ Favorites } />
        <Route path="/" component={ Home } />
      </Switch>
    </FilmsContext.Provider>
  );
}

export default App;
