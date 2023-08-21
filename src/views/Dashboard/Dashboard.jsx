import React from "react";
import classes from "./Dashboard.module.css";
import User from "./User/User";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className={classes.asideBody}>
      <div>
        {/* Person profile prop Goes here  */}
        <User />
      </div>
    </div>
  );
};

export default Body;
