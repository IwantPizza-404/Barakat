<script>
  export default{
  }
</script>

<template>
  <header>
    <div class="container">
        <div class="content">
            <div class="left-pannel">
                <div class="nav-btn">Menu</div>
                <ul class="lang-menu">
                    <li class="lang-option active">EN</li>
                    <li class="lang-option">GE</li>
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
  </header>
</template>

<style scoped>
.content{
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0;
}
.left-pannel{
    display: flex;
    gap: 60px;
}
.nav-btn{
    display: flex;
    font-size: 20px;
    font-weight: 500;
    text-transform: uppercase;
    cursor: pointer;
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
@media screen and (max-width: 900px) {
    .lang-menu{
        display: none;
    }
}
@media screen and (max-width: 600px) {
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
}
@media screen and (max-width: 425px) {
    
}
</style>
