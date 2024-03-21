// Footer.js
import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>We are a company dedicated to providing high-quality products and excellent customer service.</p>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <p>Connect with us on social media:</p>
          <div className="social-icons">
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-column">
        <p>&copy; 2024 Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

