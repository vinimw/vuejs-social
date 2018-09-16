<template>
  <div id="NavBar">
    <nav :class="color || 'green'">
      <div class="nav-wrapper container">
        <a href="#" class="brand-logo">{{name || 'Site'}}</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <slot></slot>
        </ul>
      </div>
    </nav>
  </div>

</template>


<script>
export default {
  name: 'NavBar',
  props: ['name','color'],
}
</script>
