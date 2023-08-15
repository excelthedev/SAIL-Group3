import React from "react";
import styles from "./Authentication.module.css";
import { Outlet } from "react-router-dom";
import logo from "../../assets/images/Talent-logo.svg";

const AuthLayout = () => {
  return (
    <div className="min-h-[100svh] grid grid-cols-[35rem_1fr]">
      {/* backgroundimage */}
      <div className={`bg-black ${styles.overlapImage}`}>
        <img src={logo} alt="Talent_Base" />
        <div className="grid text-[7.9rem] font-normal text-[#ffffff4d]">
          <div>
            <span className="text-white">T</span>al{" "}
          </div>
          <div>ent</div>
          <div>
            {" "}
            <span className="text-white">B</span>ase
          </div>
        </div>
      </div>

      {/* Source talent view */}
      <div className="px-[7.5rem] pt-[4rem] w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
