<template>
  <div id="CardContent">
      <div class="col s12">
        <div class="card-panel grey lighten-5 z-depth-1">

          <div class="row no-margin-bottom valign-wrapper">
            <div v-if="userImage">
              <div class="col s2">
                <img :src="userImage" alt="" class="circle responsive-img"> <!-- notice the "circle" class -->
              </div>
              <div class="col s10">
                <p class="card-content__name"><b>Vinicius</b> - <span class="card-content__date">{{userDate}}</span></p>
              </div>
            </div>
            <div v-else>
              <div class="col s12">
                <p class="card-content__name"><b>Vinicius</b> - <span class="card-content__date">{{userDate}}</span></p>
              </div>
            </div>

          </div>

          <slot />

        </div>
      </div>
  </div>
</template>


<script>
export default {
  name: 'CardContent',
  props: ['userImage','userDate'],
}
</script>

<style media="screen">
.no-margin-bottom {
  margin-bottom: 0;
}
.card-content__name {
  padding: 0;
  margin: 0;
  font-size: 16px;
}
.card-content__date {
  font-size: 12px;
}
</style>
