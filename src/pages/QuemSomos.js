import React from "react";
import { FaCloud, FaBullseye, FaMedal, FaGem, FaTruck, FaTree } from "react-icons/fa";
import { BsCheckLg } from "react-icons/bs";
import "./QuemSomos.css";
import fotoBrasilMapa from '../assets/da_fonte_md.png'

export default function QuemSomos() {
  return (
    <div className="quem-somos-container">

      {/* Nossa História */}
      <section className="nossa-historia">
        <h2><FaCloud className="icon" /> NOSSA HISTÓRIA</h2>
        <p>
          A Dafonte nasceu em Jaboatão dos Guararapes, um município que combina história, belezas naturais e desenvolvimento econômico.
        </p>
        <p><strong>
          Mas logo nos expandimos visando superar as expectativas dos nossos clientes.
        </strong></p>
        <div className="imagem-celular">
          <img src="/quem-somos-celular.png" alt="Imagem celular com fotos da Dafonte" />
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="valores">
        <div className="valor-item">
          <FaBullseye className="valor-icon" />
          <h3>Missão</h3>
          <p>Contribuir para o sucesso de nossos clientes, oferecendo soluções em transporte rodoviário de cargas.</p>
        </div>
        <div className="valor-item">
          <FaMedal className="valor-icon" />
          <h3>Visão</h3>
          <p>Ser uma empresa referência e reconhecida no mercado de transporte rodoviário de cargas, pela excelência em nossos serviços.</p>
        </div>
        <div className="valor-item">
          <FaGem className="valor-icon" />
          <h3>Valores</h3>
          <p>Compromisso, pontualidade e credibilidade são os pilares que orientam todas as nossas ações e relacionamentos.</p>
        </div>
      </section>

      {/* Nossas unidades */}
      <section className="unidades-container">
        <h2>
          <FaTruck className="icon" />
          Nossas unidades <span className="highlight">Matriz e Filiais</span>
        </h2>

        <div className="cards-unidades">
          <div className="card-unidade">
            <img src={fotoBrasilMapa} alt="Bandeira do Brasil" />
            <div className="texto-card">
              <BsCheckLg className="check-icon" />
              <p><strong>Transportamos por todo Brasil</strong></p>
            </div>
          </div>

          <div className="card-unidade">
            <img src="/crescimento.png" alt="Crescimento" />
            <div className="texto-card">
              <BsCheckLg className="check-icon" />
              <p><strong>12 anos entregando excelência</strong></p>
            </div>
          </div>

          <div className="card-unidade">
            <img src="/meio-ambiente.png" alt="Meio ambiente" />
            <div className="texto-card">
              <BsCheckLg className="check-icon" />
              <p>Veículos com baixa emissão de poluentes</p>
            </div>
          </div>

          <div className="card-unidade">
            <img src="/caminhao.png" alt="Caminhão" />
            <div className="texto-card">
              <BsCheckLg className="check-icon" />
              <p>Transporte de hipoclorito e soda cáustica.</p>
            </div>
          </div>

          <div className="card-unidade">
            <img src="/seguranca.png" alt="Segurança" />
            <div className="texto-card">
              <BsCheckLg className="check-icon" />
              <p>Segurança garantida nas frotas</p>
            </div>
          </div>

          <div className="card-unidade">
            <img src="/cargas-secas.png" alt="Cargas secas" />
            <div className="texto-card">
              <BsCheckLg className="check-icon" />
              <p><strong>Transporte de cargas secas</strong> (da matéria prima até o produto acabado)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dafonte x Meio Ambiente */}
      <section className="meio-ambiente">
        <h2><FaTree className="icon" /> TERRARA X MEIO AMBIENTE</h2>
        <p className="subtitulo"><strong>Nossa responsabilidade ambiental é uma prioridade.</strong></p>
        <p>
          Implementamos práticas sustentáveis em nossas operações, buscando constantemente reduzir o impacto ambiental. Investimos em veículos com baixa emissão de poluentes e adotamos medidas de logística eficientes, otimizando rotas e reduzindo o consumo de combustível.
        </p>
      </section>

      {/* Nova seção - Caminhão + texto */}
      <section className="caminhao-texto">
        <div className="imagem-caminhao">
          <img src="/caminhao-vermelho.png" alt="Caminhão vermelho" />
        </div>
        <div className="texto-caminhao">
          <p>
            Estamos comprometidos em impulsionar o crescimento dos negócios dos nossos clientes, proporcionando-lhes uma vantagem competitiva por meio de soluções eficientes, confiáveis e inovadoras.{" "}
            <span className="link-verde">Vamos juntos?</span>
          </p>
        </div>
      </section>

    </div>
  );
}
