import React, { useState, useContext, useEffect } from "react";
import { CardImgProps } from "../../types/product";
import { Shop } from "../../context/ShopCartContext";
import { Loader } from "..";

/**
 * CardCheckout component represents a card displaying a product in the checkout section.
 *
 * @param {CardImgProps} props - The props for the component.
 *    - img {string}: The image source URL for the product.
 *    - id {number}: The unique identifier of the product.
 *    - name {string}: The name of the product.
 *    - price {number}: The price of the product.
 */

export const CardCheckout: React.FC<CardImgProps> = (props) => {
  // State variable to control the loading state of the component.
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulating a loading state for 1 second when the component mounts.
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  // Accessing the shopping cart context to retrieve the cart data.
  const shopContext = useContext(Shop);

  // If the shop context is not available, return null.
  if (!shopContext) {
    return null;
  }

  // Destructuring the cart object from the shop context.
  const { cart } = shopContext;

  const { img, id, name, price } = props;

  return (
    <>
      {/* Display a loader component if the loading state is true, otherwise render the card */}
      {loading ? (
        <Loader />
      ) : (
        <div className="card card-sm card-shadow w-100 m-2 d-flex flex-column align-items-center text-center">
          {/* Display the product image */}
          <img src={img} className="w-50 p-2 ps-3" alt="Product Image" />
          {/* Display the product name */}
          <h6>{name}</h6>
          {/* Display the product quantity from the cart and its price */}
          <p>
            {cart[id]} : - {price}€
          </p>
        </div>
      )}
    </>
  );
};
