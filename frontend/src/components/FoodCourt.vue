<script>
  export default{
  }
</script>

<template>
  <section class="food-court">
    <div class="container">
      <div class="fc-header">
        <h1 class="fc_title header-1">Food with love for you</h1>
        <p class="fc_context">Our restaurant combines the best recipes of European cuisine and local culinary traditions.</p>
      </div>
      <div class="fc-gallery">
        <div class="fcg-main-pic">
          <img src="/src/assets/images/foodcort.jpg">
        </div>
        <div class="fcg-content">
          <div class="fcg_content">
            <div class="fcg-pics">
              <div class="fcg_pic">
                <img src="/src/assets/images/foodcort1.jpg">
              </div>
              <div class="fcg_pic">
                <img src="/src/assets/images/foodcort2.jpg">
              </div>
            </div>
            <p class="fcg-context">A special view of the space framed by the water of the lake opens up through the glass wall.</p>
          </div>
          <div class="fcg-btn">
            <a href="#" class="fcg-btn_wrapp">
              <span>View more</span>
              <svg width="70" height="55" viewBox="0 0 70 55.8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="42.5" cy="27.5" r="27" stroke="black"/>
                <path d="M40.5303 28.5303C40.8232 28.2374 40.8232 27.7626 40.5303 27.4697L35.7574 22.6967C35.4645 22.4038 34.9896 22.4038 34.6967 22.6967C34.4038 22.9896 34.4038 23.4645 34.6967 23.7574L38.9393 28L34.6967 32.2426C34.4038 32.5355 34.4038 33.0104 34.6967 33.3033C34.9896 33.5962 35.4645 33.5962 35.7574 33.3033L40.5303 28.5303ZM6.55671e-08 28.75L40 28.75L40 27.25L-6.55671e-08 27.25L6.55671e-08 28.75Z" fill="black"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
 
<style>
.food-court{
  padding: 60px 0;
}
.fc-header{
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  gap: 20px;
  padding-bottom: 30px;
}
.fc_title{
  flex: 1;
  text-align: end;
}
.fc_context{
  flex: 1;
  font-size: var(--text-size);
  font-weight: 400;
  text-align: start;
}

.fc-gallery{
  display: flex;
  gap: 20px;
  height: 75vh;
  max-height: 800px;
  min-height: 580px;
}
.fcg-main-pic, .fcg-content{
  flex: 1;
}
.fcg-main-pic img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.fcg-main-pic{
  display: flex;
  height: 100%;
}
.fcg-content{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
}
.fcg_content{
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 60%;
  max-height: 450px;
}
.fcg-pics{
  display: flex;
  gap: 20px;
  max-height: 100%;
  height: 100%;
  min-height: 0;
}
.fcg_pic{
  display: flex;
  flex: 1;
}
.fcg_pic img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.fcg-btn{
  display: flex;
  font-size: 20px;
  text-transform: uppercase;
}
.fcg-btn_wrapp{
  display: flex;
  align-items: center;
  gap: 5px;
}

@media screen and (max-width: 1440px) {
  .fc-header{
    padding-bottom: 25px;
  }
  .fcg-btn{
    font-size: 18px;
  }
  .fcg-btn svg{
    width: 60px;
    height: 50px;
  }
}
@media screen and (max-width: 900px) {
  .fc-gallery{
    flex-direction: column;
    height: fit-content;
    max-height: none;
    min-height: none;
  }
  .fcg-main-pic{
    flex: none;
    min-height: 0;
    height: 450px;
  }
  .fcg-content{
    flex: none;
    height: 450px;
  }
  .fcg_content{
    height: 100%;
    min-height: 0;
    max-height: none;
  }
  .fcg-pics{
    gap: 15px;
  }
}
@media screen and (max-width: 768px) {
  .fc-header{
    flex-direction: column;
  }
  .fc_context{
    align-self: flex-start;
    max-width: 400px;
  }
  .fc_title{
    max-width: 400px;
  }
}
@media screen and (max-width: 600px) {
  .fcg-main-pic, .fcg-content{
    height: 350px;
  }
  .fcg-btn svg{
    width: 45px;
    height: 36px;
  }
}
</style>
