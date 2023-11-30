import React from "react";
import classes from "./Layout.module.css";
import logo from "../../assets/amex-logo.svg";
const Layout = () => {
  return (
    <div className={classes.layout}>
      <div className={classes.logo}>
        <img src={logo} alt="logo"></img>
        <p>International Logistics Company</p>
      </div>
      <div className={classes.content}>
        <label>
          Enter vin number
          <input type="text"></input>
        </label>
      </div>
    </div>
  );
};

export default Layout;
