<script>
  export default {
    data() {
      return {
        nav_links: [
          { title: 'home', link: '#' },
          { title: 'rooms', link: '#catalog' },
          { title: 'foodcourt', link: '#food-court' },
          { title: 'gallery', link: '#gallery' },
          { title: 'contacts', link: '#contacts' },
        ],
        NavShow: false,
      };
    },
    methods: {
      ToggleNav() {
        this.NavShow = !this.NavShow;
        window.scrollTo(0, 0);
        if (this.NavShow == true) {
          document.body.classList.add('lock');
        } else {
          document.body.classList.remove('lock');
        }
      },
      changeLanguage(lang) {
        this.$i18n.locale = lang;
        localStorage.setItem('selectedLanguage', lang);
      },
    },
  };
</script>

<template>
  <header>
    <div class="container">
      <div class="content">
        <div class="left-pannel">
          <transition name="fade" mode="out-in">
            <div @click="ToggleNav()" class="nav-btn" v-if="NavShow">
              Close
            </div>
            <div @click="ToggleNav()" class="nav-btn" v-else>
              Menu
            </div>
          </transition>
          <ul class="lang-menu">
            <li 
              @click="changeLanguage('en')" 
              :class="{ 'lang-option': true, 'active': $i18n.locale === 'en' }"
            >EN</li>
            <li 
              @click="changeLanguage('ge')" 
              :class="{ 'lang-option': true, 'active': $i18n.locale === 'ge' }"
            >GE</li>
          </ul>
        </div>
        <div class="logo">
          <a href="#">
            <img src="/src/assets/images/logo.svg">
          </a>
        </div>
        <div class="book-btn">
          <a href="#">
            <span>Book</span>
            <svg width="40" height="31" viewBox="0 0 40 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="25" cy="15.5" r="14.5" stroke="black"/>
              <path d="M25.3536 15.8536C25.5488 15.6583 25.5488 15.3417 25.3536 15.1464L22.1716 11.9645C21.9763 11.7692 21.6597 11.7692 21.4645 11.9645C21.2692 12.1597 21.2692 12.4763 21.4645 12.6716L24.2929 15.5L21.4645 18.3284C21.2692 18.5237 21.2692 18.8403 21.4645 19.0355C21.6597 19.2308 21.9763 19.2308 22.1716 19.0355L25.3536 15.8536ZM0 16H25V15H0V16Z" fill="black"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div :class="{'header-drop': true, 'hd-open': NavShow}">
      <div class="hd-wrapp">
        <ul class="header-nav">
          <li 
            v-for="(link, index) in nav_links" 
            class="hn_item"
            :key="index"
          >
            <span class="hn_item-tag">0{{index + 1}}</span>
            <a 
              v-on="NavShow ? {click: () => ToggleNav()} : {}"
              class="hn_link" 
              :href="link.link"
            >
              {{ $t(link.title) }}
            </a>
          </li>
        </ul>
        <div class="hd_lang-menu">
          <div class="hd_lm-title">Language:</div>
          <ul class="hd_lm-list">
            <li :class="{ 'hd_lm-option': true, 'active': $i18n.locale === 'en' }">
              <a href="#" @click.prevent="changeLanguage('en')">EN</a>
            </li>
            <li :class="{ 'hd_lm-option': true, 'active': $i18n.locale === 'ge' }">
              <a href="#" @click.prevent="changeLanguage('ge')">GE</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
header{
    position: relative;
    z-index: 1;
}
.content{
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0;
    z-index: 1;
}
.left-pannel{
    display: flex;
    gap: 50px;
}
.nav-btn{
    display: flex;
    font-size: 20px;
    font-weight: 500;
    text-transform: uppercase;
    cursor: pointer;
    min-width: 6ch;
}
.lang-menu{
    display: flex;
    gap: 10px;
}
.lang-option{
    color: var(--non-active-color);
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
}
.lang-option.active{
    color: var(--text-color);
}
.logo{
    display: flex;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: auto;
    width: 160px;
}
.logo a{
    display: flex;
}
.book-btn a{
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 500;
    text-transform: uppercase;
    gap: 5px;
}
.book-btn{
    display: flex;
}

.header-drop{
    position: fixed;
    visibility: hidden;
    opacity: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    transition: all .1s cubic-bezier(.39,.575,.565,1);
}
.header-drop.hd-open{
    visibility: visible;
    opacity: 1;
}

.hd-wrapp{
    width: 100%;
    height: 100%;
    padding: 166px 50px 50px 50px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
}


