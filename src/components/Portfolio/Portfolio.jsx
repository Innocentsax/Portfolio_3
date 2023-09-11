import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
          <a href="https://alx.pisowlab.tech"
            target="_blank"
            rel="InnocentUdo"
          >Demo</a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
          <a href="https://github.com/Innocentsax/Spring_Boot3_Hibernate-JPA/tree/main/simple-form"
            target="_blank"
            rel="InnocentUdo"
          >Demo</a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
          <a href="https://innocentudo.netlify.app"
            target="_blank"
            rel="InnocentUdo"
          >Demo</a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
          <a href="https://github.com/Innocentsax"
            target="_blank"
            rel="InnocentUdo"
          >Demo</a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
