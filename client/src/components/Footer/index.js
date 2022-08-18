import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import SphereSmall from "../../assets/small/SphereSmall.png";

function Footer() {
  return (
    <footer>
      <div>
        <div className="footer-container">
          {" "}
          <img
            src={SphereSmall}
            style={{ margin: "auto" }}
            alt="small-sphere"
          />
        </div>

        <div>
          <h2 className="footer-container">
            ©2022 Sorcerer's sphere. all rights reserved.
          </h2>

          <ul>
            <a href="https://www.linkedin.com/in/lindsey-m-2219abb0/">
              <li className="logo">
                <BsFacebook />
              </li>
            </a>
            <a href="https://www.instagram.com/lem_photos/">
              <li className="logo">
                <BsInstagram />
              </li>
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
