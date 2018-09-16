<template>
  <div>
    <li><router-link to="/">Home</router-link></li>
    <li><router-link to="/about">About</router-link></li>
    <li><router-link to="/login">Login</router-link></li>
  </div>
</template>


<script>
export default {
  name: 'MenuLinks',
  props: ['userImage','userDate'],
}
</script>
