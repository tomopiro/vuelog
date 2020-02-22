<template>
  <div class="hello">
    <h1>vuelog</h1>
    <li v-for="a in articles" :key="a.id">
      {{ a.id}}
      {{ a.name}}
    </li>
  </div>
</template>

<script>
import articles from '../assets/article.json'

export default {
  name: 'index',
  props: {
    msg: String
  },
  data () {
    return {
      articles: articles,
      key: '',
      id: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
