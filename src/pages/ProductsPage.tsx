import { FC } from "react";
import { ProductsView, ProductStyles } from "../components";
import { products } from "../assets/db/Products.db";
import { CategoryProps, ProductsProps } from "../types";

export const ProductsPage: FC<CategoryProps> = () => {
  return (
    <div>
      {products &&
        products.length > 0 &&
        products.map(({ categoryProducts, categoryId, categoryName, categoryImg }: CategoryProps) => {
          return (
            <div key={categoryId}>
              <h2>{categoryName}</h2>
              <img src={categoryImg} alt={categoryName} />
              <div>
                {categoryProducts.map(({ id, name, img, price, stock, description }: ProductsProps) => {
                  return (
                    <ProductStyles key={id}>
                      <ProductsView id={id} name={name} img={img} price={price} stock={stock} description={description} />
                    </ProductStyles>
                  );
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
};
