import React from 'react';
import { SocialIcon } from 'react-social-icons';
import '../style/footer.css';
import {html5, css3, javascript, git, react, redux, mysql, mongodb, nodejs} from '../services/imgs.js';

function Footer() {
  return (
    <footer className="footer">
      {/* https://www.npmjs.com/package/react-social-icons */}
      <section className="tecnologies">
        <h3>Tecnologias</h3>
        <ul className="tecnologies-list">
          <li><img src={html5} alt="html5" /></li>
          <li><img src={css3} alt="css3" /></li>
          <li><img src={javascript} alt="javascript" /></li>
          <li><img src={git} alt="git" /></li>
          <li><img src={react} alt="react" /></li>
          <li><img src={redux} alt="redux" /></li>
          <li><img src={mysql} alt="mysql" /></li>
          <li><img src={mongodb} alt="mongodb" /></li>
          <li><img src={nodejs} alt="nodejs" /></li>
        </ul>
      </section>
      <ul className="social-links">
        <li><SocialIcon url="https://www.linkedin.com/in/tandyfw/" /></li>
        <li><SocialIcon url="https://github.com/TandyFW" /></li>
      </ul>
    </footer>
  );
}

export default Footer;
