<template>
  <v-container>
    <TimeLine :posts="posts"></TimeLine>
    <div v-if="showModal" class="modal-route">
      <div class="modal-content">
        <router-view></router-view>
      </div>
    </div>
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
      showModal: false,
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler: function (newVal, oldVal) {
        console.log(newVal, oldVal);
        this.showModal = newVal.meta && newVal.meta.showModal;
      },
    },
  },
};
</script>

<style></style>
