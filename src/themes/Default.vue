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
            <div class="col s4">
              <perfil image="https://dummyimage.com/100x100/000/fff" />
              <perfil />
            </div>
            <div class="col s8">
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
  name: 'Default',
  components: {
    NavBar,
    FooterVue,
    Perfil,
    MenuLinks
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
