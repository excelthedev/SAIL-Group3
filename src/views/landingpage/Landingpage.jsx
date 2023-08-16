import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/mobile-logo.svg";

const Landingpage = () => {
  return (
    <div>
      <div className="flex flex-col leading-[1.1]">
        <div className="hidden sm:flex sm:items-center sm:text-[30px] sm:gap-1 sm:text-[#020061] sm:mb-12">
          <img src={logo} alt="talent_base" />
          <p>Talent Base</p>
        </div>
        <p className="text-[4rem] text-[#020061] font-bold  inline-block mb-4 ">
          Source and Hire Top Talents
        </p>

        <p className="text-[23.5px] text-[#808080] font-light inline-block mb-8 ">
          <span className="font-normal">Unlock</span> a world of possibilities,{" "}
          <span className="font-normal">explore engage</span> and{" "}
          <span className="font-normal">employ</span> the <br />
          <span className="font-normal">finest Talents</span> across various
          fields for
          <span className="font-normal"> your projects</span> and <br />{" "}
          initiatives
        </p>
      </div>
      {/* art and craft */}
      <div className="flex flex-col gap-6 mb-12 sm:mb-[20rem]">
        <div className="flex items-center justify-between w-[72%] mb-3 sm:w-full">
          <p className="inline-block px-7 py-2  rounded-full border-[#020061] border-[6px] text-[#89D92B]">
            Art And craft
          </p>

          <p className="inline-block px-7 py-2  rounded-full text-[#020061] border-[6px] border-[#89D92B]">
            Education
          </p>

          <p className="inline-block px-7 py-2  rounded-full border-[#020061] border-[6px] text-[#89D92B]">
            Media
          </p>
        </div>

        <div className="flex items-center justify-between w-[68%] sm:w-full">
          <p className="inline-block px-7 py-2  rounded-full text-[#020061] border-[6px] border-[#89D92B]">
            Technology
          </p>

          <p className="inline-block px-7 py-2  rounded-full border-[#020061] border-[6px] text-[#89D92B]">
            Event
          </p>

          <p className="inline-block px-7 py-2  rounded-full text-[#020061] border-[6px] border-[#89D92B]">
            Health
          </p>
        </div>
      </div>

      {/* button */}

      <div className="grid">
        <Link to="/login-page" className="grid">
          <button className="bg-[#020061] text-[#89D92B] font-medium p-5 rounded-full shadow-[3px_4px_1px_#89D92B] mb-4 sm:mb-8">
            Hire a Talent
          </button>
        </Link>

        <Link to="/monitize-talent" className="grid">
          <button className="border-[#020061] text-[#020061] border-[3px] font-medium p-5 rounded-full border-b-4 mb-4">
            Monetize your Talent
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landingpage;
