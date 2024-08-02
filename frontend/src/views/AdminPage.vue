<script>
import axios from 'axios'

export default {
  data() {
    return {
      messages: []
    }
  },
  created() {
    this.fetchMessages()
  },
  methods: {
    fetchMessages() {
      axios.get('/api/messages')
        .then(response => {
          this.messages = response.data;
        })
        .catch(error => {
          console.error('Error fetching messages:', error);
        })
    }
  }
}
</script>

<template>
  <section class="admin-page">
    <nav class="navbar navbar-dark bg-primary">
      <div class="container nav-container">
        <h3 class="nav-title">Admin Page</h3>
      </div>  
    </nav>
    <div class="container container-board">
      <div class="admin-page_wrapp">
        <h4>Messages:</h4>
        <div v-if="messages.length === 0">No messages found</div>
        <ul>
          <li v-for="message in messages" :key="message.id">
            {{ message.name }}: {{ message.number }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template> 

<style scoped>
@import url('https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css');
.container-board{
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
}
.nav-container{
  padding: 0 !important;
}
.nav-title{
  font-family: Unbounded;
  font-weight: 400;
  color: #fff;
}
</style>
