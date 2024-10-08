<script>
  export default{
  }
</script>

<template>
  <div class="error-page">
    <div class="container">
      <div class="error-content">
        <h1 class="error-title">404</h1>
        <p class="error-caption">The page you are looking for is not found...</p>
      </div>
    </div>
  </div>
</template>
 
<style>
.error-content{
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  height: 100dvh;
}
.error-title{
  font-size: var(--header-size);
  color: var(--header-color);
  font-family: Unbounded;
  font-weight: 400;
  line-height: 80%;
}
.error-caption{
  font-size: var(--text-size);
  color: var(--non-active-color);
  font-weight: 400;
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