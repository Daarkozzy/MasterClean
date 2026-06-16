import React from 'react';
import { Book } from '@phosphor-icons/react';
import './About.css';

export default function About() {
  return (
    <section className="about section-padding">
      <div className="container">
        <header className="section-header-center">
          <span className="section-eyebrow"><Book size={16} weight="fill" style={{ display: 'inline-block', marginRight: '6px', verticalAlign: 'middle' }} /> Nossa História</span>
          <h2 className="section-title">Quem é a <span className="blue">Masterclean</span>?</h2>
          <div className="section-title-underline" />
        </header>

        <div className="about__content">
          <div className="about__text-section">
            <p className="about__intro">
              A Masterclean não nasceu apenas como uma empresa. Ela nasceu de um <strong>sonho</strong>.
            </p>

            <p>
              Muito antes de existir oficialmente, a ideia da Masterclean já habitava o coração de dois irmãos que compartilhavam o mesmo propósito: construir algo que pudesse transformar ambientes, levar bem-estar às pessoas e fazer a diferença através do trabalho realizado com dedicação e amor.
            </p>

            <p>
              Foi assim que <strong>Caroline Fernandes e Vinícius Fernandes</strong> deram vida à Masterclean, uma empresa fundada em <strong>Itaguaí, Rio de Janeiro</strong>, com a missão de oferecer muito mais do que serviços de higienização. Nossa missão sempre foi proporcionar conforto, saúde, segurança e satisfação para cada cliente que confia em nosso trabalho.
            </p>

            <p>
              Desde o início, acreditamos que cada sofá higienizado, cada colchão renovado, cada embarcação cuidada e cada ambiente transformado representa muito mais do que limpeza. Representa <strong>cuidado com famílias, com histórias, com patrimônios e com momentos especiais</strong> vividos em cada espaço.
            </p>

            <p>
              Hoje, a Masterclean atende <strong>residências, empresas, veículos, ônibus, embarcações</strong> e diversos segmentos que buscam um serviço profissional, realizado com responsabilidade e excelência.
            </p>

            <p>
              Nossa história é marcada pela <strong>união familiar, coragem de empreender</strong> e determinação de crescer sem abrir mão dos valores que nos trouxeram até aqui. A parceria entre dois irmãos continua sendo uma das maiores forças da empresa.
            </p>

            <p>
              Acreditamos que o verdadeiro sucesso não está apenas em crescer, mas em <strong>conquistar a confiança das pessoas</strong> através de um trabalho bem feito.
            </p>
          </div>

          <div className="about__values">
            <div className="about__section-box">
              <h3>Nossa Missão</h3>
              <p>Oferecer serviços de higienização profissional com qualidade, segurança e eficiência, promovendo saúde, conforto e bem-estar para nossos clientes.</p>
            </div>

            <div className="about__section-box">
              <h3>Nossa Visão</h3>
              <p>Ser reconhecida como referência em higienização profissional, destacando-se pela excelência no atendimento, pela confiança conquistada e pelos resultados entregues.</p>
            </div>

            <div className="about__section-box">
              <h3>Nossos Valores</h3>
              <ul>
                <li>✓ Compromisso com o cliente</li>
                <li>✓ Qualidade em cada serviço</li>
                <li>✓ Honestidade e transparência</li>
                <li>✓ Respeito ao meio ambiente</li>
                <li>✓ Profissionalismo e pontualidade</li>
                <li>✓ Busca constante por aperfeiçoamento</li>
              </ul>
            </div>

            <div className="about__section-box about__why">
              <h3>Por que escolher a Masterclean?</h3>
              <p>Porque acreditamos que cada cliente merece um atendimento único. Trabalhamos com <strong>equipamentos profissionais, produtos de alta performance</strong> e técnicas especializadas para entregar resultados que realmente fazem a diferença.</p>
              <p>Nosso compromisso é oferecer um atendimento personalizado, orçamento rápido e sem compromisso, além da tranquilidade de contar com uma equipe dedicada à sua satisfação.</p>
              <p style={{ marginTop: '16px', fontStyle: 'italic', color: 'var(--white)' }}>
                Mais do que higienizar, nossa missão é <strong>cuidar do que é importante para você</strong>.
              </p>
            </div>
          </div>
        </div>

        <div className="about__closing">
          <p>
            <strong>Masterclean:</strong> uma história construída com trabalho, confiança, dedicação e o sonho de dois irmãos que acreditaram que poderiam transformar vidas através do cuidado.
          </p>
        </div>
      </div>
    </section>
  );
}
