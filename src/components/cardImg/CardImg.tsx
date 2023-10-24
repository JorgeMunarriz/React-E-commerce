import { useContext, useState, useEffect } from "react";
import { CardImgProps } from "../../types/product";
import { Shop } from "../../context/ShopCartContext";
import { Loader } from "../loader/Loader";

/**
 * CardCheckout component represents a card displaying a product in the checkout section.
 *
 * @param {CardImgProps} props - The props for the component.
 *    - img {string}: The image source URL for the product.
 *    - id {number}: The unique identifier of the product.
 *    - name {string}: The name of the product.
 *    - price {number}: The price of the product.
 */

export const CardImg: React.FC<CardImgProps> = (props) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulating a loading state for 1 second when the component mounts.
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  // Accessing the shopping cart context to retrieve the cart data and removeToCart function.
  const ShopCartContext = useContext(Shop);
  // If the ShopCartContext is not available, return null.
  if (!ShopCartContext) {
    return null;
  }

  // Destructuring the cart object and removeToCart function from the ShopCartContext.
  const { cart, removeToCart } = ShopCartContext;

  const { img, id, name, price } = props;

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="card card-sm card-shadow w-75 m-2 d-flex flex-column align-items-center">
          <img src={img} className="w-25 p-2 ps-3" alt={`Image poduct ${name}`} />
          <h3>{name}</h3>
          <p>
            {cart[id]} - {price}€
          </p>
          <button type="button" className="btn btn-lg btn-danger mb-3" data-bs-dismiss="modal" onClick={() => removeToCart(id)}>
            Delete product
          </button>
        </div>
      )}
    </>
  );
};
