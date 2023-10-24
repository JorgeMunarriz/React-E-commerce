import { FC } from "react";
import { Home } from "../components";
import { CategoryProps } from "../types/product";

export const HomePage: FC<CategoryProps> = () => {
  return (
    <>
      <Home />
    </>
  );
};
