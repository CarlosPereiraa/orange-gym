import React from 'react'
import './Programs.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'

const Programs = () => {
  return (
    <div className="Programs" id="programs">
      {/* header */}
      <div className="programs-header">
        <span className='stroke-text'>Alcança</span>
        <span>Os Teus</span>
        <span className='stroke-text'>Objetivos</span>
      </div>

      <div className="programs-categories">
        {programsData.map((program)=>(
          <div className="category">
            {program.image} 
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="comeca"><span>Começa agora</span> <img src={RightArrow}/></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Programs
