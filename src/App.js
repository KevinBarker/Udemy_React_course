import {Route, Switch} from "react-router-dom";
import classes from "./App.module.css";
import MainNavigation from "./components/layout/MainNavigation";
import AllMeetUpsPage from "./pages/AllMeetUps";
import NewMeetUpPage from "./pages/NewMeetUp";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";
function App() {
  return (
    <div>
      <MainNavigation />
      <div className={classes.main}>
        <Switch>
          <Route path="/" exact>
            <AllMeetUpsPage />
          </Route>
          <Route path="/new-meetup">
            <NewMeetUpPage />
          </Route>
          <Route path="/favorites">
            <FavoritesPage />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
