import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="flex flex-col leading-[1.1] ">
        <p className="text-[4rem] text-[#020061] font-bold  inline-block mb-4">
          Welcome, Please log in
        </p>
      </div>

      <div className="mb-10">
        <div className="grid pb-4">
          <p className="text-[20px] pl-1 mb-2">Email</p>
          <input
            type="email"
            placeholder="Email Address"
            className=" rounded-full px-6 py-5 bg-[#F5F5F5]"
          />
        </div>

        <div className="grid pb-4">
          <p className="text-[20px] pl-1 mb-2">Password</p>
          <input
            type="password"
            placeholder="••••••••••••••"
            className=" rounded-full px-6 py-5 bg-[#F5F5F5]"
          />
        </div>
        <p className="text-[#020061] cursor-pointer inline">Forgot password?</p>
      </div>

      <div className="grid">
        <button className=" bg-[#020061] text-[#89D92B] font-medium p-5 rounded-full shadow-[3px_4px_1px_#89D92B] mb-4">
          Log In
        </button>

        <Link to="/monitize-talent" className="grid">
          <button className="border-[#020061] text-[#020061] border-[3px] font-medium p-5 rounded-full border-b-4 mb-4">
            Sign Up Here
          </button>
        </Link>
      </div>
    </>
  );
};

export default Login;
