import { useState } from "react";
import axiosConfig from "../api/axios.config";
import { useNavigate } from "react-router-dom";

const useCustomApi = (url, requestBody) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { api } = axiosConfig();
  const navigate = useNavigate();

  const postApi = async () => {
    setLoading(true);
    try {
      const { data } = await api.post(url, requestBody);
      setData(data);
      setLoading(false);
      navigate("/dashboard", { replace: true });
    } catch (error) {
      setError(error.response);
      setLoading(false);
    }
  };

  return { postApi, data, error, loading };
};

export default useCustomApi;
