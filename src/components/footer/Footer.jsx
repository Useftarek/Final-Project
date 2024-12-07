import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="footer py px">
      <div className="newsletter">
        <div className="newsletter-text">
        <h2>Stay Up To Date About Our Latest Offers</h2>
        </div>
        <div className="newsletter-input">
          <input type="email" placeholder="Enter your email address"  />
          <button>Subscribe to Newsletter</button>
        </div>
      </div>
      
      <div className="footer-main">
        <div className="footer-section company-info">
          <h3>SHOP.CO</h3>
          <p>We have clothes that suit your style and which you’re proud to wear. From women to men.</p>
          <div className="social-icons">
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
            <FaGithub />
          </div>
        </div>
        
        <div className="footer-section">
          <div className="column">
            <h4>COMPANY</h4>
            <p>About</p>
            <p>Features</p>
            <p>Works</p>
            <p>Career</p>
          </div>
          <div className="column">
            <h4>HELP</h4>
            <p>Customer Support</p>
            <p>Delivery Details</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div className="column">
            <h4>FAQ</h4>
            <p>Account</p>
            <p>Manage Deliveries</p>
            <p>Orders</p>
            <p>Payments</p>
          </div>
          <div className="column">
            <h4>RESOURCES</h4>
            <p>Free eBooks</p>
            <p>Development Tutorial</p>
            <p>How to - Blog</p>
            <p>Youtube Playlist</p>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>Shop.co © 2000-2023, All Rights Reserved</p>
        <div className="payment-methods">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" />
          <img src="https://banner2.cleanpng.com/20180403/qte/avhloeech.webp" alt="MasterCard" />
          <img src="https://i.pcmag.com/imagery/reviews/068BjcjwBw0snwHIq0KNo5m-15.fit_lim.size_1050x591.v1602794215.png" alt="PayPal" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Apple_Pay_logo.svg/2560px-Apple_Pay_logo.svg.png" alt="Apple Pay" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/640px-Google_Pay_Logo.svg.png" alt="Google Pay" />
        </div>
      </div>
    </footer>
  )
}
