<template>
  <div class="timeline">
    <v-timeline
      :reverse="true"
      align-top
      :dense="$vuetify.breakpoint.smAndDown"
    >
      <v-timeline-item
        v-for="(item, i) in posts"
        :key="i"
        :color="item.color"
        :id="item.id"
        :ref="item.id"
        :icon="item.icon ? item.icon : 'mdi-head-plus-outline'"
        fill-dot
      >
        <v-card style="padding: 15px">
          <v-img
            contain
            height="250px"
            width="100%"
            :src="require(`../assets/${item.img}`)"
          >
          </v-img>
          <v-card-title class="text-h6">
            {{ item.title }}
          </v-card-title>
          <v-card-text class="white text--primary">
            <p>{{ item.summary }}</p>
            <v-btn dark :to="item ? '/entries/' + item.id : '/entries'">
              Read More?
            </v-btn>
          </v-card-text>
        </v-card>
      </v-timeline-item>
      <v-timeline-item
        key="start"
        color="#000000de"
        icon="mdi-human-scooter"
        fill-dot
      >
      </v-timeline-item>
    </v-timeline>
  </div>
</template>
<script>
export default {
  name: "TimeLine",
  props: ["posts"],
  components: {},
  data() {
    return {
      slide: 0,
      sliding: null,
      link: "/entries/" + this.post.id,
    };
  },
  computed: {
    noOfPosts() {
      var i = 0;
      if (this.posts.length > 1) {
        for (let p in this.posts) {
          if (this.posts[p].hot === true) {
            ++i;
          }
        }
      }
      return i > 1;
    },
  },
  methods: {
    scrollMeTo(refName) {
      var element = this.$refs[refName];
      var top = element;
      window.scrollTo(0, top);
    },
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>
