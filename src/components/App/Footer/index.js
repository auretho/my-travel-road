import React from 'react';
import { Link } from 'react-router-dom'; 
import './styles.scss';


const Footer = () => (
    <div className='footer'>
      <ul className='footer-list'>
        <li>
          <Link to="https://nsm09.casimages.com/img/2020/09/27//20092709225517254117047019.gif" className='footer-content'>Qui sommes-nous?</Link>
        </li>
        <li>
          <Link to="https://nsm09.casimages.com/img/2020/09/27//20092709363417254117047035.gif" className='footer-content'>Contactez nous</Link>
        </li>
        <li>
          <Link to="https://nsm09.casimages.com/img/2020/09/27//20092709390317254117047041.gif" className='footer-content'>Mentions légales</Link>
        </li>
      </ul>
           </div>
  );

  export default Footer;
