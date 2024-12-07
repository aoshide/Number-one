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
            <a href="#!">Twitter</a>
            <a href="#!">Facebook</a>
            <a href="#!">Instagram</a>
            <a href="#!">LinkedIn</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="./Main">Home</a></li>
            <li><a href="./About">About </a></li>
            <li><a href="./Call">Call</a></li>
            <li><a href="./Azbuka">Study</a></li>
            <li><a href="./Privacy">Privacy policy</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Our Newsletter</h4>
          <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
          <form>
            <input type="email" placeholder="Your Email" />
            <button type="submit">Subscribe</button>
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
