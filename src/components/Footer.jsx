import React from "react";
import spyxLogo from "../assets/spyxfamilylogo.png";
import netflixIcon from "../assets/netflix.png";
import crunchyrollIcon from "../assets/crunchyroll.png";

function Footer() {
  return (
    <footer className="footer">
      <img src={spyxLogo} alt="Spy x Family Logo" className="footer-logo" />

      <p className="footer-watch-text">Watch Spy x Family on:</p>

      <div className="footer-icons">
        <a
          href="https://www.netflix.com/ph-en/title/81511410?source=351"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={netflixIcon} alt="Netflix" className="footer-icon" />
        </a>
        <a
          href="https://www.crunchyroll.com/series/G4PH0WXVJ/spy-x-family?srsltid=AfmBOoroPRbhmEiFxTM_xvniyeDNxxRZcuwRGlRHe4ZhvMtxjHTU-MC6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={crunchyrollIcon} alt="Crunchyroll" className="footer-icon" />
        </a>
      </div>

      <p className="footer-text">&copy; Spy x Family. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
