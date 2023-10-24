import React, { useState, useContext } from "react";
import { Users } from "../../assets/db/Users";
import { useNavigate } from "react-router-dom";
import { Shop } from "../../context/ShopCartContext";

/**
 * Login component represents the Login Form to validate user.
 */
export const Login = () => {
  const [user, setUser] = useState(""); // State for storing the user value
  const [email, setEmail] = useState(""); // State for storing the email value
  const [password, setPassword] = useState(""); // State for storing the password value
  const [passwordConfirmation, setPasswordConfirmation] = useState(""); // State for storing the password confirmation value

  const navigate = useNavigate(); // Navigation hook for programmatic navigation
  const ShopCartContext = useContext(Shop);

  // Function to handle form submission
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Validate input fields
    if (email.trim() === "" || password.trim() === "") {
      console.log("Por favor, completa todos los campos");
      return;
    }
    // Check if user credentials exist in the Users array
    const found = Users.find((obj) => obj.user === user && obj.email === email && obj.password === password && obj.passwordconfirmation === passwordConfirmation);
    //store the user in localstorage
    localStorage.setItem("user", user);
    // If user is found, set the login status and navigate to the checkout page

    if (!ShopCartContext) {
      return null;
    }
    const { setLogin } = ShopCartContext;
    if (found) {
      if (found) {
        setLogin(true);
        navigate("./checkout");
      } else {
        console.log("Usuario no encontrado");
      }
    }
  }

  return (
    <>
      <div className="container ">
        <div className="col-md-7 col-lg-8 text-center">
          <h4 className="mb-3">Login</h4>
          <form className="needs-validation" onSubmit={handleSubmit}>
            <div className="col-12">
              <label htmlFor="user" className="form-label">
                User
              </label>
              <input onChange={(event) => setUser(event.target.value)} type="text" className="form-control" id="user" placeholder="User" />
              <div className="invalid-feedback">Please enter a valid email address for shipping updates.</div>
            </div>
            <div className="col-12">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input onChange={(event) => setEmail(event.target.value)} type="email" className="form-control" id="email" placeholder="you@example.com" />
              <div className="invalid-feedback">Please enter a valid email address for shipping updates.</div>
            </div>

            <div className="col-12">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input onChange={(event) => setPassword(event.target.value)} type="password" className="form-control" id="password" placeholder="Enter Your password" required />
            </div>
            <div className="col-12">
              <label htmlFor="passwordConfirmation" className="form-label">
                Password
              </label>
              <input onChange={(event) => setPasswordConfirmation(event.target.value)} type="password" className="form-control" id="passwordConfirmation" placeholder="Enter Your password" required />
            </div>

            <hr />

            <button className="w-100 btn btn-danger btn-lg" type="submit">
              Continue to Checkout
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
