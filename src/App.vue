<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center display-3">
        Vuelog
      </div>

      <v-spacer />
      <a href="https://twitter.com/tomo_moog">
        <v-icon large>mdi-twitter</v-icon>
      </a>
      <a href="https://github.com/tomopiro">
        <v-icon large>mdi-github-circle</v-icon>
      </a>
    </v-app-bar>

    <v-content>
      <Index />
    </v-content>
  </v-app>
</template>

<script>
import Index from './components/index.vue';

export default {
  name: 'App',

  components: {
    Index,
  },

  data: () => ({
    //
  }),
};
</script>
