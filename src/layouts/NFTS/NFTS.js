import React from "react";
import styles from "./NFTS.module.css";
import collectionImg1 from "assets/images/collectionImg1.png";
import collectionImg2 from "assets/images/collectionImg2.png";
import collectionImg3 from "assets/images/collectionImg3.png";
import collectionImg4 from "assets/images/collectionImg4.png";
import collectionImg5 from "assets/images/collectionImg5.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation, EffectCoverflow, Autoplay } from "swiper";
import CollectionCard from "components/Cards/CollectionCard/CollectionCard";
SwiperCore.use([Navigation, EffectCoverflow]);

function NFTS() {
  return (
    <div>
      <div className="container-wrapper">
        <h1 className="fs-40px white weight-7 text-center mb-80px uppercase">
          <span className="pink">8420</span> smoking kongs nft
        </h1>
      </div>

      {/* SLIDER */}
      <Swiper
        slidesPerView={3}
        spaceBetween={50}
        effect={"coverflow"}
        centeredSlides={true}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
        }}
      >
        <SwiperSlide>
          <CollectionCard img={collectionImg1} />
        </SwiperSlide>
        <SwiperSlide>
          <CollectionCard img={collectionImg2} />
        </SwiperSlide>
        <SwiperSlide>
          <CollectionCard img={collectionImg3} />
        </SwiperSlide>
        <SwiperSlide>
          <CollectionCard img={collectionImg4} />
        </SwiperSlide>
        <SwiperSlide>
          <CollectionCard img={collectionImg5} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default NFTS;
