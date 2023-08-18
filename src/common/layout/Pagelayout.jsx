import React from "react";
import classes from "./Pagelayout.module.css";
import logo from "../../assets/images/Talent-logo.svg";
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
import { Link, Outlet } from "react-router-dom";

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
            <Link to="/">
              <a href="#" className={classes.signInHere}>
                <FaRightToBracket /> Sign Out
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* THE HEADER AND MAIN BODY GO HERE INTO THE ASIDE */}
      <div className={classes.asideview}>
        <div className={classes.asideDivison}>
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
              <p className={classes.asideGText}>Hi Welcome User</p>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Centralview;
