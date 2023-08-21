import React, { useState } from "react";
import { Link } from "react-router-dom";
import leftArrow from "../../assets/icons/arrow-left.svg";
import useGetInputValue from "../../custom-hooks/useGetInputValue";
import useCustomApi from "../../custom-hooks/useCustomApi";
import { apiEndpoints } from "../../api/endpoint";

const Login = () => {
  const [inputValue, setInputValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    field: "",
    profession: "",
    aboutYou: "",
  });
  const { setRequest } = useGetInputValue(setInputValue);
  const { data, error, loading, postApi } = useCustomApi(
    apiEndpoints.auth.register,
    inputValue
  );

  const onSubmit = (e) => {
    e.preventDefault();
    postApi();
  };

  return (
    <>
      <div className="grid grid-cols-2 items-center mb-4">
        <img
          src={leftArrow}
          alt=""
          className="bg-[#020061] rounded-full p-3 cursor-pointer"
          onClick={() => window.history.back()}
        />
        <p className="text-[2rem] text-[#020061] font-bold  inline-block">
          Please Sign up Here,
        </p>
      </div>

      <form onSubmit={onSubmit}>
        <div className="grid grid-cols-2 gap-3">
          <div className="grid pb-4">
            <p className="text-[20px] pl-1 mb-2">First Name</p>
            <input
              type="text"
              placeholder="First Name"
              value={inputValue?.firstName}
              onChange={(e) => setRequest("firstName", e.target.value)}
              className=" rounded-full px-6 py-5 bg-[#F5F5F5]"
            />
          </div>

          <div className="grid pb-4">
            <p className="text-[20px] pl-1 mb-2">Last Name</p>
            <input
              type="text"
              placeholder="last Name"
              value={inputValue?.lastName}
              onChange={(e) => setRequest("lastName", e.target.value)}
              className=" rounded-full px-6 py-5 bg-[#F5F5F5]"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="grid pb-4">
            <p className="text-[20px] pl-1 mb-2">Email Address</p>
            <input
              type="email"
              placeholder="Email Address"
              value={inputValue?.email}
              onChange={(e) => setRequest("email", e.target.value)}
              className=" rounded-full px-6 py-5 bg-[#F5F5F5]"
            />
          </div>

          <div className="grid pb-4">
            <p className="text-[20px] pl-1 mb-2">Password</p>
            <input
              type="password"
              placeholder="••••••••••••••"
              value={inputValue?.password}
              onChange={(e) => setRequest("password", e.target.value)}
              className=" rounded-full px-6 py-5 bg-[#F5F5F5]"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {/* <div className="grid pb-4">
            <p className="text-[20px] pl-1 mb-2">Field</p>
            <input
              type="text"
              placeholder="Field"
              value={inputValue?.field}
              onChange={(e) => setRequest("field", e.target.value)}
              className=" rounded-full px-6 py-5 bg-[#F5F5F5]"
            />
          </div> */}
          <div className="grid pb-4">
            <p className="text-[20px] pl-1 mb-2">Field</p>
            <select
              value={inputValue?.field}
              onChange={(e) => setRequest("field", e.target.value)}
              className=" rounded-full px-6 py-5 bg-[#F5F5F5]"
            >
              <option value="technology">Technology</option>
              <option value="education">Education</option>
              <option value="art and craft">Art and Craft</option>
              <option value="media">Media</option>
              <option value="events">Events</option>
              <option value="health">Health</option>
            </select>
          </div>

          <div className="grid pb-4">
            <p className="text-[20px] pl-1 mb-2">Profession</p>
            <input
              type="text"
              placeholder="Profession"
              value={inputValue?.profession}
              onChange={(e) => setRequest("profession", e.target.value)}
              className=" rounded-full px-6 py-5 bg-[#F5F5F5]"
            />
          </div>
        </div>

        <div className="grid pb-2">
          <p className="text-[20px] pl-1 mb-2">Tell us About Yourself</p>
          <input
            type="text"
            placeholder="About you"
            value={inputValue?.aboutYou}
            onChange={(e) => setRequest("aboutYou", e.target.value)}
            className=" rounded-full px-6 py-5 bg-[#F5F5F5]"
          />
        </div>

        {/* <p className="text-[#020061] cursor-pointer inline">
          Forgot passwordd?
        </p> */}

        <button
          type="submit"
          className=" bg-[#020061] text-[#89D92B] font-medium grid w-full p-5 rounded-full mt-2 shadow-[3px_4px_1px_#89D92B]"
        >
          {loading ? "Please wait" : "Sign Up"}
        </button>
      </form>

      {/* <div className="grid mt-6">
        <Link to="/monitize-talent" className="grid">
          <button className="border-[#020061] text-[#020061] border-[3px] font-medium p-5 rounded-full border-b-4">
            Sign Up Here
          </button>
        </Link>
      </div> */}
    </>
  );
};

export default Login;
