import React from "react";

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: "#537188" }}>
      <div className="footer-container" style={{ color: "white" }}>
        <div className="row">
          <div className="col-md-4 custom-text-white">
            <h3>About Us</h3>
            <p>
              Railway Reservation System is a user-friendly platform that allows
              you to book train tickets conveniently. Explore our wide range of
              destinations and enjoy a seamless travel experience.
            </p>
          </div>
          <div className="col-md-4">
            <h3>Quick Links</h3>
            <ul className="footer-links" style={{ color: "white" }}>
              <li>
                <a href="/" style={{ color: "white" }}>
                  Home
                </a>
              </li>
              <li></li>
              <li></li>
              <li></li>
              <li>
                <a href="/about" style={{ color: "white" }}>
                  About
                </a>
              </li>
            </ul>
            <ul className="footer-links">
              <li>
                <a href="/destinations" style={{ color: "white" }}>
                  Destinations
                </a>
              </li>
              <li></li>
              <li>
                <a href="/contact" style={{ color: "white" }}>
                  Contact
                </a>
              </li>
            </ul>
            <ul className="footer-links">
              <li>
                <a href="/terms" style={{ color: "white" }}>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/privacy" style={{ color: "white" }}>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Contact Information</h3>
            <p>
              <strong>Address:</strong> 123 Railway Street, Cityville, Country
            </p>
            <p>
              <strong>Email:</strong> info@railwayreservation.com
            </p>
            <p>
              <strong>Phone:</strong> +1 123-456-7890
            </p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12">
            <p className="text-center">
              &copy; {new Date().getFullYear()} Railway Reservation System. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
