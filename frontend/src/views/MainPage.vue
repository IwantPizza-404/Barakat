<script>
  import Hero from '@/components/Hero.vue'
  import AboutPlace from '@/components/AboutPlace.vue'
  import Gallery from '@/components/Gallery.vue'
  import FoodCourt from '@/components/FoodCourt.vue'
  import InstaBanner from '@/components/InstaBanner.vue'
  import Form from '@/components/Form.vue'

  export default{
    components:{
      Hero,
      AboutPlace,
      Gallery,
      FoodCourt,
      InstaBanner,
      Form,
    }
  }
</script>

<template>
  <Hero/>
  <AboutPlace/>
  <Gallery/>
  <FoodCourt/>
  <InstaBanner/>
  <Form/>
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