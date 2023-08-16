import axios from "axios";

const axiosConfig = () => {
  const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: process.env.REACT_APP_API_TIMEOUT,
  });

  return { api };
};

export default axiosConfig;
