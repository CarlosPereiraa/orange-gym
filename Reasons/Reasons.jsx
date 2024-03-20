import React from 'react'
import './Reasons.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import tick from '../../assets/tick.png'

function Reasons() {
  return (
    <div className="reasons" id='reasons'>
        <div className="left-r">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>
        <div className="right-r">
            <span>Sobre Nós</span>
            <div>
                <span className='stroke-text'>PORQUE JUNTAR-SE </span>
                <span>A NÓS</span>
            </div>
            <div className='details-r'>
                <div>
                    <img src={tick} alt=""></img>
                    <span>OVER 140+ EXPERT COACHS</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>RELIABLE PARTNERS</span>
                </div>
            </div> 
            <div className="parceiros">
            <span className='stroke-text'>A EQUIPA</span>
            <span className='cityorange'>CITYGYM</span>
            </div>
            <div>
            <span className='smalltext'>Os nossos profissionais não só têm anos de experiência na arte de elevar a tua condição 
            física a outro nível, mas eles próprios são apaixonados pelo que fazem e pela sensação de te ajudar a atingir todo o teu potencial.
            </span>
            <span className='smalltext'>Com o seu acompanhamento contínuo, temos a certeza que irás conseguir 
            derrubar qualquer barreira, física ou mental, que se oponha ao teu treino e à tua viagem para o corpo ideal.
            </span>
            <span className='stroke-text'>DEDICAÇÃO</span>
            <span>EXPERIÊNCIA</span>
            <span className='stroke-text'>INICIAÇÃO</span>
            </div>
            <div>
            <span className='stroke-text'>ACOMPANHAMENTO</span>
            <span>PERSISTÊNCIA</span>
            </div>
            <div align='center'>
            <span className='stroke-text'>JUNTOS</span>
            <span>PELO</span>
            <span className='stroke-text'>SUCESSO</span>
            </div>
        </div>
    </div>
  )
}

export default Reasons
