<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      axios.post('/api/login', {
        username: this.username,
        password: this.password
      })
      .then(response => {
        const { token } = response.data;
        localStorage.setItem('token', token);
        // Redirect to admin page upon successful login
        this.$router.push('/admin');
      })
      .catch(error => {
        console.error('Login error:', error.response.data.message);
      });
    }
  }
}
</script>

<template>
  <section class="login-page">
        <div class="login-board">
            <h2 class="login-title">Admin Page</h2>
            <form class="login-form" @submit.prevent="login">
                <div class="login_inputs">
                    <input type="text" id="username" class="login_input" placeholder="Username" required v-model="username">
                    <input type="password" id="password" class="login_input" placeholder="Password" required v-model="password">
                </div>
                <button class="submit-btn" type="submit">
                    <span>Login</span>
                    <svg width="70" height="55" viewBox="0 0 70 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="42.5" cy="27.5" r="27" stroke="black"/>
                        <path d="M40.5303 28.5303C40.8232 28.2374 40.8232 27.7626 40.5303 27.4697L35.7574 22.6967C35.4645 22.4038 34.9896 22.4038 34.6967 22.6967C34.4038 22.9896 34.4038 23.4645 34.6967 23.7574L38.9393 28L34.6967 32.2426C34.4038 32.5355 34.4038 33.0104 34.6967 33.3033C34.9896 33.5962 35.4645 33.5962 35.7574 33.3033L40.5303 28.5303ZM6.55671e-08 28.75L40 28.75L40 27.25L-6.55671e-08 27.25L6.55671e-08 28.75Z" fill="black"/>
                    </svg>
                </button>
            </form>
        </div>
  </section>
</template>

<style scoped>
    .login-page{
        height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 20px;
    }
    .login-board{
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
        width: 100%;
        max-width: 450px;
    }
    .login-title{
        font-size: 32px;
        font-weight: 400;
        font-family: Unbounded;
        text-transform: uppercase;
    }
    .login-form{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 20px;
        width: 100%;
    }
    .submit-btn{
        display: flex;
        gap: 10px;
        align-items: center;
    }
    .submit-btn > span{
        font-size: 18px;
        font-weight: 400;
        text-transform: uppercase;
    }
    .submit-btn svg{
        width: 60px;
        height: auto;
    }
    .login_inputs{
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;
    }
    .login_input{
        border-bottom: 1px solid #000;
        font-family: Montserrat;
        font-size: 18px;
        padding: 12px 0;
    }
    .login_input::placeholder{
        color: #000;
    }
</style>