<template>
  <div id="index">
    <b-container
      fluid
      class="p-3"
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
          <router-link :to="s.id">
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
