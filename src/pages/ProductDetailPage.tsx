import { FC } from "react";
import { ProductsProps } from "../types/product";
import { ProductsDetailView } from "../components";
// import * as photos from "../../../assets/img";

export const ProductsDetailPage: FC<ProductsProps> = () => {
  return <ProductsDetailView />;
};
