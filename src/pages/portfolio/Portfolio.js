import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import { motion } from 'framer-motion';

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
    <motion.main
      className="portfolio_wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
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
          liveLink={Data[index].liveWebsite}
          onCloseModal={closeModalHandler}
        />
      )}
    </motion.main>
  );
}

export default Portfolio;
