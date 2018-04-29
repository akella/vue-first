<template>
  <main-layout>
  <div class="hello">
    <h1 class="singlepost">Posts</h1>
    <post 
      v-for="post in posts"
      v-bind:heading="post.title"
      v-bind:subtitle="post.subtitle"
      v-bind:key="post.id"
    />
  </div>
  </main-layout>
</template>

<script>
import MainLayout from '@/layout/MainLayout';
import Post from '@/components/Post';
export default {
  name: 'Homepage',
  data () {
    return {
      posts: [
        {id: 1, title: "Blablablabla", subtitle: "Subtitle"},
        {id: 2, title: "222Blablablabla1", subtitle: "Subtitle"},
        {id: 3, title: "B333lablablabla2", subtitle: "Subtitle"},
        {id: 4, title: "444Blablablabla3", subtitle: "Subtitle"}
      ]
    }
  },
  components: {
    MainLayout,
    Post
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.singlepost{
  background: green;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
