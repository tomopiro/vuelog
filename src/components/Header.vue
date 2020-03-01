<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="dark"
    >
      <b-navbar-brand href="#">
        Vuelog
      </b-navbar-brand>
      <div>
        <a href="https://twitter.com/tomo_moog">
          <v-fa
            :icon="['fab', 'twitter']"
            size="5x"
            inverse
          />
        </a>
        <a href="https://github.com/tomopiro">
          <v-fa
            :icon="['fab', 'github']"
            size="5x"
            inverse
          />
        </a>
      </div>
    </b-navbar>
  </div>
</template>
