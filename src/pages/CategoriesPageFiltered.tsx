import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { CategoryProps, ProductsProps } from "../types/product";
import { products } from "../assets/db/Products.db";
import { Loader, ProductStyles, ProductsView } from "../components";

export const CategoriesPageFiltered: React.FC<CategoryProps> = () => {
  const [categories] = useState(products);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();
  const [filteredProducts, setFilteredProducts] = useState<ProductsProps[]>([]);
  const [selectedCategoryName, setSelectedCategoryName] = useState("");

  // Filtrar los productos por categoría

  useEffect(() => {
    const filteredCategory = products.filter((category) => category.categoryId === Number(categoryId));
    if (filteredCategory.length > 0) {
      setFilteredProducts(filteredCategory[0].categoryProducts);
      setSelectedCategoryName(filteredCategory[0].categoryName);
    } else {
      setFilteredProducts([]); // No products found, create empty array
      setSelectedCategoryName("");
    }
  }, [categoryId]);

  useEffect(() => {
    // Simulating a loading state for 1 second when the component mounts.
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div>
      <div className="d-flex flex-column p-md-5 text-center w-100 pt-2">
        <h2>Categories</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 g-2 mx-1 my-1 mb-5 ">
          {/* Categories are mapped */}
          {categories.map((category) => (
            <div key={category.categoryId} className="d-flex col mx-auto m-1  align-items-center justify-content-center g-3 ">
              <div className="card align-items-center justify-content-between p-1">
                <h5 className="card-title mb-5">{category.categoryName}</h5>
                <img className="card-img-top card-img-categories" src={category.categoryImg} alt="Card image categories" />
                <div className="card-body p-0">
                  <p className="card-text"></p>
                  <Link to={`/categoriespage/${category.categoryId}`} className="btn btn-primary px-3 w-100">
                    {category.categoryName}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-center">{selectedCategoryName}</h3>
        {loading ? (
          <div className="d-flex justify-content-center">
            <Loader />
          </div>
        ) : (
          <div className="container row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 m-auto">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(({ id, name, img, price, stock }: ProductsProps) => (
                <ProductStyles key={id}>
                  <ProductsView id={id} name={name} img={img} price={price} stock={stock} description={""} />
                </ProductStyles>
              ))
            ) : (
              <p>No products found</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
