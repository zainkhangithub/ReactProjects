import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience-frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <div className="experience__details">
              <BsPatchCheckFill className='experience__details_icon' />
              <div>
                <h4>HTML5</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </div>
            <div className="experience__details">
              <BsPatchCheckFill className='experience__details_icon' />
              <div>
                <h4>CSS3</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </div>
            <div className="experience__details">
              <BsPatchCheckFill className='experience__details_icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </div>
            <div className="experience__details">
              <BsPatchCheckFill className='experience__details_icon' />
              <div>
                <h4>Photoshop</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </div>
            <div className="experience__details">
              <BsPatchCheckFill className='experience__details_icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </div>
            <div className="experience__details">
              <BsPatchCheckFill className='experience__details_icon' />
              <div>
                <h4>PSD To HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </div>
          </div>
        </div>
        <div className="experience-dataengineering">
        <h3>Data Engineering</h3>
        <div className="experience__content">
            <div className="experience__details">
              <BsPatchCheckFill className='experience__details_icon' />
              <div>
                <h4>PostgreSQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </div>
            <div className="experience__details">
              <BsPatchCheckFill className='experience__details_icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </div>
            <div className="experience__details">
              <BsPatchCheckFill className='experience__details_icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </div>
            <div className="experience__details">
              <BsPatchCheckFill className='experience__details_icon' />
              <div>
                <h4>Web Scraping</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </div>
            <div className="experience__details">
              <BsPatchCheckFill className='experience__details_icon' />
              <div>
                <h4>Pipelining</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </div>
            <div className="experience__details">
              <BsPatchCheckFill className='experience__details_icon' />
              <div>
                <h4>Excel Spreadsheet</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience