import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/testimonial1.webp'
import AVTR2 from '../../assets/testimonial2.webp'
import AVTR3 from '../../assets/testimonial3.webp'
import AVTR4 from '../../assets/testimonial4.webp'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  let data = [
    {
      avatar: AVTR1,
      name: "maxkrass",
      review: "Well, it was a wonderful experience. He just made all his requirements clear and I was able to deliver in time :) I hope to work with him in the future as well",
    },
    {
      avatar: AVTR2,
      name: "finotivefunding",
      review: "Fifth order! We've redesigned our logo and because of that we had to refresh it on all of our emails. Zain replied to our message quickly as usual and updated all emails in 20 minutes. Now our business is ready to go again! Thank you again Zain, we are very happy to work with you on any project! :)",
    },
    {
      avatar: AVTR3,
      name: "nataniko",
      review: "Great FE developer, always ready to help your product looks as you wanted!",
    },
    {
      avatar: AVTR4,
      name: "dannygraaff",
      review: "Zain is our go-to person when we quickly need some help. In this case he delivered within a few hours. Always great working with him :)",
    }
  ]
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
           return(
            <SwiperSlide key={index} className='testimonial'>
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
           )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials