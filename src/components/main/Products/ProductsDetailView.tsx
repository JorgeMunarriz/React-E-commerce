import { FC, useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../../assets/db/Products.db";
import { ProductsProps } from "../../../types/product";
import { Loader } from "../../loader/Loader";
import { Shop } from "../../../context/ShopCartContext";

/**
 * Represents the section of the detailed product page
 */

export const ProductsDetailView: FC = () => {
  const { id } = useParams<{ id: string }>();
  const shopContext = useContext(Shop);

  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<ProductsProps | null>(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const foundProduct = products.find((product: { categoryProducts: ProductsProps[] }) => product.categoryProducts.find((p: ProductsProps) => p.id === Number(id)));

    if (foundProduct) {
      const selectedProduct = foundProduct.categoryProducts.find((p: ProductsProps) => p.id === Number(id));
      setProduct(selectedProduct || null);
    }
  }, [id]);

  if (!product) {
    return null;
  }

  const { name, price, img, description } = product;

  if (!shopContext) {
    return null;
  }

  const { addToCart } = shopContext;

  return (
    <div className="container p-5">
      <div className="card shadow-sm rounded">
        <div className="pt-5">
          {loading ? <Loader /> : <img src={img} alt="Image" className="img-fluid w-75" />}
          <div className="d-flex align-items-center justify-content-center">
            <h2 className="title m-5">{name}</h2>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-end align-items-end tm-text-gray">
          <h3 className=" mb-2 p-3">{price}€</h3>
          <span className="tm-text-gray-light me-4">-incl. VAT with free shipping</span>
          <div className="d-flex m-3 pe-5">
            <button className="btn btn-outline-danger btn-lg " onClick={() => addToCart(Number(id))}>
              <i className="bi bi-cart-plus-fill"></i>
            </button>
          </div>
        </div>
        <hr />
        <h2 className="p-5">Description:</h2>
        <p className="p-3 ">{description}</p>
      </div>
    </div>
  );
};
