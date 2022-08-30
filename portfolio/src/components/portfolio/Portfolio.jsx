import React from 'react'
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

let data = [
  {
    id: 1,
    img: IMG1,
    title: 'Web Scraping for a Real Estate Client',
    linkedin: 'https://www.linkedin.com/in/zainkhanln/',
    behance: 'https://www.behance.net/zainkhanbe'
  },
  {
    id: 2,
    img: IMG2,
    title: 'Bizgrow Consultants Website',
    linkedin: 'https://www.linkedin.com/in/zainkhanln/',
    behance: 'https://www.behance.net/zainkhanbe'
  },
  {
    id: 3,
    img: IMG3,
    title: 'Web Scraping for a Real Estate Client',
    linkedin: 'https://www.linkedin.com/in/zainkhanln/',
    behance: 'https://www.behance.net/zainkhanbe'
  },
  {
    id: 4,
    img: IMG4,
    title: 'Web Scraping for a Real Estate Client',
    linkedin: 'https://www.linkedin.com/in/zainkhanln/',
    behance: 'https://www.behance.net/zainkhanbe'
  },
  {
    id: 5,
    img: IMG5,
    title: 'Web Scraping for a Real Estate Client',
    linkedin: 'https://www.linkedin.com/in/zainkhanln/',
    behance: 'https://www.behance.net/zainkhanbe'
  },
  {
    id: 6,
    img: IMG6,
    title: 'Web Scraping for a Real Estate Client',
    linkedin: 'https://www.linkedin.com/in/zainkhanln/',
    behance: 'https://www.behance.net/zainkhanbe'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        {
          data.map(({id, img, title, linkedin, behance}) => {
            return(
              <article key={id} className="portfolio__item">
              <div className="portfolio__item_img">
                <img src={img} alt="" />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item_cta'>
                <a href={linkedin} className='btn' target='_blank'>Linkedin</a>
                <a href={behance} target='_blank' className='btn btn-primary'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio