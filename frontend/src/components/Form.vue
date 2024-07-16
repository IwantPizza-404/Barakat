<script>
  export default{
    data(){
        return {
            name: '',
            number: '',
            submittedMessage: null,
            IsMessaged: sessionStorage.getItem('IsMessaged') === 'true',
        };
    },
    methods:{
        async submitMessage() {
            try{
                const response = await this.$axios.post(`/api/messages`, {
                    name: this.name,
                    number: this.number,
                });

                if (response.status === 200) {
                    this.submittedMessage = response.data;
                    sessionStorage.setItem('IsMessaged', 'true');
                    this.IsMessaged = true;
                    console.log("Messaged!")
                } 
                else {
                    console.error('Error submitting message:', response.statusText);
                }
            }
            catch(error){
                console.error('Error submitting message:', error);
            }
        },
    }
  }
</script>

<template>
    <div class="main-form">
        <div class="container">
            <div class="mf-wrapp">
                <div class="mf-header">
                    <h1 class="mf_title">Contact us!</h1>
                    <div class="header-info">
                        <div class="phone-number">
                            <div class="pn-title">Call for booking:</div>
                            <div class="pn-text">+995 99 999 99 99</div>
                        </div>
                        <div class="socials-list">
                            <a href="#" class="socials-link">Instagram</a>
                            <a href="#" class="socials-link">Telegram</a>
                        </div>
                    </div>
                </div>
                <div v-if="IsMessaged" class="form_state">
                    <h3 class="state_title">Application successfully sent!</h3>
                    <h3 class="state_title">We will contact you soon...</h3>
                </div>
                <form v-if="!IsMessaged" @submit.prevent="submitMessage" class="mf-form">
                    <div class="mf-fields">
                        <input 
                            v-model="name"
                            placeholder="Full Name" 
                            type="text" 
                            name="name"
                            class="mf-field"
                            required
                        >
                        <input
                            v-model="number" 
                            placeholder="Phone Number" 
                            type="tel" 
                            name="phone" 
                            class="mf-field"
                            required
                        >
                    </div>
                    <button type="submit" class="mf-send-btn">
                        <span>Send</span>
                        <svg width="70" height="55" viewBox="0 0 70 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="42.5" cy="27.5" r="27" stroke="black"/>
                            <path d="M40.5303 28.5303C40.8232 28.2374 40.8232 27.7626 40.5303 27.4697L35.7574 22.6967C35.4645 22.4038 34.9896 22.4038 34.6967 22.6967C34.4038 22.9896 34.4038 23.4645 34.6967 23.7574L38.9393 28L34.6967 32.2426C34.4038 32.5355 34.4038 33.0104 34.6967 33.3033C34.9896 33.5962 35.4645 33.5962 35.7574 33.3033L40.5303 28.5303ZM6.55671e-08 28.75L40 28.75L40 27.25L-6.55671e-08 27.25L6.55671e-08 28.75Z" fill="black"/>
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>
 
<style scoped>
    .main-form{
        padding: 120px 0;
    }
    .mf-wrapp{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 85px;
    }
    .mf-header{
        display: flex;
        flex-direction: column;
        gap: 45px;
        justify-content: space-between;
    }
    .header-info{
        display: flex;
        justify-content: space-between;
        flex: 1;
    }
    .mf_title{
        font-family: Unbounded;
        font-size: 100px;
        font-weight: 400;
        line-height: 100%;
    }
    .phone-number{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .pn-title{
        font-family: Unbounded;
        font-size: 18px;
        font-weight: 400;
        color: #9C9C9C;
    }
    .pn-text{
        font-family: Unbounded;
        font-size: 18px;
        font-weight: 400;
    }
    .socials-list{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
    }
    .socials-list a{
        display: block;
        font-family: Unbounded;
        font-size: 18px;
        font-weight: 400;
        color: #9C9C9C;
        text-decoration: underline;
    }
    .mf-form{
        display: flex;
        flex-direction: column;
        gap: 35px;
        align-items: flex-end;
        max-width: 450px;
        width: 100%;
    }
    .mf-fields{
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;
    }
    .mf-field{
        border-bottom: 1px solid #000;
        border-radius: 0;
        font-family: Montserrat;
        font-size: 18px;
        padding: 12px 0;
    }
    .mf-field::placeholder{
        color: #000;
    }
    .mf-send-btn{
        display: flex;
        gap: 10px;
        align-items: center;
    }
    .mf-send-btn > span{
        font-size: 20px;
        font-weight: 400;
        text-transform: uppercase;
        color: #000;
    }
    .state_title{
        font-size: 24px;
    }
    .form_state{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    @media screen and (max-width: 1600px) {
        .mf_title{
            font-size: 86px;
        }
    }
    @media screen and (max-width: 635px) {
        .mf_title{
            font-size: 13vw;
        }
        .mf-send-btn > span{
            font-size: 18px;
        }
        .mf-send-btn svg{
            width: 60px;
            height: auto;
        }
        .main-form{
            padding: 80px 0;
        }
    }
    @media screen and (max-width: 500px) {
        .header-info{
            align-items: center;
            flex-direction: column;
            gap: 25px;
        }
        .socials-list{
            gap: 10px;
        }
        .phone-number{
            align-items: center;
        }
        .state_title{
            font-size: 20px;
        }
    }
</style>
