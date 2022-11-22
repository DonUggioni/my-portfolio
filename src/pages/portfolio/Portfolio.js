import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import { motion } from 'framer-motion';

import ProjectCard from '../../components/project-card/ProjectCard';
import { Data } from '../../data/Data';

import './Portfolio.scss';

function Portfolio() {
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
                imgSrc={item.image}
                alt={`Project screenshot number `[index]}
                title={item.title}
                description={item.description}
                repoLink={item.githubLink}
                liveLink={item.liveWebsite}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.main>
  );
}

export default Portfolio;
