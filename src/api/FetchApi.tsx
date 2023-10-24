// import { useEffect, useState } from "react";
// import { Root } from "../types/product";

// export const FetchApi = () => {
//   const [data, setData] = useState<Root>();
//   const BASE_URL = import.meta.env.VITE_API_URL;
//   const endpointUser = "user",
//     endpointAdmin = "admin",
//     endpointCategories = "categories";

//   const fetchDataUser = async () => {
//     try {
//       const response = await fetch(BASE_URL`${endpointUser}`);
//       const data: Root = await response.json();
//       setData(data);
//       console.log(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   const fetchDataProducts = async () => {
//     try {
//       const response = await fetch(BASE_URL`${endpointCategories}`);
//       const data: Root = await response.json();
//       setData(data);
//       console.log(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   const fetchDataAdmin = async () => {
//     try {
//       const response = await fetch(BASE_URL`${endpointAdmin}`);
//       const data: Root = await response.json();
//       setData(data);
//       console.log(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchDataUser();
//     fetchDataProducts();
//     fetchDataAdmin();
//   }, []);

//   return fetchDataAdmin(), fetchDataProducts(), fetchDataUser();
// };
