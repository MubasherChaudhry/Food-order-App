import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import HeaderImage from "../assets/Header-image.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>

      <div className={classes["main-image"]}>
        <img src={HeaderImage} alt="A Table Of delicious food" />
      </div>
    </Fragment>
  );
};

export default Header;
