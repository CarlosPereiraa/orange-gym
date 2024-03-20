import React from 'react'
import Logo from '../../assets/citygym_logo.png'
import './Header.css'


const Header = () => {
  return (
    <div className="header">
        <img src={Logo} alt="" className='logo'/>
        <ul className='header-menu'>
            <li>Início</li>
            <li>Programas</li>
            <li>Sobre nós</li>
            <li>Serviços</li>
            <li>Testemunhos</li>
            <li>Ginásios</li>
        </ul>
    </div>
  )
}

export default Header
