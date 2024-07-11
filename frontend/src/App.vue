<script>
  import Header from '@/components/Header.vue'
  import Hero from '@/components/Hero.vue'
  import AboutPlace from '@/components/AboutPlace.vue'
  import Gallery from '@/components/Gallery.vue'
  import FoodCourt from '@/components/FoodCourt.vue'


  export default{
    components:{
      Header,
      Hero,
      AboutPlace,
      Gallery,
      FoodCourt,
    }
  }
</script>

<template>
  <Header/>
  <Hero/>
  <AboutPlace/>
  <Gallery/>
  <FoodCourt/>
</template>
 
<style>
body{
  background: var(--bg-color);
}
.lock{
  overflow: hidden;
}

@media screen and (max-width: 1600px) {
  .container{
    max-width: 1100px;
  }
}
@media screen and (max-width: 900px) {
  .container{
    padding: 0 20px;
  }
}
@media screen and (max-width: 768px) {
  .container{
    padding: 0 10px;
  }
}
</style>
