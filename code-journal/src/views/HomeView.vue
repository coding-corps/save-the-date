<template>
  <v-main>
    <v-container>
      <v-img
        class="center"
        alt="CC logo"
        src="../assets/images/logo-b.svg"
      ></v-img>
      <v-btn to="/entries">Entries</v-btn>
    </v-container>
    <AppFooter></AppFooter>
  </v-main>
</template>
<script>
import AppFooter from "@/components/Footer.vue";
export default {
  name: "HomeView",
  components: { AppFooter },
};
</script>
<style>
.center {
  margin-top: 10px;
  margin: auto;
}
</style>
