import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>FAQ</Link>
        </li>
        <li>
          <Link>About Us</Link>
        </li>
        <li>
          <Link>Terms of use</Link>
        </li>
        <li>
          <Link>Contact us</Link>
        </li>
        <li>
          <Link>Privacy</Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
