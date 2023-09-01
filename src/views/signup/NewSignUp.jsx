import { useState } from "react";
import arrow from "../../assets/icons/arrow-left.svg";

const NewSignUp = () => {
  const [nextpage, setNextpage] = useState(true);

  const handleNextPage = () => {
    return setNextpage(!nextpage);
  };

  return (
    <>
      <div className="flex items-center justify-between ">
        {nextpage ? (
          <img
            src={arrow}
            alt="backArrow"
            className="bg-[#020061] rounded-full p-3 inline-block cursor-pointer"
            onClick={() => window.history.back()}
          />
        ) : (
          <img
            src={arrow}
            alt="backArrow"
            className="bg-[#020061] rounded-full p-3 inline-block cursor-pointer"
            onClick={handleNextPage}
          />
        )}

        <div className="flex items-center justify-between gap-4">
          <span className="bg-[#020061] rounded-full inline-block p-2"></span>
          {nextpage ? (
            <span className="bg-[#E5E5E5]  rounded-full inline-block p-2"></span>
          ) : (
            <span className="bg-[#020061] rounded-full inline-block p-2"></span>
          )}
        </div>
      </div>

      <div className="grid mb-3">
        <h1 className="w-full text-[4.5rem] text-[#020061] inline ">
          Monetize your Talent
        </h1>
        <p className="text-[#808080] text-[24px] font-bold leading-[1] tracking-wide">
          Make money from your skills by creating a Talent profile in <br />{" "}
          short and easy steps
        </p>
      </div>

      {/* {nextpage ? (
        <button onClick={handleNextPage}>First Page</button>
      ) : (
        <button onClick={handleNextPage}>Second Page</button>
      )} */}

      <form action="#">
        {nextpage ? (
          <>
            {" "}
            <div className="mb-4">
              <div className="flex justify-between pb-4">
                <div>
                  <label htmlFor="firstName" className="text-[20px]">
                    FirstName
                  </label>
                  <input
                    type="text"
                    placeholder="Ogunmepon"
                    className="bg-[#F5F5F5] block py-6 px-[5rem] rounded-full"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="text-[20px]">
                    LastName
                  </label>
                  <input
                    type="text"
                    placeholder="Sharafa"
                    className="bg-[#F5F5F5] block py-6 px-[5rem]   rounded-full"
                  />
                </div>
              </div>
              <div className="">
                <label htmlFor="email" className="text-[20px]">
                  Email Address
                </label>
                <input
                  type="text"
                  placeholder="ogunmeponsharafa@gmail.com"
                  className="bg-[#F5F5F5] block py-6 px-[5rem]   rounded-full w-full"
                />
              </div>
              <div className="flex justify-between pt-4">
                <div>
                  <label htmlFor="password" className="text-[20px]">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••••••••"
                    className="bg-[#F5F5F5] block py-6 px-[5rem] rounded-full"
                  />
                </div>

                <div>
                  <label htmlFor="confirm password" className="text-[20px]">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••••••••"
                    className="bg-[#F5F5F5] block py-6 px-[5rem]   rounded-full"
                  />
                </div>
              </div>
            </div>
            <div
              onClick={handleNextPage}
              className=" bg-[#020061] text-[#89D92B] font-medium w-full py-5 rounded-full shadow-[3px_4px_1px_#89D92B] cursor-pointer text-center "
            >
              Next page
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-between pb-4">
              <div>
                <label htmlFor="selectfield" className="text-[20px]">
                  Select Field
                </label>

                <select
                  name=""
                  id=""
                  className="bg-[#F5F5F5] block py-6 px-[5rem] rounded-full"
                >
                  <option value="none" selected="selected" hidden>
                    Select an Option
                  </option>
                  <option value="Technology">Technology</option>
                  <option value="Arts and Craft">Arts and Craft</option>
                </select>
              </div>

              <div>
                <label htmlFor="profession" className="text-[20px]">
                  Profession
                </label>
                <input
                  type="text"
                  placeholder="Sharafa"
                  className="bg-[#F5F5F5] block py-6 px-[5rem]   rounded-full"
                />
              </div>
            </div>

            <div className="">
              <label htmlFor="email" className="text-[20px]">
                Tell us About Yourself
              </label>
              <textarea
                name=""
                id=""
                cols="10"
                rows="2"
                className="bg-[#F5F5F5] block py-3 px-[5rem]   rounded-full w-full"
                placeholder="Write a little bit about yourself in not more than 200 words"
              ></textarea>
              <p className="text-[#020061] font-extrabold text-justify text-[16px]">
                This information would be displayed publicly alongside your
                profile, to easy your talent monetization.
              </p>
            </div>
            <div className="flex justify-between pb-4">
              <div>
                <label htmlFor="selectfield" className="text-[20px]">
                  Country
                </label>

                <select
                  name=""
                  id=""
                  className="bg-[#F5F5F5] block py-6 px-[5rem] rounded-full"
                >
                  <option value="none" selected="selected" hidden>
                    Your country
                  </option>
                  <option value="Nigeria">NIgeria</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              <div>
                <label htmlFor="selectfield" className="text-[20px]">
                  State
                </label>

                <select
                  name=""
                  id=""
                  className="bg-[#F5F5F5] block py-6 px-[5rem] rounded-full"
                >
                  <option value="none" selected="selected" hidden>
                    Your state
                  </option>
                  <option value="Lagos">Lagos</option>
                  <option value="Others">Others</option>
                </select>
              </div>
            </div>
            <button className=" bg-[#020061] text-[#89D92B] font-medium w-full py-5 rounded-full shadow-[3px_4px_1px_#89D92B] ">
              Create Profile
            </button>
          </>
        )}
      </form>
    </>
  );
};

export default NewSignUp;
