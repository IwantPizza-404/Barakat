<script>
import { RouterLink, RouterView } from "vue-router";
import mainHeader from "./components/Header.vue";
import mainFooter from "./components/Footer.vue";

export default {
  components: {
    mainHeader,
    mainFooter,
  },
};
</script>

<template>
  <div class="page-wrapp">
    <mainHeader v-if="$route.meta.showHeader"/>
    <main class="page-sections">
      <RouterView/>
    </main>
    <mainFooter v-if="$route.meta.showFooter"/>
  </div>
</template>
 
<style>

</style>
