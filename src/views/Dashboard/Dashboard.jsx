import React from "react";
import classes from "./Dashboard.module.css";
import User from "./User/User";

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
