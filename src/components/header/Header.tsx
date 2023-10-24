import { Link, useSearchParams } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { CategoryProps } from "../../types/product";
import { Shop } from "../../context/ShopCartContext";
import { products } from "../../assets/db/Products.db";

/**
 * Header component represents the header.
 */

export const Header: React.FC = () => {
  const ShopCartContext = useContext(Shop); // ShopCartContext

  const [categories, setCategories] = useState<CategoryProps[]>([]); // State for storing categories
  const [items, setItems] = useState(0); // State for the number of items in the cart

  const [searchParams, setSearchParams] = useSearchParams(); // Search parameters
  const query = searchParams.get("q") || ""; // Get the "q" parameter from the search parameters

  useEffect(() => {
    // Assuming products is an array of CategoryProps
    setCategories(products);
  }, []);

  const handleChangeParams = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({ q: e.target.value });
  };

  const logout = () => {
    setLogin(false);
  };
  if (!ShopCartContext) {
    return null;
  }
  const { getTotalItems, cart, login, setLogin } = ShopCartContext; // Destructure values from the shopCartContext
  useEffect(() => {
    setItems(getTotalItems());
  }, [cart, getTotalItems]);
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger pe-5 d-flex align-items-center">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand" type="button">
              <h1 className="fs-2">MarktMedia</h1>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBarMarktMedia" aria-controls="navBarMarktMedia">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div id="navBarMarktMedia" className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <Link to="/categoriespage" className="nav-link">
                    Categories
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/cart" className="nav-link">
                    Cart
                    <i className="bi bi-cart-fill px-3">
                      <span className="cart-number">{items === 0 ? "" : items}</span>
                    </i>
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    All Categories
                  </button>
                  <ul className="dropdown-menu">
                    {categories.map((category: CategoryProps) => (
                      <li key={category.categoryId}>
                        <Link to={`/categoriespage/${category.categoryId}`} className="dropdown-item">
                          {category.categoryName}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item p-2">
                  {login === true ? (
                    <button className="nav-link bg-dark btn btn-sm px-2 " id="logInBtn" onClick={logout}>
                      Log Out
                    </button>
                  ) : (
                    <Link className="nav-link bg-dark btn btn-sm px-2 " id="logInBtn" to="/myaccount">
                      Log In
                    </Link>
                  )}
                </li>
              </ul>
              <form role="search">
                <input type="search" className="form-control" placeholder="Search" aria-label="Search" value={query} onChange={handleChangeParams} />
              </form>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
