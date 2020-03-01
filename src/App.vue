<template>
  <div id="app">
    <Header />
    <Index />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Index from './components/Index.vue';

export default {
  name: 'App',

  components: {
    Header,
    Index,
  },

  data: () => ({
    //
  }),
};
</script>
