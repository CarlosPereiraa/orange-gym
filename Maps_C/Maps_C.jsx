import React from 'react'
import './Maps_C.css'

const Maps = () => {
  return (
    <div className="maps">       
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
        <div className="left-m">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6088.320438753601!2d-7.499726000000001!3d40.272191!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3d23a0fd69fa8d%3A0x73d808503ec9ade8!2sCityGym%20Covilh%C3%A3!5e0!3m2!1spt-PT!2sus!4v1709738879612!5m2!1spt-PT!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy">
            </iframe>
          </div>
        </div>
        <div className="title-m" style={{gap:'1rem'}}>
          <span className='stroke-text'>Ginásios</span>
            <span>citygym</span>
            <span className='cityorange'>Covilhã</span>
        </div>
        
    </div>
    
  )
}

export default Maps
