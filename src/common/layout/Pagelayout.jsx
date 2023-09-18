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
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";

const Centralview = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.dashboardLayout}>
      {/* DASHBOARD LOGO AND MAIN NAVIGATIONS GOES  IMAGE HERE  */}

      <div className={classes.homeBox}>
        <div className={classes.homeItems}>
          <div className={classes.homeImgText} onClick={() => navigate("/")}>
            <img src={logo} alt="Talent Base" />
            <p className={classes.homebigText}>TalentBase</p>
          </div>
          <p className={classes.fieldsText}>Fields</p>
          <div>
            <ul className={classes.navigations}>
              <li>
                <Link to="/dashboard" href="#" className={classes.listA}>
                  <FaBars /> All
                </Link>
              </li>
              <li>
                <Link to="/art-and-craft" className={classes.listA}>
                  <FaPaintRoller />
                  Art and Craft
                </Link>
              </li>
              <li>
                <Link to="/education" className={classes.listA}>
                  <FaBookOpen />
                  Education
                </Link>
              </li>
              <li>
                <Link to="/event" className={classes.listA}>
                  <FaCakeCandles />
                  Event
                </Link>
              </li>
              <li>
                <Link to="/health" className={classes.listA}>
                  <FaHeartPulse />
                  Health
                </Link>
              </li>
              <li>
                <Link to="/media" className={classes.listA}>
                  <FaVideo />
                  Media
                </Link>
              </li>
              <li>
                <Link to="/technology" className={classes.listA}>
                  <FaMicrochip />
                  Technology
                </Link>
              </li>
            </ul>
          </div>
          <div>
            {/* SINGED IN PROFILE PROP SHOULD GO HERE */}
            <div>
              {}
              <p className={classes.personText}>Personal</p>
              <ul className={classes.navigations}>
                <li>
                  <Link to="/profile" className={classes.listA}>
                    <FaUser />
                    Profile
                  </Link>
                </li>

                <li>
                  <Link to="/dashboard" className={classes.listA}>
                    <FaClock />
                    History{" "}
                    <span className="text-[0.55rem] border-2 rounded-full px-[0.35rem] border-red-700 text-red-700">
                      coming soon
                    </span>
                  </Link>
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
