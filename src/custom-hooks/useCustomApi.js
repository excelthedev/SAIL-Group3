import { useState } from "react";
import axiosConfig from "../api/axios.config";

const useCustomApi = (url, requestBody) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { api } = axiosConfig();

  const postApi = async () => {
    setLoading(true);
    try {
      const { data } = await api.post(url, requestBody);
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error.response);
      setLoading(false);
    }
  };

  return { postApi, data, error, loading };
};

export default useCustomApi;
