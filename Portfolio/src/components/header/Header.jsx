import React from 'react'
import './header.css'
import CTA from './CTA';
import mee from '../../assets/mee.png'
import HeaderSocials from './HeaderSocials';


const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Zain Khan</h1>
        <h5 className="text-light">Data Engineer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={mee} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header