import { React, useState } from "react";
import { Link } from "react-router-dom";
import leftArrow from "../../assets/icons/arrow-left.svg";
import useGetInputValue from "../../custom-hooks/useGetInputValue";
import useCustomApi from "../../custom-hooks/useCustomApi";
import { apiEndpoints } from "../../api/endpoint";

const Monetisetalent = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { setRequest } = useGetInputValue(setInputValue);
  const { data, error, loading, postApi } = useCustomApi(
    apiEndpoints.auth.login,
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
          Welcome, Please Log in
        </p>
      </div>

      <form onSubmit={onSubmit}>
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

        {/* <p className="text-[#020061] cursor-pointer inline">
          Forgot passwordd?
        </p> */}

        <button
          type="submit"
          className=" bg-[#020061] text-[#89D92B] font-medium grid w-full p-5 rounded-full mt-8 shadow-[3px_4px_1px_#89D92B]"
        >
          Log in
        </button>
      </form>

      {/* <div className="flex items-center justify-between" v>
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
      </div> */}

      {/* monetise talent */}
    </>
  );
};

export default Monetisetalent;
