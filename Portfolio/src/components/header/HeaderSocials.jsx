import React from 'react'
import {BsLinkedin, BsBehance} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {ImBehance2} from 'react-icons/im';
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/zainkhanln/" target="_blank">
            <BsLinkedin />
        </a>
        <a href="https://github.com/zainkhangithub" target="_blank">
         <FaGithub />
        </a>
        <a href="https://www.behance.net/zainkhanbe/" target="_blank">
            <ImBehance2 />
        </a>
    </div>
  )
}

export default HeaderSocials