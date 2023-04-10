import React from "react";
import "./styles.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="parent">
          <div className="div1"></div>
          <div className="div2">
            <h2 className="socials-title">Socials</h2>
            <div className="socials">
              <a href="#">Facebook</a>
              <a href="#">Linkedin</a>
              <a href="#">Instagram</a>
              <a href="#">Twitter</a>
            </div>
          </div>
          <div className="div3">
          <h2 className="socials-title">News letter</h2>
          
          <label htmlFor="email">Enter your email address</label>
          <input type="email" id="email"></input>
          <div className="socials">
          <a href="tel:+380931234567">+380 93 123 45 67</a>
          <a href="mailto:abc@example.com">abc@example.com</a>
          </div>
          </div>
        </div>
        <p>© 2023 YUSH NFT. All rights reserved.</p>
      </div>
    </footer>
  );
}
