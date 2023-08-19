import React, { useEffect, useState } from "react";
import classes from "./User.module.css";
import { FaComputer, FaLocationDot, FaStar, FaToolbox } from "react-icons/fa6";
import personImg from "../../../assets/images/person.jpg";
import Persondata from "./Dummdata";
import axios from "axios";
import { Link } from "react-router-dom";

const Person = () => {
  const [users, setUsers] = useState([
    {
      first_name: null,
      last_name: null,
      field: null,
      profession: null,
    },
  ]);

  const getAllUsers = async () => {
    const res = await fetch(process.env.REACT_APP_API_GETUSER_URL);
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    getAllUsers();
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
        {users.map((person) => {
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
        })}
      </div>
    </>
  );
};

export default Person;
