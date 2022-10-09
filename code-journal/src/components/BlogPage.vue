<template>
  <v-card>
    <v-toolbar dark color="#1c1b1bf0">
      <v-btn icon to="./">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title></v-toolbar-title>
      <v-spacer></v-spacer>
      <h1>{{ doc.title }}</h1>
    </v-toolbar>
    <v-divider></v-divider>
    <div style="text-align: center; margin: 80px">
      <v-img size="50%" :src="require(`../assets/${doc.img}`)"></v-img>
    </div>
    <blog-showdown :doc="doc.doc"></blog-showdown>
    <v-divider></v-divider>
  </v-card>
</template>
<script>
import Posts from "../assets/entrys/data.json";

export default {
  name: "BlogPage",
  props: ["blogId"],
  data: function () {
    return {
      doc: {},
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
  created: function () {
    this.doc = Posts[this.blogId];
  },
};
</script>
