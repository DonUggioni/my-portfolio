import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';

import ProjectCard from '../../components/project-card/ProjectCard';
import { Data } from '../../data/Data';

import './Portfolio.scss';
import Modal from '../../components/modal/Modal';

function Portfolio() {
  const [isActive, setIsActive] = useState(false);
  const [index, setIndex] = useState(null);

  function openModalHandler(currIndex) {
    setIsActive(true);
    setIndex(currIndex);
  }

  function closeModalHandler() {
    setIsActive(false);
  }

  console.log(index, isActive);

  return (
    <main className="portfolio_wrapper">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
          pauseOnMouseEnter: false,
        }}
        loop
        navigation
        pagination={{ clickable: true }}
      >
        {Data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <ProjectCard
                src={item.image}
                heading={item.title}
                clickHandler={() => openModalHandler(index)}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      {isActive && (
        <Modal
          imgSrc={Data[index].image}
          alt={`Project screenshot number `[index]}
          title={Data[index].title}
          description={Data[index].description}
          repoLink={Data[index].githubLink}
          liveLink={Data[index].liveLink}
          onCloseModal={closeModalHandler}
        />
      )}
    </main>
  );
}

export default Portfolio;
