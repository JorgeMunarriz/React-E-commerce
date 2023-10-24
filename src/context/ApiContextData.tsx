import  { createContext } from "react";
import { CategoryProps, ProductsProps } from '../types/product';

// Define el tipo de los datos que se compartirán
interface ApiContextData {
  categories: CategoryProps[];
  products: ProductsProps[];
}

// Crea el contexto
export const ApiContext = createContext<ApiContextData| []>([]);