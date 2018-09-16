<template>
  <div id="PublishContent">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <textarea id="textarea1" v-model="content" class="materialize-textarea"></textarea>
          <label for="textarea1">What's happening?</label>
        </div>
      </div>
      <button v-if="content" class="btn col waves-effect waves-light s2 offset-s10" type="button">Send</button>
    </form>
  </div>
</template>


<script>
export default {
  name: 'PublishContent',
  props: ['actionUrl'],
  data () {
    return {
      content: ''
    }
  }
}
</script>

<style media="screen">
#PublishContent {
  margin: 15px 0;
  display: inline-block;
  width: 100%;
}
</style>
