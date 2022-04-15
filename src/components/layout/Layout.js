import {render} from "@testing-library/react";
import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
const Layout = (props) => {
  console.log(`TEST ${props.children}`);
  render(
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
};
export default Layout;
