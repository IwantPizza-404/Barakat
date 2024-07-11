<script>
  export default{
  }
</script>

<template>
    <section class="hero">
        <div class="container">
            <div class="hero-wrapp">
                <div class="hero-header">
                    <h1>Barakat</h1>
                    <h2>hotel complex</h2>
                </div>
                <div class="hero-pic-1">
                    <img src="/src/assets/images/banner-photo2.jpg">
                </div>
                <div class="scroll-tag">
                    <span class="scroll_text">Scroll down</span>
                </div>
                <div class="hero-pic-2">
                    <img src="/src/assets/images/banner-photo.jpg">
                </div>
                <div class="hero-title">here supposed to be a meaningful description</div>
            </div>
        </div>
    </section>
</template>
 
<style>
@keyframes scroll {
    0% {
        bottom: 0;
    }
    50% {
        bottom: 10px;
    }
    100% {
        bottom: 0;
    }
}

.hero{
    padding: 75px 0;
}
.hero-wrapp{
    position: relative;
    display: flex;
    gap: 20px;
    align-items: flex-end;
    max-height: 70vh;
    margin-bottom: 70px;
    min-height: 455px
}
.hero-pic-1 img, .hero-pic-2 img{
    max-height: 100%;
    width: 100%;
    object-fit: cover;
}
.hero-pic-1{
    display: flex;
    flex: 1;
    max-height: inherit;
}
.hero-pic-2{
    display: flex;
    flex: 2;
    max-height: inherit;
}

.scroll-tag{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    transform: rotate(180deg);
    padding-top: 50px;
    animation: scroll 1.5s infinite ease-in-out;
}

.scroll_text{
    font-size: 18px;
    font-weight: 400;
    text-transform: uppercase;
}

.scroll-tag::after{
    content: '';
    position: absolute;
    background: var(--black);
    height: 70px;
    width: 1px;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
}

.hero-title{
    font-size: 20px;
    font-weight: 500;
    text-transform: uppercase;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    transform: rotate(180deg);
    max-height: 350px;
}
.hero-header{
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 20px;
    top: 0;
    left: 0;
}
.hero-header h1{
    font-size: 110px;
    font-weight: 400;
    font-family: Unbounded;
    text-transform: uppercase;
    line-height: 75%;
}
.hero-header h2{
    font-size: 32px;
    font-weight: 400;
    color: #555555;
    font-family: Unbounded;
    line-height: 100%;
    padding-left: 90px;
}
@media screen and (max-width: 1600px) {
    .hero{
        padding: 65px 0;
    }
    .hero-header h1{
        font-size: 92px;
    }
    .hero-header h2{
        font-size: 28px;
    }
    .hero-header{
        gap: 15px;
    }
}

@media screen and (max-width: 1440px) {
    .hero{
        padding: 60px 0;
    }
    .hero-header h1{
        font-size: 92px;
    }
    .hero-header h2{
        font-size: 25px;
    }
    .hero-header{
        gap: 15px;
    }
    /* .ap-header{
        gap: 15px;
    } */
    .hero-title{
        font-size: 18px;
    }
    .scroll_text{
        font-size: 16px;
    }
    .scroll-tag{
        padding-top: 45px;
    }
    .scroll-tag::after{
        height: 55px;
        top: -25px;
    }
}
@media screen and (max-width: 1024px) {
    .hero{
        padding: 70px 0;
    }
    .hero-header{
        gap: 10px;
    }
    .hero-header h1{
        font-size: 78px;
    }
    .hero-header h2{
        font-size: 20px;
        padding-left: 60px;
    }
}
@media screen and (max-width: 900px) {
    .hero-pic-1{
        display: none;
    }
    .hero-wrapp{
        flex-direction: column;
        padding-top: 60px;
    }
    .scroll-tag{
        position: absolute;
        left: 0;
        bottom: 0;
    }
    .scroll_text{
        color: rgba(255,255,255,0.8);
    }
    .hero-header h2{
        padding-left: 0;
        color: #fff;
    }
    .hero-title{
        transform: none;
        text-orientation: initial;
        writing-mode: initial;
        text-align: end;
        padding-left: 25px;
    }
    .hero-pic-2{
        width: 100%;
        min-height: 0;
    }
    .hero-header{
        left: 50px;
    }
}
@media screen and (max-width: 600px) {
    .hero-header{
        left: 50%;
        transform: translateX(-50%);
    }
    .hero-wrapp{
        max-height: 78vh;
        height: 78vh;
    }
    .hero-title{
        font-size: 16px;
        max-width: 380px;
    }
    .scroll-tag{
        transform: translateY(-18px) rotate(180deg);
    }
    .hero{
        padding: 65px 0;
    }
}
@media screen and (max-width: 500px) {
    .hero{
        padding: 55px 0;
    }
    .hero-header h1{
        font-size: 15vw;
    }
    .hero-wrapp{
        padding-top: 11vw;
    }
}
</style>
