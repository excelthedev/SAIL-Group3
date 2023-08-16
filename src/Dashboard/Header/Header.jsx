import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.asideHeader}>
      <h1 className={classes.asideHeadText}>All</h1>
      <div>
        <form action="#">
          <input
            type="text"
            placeholder="Search for a talent"
            className={classes.asideForm}
          />
        </form>
      </div>
      <div className={classes.asideGuest}>
        <h1 className={classes.asideG}>G</h1>{" "}
        <p className={classes.asideGText}>Hi Ogunmepon</p>
      </div>
    </div>
  );
};

export default Header;
