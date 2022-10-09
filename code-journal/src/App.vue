<template>
  <!-- App.vue -->
  <v-app>
    <!-- header -->
    <AppHeader></AppHeader>
    <AnimatedHeader></AnimatedHeader>
    <v-main>
      <router-view class="over"></router-view>
    </v-main>
  </v-app>
</template>

<script>
import AnimatedHeader from "./components/animatedHeader.vue";
import AppHeader from "./components/Header.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AnimatedHeader,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.over {
  width: 100%;
  z-index: 2;
}
</style>
