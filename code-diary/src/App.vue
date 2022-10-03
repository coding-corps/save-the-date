<template>
  <v-app>
    <v-app-bar
      app
    >
      <div class="d-flex align-center">
        <!-- <DiaryHeader class="neomorph" :pages="links"></DiaryHeader> -->
        <v-img
          alt="code diary"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="./assets/logo2.svg"
        />
    
      </div>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main>
      <div class="container">
    <!-- banner  -->
    <animatedHeader></animatedHeader>
    <BannerBar class="neomorph" :posts="posts" ></BannerBar>
    <!-- main -->
    
  <v-timeline
  :reverse="true"
    align-top
    :dense="$vuetify.breakpoint.smAndDown"
  >
    <v-timeline-item
      v-for="(item, i) in posts"
      :key="i"
      :color="item.color"
      :icon="item.icon ? item.icon : 'mdi-head-plus-outline'"
      fill-dot
    >
      <v-card style="padding:15px;">
      <v-img
          height="200px"
          :src="require(`./assets/${item.img}`)"
        >
        </v-img>
        <v-card-title class="text-h6">
          {{item.title}}
        </v-card-title>
        <v-card-text class="white text--primary">
          <p>{{item.summary}}</p>
          <BlogPost class="summary" :post="item"></BlogPost>
        </v-card-text>
      </v-card>
    
    </v-timeline-item>
    <v-timeline-item
      key="start"
      color="#000000de"
      icon="mdi-human-scooter"
      fill-dot
    > </v-timeline-item>
  </v-timeline>


 


<!-- footer  -->

  </div>
  <DiaryFooter class="blog-footer">
</DiaryFooter>
    </v-main>

  </v-app>
</template>

<script>
  import DiaryFooter from './components/footer.vue'
  import BannerBar from './components/Banner.vue'
  import BlogPost from './components/BlogSummary.vue'
  import animatedHeader from './components/animatedHeader.vue'
  export default {
    name: 'App',
    components: {
      BlogPost,
      BannerBar,
      animatedHeader,
      DiaryFooter
    },
    data () {
      return {
    links:[
      // {name:"About_us", id:"About", url:"#"}
    ],
    posts:[
    {id:"1", hot: true, img: "vue.jpeg", summary: "first post", title:"builing with vue", tags: ["vue"] , main:"test logiv", color: '#000000de',
          icon: 'mdi-code-tags',},
    {id:"2", hot: true, img: "971.jpg", summary: "old post", title:"builing with vue", tags: ["vue"], color: '#000000de'}
    ],
  }
  }
  ,methods:{
  getCool(id) {
    var rgb = this.getAverageRGB(document.getElementById(id));
    return 'rgb('+rgb.r+','+rgb.g+','+rgb.b+')';
  },  
  getAverageRGB (imgEl) {

var blockSize = 5, // only visit every 5 pixels
    defaultRGB = {r:0,g:0,b:0}, // for non-supporting envs
    canvas = document.createElement('canvas'),
    context = canvas.getContext && canvas.getContext('2d'),
    data, width, height,
    i = -4,
    length,
    rgb = {r:0,g:0,b:0},
    count = 0;

if (!context) {
    return defaultRGB;
}

height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

context.drawImage(imgEl, 0, 0);

try {
    data = context.getImageData(0, 0, width, height);
} catch(e) {
    /* security error, img on diff domain */
    return defaultRGB;
}

length = data.data.length;

while ( (i += blockSize * 4) < length ) {
    ++count;
    rgb.r += data.data[i];
    rgb.g += data.data[i+1];
    rgb.b += data.data[i+2];
}

// ~~ used to floor values
rgb.r = ~~(rgb.r/count);
rgb.g = ~~(rgb.g/count);
rgb.b = ~~(rgb.b/count);

return rgb;

}
  }
  }
   
  
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    background: #f5f5f5!important;
  }
  </style>
