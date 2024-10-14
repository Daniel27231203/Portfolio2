import React from "react";
import scss from "./Footer.module.scss";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <p>
            &copy; {new Date().getFullYear()} Daniel Muhamedjanov. All rights
            reserved.
          </p>
          <div className={scss.socialLinks}>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://t.me/+996551902085"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
