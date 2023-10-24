import { FC } from "react";
import { CategoriesList, ProductsList } from "../components";
import { CategoryProps } from "../types/product";

export const CategoriesPage: FC<CategoryProps> = () => {
  return (
    <>
      <CategoriesList />
      <ProductsList id={1} name={""} img={""} price={0} stock={true} description={""} />
    </>
  );
};
