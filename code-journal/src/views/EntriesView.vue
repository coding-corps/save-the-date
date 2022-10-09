<template>
  <v-container>
    <TimeLine :posts="posts"></TimeLine>
  </v-container>
</template>

<script>
import TimeLine from "@/components/TimeLine.vue";
import Posts from "../assets/entrys/data.json";
export default {
  name: "EntriesView",
  components: { TimeLine },
  data: function () {
    return {
      posts: Posts,
    };
  },
};
</script>
