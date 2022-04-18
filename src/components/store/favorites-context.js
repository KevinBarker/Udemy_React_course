import {createContext, useState} from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});
export const FavoritesContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavoriteHander = (favoriteMeetup) => {
    setUserFavorites((previousUserFavorites) => {
      return previousUserFavorites.concat(favoriteMeetup);
    });
  };

  const removeFavoriteHandler = (meetUpId) => {
    setUserFavorites((previousUserFavorites) => {
      return previousUserFavorites.filter((meetup) => meetup.id !== meetUpId);
    });
  };
  const itemIsFavoriteHandler = (meetUpId) => {
    return userFavorites.some((meetup) => meetup.id === meetUpId);
  };

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHander,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
