import { Link } from "react-router-dom";
import "./GridHomePage.css";
import * as images from "../../../assets/img/index.ts";

/**
 * Represents the section of the main page where the best-selling products are displayed
 */

export const ContainerMain = () => {
  return (
    <div className="container mt-5 container-main">
      <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel" data-bs-theme="light">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={0} className="active" aria-label="Slide 1" aria-current="true" />
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={1} aria-label="Slide 2" className="" />
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={2} aria-label="Slide 3" className="" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={images.img_1} alt="Image Samsung" className="carousel-img" />
            <div className="container">
              <div className="carousel-caption text-start">
                <h2 className="text-danger">Samsung S23 Black.</h2>
                <p className="text-secondary">Best for best.</p>
                <p>
                  <Link to={"/productdetail/1"} className="btn btn-lg btn-danger">
                    Buy Now
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={images.img_2} alt="Image Iphone 13 Pro" className="carousel-img" />
            <div className="container">
              <div className="carousel-caption">
                <h2 className="text-danger">Iphone 13 Pro, White </h2>
                <p className="text-secondary">Perfect Design</p>
                <p>
                  <Link to={"/productdetail/1"} className="btn btn-lg btn-danger">
                    Buy Now
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={images.img_49} alt="Image Xbox X" className="carousel-img" />
            <div className="container">
              <div className="carousel-caption">
                <h2 className="text-danger">Xbox X Series, Diablo IV </h2>
                <p className="text-secondary">Top gaming</p>
                <p>
                  <Link to={"/productdetail/49"} className="btn btn-lg btn-danger">
                    Buy Now
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bg-secondary rounded" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon bg-secondary rounded" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Marketing messaging and featurettes
  ================================================== */}
      {/* Wrap the rest of the page in another container to center all the content. */}
      <div className="container ">
        {/* Three columns of text below the carousel */}
        <div className="d-flex pt-5 row row-cols-1 row-cols-sm-3 row-cols-md-4 gap-3 p-2">
          <div className="col p-2 card ">
            <img src={images.img_4} alt="Image Samsung Galaxy A23" className="homepage-img" />
            <title>Samsung Galaxy A23</title>

            <h2 className="fw-normal">Samsung Galaxy A23</h2>
            <p>An impressive 5G connection</p>

            <Link to={"/productdetail/4"} className="btn btn-lg btn-danger">
              View details »
            </Link>
          </div>
          {/* /.col-lg-4 */}
          <div className="col p-2 card">
            <img src={images.img_11} alt="Image LG OLED Evo" className="homepage-img" />
            <title>LG OLED Evo</title>

            <h2 className="fw-normal">LG OLED Evo 4K, White</h2>
            <p>Total Audiovisual Experience</p>

            <Link to={"/productdetail/11"} className="btn btn-lg btn-danger">
              View details »
            </Link>
          </div>
          {/* /.col-lg-4 */}
          <div className="col p-2 card">
            <img src={images.img_45} alt="Image Play Station 5" className="homepage-img img-width-171" />
            <title>Play Station 5</title>

            <h2 className="fw-normal">Play Station 5</h2>
            <p>Best for gaming</p>

            <Link to={"/productdetail/45"} className="btn btn-lg btn-danger">
              View details »
            </Link>
          </div>
          {/* /.col-lg-4 */}
        </div>
        {/* /.row */}
        {/* START THE FEATURETTES */}
        <hr className="featurette-divider" />
        <Link to={"./productdetail/46"} className="btn btn-lg btn-danger">
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                Nintendo Switch OLED <span className="text-body-secondary">It’ll blow your mind.</span>
              </h2>
              <p className="lead">7-inch OLED screen. Enjoy tabletop mode at the angle you prefer. </p>
            </div>
            <div className="col-md-5">
              <img src={images.img_46} alt="Image Nintendo Switch Oled" className="homepage-img" />
            </div>
          </div>
        </Link>
        <hr className="featurette-divider" />
        <Link to={"./productdetail/51"} className="btn btn-lg btn-danger">
          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading fw-normal lh-1">
                Oh yeah, it’s that good. <span className="text-body-secondary">7-inch OLED screen.</span>
              </h2>
              <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
            </div>
            <div className="col-md-5 order-md-1">
              <img src={images.img_51} alt="Image Nintendo Switch Oled" className="homepage-img" />
            </div>
          </div>
        </Link>
        <hr className="featurette-divider" />
        <Link to={"./productdetail/23"} className="btn btn-lg btn-danger">
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                And lastly, this one. <span className="text-body-secondary">Fast and efficient</span>
              </h2>
              <p className="lead">Easy portability. Effortless productivity.</p>
            </div>
            <div className="col-md-5">
              <img src={images.img_23} alt="Image Nintendo Switch Oled" className="homepage-img" />
            </div>
          </div>
        </Link>
        <hr className="featurette-divider" />
        {/* /END THE FEATURETTES */}
      </div>
      {/* /.container */}
    </div>
  );
};
