import React from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logo from '../assets/logo-terrara-transport.png';

export default function Header() {
  const location = useLocation();

  return (
    <header className="site-header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Logo Da Fonte Transportes" />
        </div>

        {/* Navegação */}
        <nav className="nav-links">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
          <Link to="/quem-somos" className={location.pathname === "/quem-somos" ? "active" : ""}>
            Quem Somos
          </Link>
        </nav>

        {/* Botão Fale conosco */}
        <div className="contact-btn">
          <Link to="/contato">
            <FaRegCommentDots /> Fale conosco
          </Link>
        </div>
      </div>
    </header>
  );
}
