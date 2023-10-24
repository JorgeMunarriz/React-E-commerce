import { FC, useState, useContext, useEffect } from "react";
import { ProductsProps } from "../../../types/product";
import { Link } from "react-router-dom";
import "../ProductStyles/ProductStyles";
import { Shop } from "../../../context/ShopCartContext";
import { Loader } from "../..";

/**
 * Represents the section of the productList where the product are displayed
 */

export const ProductsView: FC<ProductsProps> = ({ id, name, price, stock, img }: ProductsProps) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulating a loading state for 1 second when the component mounts.
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const shopContext = useContext(Shop);
  if (!shopContext) {
    return null;
  }
  const { addToCart, removeToCart } = shopContext;
  return (
    <div className="card shadow-lg p-3 h-550">
      <div className="card-title">
        {loading ? (
          <div className="d-flex justify-content-center">
            <Loader />
          </div>
        ) : (
          <img src={img} alt="Image" className="img-fluid card-img-top max-width-500 " />
        )}
        <figcaption className="d-flex align-items-center justify-content-center">
          <h4 className="title">{name}</h4>
        </figcaption>
      </div>
      <div className="d-flex justify-content-between tm-text-gray card-body">
        <p className="tm-text-gray-light card-text">€{price},-incl. VAT with free shipping </p>
      </div>

      <span className="mx-3">{stock} stock</span>

      <hr />

      <div className="d-flex justify-content-between align-items-center">
        <div className="btn-group">
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => {
              removeToCart(id);
            }}>
            -
          </button>
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => {
              addToCart(id);
            }}>
            +
          </button>
        </div>
        <Link className="btn btn-sm btn-outline-primary" to={`/productdetail/${id}`}>
          View more
        </Link>
      </div>
    </div>
  );
};
