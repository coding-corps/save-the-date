<template>
  <v-app>
    <v-app-bar
      app
      color="#f5f5f5"
      dark
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

      <!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-main>
      <div class="container">
    <!-- banner  -->
    <BannerBar class="neomorph" :posts="posts" ></BannerBar>
    <!-- main -->
    
    <div class="container col-5">
      <div v-for='p in posts' :key='p.id'>
        <BlogPost class="summary" :post="p"></BlogPost>
      </div>
    </div>


<!-- footer  -->
<footer class="blog-footer">
    <a href="#">Back to top</a>
</footer>
  </div>
    </v-main>
  </v-app>
</template>

<script>
  import BannerBar from './components/Banner.vue'
  import BlogPost from './components/BlogSummary.vue'
  export default {
    name: 'App',
    components: {
      BlogPost,
      BannerBar
    },
    data () {
      return {
    links:[
      // {name:"About_us", id:"About", url:"#"}
    ],
    posts:[
    {id:"1", hot: true, img: "vue.jpeg", summary: "first post", title:"builing with vue", tags: ["vue"] , main:"test logiv"},
    {id:"2", hot: true, img: "971.jpg", summary: "old post", title:"builing with vue", tags: ["vue"]}
    ]
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
