<template>
  <v-row justify="space-around">
    <v-btn dark :to="link"> Read More? </v-btn>

    <div v-if="showModal" class="modal-route">
      <v-dialog
        v-model="showModal"
        persistent
        transition="dialog-bottom-transition"
        max-width="60%"
      >
        <div>
          <router-view></router-view>
        </div>
      </v-dialog>
    </div>
  </v-row>
</template>

<script>
export default {
  name: "BlogSummary",
  comments: {},
  props: ["post"],
  watch: {
    $route: {
      immediate: true,
      handler: function (newVal, oldVal) {
        console.log(newVal, oldVal);
        this.showModal = newVal.meta && newVal.meta.showModal;
      },
    },
  },
  data() {
    return {
      showModal: false,
      notifications: false,
      sound: true,
      widgets: false,
      doc: this.post.doc ? this.post.doc : "",
      main: this.post.main ? this.post.main : "",
      title: this.post.title ? this.post.title : "",
      posted: this.post.date ? this.post.date : "",
      summary: this.post.summary ? this.post.summary : "",
      img: this.post.img ? this.post.img : "",
      tags: this.post.tags ? this.post.tags : [],
      id: this.post.id,
      link: "/entries/" + this.post.id,
    };
  },
  components: {},
};
</script>

<style>
:root {
  --tag-color-one: #58c2a9;
}
.tag {
  font-size: 10px;
  padding: 4px 8px;
  border-radius: 20px;
}

.approved {
  background-color: var(--tag-color-one);
  color: white;
}
.summary {
  border-radius: 7px;
  /* background: #f5f5f5 !important; */
  /* box-shadow: inset 7px 7px 14px #bbbcbc, inset -7px -7px 14px #ffffff !important; */
}
.summary img {
  border-radius: 7px;
  filter: drop-shadow(-7px 7px 14px #bbbcbc) !important;
}
</style>
