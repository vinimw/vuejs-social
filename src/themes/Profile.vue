<template>
  <div id="app">
    <header>
      <nav-bar name="Social" color="blue">
        <menu-links />
      </nav-bar>
    </header>

    <main>
      <div class="container">
        <div class="row">
            <div class="col s12">
              <slot />
            </div>
        </div>
      </div>
    </main>

    <footer-vue color="blue">
      <menu-links />
    </footer-vue>


  </div>

</template>

<script>
import NavBar from '@/components/layouts/NavBar'
import FooterVue from '@/components/layouts/FooterVue'
import Perfil from '@/components/layouts/Perfil'
import MenuLinks from '@/components/content/MenuLinks'

export default {
  name: 'Profile',
  components: {
    NavBar,
    FooterVue,
    Perfil,
    MenuLinks
  },
  created () {
    this.verifyUserLogged();
  },
  data () {
    return {
      userLogged: false,
      nameUser: ''
    }
  },
  methods: {
    verifyUserLogged () {
      if (!sessionStorage.getItem('user')) {
        sessionStorage.clear();
        this.$router.push('/login');
      } else {
        let getSessionUser = JSON.parse(sessionStorage.getItem('user'));
        this.nameUser = getSessionUser.name;
      }
    }
  }
}
</script>
<style>
#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
body {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

main {
  flex: 1 0 auto;
}
footer a {
  color: #FFF;
}
</style>
