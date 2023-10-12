import React from "react";
import vero from "../icons/vero-icon.svg";
import insta from "../icons/insta.svg";

function Footer() {
  return (
    <main className="footer-main">
      <h1 className="footer-txt">Follow Justin Here!</h1>
      <div className="footer-container">
        <div className="vero-container">
          <a
            href="https://vero.co/justin_garcia115"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="vero" src={vero} alt="" />
          </a>
        </div>
        <div className="insta-container">
          <a
            href="https://www.instagram.com/justinglens115/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="insta" src={insta} alt="" />
          </a>
        </div>
      </div>
    </main>
  );
}

export default Footer;
