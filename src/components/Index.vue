<template>
  <div id="index">
    <b-container
      fluid
      class="p-3 bg-dark"
    >
      <div
        v-for="s in summary.fileMap"
        :key="s.created_at"
        class="row mb-4"
      >
        <div class="col" />
        <div
          class="col-6"
        >
          <router-link :to="'article/' + s.id">
            {{ s.title }}
          </router-link>
          <div>{{ s.created_at | moment("YYYY/MM/DD") }}</div>
        </div>
        <div class="col" />
      </div>
    </b-container>
  </div>
</template>

<script>
import summary from '../json/summary.json';

export default {
  name: 'Index',
  components: {
  },
  props: {},
  data() {
    return {
      summary,
      key: '',
      id: '',
    };
  },
  methods: {
  },
};
</script>

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
