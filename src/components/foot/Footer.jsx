import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h3>NURSQUAD</h3>
          <p>Maldybaeva Street<br />Bishkek, Kyrgyzstan</p>
          <p>
            <strong>Phone:</strong> +996 504 14 89 14<br />
            <strong>Email:</strong> nursquad
          </p>
          <div className="social-icons">
            <a href="#!">Facebook</a>
            <a href="#!">Instagram</a>
            <a href="#!">LinkedIn</a>
          </div>
        </div>

        <div className="footer-section">
          <div className="useful_part">
            <h4>Useful Links</h4>
            <a href="./Main">Home</a>
            <a href="./About">About </a>
            <a href="./Call">Call</a>
            <a href="./Azbuka">Study</a>
            <a href="./Privacy">Privacy policy</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Our Newsletter</h4>
          <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
          <form>
            <input type="email" placeholder="Your Email" />
            <button className="email_button" type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; Copyright <strong>Numberones</strong>. All Rights Reserved<br />
          Designed by <a href="https://">Nurti's team</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;