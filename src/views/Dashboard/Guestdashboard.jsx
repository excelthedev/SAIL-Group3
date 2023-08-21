import React from "react";
import classes from "./Dashboard.module.css";
import useCustomApi from "../../custom-hooks/useCustomApi";
import { useEffect } from "react";
import { FaComputer, FaLocationDot, FaStar, FaToolbox } from "react-icons/fa6";
import personImg from "../../assets/images/person.jpg";
import { Link } from "react-router-dom";

const Guestdashboard = () => {
  const { getApi, data, loading } = useCustomApi(
    process.env.REACT_APP_API_GETUSER_URL
  );

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div>
      {" "}
      <div className={classes.asideBody}>
        <div>
          {/* Person profile prop Goes here  */}
          <div className={classes.asideMainBody}>
            {/* {data.map((person) => {
          return (
            <div className={classes.boxPerson}>
              <div className={classes.profile}>
                <img
                  src={personImg}
                  alt="personImage"
                  className={classes.imgPerson}
                />
                <h1 className={classes.personName}>
                  {person.first_name + " " + person.last_name}
                </h1>
                <p className={classes.available}>Available</p>
              </div>

              <div className={classes.profileJob}>
                <p className={classes.occupation}>
                  <FaToolbox /> {person.field}
                </p>
                <p className={classes.occupation}>
                  <FaLocationDot /> {person.profession}
                </p>
              </div>

              <div className={classes.profilePick}>
                <p className={classes.viewTalent}>
                  <Link to="/user-profile">View Talent</Link>
                </p>
                <p className={classes.occupation}>
                  <FaStar className={classes.fontStar} />
                  4.8
                </p>
              </div>
            </div>
          );
        })} */}

            {Array.isArray(data)
              ? data.map((user) => {
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
                          <Link to="/login-page">View Talent</Link>
                        </p>
                        <p className={classes.occupation}>
                          <FaStar className={classes.fontStar} />
                          4.8
                        </p>
                      </div>
                    </div>
                  );
                })
              : []}
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Guestdashboard;
