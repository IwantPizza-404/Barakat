<template>
    <section class="insta-banner">
      <div class="ib-wrapp">
        <h1 class="ib-title">
            <span class="ib_cap">FOLLOW US AT @barakat.gr</span>
            <span class="ib_title">Instagram</span>
        </h1>
        <div class="ib-slider">
          <div class="ibs-feed">
            <div class="slide" v-for="(slide, index) in allSlides" :key="index">
              <img :src="slide" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import img1 from  '@/assets/images/img1.jpg'
  import img2 from  '@/assets/images/img2.jpg'
  import img3 from  '@/assets/images/img3.jpg'
  import img4 from  '@/assets/images/img4.jpg'

          
  export default {
    data() {
      return {
        slides: [
          img1,
          img2,
          img3,
          img1,
          img4,
        ],
      };
    },
    computed: {
      allSlides() {
        return [...this.slides, ...this.slides]; // Duplicate slides
      }
    }
  };
  </script>
  
  <style>
  .insta-banner {
    width: 100%;
    overflow: hidden;
    padding: 150px 0;
  }
  
  .ib-wrapp {
    position: relative;
    width: 100%;
    text-align: center;
    padding-top: 140px;
  }
  
  .ib-title{
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    display: flex;
    flex-direction: column;
    gap: 35px;
  }
  .ib_title {
    font-family: Unbounded;
    font-size: 135px;
    font-weight: 400;
    line-height: 100%;
    color: var(--header-color);
    text-transform: uppercase;
    text-align: center;
  }
  .ib_cap{
    font-size: 22px;
    font-weight: 500;
    line-height: 100%;
  }
  
  .ib-slider {
    position: relative;
    width: 100%;
    overflow: hidden; /* Hide overflow to make animation seamless */
  }
  
  :root{
    --ib-slider-gap: 20px;
    --ib-slide-size: 400px;
  }

  .ibs-feed {
    display: flex;
    animation: insta-slider 10s linear infinite;
    width: calc(var(--ib-slide-size) * 10 + var(--ib-slider-gap) * 9); /* Width of all slides including margins */
  }
  
  .slide {
    width: var(--ib-slide-size); /* Set the width of each slide to 400px */
    margin-right: var(--ib-slider-gap); /* Add margin between slides */
    box-sizing: border-box;
  }
  
  .slide:last-child {
    margin-right: 0; /* Remove margin for the last slide to avoid extra space */
  }
  
  .slide img {
    width: 100%;
    height: auto;
  }
  
  @keyframes insta-slider {
    0% {
      transform: translateX(0);
    }
    100% {
        transform: translateX(calc(-1 * (var(--ib-slide-size) + var(--ib-slider-gap)) * 5));
    }
  }
  @media screen and (max-width: 1600px) {
    :root{
        --ib-slide-size: 350px;
    }
    .ib_title{
        font-size: 115px;   
    }
    .ib-wrapp{
        padding-top: 130px;
    }
  }
  @media screen and (max-width: 1440px) {
    :root{
        --ib-slide-size: 300px;
    }
  }
  @media screen and (max-width: 1024px) {
    :root{
        --ib-slide-size: 250px;
    }
    .ib-title{
        gap: 30px;
    }
    .ib_title{
        font-size: 10vw;
    }
    .ib-wrapp{
        padding-top: 12.6vw;
    }
  }
  @media screen and (max-width: 900px) {
    .ib_title{
        font-size: 12vw;
    }
    .ib-wrapp{
        padding-top: 13.6vw;
    }
    .ib_cap{
        font-size: 20px;
    }
  }
  @media screen and (max-width: 768px) {
    :root{
        --ib-slider-gap: 15px;
        --ib-slide-size: 220px;
    }
    .ib-wrapp{
        padding-top: 16vw;
    }
  }
  @media screen and (max-width: 600px) {
    .insta-banner{
        padding: 110px 0;
    }
    .ib_cap{
        font-size: 18px;
    }
    .ib-wrapp{
        padding-top: 17vw;
    }
    .ib-title{
        gap: 20px;
    }
    .ib_title{
        font-size: 13vw;
    }
  }
  @media screen and (max-width: 425px) {
    :root{
        --ib-slider-gap: 10px;
        --ib-slide-size: 180px;
    }
    .ib-wrapp{
        padding-top: 18.7vw;
    }
  }
  </style>
  