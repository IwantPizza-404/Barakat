<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Autoplay, Keyboard } from 'swiper/modules';

import buildingImage1 from '@/assets/images/building1.jpg';
import buildingImage2 from '@/assets/images/building2.jpg';
import buildingImage3 from '@/assets/images/building3.jpg';
import buildingImage4 from '@/assets/images/building4.jpg';

import roomImage1 from '@/assets/images/room-image1.jpg';
import roomImage2 from '@/assets/images/room-image2.jpg';
import roomImage3 from '@/assets/images/room-image3.jpg';
import roomImage4 from '@/assets/images/room-image4.jpg';
import roomImage5 from '@/assets/images/room-image5.jpg';

import beachImage1 from '@/assets/images/beach-view1.jpg';
import beachImage2 from '@/assets/images/beach-view2.jpg';
import beachImage3 from '@/assets/images/beach-view3.jpg';
import beachImage4 from '@/assets/images/beach-view4.jpg';
import beachImage5 from '@/assets/images/beach-view5.jpg';



import placeView from '@/assets/images/place-view.jpg';
import facilityImage1 from '@/assets/images/image234.jpg';
import facilityImage2 from '@/assets/images/foodcort.jpg';

export default {
  data() {
    return {
      nav: ['building', 'beachview', 'rooms', 'facilities'],
      slider: [
        [
          buildingImage1,
          buildingImage3,
          buildingImage2,
          buildingImage4,
          buildingImage3,
        ],
        [
          beachImage1,
          beachImage2,
          beachImage3,
          beachImage4,
          beachImage5,
        ],
        [
          roomImage2,
          roomImage3,
          roomImage4,
          roomImage5,
          roomImage1,
        ],
        [
          placeView,
          facilityImage1,
          facilityImage2,
          facilityImage1,
          facilityImage2,
        ],
      ],
      activeIndex: 0,
      lineStyle: {
        left: '0px',
        width: '0px',
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Keyboard],
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.updateLineStyle();
    });
    window.addEventListener('resize', this.updateLineStyle);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateLineStyle);
  },
  methods: {
    setActive(index) {
      this.activeIndex = index;
      this.$nextTick(() => {
        this.updateLineStyle();
      });
    },
    updateLineStyle() {
      const activeItem = this.$el.querySelector('.mgsn-option.active');
      if (activeItem) {
        this.lineStyle = {
          left: `${activeItem.offsetLeft}px`,
          width: `${activeItem.offsetWidth}px`,
        };
      }
    },
  },
};
</script>

<template>
  <section id="gallery" class="main-gallery">
    <div class="container">
      <div class="mg-wrapp">
        <div class="mg-header">
          <h1 class="mg_title header-1">{{ $t('captured_moments') }}</h1>
          <p class="mg_context">{{ $t('gallery_description') }}</p>
        </div>
        <div class="mg-slider-nav">
          <ul class="mgs-list">
            <li
              v-for="(item, index) in nav"
              :key="index"
              :class="{ 'mgsn-option': true, 'active': activeIndex === index }"
              @click="setActive(index)"
            >
              {{ $t(item) }}
            </li>
            <div class="mgsn-line" :style="lineStyle"></div>
          </ul>
        </div>
      </div>
      <transition name="fade" mode="out-in">
        <swiper
          :key="activeIndex"
          :slides-per-view="1.00001"
          :space-between="20"
          :centeredSlides="true"
          :loop="true"
          :grabCursor="true"
          :autoplay="{
            delay: 3500,
            disableOnInteraction: false,
          }"
          :keyboard="{
            enabled: true,
          }"
          :modules="modules"
          class="mg_slider"
        >
          <swiper-slide 
            v-for="(slide, index) in slider[activeIndex]" 
            :key="index"
          >
            <img class="mg-slider_img" :src="slide">
          </swiper-slide>
        </swiper>
      </transition>
    </div>
  </section>
</template>


<style>
.main-gallery{
  padding: 60px 0;
  overflow: hidden;
}
.mg-wrapp{
  display: flex;
  flex-direction: column;
  gap: 65px;
  padding-bottom: 50px;
}
.mg-header{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.mg_title{
  text-align: center;
}
.mg_context{
  font-size: var(--text-size);
  font-weight: 400;
  text-align: center;
}
.mg-slider-nav{
  display: flex;
  overflow-x: auto;
}
.mgs-list{
  position: relative;
  display: flex;
  flex: 1;
  justify-content: center;
}
.mgsn-option{
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 15px 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  border-bottom: 2px solid #cccccc;
}
.mgsn-line{
  position: absolute;
  bottom: 0;
  height: 2px;
  background-color: #000;
  z-index: 1;
  transition: left 0.3s, width 0.3s;
}
.swiper{
  overflow: visible !important;
}
.swiper-slide{
  aspect-ratio: 1080/700;
  height: 70vh;
  max-height: 700px;
  min-height: 500px;
}
.swiper-slide img{
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.fade-enter-active, .fade-leave-active{
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}

@media screen and (max-width: 1440px){
  .mg-wrapp{
    gap: 50px;
    padding-bottom: 40px;
  }
}
@media screen and (max-width: 1024px){
  .mgsn-option{
    font-size: 18px;
    padding: 13px 25px;
  }
}
@media screen and (max-width: 600px){
  .swiper-slide{
    height: 400px;
    min-height: 0;
  }
  .mg-wrapp{
    gap: 35px;
  }
  .mgsn-option{
    font-size: 17px;
    padding: 10px 20px;
  }
}
</style>
