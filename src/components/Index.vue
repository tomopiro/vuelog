<template>
  <div id="index" />
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
