<template>
  <div id="article">
    <h1>{{ article.title }}</h1>
    <div>{{ article.created_at | moment("YYYY/MM/DD") }}</div>
    <div>
      <div v-html="article.bodyHtml" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      article: null,
    };
  },
  computed: {
    jsonPath() {
      return `./json/${this.$route.params.id}.json`;
    },
  },
  created() {
    axios.get(this.jsonPath).then(
      (response) => { (this.article = response.data); },
    );
  },
};
</script>
