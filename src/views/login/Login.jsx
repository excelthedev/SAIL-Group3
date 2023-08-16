import React, { useState } from "react";
import { Link } from "react-router-dom";
import useGetInputValue from "../../custom-hooks/useGetInputValue";
import useCustomApi from "../../custom-hooks/useCustomApi";
import { apiEndpoints } from "../../api/endpoint";

const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
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
      <div className="flex flex-col leading-[1.1] ">
        <p className="text-[4rem] text-[#020061] font-bold  inline-block mb-4">
          Welcome, Please log in
        </p>
      </div>

      <form onSubmit={onSubmit}>
        <div className="grid pb-4">
          <p className="text-[20px] pl-1 mb-2">Email</p>
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

        <p className="text-[#020061] cursor-pointer inline">
          Forgot passwordd?
        </p>

        <button
          type="submit"
          className=" bg-[#020061] text-[#89D92B] font-medium grid w-full p-5 rounded-full mt-10 shadow-[3px_4px_1px_#89D92B]"
        >
          {loading ? "Please wait" : "Log In"}
        </button>
      </form>

      <div className="grid mt-6">
        <Link to="/monitize-talent" className="grid">
          <button className="border-[#020061] text-[#020061] border-[3px] font-medium p-5 rounded-full border-b-4">
            Sign Up Here
          </button>
        </Link>
      </div>
    </>
  );
};

export default Login;
