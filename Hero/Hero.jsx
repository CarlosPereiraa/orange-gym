import React from "react"
import  "./Hero.css"
import Header from '../Header/Header'
import heart from '../../assets/heart.png'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Calories from '../../assets/calories.png'
import {motion} from 'framer-motion'

const hero = () => {  

  const transition = {type: 'spring', duration : 3}

  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
      <Header/>
{ /* ad */ }
      <div className="the-best-ad">
        <motion.div
          initial={{left:'310px'}}
          whileInView={{left: '9px'}}
          transition={{...transition, type: 'tween'}}
        ></motion.div>
          <span>O melhor acompanhamento personalizado</span>
      </div>
{ /* Heading */ }    
  <div className="hero-text">
    <div>
    <span className="stroke-text">Constrói </span>
      <span>O teu</span>
    </div>
    <div>
      <span>Corpo Perfeito</span>
    </div>
    <div>
      <span>Marca um treino experimental ou inscreve-te hoje mesmo! Vem melhorar a tua qualidade de vida connosco!</span>
    </div>
  </div>
      {/* Figures */} 
      <div className="figures">
        <div>
          <span>+50 </span>
          <span>Colaboradores</span>
        </div>
        <div>
          <span>+5000 </span>
          <span>Clientes Citygym</span>
        </div>
        <div>
          <span>+200 </span>
          <span>Planos de treino</span>
          </div>
        <div>
          <span>+5 </span>
          <span>Ginásios Citygym</span>
        </div>
      </div>
      {/*HEADBUTTONS*/}
      <div className="hero-buttons">
        <buttons className="btn">Inscreve-te</buttons>
        <buttons className="btn">Sabe Mais</buttons>
      </div>
    </div>
      <div className="right-h">
        <button className="btn">Junta-te a nós</button>

        <motion.div 
        
          initial={{right:'-4rem'}}
          whileInView={{right: '4rem'}}
          transition={{duration: 3}}
          
        
        className="heart-rate">
          <img src={heart} alt='' />
          <span>Heart Rate</span>
          <span>146 bpm</span>
        </motion.div>

        {/* hero images */}
        <img src={hero_image} alt='' className="hero-image" />
        <img src={hero_image_back} alt='' className="hero-image-back" />
        {/*calories*/}
        <div 
        className="calories">
          <img src={Calories} alt='' />
            <div>
              <span>Calorias Queimadas </span>
              <span>220 kcal</span>
            </div>
        </div>
      </div>
    </div>
    
  )
}


export default hero
