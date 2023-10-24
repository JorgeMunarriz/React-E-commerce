import { ChangeEvent, FC } from "react";
import { CategoryProps, ProductsProps } from "../../../types/product";
import { products } from "../../../assets/db/Products.db";
import { ProductsView, ProductStyles } from "..";
import { useSearchParams } from "react-router-dom";

/**
 * Represents the section where the products are displayed
 */
export const ProductsList: FC<ProductsProps> = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter") ?? "";
  const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchParams({ filter: e.target.value });
  };

  return (
    <>
      <div className="input-group d-flex justify-content-center align-items-center">
        <label htmlFor="inputFilter" className="form-label me-2">
          Filter:{" "}
        </label>
        <input className="input-group-text w-75 " type="text" placeholder="Samsung" value={filter} onChange={handleFilter} id="inputFilter" />
      </div>
      <div className="container row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 m-auto">
        {products && products.length < 10
          ? products.map(({ categoryProducts }: CategoryProps) => {
              return categoryProducts
                .filter((product) => {
                  if (!filter) return true;
                  const name = product.name.toLowerCase();
                  return name.includes(filter.toLowerCase());
                })
                .map(({ id, name, img, price, stock }: ProductsProps) => {
                  return (
                    <ProductStyles key={id}>
                      <ProductsView id={id} name={name} img={img} price={price} stock={stock} description={""} />
                    </ProductStyles>
                  );
                });
            })
          : null}
      </div>
    </>
  );
};
