<template class="neomorph">
  <div>

    
    <b-carousel
      id="whatsHot"
      :v-model="slide"
      :interval="4000"
      :controls="this.noOfPosts"
      indicators
      background="#ababab"
      img-width="1024"
      img-height="300"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
    <div  v-for='p in posts' :key='p.id'>
      <b-carousel-slide style="vertical-align: middle; max-height: 300px;" v-if="p.hot" :caption="p.title" :img-src="require(`../assets/${p.img}`)">
        <p> {{p.summary}}
        </p>
        <a class="porto-button" @click="scrollMeTo('porto')">Continue reading...</a>
      </b-carousel-slide>
      </div>
    </b-carousel>
  </div>
</template>

<script>
  export default {
    name: 'BannerBar',
    props: ['posts'],
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    computed:{
      noOfPosts() {
        var i = 0 
         if (this.posts.length > 1){
          for (let p in this.posts) {
            if (this.posts[p].hot===true) {
              ++i
            }
          }
         }
         return i > 1 
      },
    },
    methods: {
      scrollMeTo(refName) {
    var element = this.$refs[refName];
    var top = element;
    window.scrollTo(0, top);
  },
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>




<style scoped>
  .neomorph {
    margin: 20px;
    border-radius: 5px;
background: #f5f5f5;
box-shadow:  6px 6px 12px #e4e4e4,
             -6px -6px 12px #ffffff;}

             .neomorph img {
              filter: drop-shadow(-7px 7px 14px #bbbcbc)!important;

             }
  </style>