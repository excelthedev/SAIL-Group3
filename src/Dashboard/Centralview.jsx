import React from "react";
import classes from "./Centralview.module.css";
import logo from "../assets/Logo.svg";
import {
  FaBars,
  FaPaintRoller,
  FaBookOpen,
  FaCakeCandles,
  FaHeartPulse,
  FaVideo,
  FaMicrochip,
  FaRightToBracket,
  FaUser,
  FaClock,
} from "react-icons/fa6";
import Header from "./Header/Header";

import Body from "./Body/Body";

const Centralview = () => {
  return (
    <div className={classes.dashboardLayout}>
      {/* DASHBOARD LOGO AND MAIN NAVIGATIONS GOES  IMAGE HERE  */}

      <div className={classes.homeBox}>
        <div className={classes.homeItems}>
          <div className={classes.homeImgText}>
            <img src={logo} alt="Talent Base" />
            <p className={classes.homebigText}>TalentBase</p>
          </div>
          <p className={classes.fieldsText}>Fields</p>
          <div>
            <ul className={classes.navigations}>
              <li>
                <a href="#" className={classes.listA}>
                  <FaBars /> All
                </a>
              </li>
              <li>
                <a href="#" className={classes.listA}>
                  <FaPaintRoller />
                  Art and Craft
                </a>
              </li>
              <li>
                <a href="#" className={classes.listA}>
                  <FaBookOpen />
                  Education
                </a>
              </li>
              <li>
                <a href="#" className={classes.listA}>
                  <FaCakeCandles />
                  Event
                </a>
              </li>
              <li>
                <a href="#" className={classes.listA}>
                  <FaHeartPulse />
                  Health
                </a>
              </li>
              <li>
                <a href="#" className={classes.listA}>
                  <FaVideo />
                  Media
                </a>
              </li>
              <li>
                <a href="#" className={classes.listA}>
                  <FaMicrochip />
                  Technology
                </a>
              </li>
            </ul>
          </div>
          <div>
            {/* SINGED IN PROFILE PROP SHOULD GO HERE */}
            <div>
              <p className={classes.personText}>Personal</p>
              <ul className={classes.navigations}>
                <li>
                  <a href="#" className={classes.listA}>
                    <FaUser />
                    Profile
                  </a>
                </li>

                <li>
                  <a href="#" className={classes.listA}>
                    <FaClock />
                    History
                  </a>
                </li>
              </ul>
            </div>

            {/* SIGN IN AND SIGN OUT BUTTON SHOULD GO HERE */}
            <a href="#" className={classes.signInHere}>
              <FaRightToBracket /> Sign Out
            </a>
          </div>
        </div>
      </div>

      {/* THE HEADER AND MAIN BODY GO HERE INTO THE ASIDE */}
      <div className={classes.asideview}>
        <div className={classes.asideDivison}>
          <Header />
          <Body />
        </div>
      </div>
    </div>
  );
};

export default Centralview;
