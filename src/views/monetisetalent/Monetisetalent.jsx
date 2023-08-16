import { React, useState } from "react";
import { Link } from "react-router-dom";
import leftArrow from "../../assets/icons/arrow-left.svg";

const Monetisetalent = () => {
  const [nextPage, setNextPage] = useState(false);
  const [firstPage, setFirstPage] = useState(true);
  const [profession, setProfession] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="flex items-center justify-between" v>
        <div
          onClick={() => {
            firstPage ? window.history.back() : setFirstPage(true);
          }}
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
        <form action={handleSubmit}>
          {firstPage ? (
            <>
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

              <button
                className="bg-[#020061] text-[#89D92B] font-medium p-5 rounded-full shadow-[3px_4px_1px_#89D92B] w-full"
                onClick={() => setFirstPage(!firstPage)}
              >
                Next
              </button>
            </>
          ) : (
            <>
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
                    value={profession}
                    onChange={(e) => setProfession(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid pb-12">
                <p className="text-[20px]">
                  Tell me about yourself in more than 30 characters
                </p>
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

              <button
                onClick={(e) => {
                  e.preventDefault();
                  console.log(profession);
                }}
                className="bg-[#020061] text-[#89D92B] font-medium p-5 rounded-full shadow-[3px_4px_1px_#89D92B] w-full"
              >
                Create Profile
              </button>
            </>
          )}
        </form>

        {/* <button className="bg-[#020061] text-[#89D92B] font-medium p-5 rounded-full shadow-[3px_4px_1px_#89D92B] w-full">
            Next
          </button> */}
      </div>
    </>
  );
};

export default Monetisetalent;
