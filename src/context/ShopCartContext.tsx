import { createContext, useEffect, useState } from "react";
import { products } from "../assets/db/Products.db";
import { CartItems, ShopContextValue, typeProps } from "../types/product";

/**
 * Context for the shopping cart.
 * @typeParam ShopContextValue - Type of the shopping cart context value.
 * @defaultValue null - Initial value of the shopping cart context.
 */
export const Shop = createContext<ShopContextValue | null>(null);

/**
 * Gets the default shopping cart.
 * @returns The default shopping cart.
 */
const getDefaultCart = (): CartItems => {
  const storedCart = localStorage.getItem("shoppingcart");
  let cartProducts: CartItems;

  if (storedCart) {
    cartProducts = JSON.parse(storedCart);
  } else {
    cartProducts = {};

    for (let i = 0; i < products.length; i++) {
      const productId = products[i].categoryProducts;

      for (let j = 0; j < productId.length; j++) {
        cartProducts[productId[j].id] = 0;
      }
    }
  }

  return cartProducts;
};

/**
 * Component for the shopping cart context.
 * @param props - Component props.
 * @returns The shopping cart context component.
 */

export const ShopCartContext = (props: typeProps) => {
  const [openModal, setOpenModal] = useState(false);
  const [cart, setCart] = useState<CartItems>(getDefaultCart());
  const [login, setLogin] = useState(false);

  /**
   * Calculates the total number of items in the cart.
   * @returns The total number of items in the cart.
   */

  const getTotalItems = () => {
    let total = 0;

    for (const items in cart) {
      total += cart[items];
    }

    return total;
  };
  /**
   * Adds an item to the shopping cart.
   * @param id - The ID of the item to add.
   */
  const addToCart = (id: number): void => {
    setCart((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  /**
   * Removes an item from the shopping cart.
   * @param id - The ID of the item to remove.
   */

  const removeToCart = (id: number): void => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] = 0) }));
  };

  /**
   * Subtracts one unit of an item in the shopping cart.
   * @param id - The ID of the item to subtract.
   */

  const minusToCart = (id: number): void => {
    setCart((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };

  /**
   * Calculates the total price of the shopping cart.
   * @returns The total price of the shopping cart.
   */

  const addPrice = () => {
    let total = 0;

    for (const items in cart) {
      for (let i = 0; i < products.length; i++) {
        const list = products[i];
        for (let j = 0; j < 10; j++) {
          if (cart[items] > 0) {
            const prod = list.categoryProducts[j];
            if (prod.id === parseInt(items)) {
              total += cart[items] * prod.price;
            }
          }
        }
      }
    }

    return total;
  };

  useEffect(() => {
    localStorage.setItem("shoppingcart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    setCart(getDefaultCart());
  }, []);

  const contextValue: ShopContextValue = {
    cart,
    addToCart,
    removeToCart,
    minusToCart,
    getTotalItems,
    addPrice,
    openModal,
    setOpenModal: setOpenModal,
    login,
    setLogin,
  };

  return (
    <>
      <Shop.Provider value={contextValue}>{props.children}</Shop.Provider>
    </>
  );
};
