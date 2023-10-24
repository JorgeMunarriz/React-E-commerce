import { Link } from "react-router-dom";
import { useState } from "react";
import { products } from "../../../assets/db/Products.db";
import "./CategoriesList.css";
 /**
 * CategoriesList component represents the div where the categories are represented.
 */
export const CategoriesList = () => {
  const [categories] = useState(products);

  return (
    <>
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
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
    </>
  );
};
