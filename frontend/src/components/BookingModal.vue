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
    props:{
        showBmodal: Boolean,
        toggleBmodal: Function
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
    <div v-if="showBmodal" @click.self="toggleBmodal" class="booking-modal">
        <div class="bm-wrapp">
            <div v-if="IsMessaged" class="form_state">
                <h3 class="state_title">Application successfully sent!</h3>
                <h3 class="state_title">We will contact you soon...</h3>
            </div>
            <form v-if="!IsMessaged" @submit.prevent="submitMessage" class="bm-form">
                <div @click="toggleBmodal" class="bm-cls">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="4.01469" y1="3.30761" x2="21.6924" y2="20.9853" stroke="black"/>
                        <line x1="3.30758" y1="20.9853" x2="20.9852" y2="3.30761" stroke="black"/>
                    </svg>
                </div>
                <div class="bm-fields">
                    <input 
                        v-model="name"
                        :placeholder="$t('full_name')" 
                        type="text" 
                        name="name"
                        class="bm-field"
                        required
                    >
                    <input
                        v-model="number" 
                        :placeholder="$t('phone_number')" 
                        type="tel" 
                        name="phone" 
                        class="bm-field"
                        required
                    >
                </div>
                <button type="submit" class="bm-send-btn">
                    <span>{{ $t('send') }}</span>
                    <svg width="70" height="55" viewBox="0 0 70 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="42.5" cy="27.5" r="27" stroke="black"/>
                        <path d="M40.5303 28.5303C40.8232 28.2374 40.8232 27.7626 40.5303 27.4697L35.7574 22.6967C35.4645 22.4038 34.9896 22.4038 34.6967 22.6967C34.4038 22.9896 34.4038 23.4645 34.6967 23.7574L38.9393 28L34.6967 32.2426C34.4038 32.5355 34.4038 33.0104 34.6967 33.3033C34.9896 33.5962 35.4645 33.5962 35.7574 33.3033L40.5303 28.5303ZM6.55671e-08 28.75L40 28.75L40 27.25L-6.55671e-08 27.25L6.55671e-08 28.75Z" fill="black"/>
                    </svg>
                </button>
            </form>
        </div>
    </div>
</template>
 
<style scoped>
    .booking-modal{
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.3);
        z-index: 1;
        width: 100%;
        height: 100%;
        padding: 0 10px;
    }
    .bm-wrapp{
        display: flex;
        flex-direction: column;
        padding: 20px;
        margin: 30vh auto;
        max-width: 500px;
        padding: 20px;
        background: #fff;
    }
    .bm-form{
        display: flex;
        flex-direction: column;
        gap: 35px;
        align-items: flex-end;
        max-width: 450px;
        width: 100%;
        padding-top: 10px;
    }
    .bm-fields{
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;
    }
    .bm-field{
        border-bottom: 1px solid #000;
        border-radius: 0;
        font-family: Montserrat;
        font-size: 18px;
        padding: 12px 0;
    }
    .bm-field::placeholder{
        color: #000;
    }
    .bm-send-btn{
        display: flex;
        gap: 10px;
        align-items: center;
    }
    .bm-send-btn svg{
        width: 50px;
        height: auto;
    }
    .bm-send-btn > span{
        font-size: 18px;
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
    .bm-cls{
        display: flex;
        cursor: pointer;
    }

    @media screen and (max-width: 1600px) {
        .bm_title{
            font-size: 86px;
        }
    }
    @media screen and (max-width: 635px) {
        .bm_title{
            font-size: 13vw;
        }
        .bm-send-btn > span{
            font-size: 18px;
        }
        .bm-send-btn svg{
            width: 40px;
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
