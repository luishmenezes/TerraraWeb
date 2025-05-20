import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaInstagram } from 'react-icons/fa';
import logo from '../assets/logo-terrara-transport.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section logo-nav">
  <img src={logo} alt="Logo Da Fonte Transportes" className="footer-logo" />
  <div className="footer-links">
    <Link to="/">Home</Link>
    <Link to="/quem-somos">Quem Somos</Link>
  </div>
</div>

      <div className="footer-section">
        <h4>Contatos</h4>
        <p><FaPhoneAlt /> CEI (81) 99991-2304 / (81) 99422-1902 / (85) 99651-8297</p>
        <p><FaEnvelope /> diretoria.transcearatransportes@gmail.com</p>
      </div>

      <div className="footer-section">
        <h4>Nossas redes sociais</h4>
        <p><FaInstagram /> @dafontetransportes</p>
      </div>
    </footer>
  );
};

export default Footer;
