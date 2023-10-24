import { Link } from "react-router-dom";

/**
 * Represents the SideBar 
 */

export const SideBar = () => {
  return (
    <div className="flex-start p-3 sidebar-main position-fixed start-0">
      <ul className="list-unstyled ps-0">
        <li className="mb-3 border-bottom ">
          <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
            Home
          </button>
          <div className="collapse" id="home-collapse">
            <ul className="btn-toggle-nav d-flex flex-column align-items-center list-unstyled fw-normal pb-1 small">
              <li className="border-bottom py-3">
                <Link to={"./categoriespage"} className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                  Categories
                </Link>
              </li>

              <li className="border-bottom py-3">
                <Link to={"./"} className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                  Products
                </Link>
              </li>
              <li className="py-3">
                <Link to={"./"} className="link-body-emphasis d-inline-flex text-decoration-none rounded"></Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="mb-3 border-bottom ">
          <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
            Dashboard
          </button>
          <div className="collapse" id="dashboard-collapse">
            <ul className="btn-toggle-nav d-flex flex-column align-items-center list-unstyled fw-normal pb-1 small">
              <li className="border-bottom py-3">
                <Link to={"./"} className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                  Overview
                </Link>
              </li>
              <li className="border-bottom py-3">
                <Link to={"./"} className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                  Weekly
                </Link>
              </li>
              <li className="border-bottom py-3">
                <Link to={"./"} className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                  Monthly
                </Link>
              </li>
              <li className="py-3">
                <Link to={"./"} className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                  Annually
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="mb-3 border-bottom ">
          <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
            Orders
          </button>
          <div className="collapse" id="orders-collapse">
            <ul className="btn-toggle-nav d-flex flex-column align-items-center justify-content-center list-unstyled fw-normal pb-1 small">
             
              <li className="border-bottom py-3">
                <Link to={"./cart"} className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                  Cart
                </Link>
              </li>
              <li className="border-bottom py-3">
                <Link to={"./"} className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                  Shipped
                </Link>
              </li>
              <li className="py-3">
                <Link to={"./"} className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                  Returned
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="my-3" />
        <li className="mb-3 border-bottom ">
          <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
            Account
          </button>
          <div className="collapse" id="account-collapse">
            <ul className="btn-toggle-nav d-flex flex-column align-items-center justify-content-center list-unstyled fw-normal pb-1 small">
            <li className="border-bottom py-3">
                <Link to={"./myaccount"} className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                  Log In
                </Link>
              </li>
              <li className="border-bottom py-3">
                <Link to={"./"} className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                  Profile
                </Link>
              </li>
              <li className=" py-3">
                <Link to={"./"} className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                  Settings
                </Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};
