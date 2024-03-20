import React from 'react'
import './Maps_G.css'

const Maps = () => {
  return (
    <div className="maps">
         <div className="title-m" style={{gap:'1rem'}}>
            <span className='stroke-text'>Ginásios</span>
            <span>citygym</span>
            <span className='cityorange'>Guarda</span>
        </div>
        <div className="left-m">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3031.993760436833!2d-7.265687!3d40.541727!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3ce533208a7611%3A0x44e90a74cf598045!2sCityGym%20Guarda!5e0!3m2!1spt-PT!2sus!4v1709738947720!5m2!1spt-PT!2sus"
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
