import React from 'react';
import photo1 from "../../images/01.jpg";
import photo2 from "../../images/02.jpg";
import photo3 from "../../images/03.png";
import photo4 from "../../images/04.jpg";
import photo5 from "../../images/05.png";
import "./blog.css";
// import "swiper/swiper.scss";
// import "swiper/components/pagination/pagination.scss";
// import "swiper/components/effect-coverflow/effect-coverflow.scss";
    
     import 'swiper/swiper-bundle.css'; // Correct import for bundled CSS
     // OR import specific modules if you are not using the bundle
     import 'swiper/css';
     import 'swiper/css/navigation';
     import 'swiper/css/pagination';

     // ... rest of your component code ...


// import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules. In this example, 
// we will use Pagination and Coverflow
import SwiperCore from "swiper";
import { EffectCoverflow } from "swiper/modules";
import { Pagination } from "swiper/modules";
import image1 from '../../images/001.jpeg';
import image2 from '../../images/002.jpeg';
import image3 from '../../images/003.jpeg';
import image4 from '../../images/004.jpeg';
import image5 from '../../images/005.jpeg';
import image6 from '../../images/006.jpeg';
 

// configure Swiper to use modules
SwiperCore.use([Pagination, EffectCoverflow]);

const Blog = () => {
    return (
    
     <div className="photo-container">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          spaceBetween={0}
          slidesPerView={4}
          loop={true}
          pagination={{ clickable: true, dynamicBullets: true }}
          coverflowEffect={{
            rotate: 20,
            stretch: 25,
            depth: 250,
            modifier: .5,
            slideShadows: false,
          }}
          breakpoints={{
            700: {
              spaceBetween: 0,
              slidesPerView: 4,
            },
            500: {
              spaceBetween: 90,
              slidesPerView: 2,
            },
            411: {
              spaceBetween: 80,
              slidesPerView: 2,
            },
            300: {
              spaceBetween:50,
              slidesPerView: 1,
            },
          }}
        >
          <SwiperSlide>
            <img src={ image1} alt="pic1" className="photos" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ image2} alt="pic2" className="photos" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image3} alt="pic3" className="photos" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image4} alt="pic4" className="photos" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image5} alt="pic5" className="photos" />
          </SwiperSlide>
        </Swiper>
      
        </div>
    );
};

export default Blog;