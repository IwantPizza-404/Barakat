<script>
  export default{
  }
</script>

<template>
  <footer>
    <div class="container">
      <div class="footer-wrapp">
        <h1 class="footer-logo">Barakat</h1>
        <div class="footer-pannel">
            <div class="call-center">
                <div class="fp-title">{{ $t('call_center') }}:</div>
                <a class="fp-info-text" href="tel:+995557245422">+995 557 245 422</a>
            </div>
            <div class="footer-nav">
                <ul class="fn_list">
                    <li class="fn-link">
                        <a href="#">{{ $t('home') }}</a>
                    </li>
                    <li class="fn-link">
                        <a href="#">{{ $t('foodcourt') }}</a>
                    </li>
                    <li class="fn-link">
                        <a href="#">{{ $t('rooms') }}</a>
                    </li>
                    <li class="fn-link">
                        <a href="#">{{ $t('contacts') }}</a>
                    </li>
                </ul>
                <div class="socials-list">
                    <a href="#">Instagram</a>
                    <a href="#">Telegram</a>
                </div>
            </div>
            <div class="email-block">
                <div class="fp-title">{{ $t('for_all_questions')}}:</div>
                <a class="fp-info-text" href="mailto:barakat@info.com">barakat@info.com</a>
            </div>
        </div>
      </div>
    </div>
</footer>
</template>
 
<style scoped>
footer{
    padding: 80px 0 30px 0;
}
.footer-wrapp{
    display: flex;
    flex-direction: column;
    gap: 60px;
}
.footer-logo{
    font-family: Unbounded;
    font-weight: 400;
    font-size: 188px;
    text-transform: uppercase;
    color: var(--non-active-color);
    line-height: 80%;
    text-align: center;
}

.footer-pannel{
    position: relative;
    display: flex;
    justify-content: space-between;
    gap: 30px;
}

.call-center, .email-block{
    display: flex;
    flex-direction: column;
    gap: 15px;
}
.email-block{
    align-items: flex-end;
}
.fp-title{
    font-family: Unbounded;
    font-size: 18px;
    font-weight: 400;
    color: #9C9C9C;
}
.fp-info-text{
    font-family: Unbounded;
    font-size: 18px;
    font-weight: 400;
}
.footer-nav{
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
}
.fn_list{
    display: flex;
    gap: 35px;
}
.fn-link a{
    font-family: Unbounded;
    font-size: 18px;
    font-weight: 400;
    text-transform: uppercase;
}
.socials-list{
    display: flex;
    gap: 20px;
}
.socials-list a{
    display: block;
    font-family: Unbounded;
    font-size: 18px;
    font-weight: 400;
    color: #9C9C9C;
    text-decoration: underline;
}

@media screen and (max-width: 1600px) {
    .footer-logo{
        font-size: 172px;
    }
}
@media screen and (max-width: 1110px) {
    .footer-logo{
        font-size: 15.4vw;
    }
    .footer-nav{
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
    }
    .footer-pannel{
        padding-bottom: 60px;
    }
}
@media screen and (max-width: 900px) {
    .footer-logo{
        font-size: 16.2vw;
    }
    .fn_list{
        gap: 20px;
    }
}
@media screen and (max-width: 768px) {
    .footer-nav{
        flex-direction: column;
        align-items: flex-start;
    }
    .footer-pannel{
        padding-bottom: 100px;
    }
}
@media screen and (max-width: 600px) {
    .footer-nav{
        position: static;
        transform: none;
        gap: 30px;
    }
    .fn_list,.socials-list{
        flex-direction: column;
    }
    .footer-pannel{
        flex-direction: column;
        padding-bottom: 0;
        gap: 40px;
    }
    .email-block, .call-center{
        align-items: flex-start;
    }
    .footer-logo{
        font-size: 15.8vw;
    }
}
</style>