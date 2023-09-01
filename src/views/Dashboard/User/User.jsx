import React, { useEffect, useState } from "react";
import classes from "./User.module.css";
import { FaComputer, FaLocationDot, FaStar, FaToolbox } from "react-icons/fa6";
import personImg from "../../../assets/images/person.jpg";
import Persondata from "./Dummdata";
import Loader from "../component/Loader";
import { Link } from "react-router-dom";
import useCustomApi from "../../../custom-hooks/useCustomApi";

const Person = () => {
  const { getApi, data, loading } = useCustomApi(
    process.env.REACT_APP_API_GETUSER_URL
  );

  // localStorage.setItem("data", data[data.length - 1]);
  // console.log(data[data.length - 1]);

  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      {/* <div className={classes.boxPerson}>
        <div className={classes.profile}>
          <img
            src={personImg}
            alt="personImage"
            className={classes.imgPerson}
          />
          <h1 className={classes.personName}>Osoporu Emmanuel</h1>
          <p className={classes.available}>Available</p>
        </div>

        <div className={classes.profileJob}>
          <p className={classes.occupation}>
            <FaComputer /> Software engineer
          </p>
          <p className={classes.occupation}>
            <FaLocationDot /> Lagos, Nigeria
          </p>
        </div>

        <div className={classes.profilePick}>
          <p className={classes.viewTalent}>
            <a href="#">View Talent</a>
          </p>
          <p className={classes.occupation}>
            <FaStar className={classes.fontStar} />
            4.8
          </p>
        </div>
      </div> */}

      {/* Mappinng out the person information from Persondata.js */}
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

        {Array.isArray(data) ? (
          data.map((user) => {
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
                    <FaLocationDot /> {user.state + ",  " + user.country}
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
    </>
  );
};

export default Person;
