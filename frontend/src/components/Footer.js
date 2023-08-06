import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-light text-black py-4 footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h6>MY ACCOUNT</h6>
            <ul className="list-unstyled footer-list">
              <li><Link to="/profile">User Profile</Link></li>
              <li><Link to="/orderhistory">Order History</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6>HELP</h6>
            <ul className="list-unstyled footer-list">
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/shippingpolicy">Shipping Policy</Link></li>
              <li><Link to="/returns">Returns</Link></li>
            </ul>
          </div>
  
          <div className="col-md-4">
            <h6>CONTACT US</h6>
            <ul className="list-unstyled footer-list">
              <li><Link to="/contactus">Contact Us</Link></li>
            </ul>
        
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;