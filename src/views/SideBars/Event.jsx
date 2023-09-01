import React, { useEffect } from "react";
import useCustomApi from "../../custom-hooks/useCustomApi";
import classes from "./Sidebars.module.css";
import { FaComputer, FaLocationDot, FaStar, FaToolbox } from "react-icons/fa6";
import personImg from "../../assets/images/person.jpg";
import { Link } from "react-router-dom";
import Loader from "../Dashboard/component/Loader";

const Event = () => {
  const { getApi, data, loading } = useCustomApi(
    process.env.REACT_APP_API_GETUSER_URL
  );

  useEffect(() => {
    getApi();
  }, []);
  return (
    <div className={classes.asideBody}>
      <div className={classes.asideMainBody}>
        {Array.isArray(data) ? (
          data
            .filter((user) => user.field === "Event")
            .map((user) => {
              return (
                <div className={classes.boxPerson}>
                  <div className={classes.profile}>
                    <img
                      src={personImg}
                      alt="personImage"
                      className={classes.imgPerson}
                    />
                    <h1 className={classes.personName}>
                      {user.first_name + " " + user.last_name}
                    </h1>
                    <p className={classes.available}>Available</p>
                  </div>

                  <div className={classes.profileJob}>
                    <p className={classes.occupation}>
                      <FaToolbox /> {user.field}
                    </p>
                    <p className={classes.occupation}>
                      <FaLocationDot /> {user.profession}
                    </p>
                  </div>

                  <div className={classes.profilePick}>
                    <p className={classes.viewTalent}>
                      <Link to="/user-profile" state={user}>
                        View Talent
                      </Link>
                    </p>
                    <p className={classes.occupation}>
                      <FaStar className={classes.fontStar} />
                      4.8
                    </p>
                  </div>
                </div>
              );
            })
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Event;
