import React from "react";
import classes from "./Layout.module.css";
import logo from "../../assets/amex-logo.svg";
import texas from '../../assets/TX.jpg'
import california from '../../assets/CA.png'
import newjersey from '../../assets/NJ.png'
import savannah from '../../assets/SA.png'
import indianapolis from '../../assets/IN.png'

const Layout = () => {
  return (
    <div className={classes.layout}>
    
      <div className={classes.about}>
      <h3>The main ports we cooperate with</h3>
      <div className={classes.states}>

      <img src={texas} alt="texas"></img>
      <img src={california} alt="california"></img>
      <img src={newjersey} alt="newjersey"></img>
      <img src={savannah} alt="savannah"></img>
<img src={indianapolis} alt="indianapolis"></img>

    </div>
        <p>
          Our company started operating in Georgia under the name of Amexline at
          the beginning of 2012.
        </p>
      </div>
      <div className={classes.content}>
        <img src={logo} alt="logo"></img>
      </div>
    </div>
  );
};

export default Layout;
