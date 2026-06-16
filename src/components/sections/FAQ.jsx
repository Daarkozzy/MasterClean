import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CaretDown, Question } from '@phosphor-icons/react';
import './FAQ.css';

const faqs = [
  {
    id: 'secagem',
    question: 'Em quanto tempo seca?',
    answer: 'De 4 a 12 horas, dependendo do tecido, espessura e clima. Utilizamos técnicas de secagem acelerada para minimizar o tempo de indisponibilidade.'
  },
  {
    id: 'domicilio',
    question: 'Vocês atendem em domicílio?',
    answer: 'Sim! Atendemos em Itaguaí, Seropédica, Mangaratiba e região. Agendamos no horário mais conveniente para você, com flexibilidade de dias e horários.'
  },
  {
    id: 'odor',
    question: 'A higienização elimina mau cheiro?',
    answer: 'Sim, nossa limpeza profunda remove odores causados por sujeira, suor, animais de estimação, umidade e mofo. O resultado é um ambiente totalmente renovado.'
  },
  {
    id: 'produtos',
    question: 'Que produtos vocês usam?',
    answer: 'Utilizamos apenas produtos biodegradáveis, hipoalergênicos e seguros para toda a família. Todos os nossos produtos estão certificados e são adequados para limpeza profunda.'
  },
  {
    id: 'animais',
    question: 'Posso deixar meus animais de estimação durante a limpeza?',
    answer: 'Recomendamos que animais de estimação fiquem em outro ambiente ou com alguém. Isto garante a segurança deles e permite que nossa equipe trabalhe com eficiência. Oferecemos o serviço especial de "Limpeza Pet" para remover pelos e odores.'
  },
  {
    id: 'garantia',
    question: 'Vocês oferecem garantia?',
    answer: '100% de garantia! Se não ficar satisfeito com o resultado, retornamos gratuitamente. Sua satisfação é nossa prioridade.'
  },
  {
    id: 'valor',
    question: 'Qual é o valor?',
    answer: 'O valor varia conforme o tipo de serviço e tamanho da área. Use nosso simulador de orçamento ou entre em contato pelo WhatsApp para uma cotação personalizada e sem compromisso.'
  },
  {
    id: 'frequencia',
    question: 'Com que frequência devo fazer a higienização?',
    answer: 'Recomendamos a cada 6-12 meses para uso residencial normal. Para locais com muito uso (casas com animais, crianças) pode ser necessário mais frequentemente. Nossa equipe pode indicar o melhor cronograma.'
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq section-padding">
      <div className="container">
        <header className="section-header-center">
          <span className="section-eyebrow"><Question size={16} weight="fill" style={{ display: 'inline-block', marginRight: '6px', verticalAlign: 'middle' }} /> Dúvidas</span>
          <h2 className="section-title">Perguntas <span className="blue">Frequentes</span></h2>
          <div className="section-title-underline" />
        </header>

        <div className="faq__list">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              className={`faq__item ${activeIndex === index ? 'active' : ''}`}
              initial={false}
              animate={{ backgroundColor: activeIndex === index ? 'rgba(249, 184, 0, 0.08)' : 'transparent' }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="faq__question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <CaretDown
                    size={20}
                    weight="bold"
                    className="faq__icon"
                  />
                </motion.div>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div 
                    className="faq__answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
