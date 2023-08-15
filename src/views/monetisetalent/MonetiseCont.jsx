import React from "react";
import { Link } from "react-router-dom";
import leftArrow from "../../assets/icons/arrow-left.svg";

const MonetiseCont = () => {
  return (
    <div>
      <div className="flex items-center justify-between" v>
        <div
          onClick={() => window.history.back()}
          className="bg-[#020061] rounded-full p-3"
        >
          <img src={leftArrow} alt="leftarrow" className="cursor-pointer" />
        </div>
        <div className="flex">
          <span className="bg-[#020061] p-2 rounded-full mr-3 "></span>
          <span className="bg-[#020061] p-2 rounded-full"></span>
        </div>
      </div>

      {/* monetise talent */}
      <div className="">
        <p className="inline-block text-[4rem] text-[#020061] font-bold">
          Monetize Your Talent
        </p>
        <p className="text-[20px] text-[#808080] font-extralight">
          Make money from your skills by creating a Talent Profile in <br />{" "}
          short and easy steps
        </p>
        {/* Sign up Form */}
        <form action="#">
          <div className="grid grid-cols-2 gap-[3rem] items-center pb-4">
            <div className="grid">
              <p className="text-[20px] mb-2">Select Field</p>
              <select
                name="Field"
                id="field"
                className=" rounded-full px-6 py-5 bg-[#F5F5F5]"
              >
                <option value="1">Technology</option>
                <option value="1">Education</option>
                <option value="1">Health</option>
                <option value="1">Sports</option>
              </select>
            </div>

            <div className="grid ">
              <p className="text-[20px] mb-2">Enter Your Profession</p>
              <input
                type="text"
                placeholder="What's your profession"
                className=" rounded-full px-6 py-5 bg-[#F5F5F5]"
              />
            </div>
          </div>

          <div className="grid pb-12">
            <p className="text-[20px]">Tell me about yourself</p>
            <textarea
              type="email"
              placeholder="Tell us about yourself in a few words"
              className=" outline-none rounded-2xl px-8 py-6 bg-[#F5F5F5]"
            />
            <p className="text-[#020061] pt-2">
              This information would be displayed publicly alongside your
              profile, to easy your talent monetization.
            </p>
          </div>
        </form>

        <Link to="/monitize-page-two">
          <button className="bg-[#020061] text-[#89D92B] font-medium p-5 rounded-full shadow-[3px_4px_1px_#89D92B] w-full">
            Create Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MonetiseCont;
