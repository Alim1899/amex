import React from "react";
import classes from "./Layout.module.css";
import logo from "../../assets/amex-logo.svg";
import texas from "../../assets/TX.jpg";
import california from "../../assets/CA.png";
import newjersey from "../../assets/NJ.png";
import savannah from "../../assets/SA.png";
import indianapolis from "../../assets/IN.png";
const Layout = (props) => {
  return (
    <div className={classes.layout}>
      <div className={classes.content}>
        <img className={classes.logo} src={logo} alt="logo"></img>
        {props.children}
      </div>

      <div className={classes.about}>
        <h3>The main ports we cooperate with</h3>
        <div className={classes.states}>
          <div className={classes.firstRow}>
            <label>
              <img src={texas} alt="texas"></img>Texas
            </label>
            <label>
              <img src={california} alt="california"></img>California
            </label>
            <label>
              {" "}
              <img src={newjersey} alt="newjersey"></img>New Jersey
            </label>
          </div>
          <div className={classes.secondRow}>
            <label>
              {" "}
              <img src={savannah} alt="savannah"></img>Savannah
            </label>
            <label>
              <img src={indianapolis} alt="indianapolis"></img>indianapolis
            </label>
          </div>
        </div>
        <p>
          Our company started operating in Georgia under the name of Amexline at
          the beginning of 2012.
        </p>
      </div>
    </div>
  );
};

export default Layout;
