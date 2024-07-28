<script>
  import Hero from '@/components/Hero.vue'
  import AboutPlace from '@/components/AboutPlace.vue'
  import Gallery from '@/components/Gallery.vue'
  import FoodCourt from '@/components/FoodCourt.vue'
  import InstaBanner from '@/components/InstaBanner.vue'
  import Form from '@/components/Form.vue'
  import Catalog from '@/components/Catalog.vue'

  export default{
    components:{
      Hero,
      AboutPlace,
      Gallery,
      FoodCourt,
      InstaBanner,
      Form,
      Catalog,
    },
  }
</script>

<template>
  <Hero/>
  <AboutPlace/>
  <Gallery/>
  <FoodCourt/>
  <Catalog/>
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