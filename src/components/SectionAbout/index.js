import { useState, useEffect, useRef } from 'react';
import './style.css';

import imgIcon from '../../assets/rintaro-icon.jpg';

const SectionAbout = ({ darkMode }) => {
  const [positionElement, setPositionElement] = useState(null);
  const [showAbout, setShowAbout] = useState(false);
  const titleRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setPositionElement(titleRef?.current?.getBoundingClientRect().y)
    });
  }, [])

  useEffect(() => {
    const halfScreenSize = window.innerHeight * 0.5;
    positionElement && positionElement <= halfScreenSize && setShowAbout(true);
  }, [positionElement])

  return (
    <section className={'section-about ' + (darkMode ? 'dark-mode' : 'light-mode')} id='about'>
      <h2 ref={titleRef}>Sobre Mim</h2>
      <div className={'container ' + (showAbout ? 'animated' : '')}>
        <img
          src={imgIcon}
          alt="icon para perfil do Rintaro Suna"
          className='icon-perfil'
        />
        <div>
          <p>
            Olá, meu nome é Lucas Mateus Batista Polles e sou do interior no oeste do Paraná, tenho 19 anos e atualmente estou cursando Análise e Desenvolvimento de Sistemas a distância.
          </p>
          <p>
            O que me levou para a área de desenvolvimentos foi a curiosidade de entender como as coisas funcionavam e achar incrível o que a tecnologia nos proporciona, por causa disso acabei pegando muita admiração pelo cargo de um Full Stack e um desejo muito grande de me tornar um.
          </p>
        </div>
      </div>
    </section >
  )
}

export default SectionAbout;