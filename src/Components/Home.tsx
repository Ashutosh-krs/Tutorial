import React from "react";
import "./home.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Navbar />
      <div className="container-box">
        <div className="img">
          <div className="login-content">
            <form>
              <div className="menu">
                <div
                  className="card text-bg-light mb-3"
                  style={{ width: "300px", height: "420px" }}
                >
                  <div className="card-header">
                    <img
                      src="src/images/train.png"
                      alt="train"
                      style={{ width: "230px", height: "200px" }}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Train</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
                <div
                  className="card text-bg-light mb-3"
                  style={{ width: "300px", height: "420px" }}
                >
                  <div className="card-header">
                    <img
                      src="src/images/food.jpg"
                      alt="train"
                      style={{ width: "230px", height: "200px" }}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Food</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
                <div
                  className="card text-bg-light mb-3"
                  style={{ width: "300px", height: "420px" }}
                >
                  <div className="card-header">
                    <img
                      src="src/images/hotel.png"
                      alt="train"
                      style={{ width: "230px", height: "200px" }}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Hotel</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
                <div
                  className="card text-bg-light mb-3"
                  style={{ width: "300px", height: "420px" }}
                >
                  <div className="card-header">
                    <img
                      src="src/images/avatar.svg"
                      alt="train"
                      style={{ width: "230px", height: "200px" }}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Tourism</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      <script type="text/javascript" src="main.js"></script>
    </>
  );
}

export default Home;
