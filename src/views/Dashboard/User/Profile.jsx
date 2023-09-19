import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useCustomApi from "../../../custom-hooks/useCustomApi";

const Profile = () => {
  const { getApi, data, loading } = useCustomApi(
    process.env.REACT_APP_API_GETUSER_URL
  );

  const personalUser = Array.isArray(data)
    ? data[data.length - 1]
    : "loading user information";
  console.log(personalUser);

  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      <div className="pl-[1.5rem]">
        <h1 className="text-[30px] font-bold mb-4">Personal Information</h1>

        <form action="#">
          <div className="mb-4 w-[50%]">
            <div className="flex justify-between  pb-4">
              <div>
                <label htmlFor="firstName" className="text-[15px]">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Afolabi"
                  className="bg-[#F5F5F5] block py-4 px-[4rem] rounded-full"
                  disabled
                />
              </div>

              <div>
                <label htmlFor="lastName" className="text-[15px]">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Micheal"
                  className="bg-[#F5F5F5] block py-4 px-[4rem]   rounded-full"
                  disabled
                />
              </div>
            </div>
            <div className="">
              <label htmlFor="email" className="text-[15px]">
                Email Address
              </label>
              <input
                type="text"
                placeholder="afolabimicheal@gmail.com"
                className="bg-[#F5F5F5] block py-4 px-[2rem]   rounded-full w-full"
                disabled
              />
            </div>
          </div>
          <div className=" bg-[#020061] text-[#89D92B] font-medium w-[10rem] py-3  rounded-full shadow-[3px_4px_1px_#89D92B] cursor-pointer text-center mb-9 ">
            Edit
          </div>
        </form>

        <div>
          <div className="mb-6">
            <h1 className="text-[20px] font-bold mb-4">Security</h1>
            <p className="text-[#020061] cursor-pointer">Reset Password</p>
          </div>

          <div className="mb-4">
            <h1 className="text-[20px] font-bold mb-4">Other</h1>
            <p className="text-[#020061] cursor-pointer">
              Monetize Your Talent <span>&#8599;</span>{" "}
            </p>
          </div>
        </div>
      </div>
      {/* {Array.isArray(data)
        ? personalUser.first_name + " " + personalUser.last_name
        : null} */}
    </>
  );
};

export default Profile;
