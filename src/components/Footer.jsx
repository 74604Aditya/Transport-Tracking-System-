// Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link;
import { FaFacebook, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <div className="footer__title">Tools</div>
          <div className="footer__list">
            <Link className="footer__item" to="/">Logistics Explorer</Link>
            <Link className="footer__item" to="/">Container Tracking</Link>
            <Link className="footer__item" to="/">Ship Schedules</Link>
            <Link className="footer__item" to="/">Logistics Map</Link>
          </div>
        </div>
        <div className="footer-column">
          <div className="footer__title">Company</div>
          <div className="footer__list">
            <a className="footer__item" href="https://www.youtube.com/@ApnaCollegeOfficial">Careers</a>
            <Link className="footer__item" to="/Copyright">Copyright</Link>
            <a className="footer__item" href="https://chat.openai.com/c/6b870482-5fb5-4dc9-a889-354c6a6b0a7f">Help</a>
          </div>
        </div>
        <div className="footer-column">
          <div className="footer__title">Resources</div>
          <div className="footer__list">
            <Link className="footer__item" to="/ContactUs">Contact Us</Link>
            <Link className="footer__item" to="/">Terms of Service</Link>
            <Link className="footer__item" to="/">Privacy Policy</Link>
          </div>
        </div>
      </div>

      <div className="conditions">
        <p>*CONDITIONS, LIMITATIONS AND EXCLUSIONS APPLY. SEE TERMS AND CONDITIONS FOR DETAILS.</p>
      </div><br></br>

      <section className='Media'>
        <div className="footer-column">
          <div className="footer__title">Social Media</div>
          <div className="footer__list">
            <Link className="footer__item" to="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </Link>
            <Link className="footer__item" to="https://twitter.com/i/flow/login" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </Link>
            <Link className="footer__item" to="/" target="_blank" rel="noopener noreferrer">
              <FaGoogle />
            </Link>
            <Link className="footer__item" to="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </Link>
            <Link className="footer__item" to="https://in.linkedin.com/?src=go-pa&trk=sem-ga_campid.14650114788_asid.150089839322_crid.656569072777_kw.www%20linkedin_d.c_tid.kwd-2246447582_n.g_mt.e_geo.9299348&mcid=6844056167778418689&cid=&gclid=Cj0KCQiA4NWrBhD-ARIsAFCKwWuesKcg_G7_G0D0WfW2_9ST2e28Ff8t6zIFidfroQV7QVC5RPjYVBoaAtvmEALw_wcB&gclsrc=aw.ds" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </Link>
            <Link className="footer__item" to="" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </Link>
          </div>
        </div>
      </section>

      <div className="created">
        <span>Created By G-Cargo | 2023 All rights reserved.</span>
      </div>

    </footer>
  );
};

export default Footer;
