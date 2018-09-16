<template>
  <default-theme>
    <div class="home">

      <div class="row">

        <publish-content />

        <card-content
        userImage="https://dummyimage.com/100x100/000/fff"
        userDate="19/07/2018"
        >
        <card-post
        postImage="https://dummyimage.com/1000x500/000/fff"
        postTitle="test post"
        postDescription="a text test for vue js, this is amazing, I like it"
        />

        <card-action />
      </card-content>
    </div>
  </div>
  </default-theme>
</template>

<script>
import DefaultTheme from '@/themes/Default'
import CardContent from '@/components/content/CardContent'
import CardPost from '@/components/content/CardPost'
import CardAction from '@/components/content/CardAction'
import PublishContent from '@/components/forms/PublishContent'

export default {
  name: 'home',
  components: {
    CardContent,
    CardPost,
    CardAction,
    PublishContent,
    DefaultTheme
  }
}
</script>
