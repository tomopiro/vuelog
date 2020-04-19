<template>
  <div>
    <b-navbar
      type="dark"
      variant="dark"
    >
      <b-navbar-nav class="mx-auto">
        <b-navbar-brand href="#">
          {{ siteName }}
        </b-navbar-brand>
      </b-navbar-nav>
      <b-navbar-nav>
        <b-nav-item>
          <router-link
            to="twitter"
          >
            <v-fa
              :icon="['fab', 'twitter']"
              size="3x"
              inverse
            />
          </router-link>
        </b-nav-item>

        <b-nav-item>
          <router-link
            to="github"
          >
            <v-fa
              :icon="['fab', 'github']"
              size="3x"
              inverse
            />
          </router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<script>
import Config from '../mixins/config';

export default {
  mixins: [Config],
  data() {
    return {
    };
  },
};
</script>
