import { api } from "../axiosConfig/axiosInstance";
import { useState } from "react";
type props = {
  url: string;
  method: "get" | "post" | "put" | "patch" | "delete";
  data?: unknown;
};

export const useFetch = () => {
  const [response, setResponse] = useState<unknown>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);


  const fetching = async ({ url, method, data }: props) => {
    try {
      setLoading(true);
      const dataFetch = await api({ url: `${url}`, method: method, data });
      if (dataFetch) {
        setLoading(false);
        setResponse(dataFetch);
      }
    } catch (error) {
      setLoading(false);
      setError(error);
      console.log(error);
    }
  };

  return { response, loading, error, fetching };
};
