import React from 'react'
import './Maps_V.css'

const Maps = () => {
  return (
    <div className="maps">
         <div className="title-m" style={{gap:'1rem'}}>
            <span className='stroke-text'>Ginásios</span>
            <span>citygym</span>
            <span className='cityorange'>Viseu</span>
        </div>
        <div className="left-m">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3026.8657340813734!2d-7.907824000000001!3d40.65489!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd23365104892b53%3A0x191ccd8f28a7f766!2sCityGym%20Viseu!5e0!3m2!1spt-PT!2sus!4v1708962217118!5m2!1spt-PT!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy">
            </iframe>
          </div>
        </div>

        <div className="right-m">
        <span className="smalltitle">Horário</span>
          <div className="smalltext">
            <div>
              <span> <b>SEGUNDA À SEXTA</b>- 7H ÀS 22H </span>
        <hr/>
              <span> <b>SÁBADO</b> - 9H ÀS 13H E 16H ÀS 19H</span>
            </div>
          </div>
        </div>
    </div>
    
  )
}

export default Maps
