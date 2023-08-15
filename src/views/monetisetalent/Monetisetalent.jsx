import React from "react";
import { Link } from "react-router-dom";
import leftArrow from "../../assets/icons/arrow-left.svg";

const Monetisetalent = () => {
  return (
    <>
      <div className="flex items-center justify-between" v>
        <div
          onClick={() => window.history.back()}
          className="bg-[#020061] rounded-full p-3"
        >
          <img src={leftArrow} alt="leftarrow" className="cursor-pointer" />
        </div>
        <div className="flex">
          <span className="bg-[#020061] p-2 rounded-full mr-3 "></span>
          <span className="bg-[#E5E5E5] p-2 rounded-full"></span>
        </div>
      </div>

      {/* monetise talent */}
      <div className="">
        <p className="inline-block text-[4rem] text-[#020061] font-bold">
          Monetize Your Talent
        </p>
        <p className="text-[17px] text-[#808080] font-extralight">
          Make money from your skills by creating a Talent Profile in <br />{" "}
          short and easy steps
        </p>
        {/* Sign up Form */}
        <form action="#">
          <div className="grid grid-cols-2 gap-[3rem] items-center pb-4">
            <div className="grid">
              <p className="text-[20px] mb-2">First Name</p>
              <input
                type="text"
                placeholder="firstName"
                className=" rounded-full px-6 py-5 bg-[#F5F5F5]"
              />
            </div>

            <div className="grid ">
              <p className="text-[20px] mb-2">Last Name</p>
              <input
                type="text"
                placeholder="lastName"
                className=" rounded-full px-6 py-5 bg-[#F5F5F5]"
              />
            </div>
          </div>

          <div className="grid pb-4">
            <p className="text-[20px] mb-2">Email Address</p>
            <input
              type="email"
              placeholder="Email Address"
              className=" rounded-full px-6 py-5 bg-[#F5F5F5]"
            />
          </div>

          <div className="grid grid-cols-2 gap-[3rem] items-center pb-5">
            <div className="grid">
              <p className="text-[20px] mb-2">Create Password</p>
              <input
                type="text"
                placeholder="••••••••"
                className=" rounded-full px-6 py-5 bg-[#F5F5F5]"
              />
            </div>

            <div className="grid ">
              <p className="text-[20px] mb-2">Confirm Password</p>
              <input
                type="text"
                placeholder="••••••••"
                className=" rounded-full px-6 py-5 bg-[#F5F5F5]"
              />
            </div>
          </div>
        </form>

        <Link to="/monitize-page-two">
          <button className="bg-[#020061] text-[#89D92B] font-medium p-5 rounded-full shadow-[3px_4px_1px_#89D92B] w-full">
            Next
          </button>
        </Link>
      </div>
    </>
  );
};

export default Monetisetalent;
