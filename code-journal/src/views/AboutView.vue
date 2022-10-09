<!-- eslint-disable -->
<template>
  <div class="about">
    <v-container>
      <div class="blockquote">
        <p>
          “For the things we have to learn before we can do them, we learn by
          doing them” <br />
          ― Aristotle, The Nicomachean Ethics
        </p>
      </div>

      <img id="rounded-card" src="../assets/kc.png" />

      <h2>What is this?</h2>

      <p>
        I've always been more of a hands-on learner; even if I read all the
        available literature and theory, unless I put it into practice, I'll
        never be able to truly understand the concept.
      </p>
      <p>
        This page will serve as a journal, to keep track of the things I
        discover as I progress in my development journey; as a byproduct, this
        page will perpetually change and evolve along with me.
      </p>
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
  margin: 0;
}

.blockquote p {
  padding: 15px;
  background: #eee;
  border-radius: 5px;
}
#rounded-card {
  border-radius: 50%;
  max-height: 150px;
  max-width: 150px;
  margin: 50px;
  margin-left: auto;
  margin-right: auto;
  padding: 5px !important;
  background-color: rgba(171, 171, 171, 0.433);
}
</style>
