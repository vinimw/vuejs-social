<template>
  <div id="Login">

    <slot />

  </div>

</template>

<script>


export default {
  name: 'Login',
  components: {

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
