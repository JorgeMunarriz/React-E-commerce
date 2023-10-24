import { Shop } from "../../context/ShopCartContext";

import { products } from "../../assets/db/Products.db";
import { useContext, useEffect, useState } from "react";
import { Loader, CardCheckout } from "../../components";

export const OrderPage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const ShopCartContext = useContext(Shop);
  if (!ShopCartContext) {
    return null;
  }
  const { cart } = ShopCartContext;

  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <div className="text-center pt-4">
          <h2>Congrats, this is your order</h2>
          <h3>the product will arrive soon enjoy it</h3>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <div className=" shadow w-75 m-2 d-flex flex-column align-items-center rounded">
            <ul className="list-group ">
              {products.map(({ categoryProducts }) => {
                return categoryProducts.map((product) => {
                  if (cart[product.id] !== 0) {
                    return loading ? (
                      <Loader />
                    ) : (
                      <li className="list-group-item d-flex justify-content-between ">
                        <CardCheckout id={product.id} name={product.name} img={product.img} price={product.price} key={product.id} />
                      </li>
                    );
                  }
                  return null;
                });
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
