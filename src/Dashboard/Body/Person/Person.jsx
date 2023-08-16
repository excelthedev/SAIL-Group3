import React from "react";
import classes from "./Person.module.css";
import { FaComputer, FaLocationDot, FaStar, FaToolbox } from "react-icons/fa6";
import personImg from "../../../assets/images/person.avif";
import Persondata from "./Persondata";

const Person = () => {
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
        {Persondata.map((person) => {
          return (
            <div className={classes.boxPerson}>
              <div className={classes.profile}>
                <img
                  src={person.personImage}
                  alt="personImage"
                  className={classes.imgPerson}
                />
                <h1 className={classes.personName}>{person.name}</h1>
                <p className={classes.available}>{person.status}</p>
              </div>

              <div className={classes.profileJob}>
                <p className={classes.occupation}>
                  <FaToolbox /> {person.occupation}
                </p>
                <p className={classes.occupation}>
                  <FaLocationDot /> {person.location}
                </p>
              </div>

              <div className={classes.profilePick}>
                <p className={classes.viewTalent}>
                  <a href="#">{person.talent}</a>
                </p>
                <p className={classes.occupation}>
                  <FaStar className={classes.fontStar} />
                  {person.rating}
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
