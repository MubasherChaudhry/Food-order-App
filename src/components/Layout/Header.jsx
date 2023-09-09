import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import HeaderImage from "../../assets/Header-image.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1 className={classes.h1}>First React Project</h1>
        <h2 className={classes.h2}>Always Bless You in All Ways</h2>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>

      <div className={classes["main-image"]}>
        <img src={HeaderImage} alt="A Table Of delicious food" />
      </div>
    </Fragment>
  );
};

export default Header;
