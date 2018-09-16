<template>
  <div id="CardPost">
    <div class="row">
      <div class="col s12">
        <div class="card">
          <div v-if="postImage">
            <div class="card-image">
              <img :src="postImage">
              <span class="card-title">{{postTitle}}</span>
            </div>
            <div class="card-content">
              <p>{{postDescription}}</p>
            </div>
          </div>
          <div v-else>
            <div class="card-content">
              <h5 class="card-post__title">{{postTitle}}</h5>
              <p>{{postDescription}}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'CardPost',
  props: ['postImage','postTitle','postDescription'],
}
</script>

<style media="screen">
.card-post__title {
  margin: 0 0 10px 0;
}
</style>
