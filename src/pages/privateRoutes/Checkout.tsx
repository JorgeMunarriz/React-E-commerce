
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { products } from "../../assets/db/Products.db";
import { Users } from "../../assets/db/Users";
import { Loader, CardCheckout } from "../../components";
import { Shop } from "../../context/ShopCartContext";
import { CardImgProps } from "../../types";

const codes = [
  { code: "mar23", discount: 20 },
  { code: "cart50", discount: 50 },
];

export const Checkout: React.FC<CardImgProps> = () => {
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [creditCard, setCreditCard] = useState("");

  const [loading, setLoading] = useState(false);

  const [discount, setDiscount] = useState("");
  const [acceptedDiscount, setAcceptedDiscount] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();
  const keyId = uuidv4();
  useEffect(() => {
    const checkFormValidity = () => {
      if (address.trim() !== "" && country.trim() !== "" && city.trim() !== "" && zip.trim() !== "" && creditCard.trim() !== "") {
        setIsFormValid(true);
      } else {
        setIsFormValid(false);
      }
    };

    checkFormValidity();
  }, [address, country, city, zip, creditCard]);

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
  const { getTotalItems, cart, addPrice, setLogin } = ShopCartContext;

  const handlePromoDiscount = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    codes.forEach((code) => {
      if (discount === code.code) {
        setAccepted(true);
        setAcceptedDiscount(code.discount.toString());
      }
    });
  };

  function handleSubmitAddress(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (address.trim() === "" || country.trim() === "" || city.trim() === "" || zip.trim() === "" || creditCard.trim() === "") {
      console.log("Por favor, completa todos los campos");
      return;
    }

    const found = Users.find((obj) => obj.address === address && obj.country === country && obj.city === city);
    //const users = {user, email};

    localStorage.setItem("address", address);

    if (found) {
      setLogin(true);
      navigate("./checkout");
    } else {
      console.log("Usuario no encontrado");
    }
    if (isFormValid) {
      navigate("/congrats");
    } else {
      console.log("Por favor, completa todos los campos");
    }
  }

  return (
    <div className="container">
      <main>
        <div className="py-5 text-center">
          <h2>Checkout form</h2>
          <p className="lead">Please fill in all the fields so we can send you the product.</p>
        </div>
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Your cart</span>
              <span className="badge bg-primary rounded-pill">{getTotalItems()}</span>
            </h4>
            <ul className="list-group mb-3">
              {products.map(({ categoryProducts }) => {
                return categoryProducts.map((product) => {
                  if (cart[product.id] !== 0) {
                    return loading ? (
                      <Loader />
                    ) : (
                      <li key={keyId} className="list-group-item d-flex justify-content-between lh-sm">
                        <CardCheckout id={product.id} name={product.name} img={product.img} price={product.price} key={product.id} />
                      </li>
                    );
                  }
                  return null;
                });
              })}
              <li className="list-group-item d-flex justify-content-between bg-body-tertiary">
                <div className="text-success">
                  <h6 className="my-0">Promo code</h6>
                  <small>EXAMPLECODE</small>
                </div>
                <span className="text-success">{accepted ? acceptedDiscount + "%" : "0%"}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (€)</span>
                <strong>{accepted ? (+addPrice().toFixed(2) - (+addPrice().toFixed(2) * +acceptedDiscount) / 100).toFixed(2) : addPrice().toFixed(2)}</strong>
              </li>
            </ul>
            <form className="card p-2">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Promo code" value={discount} onChange={(e) => setDiscount(e.target.value)} />
                <button type="submit" className="btn btn-secondary" onClick={(e) => handlePromoDiscount(e)}>
                  Redeem
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Billing address</h4>
            <form className="needs-validation" noValidate={true} onSubmit={handleSubmitAddress}>
              <div className="row g-3">
                <div className="col-12">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input type="text" className="form-control" id="address" placeholder="C/ User.1" required={true} onChange={(event) => setAddress(event.target.value)} />
                  <div className="invalid-feedback">Please enter your shipping address.</div>
                </div>
                <div className="col-12">
                  <label htmlFor="address2" className="form-label">
                    Address 2 <span className="text-body-secondary">(Optional)</span>
                  </label>
                  <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                </div>
                <div className="col-md-5">
                  <label htmlFor="country" className="form-label">
                    Country
                  </label>
                  <input type="text" className="form-control" id="country" placeholder="Your country" onChange={(event) => setCountry(event.target.value)} />
                  <div className="invalid-feedback">Please select a valid country.</div>
                </div>
                <div className="col-md-4">
                  <label htmlFor="city" className="form-label">
                    State
                  </label>
                  <input type="text" className="form-control" id="city" placeholder="Your city" onChange={(event) => setCity(event.target.value)} />
                  <div className="invalid-feedback">Please provide a valid state.</div>
                </div>
                <div className="col-md-3">
                  <label htmlFor="zip" className="form-label">
                    Zip
                  </label>
                  <input type="text" className="form-control" id="zip" placeholder="" required={true} onChange={(event) => setZip(event.target.value)} />
                  <div className="invalid-feedback">Zip code required.</div>
                </div>
              </div>
              <hr className="my-4" />
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="same-address" />
                <label className="form-check-label" htmlFor="same-address">
                  Shipping address is the same as my billing address
                </label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="save-info" />
                <label className="form-check-label" htmlFor="save-info">
                  Save this information for next time
                </label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="method-shipment" />
                <label className="form-check-label" htmlFor="method-shipment">
                  Fast delivery in 24/48 hours
                </label>
              </div>
              <hr className="my-4" />
              <h4 className="mb-3">Payment</h4>
              <div className="my-3">
                <div className="form-check">
                  <input id="credit" name="paymentMethod" type="radio" className="form-check-input" defaultChecked={true} required={true} />
                  <label className="form-check-label" htmlFor="credit">
                    Credit card
                  </label>
                </div>
                <div className="form-check">
                  <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required={true} />
                  <label className="form-check-label" htmlFor="debit">
                    Debit card
                  </label>
                </div>
                <div className="form-check">
                  <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required={true} />
                  <label className="form-check-label" htmlFor="paypal">
                    PayPal
                  </label>
                </div>
              </div>
              <div className="row gy-3">
                <div className="col-md-6">
                  <label htmlFor="cc-name" className="form-label">
                    Name on card
                  </label>
                  <input type="text" className="form-control" id="cc-name" placeholder="" required={true} />
                  <small className="text-body-secondary">Full name as displayed on card</small>
                  <div className="invalid-feedback">Name on card is required</div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="cc-number" className="form-label">
                    Credit card number
                  </label>
                  <input type="text" className="form-control" id="cc-number" placeholder="" required={true} onChange={(event) => setCreditCard(event.target.value)} />
                  <div className="invalid-feedback">Credit card number is required</div>
                </div>
                <div className="col-md-3">
                  <label htmlFor="cc-expiration" className="form-label">
                    Expiration
                  </label>
                  <input type="text" className="form-control" id="cc-expiration" placeholder="" required={true} />
                  <div className="invalid-feedback">Expiration date required</div>
                </div>
                <div className="col-md-3">
                  <label htmlFor="cc-cvv" className="form-label">
                    CVV
                  </label>
                  <input type="text" className="form-control" id="cc-cvv" placeholder="" required={true} />
                  <div className="invalid-feedback">Security code required</div>
                </div>
              </div>
              <hr className="my-4" />
              {isFormValid ? (
                <Link to="/congrats">
                  <button className="w-100 btn btn-primary btn-lg" type="submit">
                    Buy now
                  </button>
                </Link>
              ) : (
                <button className="w-100 btn btn-primary btn-lg" type="submit" disabled={!isFormValid}>
                  Buy now
                </button>
              )}
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};