.header-drop::after{
    content:'';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0%;
    background: #fff;
    transition: all .5s ease-out;
}
.header-drop.hd-open::after{
    height: 100%;
}

.header-nav{
    display: block;
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
    -webkit-column-gap: 0;
    -moz-column-gap: 0;
    column-gap: 0;
    -webkit-column-fill: balance;
    -moz-column-fill: balance;
    column-fill: balance;
    max-width: 1100px;
    min-height: 276px;
    height: 100%;
    width: 100%;
    z-index: 1;
    opacity: 0;
    transition: opacity .5s cubic-bezier(.39,.575,.565,1);
}
.header-drop.hd-open .header-nav{
    opacity: 1;
    transition-delay: .4s;
}
.hn_item:nth-child(1),
.hn_item:nth-child(4){
    margin: 0 0 30px 0;
}
.hn_item{
    position: relative;
    display: inline-block;
    width: 100%;
    height: fit-content;
    margin: 30px 0;
}
.hn_link{
    font-weight: 400;
    font-size: 42px;
    font-family: Unbounded;
    line-height: 100%;
    text-transform: uppercase;
    padding-left: 50px;
}
.hn_item-tag{
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    font-size: 20px;
    color: var(--non-active-color);
}

.hd_lang-menu{
    display: none;
    align-items: center;
    gap: 20px;
    z-index: 1;
    align-self: flex-start;
    transition: opacity .4s cubic-bezier(.39,.575,.565,1);
    opacity: 0;
}
.header-drop.hd-open .hd_lang-menu{
    opacity: 1;
    transition-delay: .5s;
}
.hd_lm-title{
    font-size: 28px;
    font-family: Unbounded;
    text-transform: uppercase;
}
.hd_lm-list{
    display: flex;
    gap: 10px;
}
.hd_lm-option a{
    font-size: 24px;
    font-weight: 500;
    color: var(--non-active-color);

}
.hd_lm-option.active a{
    color: var(--text-color);
}

.fade-enter-active, .fade-leave-active{
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}

@media screen and (max-width: 1600px) {
    .header-nav{
        max-width: 1000px;
    }
    .hd-wrapp{
        padding: 156px 50px 50px 50px;
    }
}

@media screen and (max-width: 1440px) {
    .nav-btn, .lang-option, .book-btn a{
        font-size: 19px;
    }
    .book-btn svg{
        width: 38px;
        height: auto;
    }
    .content{
        padding: 25px 0;
    }
}
@media screen and (max-width: 1024px) {
    .header-nav{
        -webkit-column-count: 1;
        -moz-column-count: 1;
        column-count: 1;
        min-height: 480px;
    }
    .hn_item:nth-child(4){
        margin: 30px 0;
    }
}
@media screen and (max-width: 900px) {
    .lang-menu{
        display: none;
    }
    .hd_lang-menu{
        display: flex;
    }
    .hn_link{
        font-size: 36px;
        padding-left: 40px;
    }
    .hn_item:nth-child(1){
        margin: 0 0 25px 0;
    }
    .hn_item,.hn_item:nth-child(4){
        margin: 25px 0;
    }
    .hn_item-tag{
        font-size: 18px;
    }
    .hd-wrapp{
        justify-content: space-between;
        padding: 130px 20px 20px 20px;
    }
    .header-nav{
        height: min-content;
    }
}
@media screen and (max-width: 768px) {
    .hd-wrapp{
        justify-content: space-between;
        padding: 120px 10px 10px 10px;
    }
}

@media screen and (max-width: 550px) {
    .logo{
        width: 130px;
    }
    .nav-btn, .lang-option, .book-btn a{
        font-size: 17px;
    }
    .book-btn a{
        gap: 2px;
    }
    .book-btn svg{
        width: 28px;
        height: auto;
    }
    .content{
        padding: 20px 0;
    }
    .header-nav{
        min-height: 375px;
    }
    .hn_link{
        font-size: 28px;
        padding-left: 30px;
    }
    .hd_lm-title, .hd_lm-option a{
        font-size: 22px;
    }
    .hd_lang-menu{
        gap: 15px;
    }
}
@media screen and (max-width: 425px) {
    .book-btn svg{
        width: 24px;
        height: auto;
    }
    .logo{
        width: 120px;
    }
    .hd_lm-title, .hd_lm-option a{
        font-size: 20px;
    }
    .hn_item-tag{
        font-size: 16px;
    }
    .hn_link{
        font-size: 25px;
    }
    .hn_item{
        margin: 20px 0;
    }
}
</style>
