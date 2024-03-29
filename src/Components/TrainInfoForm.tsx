import React from "react";
import "./style.css";
import "./main.js";
import Navbar from "./Navbar";
import Footer from "./Footer";

function TrainInfoForm() {
  return (
    <>
      <Navbar />
      <div>
        <div className="login-content">
          <div className="form-box">
            <form action="index.html">
              <h2 className="title">* Train Rail *</h2>
              <div className="input-div one">
                <div className="i">
                  <i className="fas fa-user"></i>
                </div>
                <div className="div">
                  <h5>Station From</h5>
                  <input type="text" className="input" />
                </div>
              </div>
              <div className="input-div pass">
                <div className="i">
                  <i className="fas fa-lock"></i>
                </div>
                <div className="div">
                  <h5>Station To</h5>
                  <input type="text" className="input" />
                </div>
              </div>
              <div className="input-div pass">
                <div className="i">
                  <i className="fas fa-lock"></i>
                </div>
                <div className="div">
                  <h5>Date of Boarding</h5>
                  <input type="date" className="input" />
                </div>
              </div>
              <input type="submit" className="btn" value="Find Trains" />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TrainInfoForm;
