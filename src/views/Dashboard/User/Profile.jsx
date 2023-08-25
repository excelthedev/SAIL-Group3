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
    <div>
      {Array.isArray(data)
        ? personalUser.first_name + " " + personalUser.last_name
        : null}
    </div>
  );
};

export default Profile;
