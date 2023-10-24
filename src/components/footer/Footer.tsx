import { Link } from "react-router-dom";


/**
 * Footer component represents the footer.
 */

export const Footer=() =>{
  return (
    <footer className="py-5 container">
      <div className="row">
        <div className="col-6 col-md-2 mb-3">
          <h5>Pages</h5>
          <ul className="nav flex-column">
            
            <li className="nav-item mb-2">
              <Link to={"/"} className="nav-link p-0 text-body-secondary">
                Home
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to={"/categories"} className="nav-link p-0 text-body-secondary">
                Categories
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to={"/products"} className="nav-link p-0 text-body-secondary">
                Products
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to={"/faqs"} className="nav-link p-0 text-body-secondary">
                FAQs
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to={"/about"} className="nav-link p-0 text-body-secondary">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md-2 mb-3">
          <h5>MarktMedia </h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <button className="nav-link p-0 text-body-secondary">C. Conditions</button>
            </li>
            <li className="nav-item mb-2">
              <button className="nav-link p-0 text-body-secondary">B2B</button>
            </li>
            <li className="nav-item mb-2">
              <button className="nav-link p-0 text-body-secondary">Terms of use.</button>
            </li>
            <li className="nav-item mb-2">
              <button className="nav-link p-0 text-body-secondary">Privacy</button>
            </li>
            <li className="nav-item mb-2">
              <button className="nav-link p-0 text-body-secondary">Cookies</button>
            </li>
          </ul>
        </div>

        <div className="col-md-5 offset-md-1 mb-3">
          <form>
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label htmlFor="newsletter1" className="visually-hidden">
                Email address
              </label>
              <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
              <button className="btn btn-danger" type="button">
                Subscribe
              </button>
            </div>
          </form>
          <div className="nav-item mb-2 d-flex gap-3 m-3">
              <a href="https://www.youtube.com/" target="_blank" className="nav-link p-0 text-body-secondary">
                <i className="bi bi-google"></i>
              </a>
              <a href="https://www.twitter.com/" target="_blank" className="nav-link p-0 text-body-secondary">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://github.com/JorgeMunarriz?tab=repositories" target="_blank" className="nav-link p-0 text-body-secondary">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://www.facebook.com/" target="_blank" className="nav-link p-0 text-body-secondary">
                <i className="bi bi-facebook"></i>
              </a>
            </div>
        </div>
        
      </div>
      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>© 2023 Company, Inc. All rights reserved.</p>
        <a  href="#"><button className="btn btn-outline-secondary ">Back top</button></a>
      </div>
    </footer>
  );
}
