import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Lucas from '../../assets/images/lucas.webp'
import Breno from '../../assets/images/breno.webp'
import Everton from '../../assets/images/everton.webp'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../Carousel/Carousel.css"


import { Autoplay, Pagination } from "swiper";

export default function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="right-course-side"
      >
        <SwiperSlide className="course-carousel-item">
          <div className='free-course-container'>
            <img className='consultant-image' src={Lucas} alt='consultant' />
            <h3 className='free-course-name'>Gerenciamento de Projetos</h3>
            <span className='free-course-consultant'>Consultor: Lucas Rana</span>
            <p className='free-course-description'>Aprenda sobre as principais metodologias de projetos que auxiliam no aumento de faturamento e redução de custos dentro de grandes empresas</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='free-course-container'>
            <img className='consultant-image' src={Breno} alt='consultant' />
            <h3 className='free-course-name'>Inside Sales</h3>
            <span className='free-course-consultant'>Consultor: Breno Ramos</span>
            <p className='free-course-description'>Aprenda as principais técnicas de Inside Sales, da composição de uma equipe comercial até as técnicas de vendas e SPIN Selling.</p>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className='free-course-container'>
            <img className='consultant-image' src={Everton} alt='consultant' />
            <h3 className='free-course-name'>Python Zero</h3>
            <span className='free-course-consultant'>Consultor: Everton Menezes</span>
            <p className='free-course-description'>Fundamentos do Python:  do zero ao primeiro projeto. Aprenda, de forma gratuita, a linguagem de programação mais desejada da atualidade.</p>
          </div>

        </SwiperSlide>

      </Swiper>
    </>
  );
}


