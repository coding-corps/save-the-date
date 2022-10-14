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
        <v-card class="cardMin" style="padding: 15px">
          <v-img
            contain
            height="250px"
            width="100%"
            :src="require(`../assets/${item.img}`)"
          >
            <span class="title-span">
              <h4>{{ item.title }}</h4>
            </span>
            <span class="date-span"> {{ item.date }} </span>
          </v-img>
          <div class="cardMax">
            <v-card-text class="white text--primary">
              <p>{{ item.summary }}</p>
              <v-btn dark :to="item ? '/entries/' + item.id : '/entries'">
                Read More?
              </v-btn>
            </v-card-text>
          </div>
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

<style>
/* .cardMin > .cardMax {
  position: relative !important;
  transform: translateY(100px) !important;
  transition: all 0.2s ease-in-out;
}
.cardMin:hover .cardMax {
  transform: translateY(0) !important;
} */

.cardMin {
  overflow: hidden;
  position: relative;
  transition: height 4.2s;
  -webkit-transition: height 4.2s;
  transition: 4s;
}
.cardMax {
  height: 0;
  transition: height 1.2s ease-in;
  -webkit-transition: height 1.2s ease-in;
  transition: 1s ease-in;
}
.cardMin:hover .cardMax {
  height: auto;
}

.date-span {
  color: #1c1b1bf0;
  margin-right: 0;
  position: absolute;
  bottom: 2px;
  right: 2px;
}

.title-span {
  font-weight: bold;
  color: #1c1b1bf0;
  margin-left: 0;
  position: absolute;
  bottom: 2px;
  left: 2px;
}
</style>
