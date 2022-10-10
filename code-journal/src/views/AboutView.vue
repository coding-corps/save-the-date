<!-- eslint-disable -->
<template>
  <div class="about">
    <v-container>
      <v-container class="blockquote">
        <p
          style="margin-top: 200px"
          color="none"
          class="font-weight-bold text-xl-h4"
        >
          “For the things we have to learn before we can do them, we learn by
          doing them”
        </p>
        <p>~ Aristotle, The Nicomachean Ethics</p>
      </v-container>

      <img id="rounded-card" src="../assets/kc.png" />

      <h2>What is this?</h2>
      <br />

      <v-card flat class="blockquote">
        <br />
        <p class="font-weight-medium text-xl-h4">
          I've always been more of a hands-on learner; even if I read all the
          available literature and theory,<br />
          unless I put it into practice, I'd never be able to truly understand
          the concept.
        </p>
        <p class="font-weight-medium text-xl-h4">
          This page will serve as a journal, to keep track of the things I
          discover as I progress in my development journey; as a byproduct, this
          page will perpetually change and evolve along with me.
        </p>
        <br />
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "AboutView",
  components: {},
};
</script>
<style>
.blockquote {
  padding: 5px !important;
  background-color: #ffffffe9 !important;
}

#rounded-card {
  border-radius: 50%;
  max-height: 150px;
  max-width: 150px;
  margin: 50px;
  margin-left: auto;
  margin-right: auto;
  padding: 5px !important;
  border-radius: 50%;
  background: #ffffff;
  box-shadow: inset -20px 20px 1px #d9d9d9, inset 20px -20px 1px #ffffff;
  border-style: solid;
  border-width: 0.5px !important;
  border-color: #0000000f !important;
}
</style>
