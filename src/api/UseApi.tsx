// import { useEffect, useState } from "react";
// import { CategoryProps, ProductsProps, Root } from "../types/product";

// export const UseApi = () => {
//   const BASE_URL = "http://localhost:3000/categories/";
//   const [data, setData] = useState<Root>();
//   const [categories, setCategories] = useState<CategoryProps[]>([]);
//   const [products, setProducts] = useState<ProductsProps[]>([]);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(BASE_URL); //Asegúrate de añadir la ruta correcta aquí si es necesario
//       const data: Root = await response.json();
//       setData(data);
//       // console.log(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   const fetchDataProducts = async () => {
//     try {
//       const response = await fetch(BASE_URL); //Asegúrate de añadir la ruta correcta aquí si es necesario
//       const data: Root = await response.json();
//       setData(data);
//       console.log(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   useEffect(() => {
//     fetchData();
//     fetchDataProducts
//   }, []);

//   const extractCategories = async (data: Root): Promise<CategoryProps[]> => {
//     const categories: CategoryProps[] = [];

//     console.log(data.categories);

//     if (data && data.categories) {
//       for (const category of data.categories) {
//         const { categoryId, categoryName, categoryImg, categoryProducts } = category;

//         const products = await extractProducts(categoryProducts);

//         categories.push({
//           categoryId,
//           categoryName,
//           categoryImg,
//           categoryProducts: products
//         });
//       }
//     }

//     console.log(categories);

//     return categories;
//   };

//   const extractProducts = async (data: ProductsProps[]): Promise<ProductsProps[]> => {
//     return data.map(({ id, name, img, price, stock, description }) => ({
//       id,
//       name,
//       img,
//       price,
//       stock,
//       description
//     }));
//   };

//   useEffect(() => {
//     const fetchAndSetData = async () => {
//       if (data && data.categories) {
//         const extractedCategories = await extractCategories(data);
//         setCategories(extractedCategories);
//         setProducts(
//           extractedCategories.flatMap(({ categoryProducts }) => categoryProducts)
//         );
//       }
//     }

//     fetchAndSetData();
//   }, [data]);

//   return {data};
// };
