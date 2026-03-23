// import { api } from "../axiosConfig/axiosInstance";
// import {  useState } from "react";
// type props = {
//   url: string;
//   method: "get" | "post" | "put" | "patch" | "delete";
//   data?: unknown;
// };

// export const useFetch = () => {
//   const [response, setResponse] = useState<unknown>(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<unknown>(null);




//   const fetching = async ({ url, method, data }: props) => {
//     try {
//       setLoading(true);
//       const res = await api({ url: `${url}`, method: method, data });
//       console.log(res?.data, "first");

//       if (res?.statusText === "OK") {
//         setLoading(false);
//         console.log(res?.data, "second");
//         setResponse(res?.data);
//       }
//     } catch (error) {
//       setLoading(false);
//       setError(error);
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };



//   console.log(response, "last");

//   return { response, loading, error, fetching };
// };
