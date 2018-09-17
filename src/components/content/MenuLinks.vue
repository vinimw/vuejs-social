<template>
  <div>
    <li><router-link to="/">Home</router-link></li>
    <li><router-link to="/about">About</router-link></li>
    <li v-if="!userLogged"><router-link to="/login">Login</router-link></li>
    <li v-if="userLogged" v-on:click="logout()"><a>Sair</a></li>
  </div>
</template>


<script>
export default {
  name: 'MenuLinks',
  props: ['userImage','userDate'],
  data () {
    return {
      userLogged : false
    }
  },
  created () {
    if (sessionStorage.getItem('user')) {
      let getSessionUser = JSON.parse(sessionStorage.getItem('user'));
      if (getSessionUser.token) {
        this.userLogged = true;
      }
    }
  },
  methods: {
    logout () {
      sessionStorage.clear();
      this.userLogged = false;
      this.$router.push('/login');
    }
  }
}
</script>
