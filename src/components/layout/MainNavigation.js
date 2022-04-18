import {useContext} from "react";
import FavoritesContext from "../store/favorites-context";
import {Link} from "react-router-dom";
import classes from "./MainNavigation.module.css";
const MainNavigation = () => {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <ul>
        <li>
          <Link to="/">All Meet Ups</Link>
        </li>
        <li>
          <Link to="/new-meetup">New Meetup</Link>
        </li>
        <li>
          <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
          <Link to="/favorites">My Favorites</Link>
        </li>
      </ul>
    </header>
  );
};
export default MainNavigation;
