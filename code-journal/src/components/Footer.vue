<template>
  <v-footer app class="foot" padless>
    <v-col class="text-center" cols="12">
      <v-card-text class="white--text pt-0">
        <i>Welcome to my dev journey!<br /></i> This page will grow and imporove
        as i do documenting the lessons i've learnt along the way
      </v-card-text>

      <v-card-text class="white--text">
        Copyright &copy;
        {{ new Date().getFullYear() }} All Rights Reserved by —
        <strong>Kevin Christopher</strong>
      </v-card-text>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: "AppFooter",
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>
<style>
.foot {
  text-align: center !important;
  color: aliceblue !important;
  background-color: #1c1b1bf0 !important;
}
</style>
