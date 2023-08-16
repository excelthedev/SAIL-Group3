import React from "react";
import classes from "./Body.module.css";
import Person from "./Person/Person";

const Body = () => {
  return (
    <div className={classes.asideBody}>
      <div>
        {/* Person profile prop Goes here  */}
        <Person />
      </div>
    </div>
  );
};

export default Body;
