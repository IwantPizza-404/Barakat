<script>
  export default{
  }
</script>

<template>
  <section id="about" class="about-place">
    <div class="container">
      <div class="ap-header">
        <h1 class="ap_title header-1">{{ $t('about_the_place') }}</h1>
        <p class="ap_context">{{ $t('hotel') }} <b>{{ $t('Barakat') }}</b> {{ $t('hotel_description1') }}</p>
      </div>
    </div>
    <div class="ap-viewpic"></div>
  </section>
</template>
 
<style>
.about-place{
  padding: 60px 0;
}
.ap-header{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  padding-bottom: 30px;
}
.ap_title{
  text-align: end;
}
.ap_context{
  font-size: var(--text-size);
  font-weight: 400;
  text-align: end;
}
.ap_context b{
  text-decoration: underline;
  text-transform: uppercase;
}
.ap-viewpic{
  display: block;
  height: 75vh;
  max-height: 700px;
  min-height: 485px;
  width: 100%;
  min-width: 0;
  background: url('/src/assets/images/place-view.jpg') no-repeat;
  background-size: cover;
  background-position: center;
}


@media screen and (max-width: 1440px) {
  .ap-header{
    gap: 15px;
    padding-bottom: 25px;
  }
}
@media screen and (max-width: 600px) {
  .ap-viewpic{
    max-height: 400px;
  }
}
</style>
