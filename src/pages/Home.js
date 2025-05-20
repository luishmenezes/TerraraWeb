import React from "react";
import "./Home.css";
import {
  FaMapMarkerAlt,
  FaClock,
  FaIdBadge,
  FaAward,
} from "react-icons/fa";

import caminhao from '../assets/progresso-confianca.jpeg';
import caixasTransporte from '../assets/terrara-transporte-caixas.png'


export default function HomeHero() {
  return (
    <div className="home-hero">

      {/* Seção 1: Hero com caminhão */}
      <div className="top-section">
        <div className="text-content">
          <h4><FaMapMarkerAlt /> Você chegou ao seu destino.</h4>
          <h2>
            A referência no transporte de<br />
            cargas secas no Nordeste.
          </h2>
          <ul>
            <li><FaAward /> Ampla abrangência geográfica;</li>
            <li><FaClock /> Pontualidade e integridade;</li>
            <li><FaIdBadge /> Todas as licenças de carga necessárias.</li>
          </ul>
        </div>
        <div className="truck-image">
          <img src={caminhao} alt="Caminhão Dafonte" />
        </div>
      </div>

      {/* Seção 2: Soluções oferecidas */}
      <div className="bottom-section">
        <h3>SOLUÇÕES OFERECIDAS PELA TERRARA:</h3>
        <ul>
          <li>
            <FaAward />
            Atuação no transporte rodoviário, principalmente, no embarque de cargas secas em diversos segmentos, desde matéria prima até produto acabado;
          </li>
          <li>
            <FaAward />
            Transportamos com segurança através do sistema de rastreamento com tecnologia SATELITAL;
          </li>
          <li>
            <FaAward />
            Frota em constante atualização.
          </li>
        </ul>
      </div>

      {/* Seção 3: Matriz e Filiais */}
      <div className="units-section">
        <h3><FaMapMarkerAlt /> Nossas unidades <span>Matriz e Filiais</span></h3>
        <div className="units-cards">
          {["Matriz de Ceará", "Filial Pernambuco", "Filial Rio Grande do Norte", "Filial Maranhão"].map((nome, i) => (
            <div className="unit-card" key={i}>
              <div className="icon"><FaMapMarkerAlt /></div>
              <p>{nome}</p>
            </div>
          ))}
        </div>
        <p className="units-text">
          O compromisso com a pontualidade e excelência nas entregas,<br />
          tem fidelizado marcas já consolidadas no mundo inteiro.
        </p>
      </div>

      {/* Seção 4: Sobre a empresa */}
      <div className="about-section">
        <div className="about-image">
          <img src={caixasTransporte} alt="Caixas com logo Dafonte" />
        </div>
        <div className="about-text">
          <div className="frase-empatica">
  <p className="destaque">Além do transporte de cargas, a Dafonte também transporta sorrisos e alegria!</p>
  <p className="familia">Essa é nossa grande família.</p>
</div>

          <p>Na Terrara, cada entrega vai muito além do destino. Levamos confiança, cuidado e a certeza de que, junto com cada carga, 
              também transportamos histórias, sonhos e felicidade. Porque aqui, mais do que uma empresa, 
              somos uma grande família unida pelo compromisso de fazer a diferença na vida de cada cliente. 💚📦</p>
          
          <div className="botao-container">
      <button className="learn-more">Saiba mais da nossa história!</button>
    </div>
        </div>
      </div>

    </div>
  );
}
