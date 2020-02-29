<template>
  <div class="index">
    <ul
      v-for="s in summary.fileMap"
      :key="s.created_at"
    >
      <v-card-title>{{ s.title }}</v-card-title>
      <v-card
        class="mx-auto"
        max-width="344"
        outlined
      >
        <li>タイトル：{{ s.title }}</li>
        <br>
        <li>投稿日：{{ s.created_at }}</li>
      </v-card>

      <v-spacer />
    </ul>
  </div>
</template>

<script>
import summary from '../json/summary.json';

export default {
  name: 'Index',
  props: {},
  data() {
    return {
      summary,
      key: '',
      id: '',
    };
  },
  methods: {
    getImageUrl(id) {
      return `../assets/${id}`;
    },
  },
};
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
