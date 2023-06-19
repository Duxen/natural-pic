import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (photo) => {
    setFavorites((prevFavorites) => [...prevFavorites, photo]);
  };

  const removeFavorite = (photo) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.id !== photo.id)
    );
  };

  const isFavorite = (photo) => {
    return favorites.some((fav) => fav.id === photo.id);
  };

  const favoritesContextValue = {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  };

  return (
    <FavoritesContext.Provider value={favoritesContextValue}>
      {children}
    </FavoritesContext.Provider>
  );
};