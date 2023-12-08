// Footer.jsx

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <div class="footer__title">Tools</div>
          <div class="footer__list"> 
          <a class="footer__item" href="/">Logistics Explorer</a> 
          <a class="footer__item" href="/">Container Tracking</a>
           <a class="footer__item" href="/">Ship Schedules</a>
           <a class="footer__item" href="/">Logistics Map</a>
          </div>
        </div>
        <div className="footer-column">
          <div class="footer__title">Company</div>
          <div class="footer__list"> 
          <a class="footer__item" href="/">Careers</a> 
          <a class="footer__item" href="/">Copyright</a>
           <a class="footer__item" href="/">Help</a>
          </div>
        </div>
        <div className="footer-column">
          <div class="footer__title">Resources</div>
          <div class="footer__list"> 
          <a class="footer__item" href="/">Contact Us</a>
          <a class="footer__item" href="/">Terms of Service</a>
          <a class="footer__item" href="/">Privacy Policy</a>
          <a class="footer__item" href="/">Documet templates</a>
          </div>
        </div>
      </div>

      <div className="conditions">
        <p>*CONDITIONS, LIMITATIONS AND EXCLUSIONS APPLY. SEE TERMS AND CONDITTIONS FOR DETAILS.</p>
      </div><br></br>
      <div className="created">
        <span>Created By 2023 All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
