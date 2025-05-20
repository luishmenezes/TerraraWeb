import React from "react";
import "./Contato.css";
import { FaPhone, FaEnvelope } from 'react-icons/fa';


export default function Contato() {
  return (
    <section className="contato-container">
  <div className="contato-blocos">
    <div className="contato-info">
      <h2>Entre em contato conosco!</h2>
      <div className="contato-descricao">
        <p><FaPhone style={{ marginRight: 8 }} /> CEI (81) 99991-2304 / (81) 99422-1902 / (85) 99651-8297</p>
    <p><FaEnvelope style={{ marginRight: 8 }} /> diretoria.transcearatransportes@gmail.com</p>
      </div>
    </div>

    <div className="contato-form">
      <h2>Ou preencha o formulário e permita entrarmos em contato com você!</h2>
      <form>
        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" placeholder="Sua resposta" required />
        
        <label htmlFor="numero">Número:</label>
        <input type="text" id="numero" placeholder="Sua resposta" required />
        <button type="submit">ENVIAR</button>
      </form>
    </div>
  </div>
</section>

  );
}
