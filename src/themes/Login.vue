<template>
  <div id="Login">

    <slot />

  </div>

</template>

<script>


export default {
  name: 'Login',
  components: {

  },
  created () {
    this.verifyUserLogged();
  },
  methods: {
    verifyUserLogged () {
      if (sessionStorage.getItem('user')) {
        let getSessionUser = JSON.parse(sessionStorage.getItem('user'));
        if (getSessionUser.token) {
          this.$router.push('/');
        }
      }
    }
  }
}
</script>
<style>
#Login {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
body {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
</style>
