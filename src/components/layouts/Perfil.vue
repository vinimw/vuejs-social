<template>
  <div id="Perfil">
      <div class="col s12">
        <div class="card-panel grey lighten-5 z-depth-1">
          <div class="row valign-wrapper">
            <div v-if="image">
              <div class="col s4">
                <img :src="image" alt="" class="circle responsive-img"> <!-- notice the "circle" class -->
              </div>
              <div class="col s8">
                <h5>Vinicius</h5>
                <span class="black-text">
                  Add the "circle" class to
                </span>
              </div>
            </div>
            <div v-else>
              <div class="col s12">
                <h5>Vinicius</h5>
                <span class="black-text">
                  Add the "circle" class to
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
  </div>
</template>


<script>
export default {
  name: 'Perfil',
  props: ['image'],
}
</script>
