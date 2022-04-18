import {useContext} from "react";
import Meetuplist from "../components/meetups/MeetupList";
import FavoritesContext from "../components/store/favorites-context";
const FavoritesPage = () => {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You have no favorites, start adding some!</p>;
  } else {
    console.log("favorites!");
  }
  return (
    <section>
      <h1>My Favorites</h1>
      <Meetuplist meetups={favoritesCtx.favorites} />
    </section>
  );
};
export default FavoritesPage;
