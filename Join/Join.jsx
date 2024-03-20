import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

const Join = () => {
  const form = useRef()
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className="Join" id="Join-us">
        <div className="left-j">
          <hr/>
          <div>
            <span className='stroke-text'>READY TO</span>
            <span>LEVEL UP</span>
          </div>
          <div>
            <span className='stroke-text'>YOUR HEALTH</span>
            <span>WITH US</span>
          </div>
        </div>
        <div className="right-j">
          <form ref={form} className="email-j" onSubmit={sendEmail}>
            <input type="email" name='user_email' placeholder='Insira o seu email'/>
            <button className='btn btn-j'>Join Now</button>
          </form>
        </div>
    </div>
  )
}

export default Join
