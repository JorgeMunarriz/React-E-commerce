import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Shop } from "../../context/ShopCartContext";
import { products } from "../../assets/db/Products.db";
import { CardImg } from "../cardImg/CardImg";

/**
 * Cart component represents the shopping cart page.
 */
export const Cart = () => {
  const [items, setItems] = useState(0);
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();

  const shopContext = useContext(Shop);
  if (!shopContext) {
    return null;
  }
  const { getTotalItems, cart, addPrice } = shopContext;
  const isLoggedIn = true;

  useEffect(() => {
    // Update the number of items in the cart when cart changes
    setItems(getTotalItems());
    // Update the nprice of items in the cart when cart changes
    setPrice(addPrice());
  }, [items, getTotalItems, cart, addPrice]);

  /**
   * Handles the checkout process.
   * If the user is logged in, navigate to the checkout page.
   * Otherwise, log an error message.
   */
  const handleCheckout = () => {
    if (isLoggedIn) {
      navigate("/checkout");
    } else {
      console.error(Error);
    }
  };

  return (
    <>
      <div className="d-flex flex-column text-center">
        <h2 className="p-3">Cart</h2>
        {products.map(({ categoryProducts }) => {
          return categoryProducts.map((product) => {
            if (cart[product.id] !== 0) {
              return <CardImg id={product.id} name={product.name} img={product.img} price={product.price} key={product.id} />;
            }
            return null;
          });
        })}
      </div>

      <div className="d-flex align-items-center justify-content-center text-center p-3">
        <h3> Total price: {price} €</h3>
      </div>

      {isLoggedIn ? (
        <button onClick={handleCheckout} className="p-0">
          <Link to="/checkout" className="btn btn-danger w-100">
            Checkout
          </Link>
        </button>
      ) : (
        <p>Inicia sesión para continuar con el checkout.</p>
      )}
    </>
  );
};
