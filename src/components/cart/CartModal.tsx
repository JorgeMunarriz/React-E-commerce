import { useState, useContext, useEffect, useRef } from "react";
import { CardImg } from "../cardImg/CardImg";
import { Shop } from "../../context/ShopCartContext";
import { products } from "../../assets/db/Products.db";
import { Link } from "react-router-dom";
import { CardImgProps } from "../../types/product";

/**
 * CartModal component represents a modal for displaying the shopping cart.
 */

export const CartModal: React.FC<CardImgProps> = () => {
  const [item, setItem] = useState(0); // State for the number of items in the cart
  const [price, setPrice] = useState(0); // State for the total price of the cart

  const [modalOpen, setModalOpen] = useState(false); // State to control whether the modal is open or closed
  const shopCartContext = useContext(Shop); // ShopCartContext

  const menuRef = useRef<HTMLDivElement>(null); // Reference to the menu element

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => document.removeEventListener("mousedown", handler);
  }, []);

  if (!shopCartContext) {
    return null;
  }

  const { getTotalItems, cart, addPrice } = shopCartContext;

  useEffect(() => {
    setItem(getTotalItems());
    setPrice(addPrice());
  }, [cart]);

  const closeModal = () => {
    setModalOpen(false);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <button type="button" className="btn btn-secondary position-fixed end-0 me-3 mt-3 z-3" onClick={openModal}>
        View Cart
      </button>
      {modalOpen && (
        <>
          <div className="modal d-block opacity-100" tabIndex={-1} role="dialog" id="modalSheet" ref={menuRef}>
            <div className="modal-dialog  modal-dialog-scrollable " role="document">
              <div className="modal-content rounded-4 opacity-100 ">
                <div className="modal-header border-bottom-0">
                  <h2 className="modal-title fs-5">
                    Shopping Cart{" "}
                    <i className="bi bi-cart-fill px-3">
                      <span className="cart-number">{item === 0 ? "" : item}</span>
                    </i>
                  </h2>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal} />
                </div>
                <div className="modal-body py-0 text-center d-flex flex-column align-items-center">
                  {products.map(({ categoryProducts }) => {
                    return categoryProducts.map((product) => {
                      if (cart[product.id] !== 0) {
                        return <CardImg id={product.id} name={product.name} img={product.img} price={product.price} key={product.id} />;
                      }
                      return null;
                    });
                  })}
                  <h3>{price} €</h3>
                </div>
                <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">
                  <Link to={"./cart"} type="button" className=" btn btn-lg btn-danger w-100" onClick={closeModal}>
                    View Cart
                  </Link>
                  <button type="button" className="btn btn-md btn-secondary" data-bs-dismiss="modal" onClick={closeModal}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </>
      )}
    </>
  );
};
