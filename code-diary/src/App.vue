<template>
  <div class="container">
    <DiaryHeader :pages="links"></DiaryHeader>
  </div>
  <hr>
</template>
<script>
import DiaryHeader from './components/Header.vue'
export default {
  name: 'App',
  components: {
    DiaryHeader
  },
  data () {
    return {
  links:[
    {name:"HQ", id:"Home", url:"#"},
    {name:"Entries", id:"Home", url:"#"},
    {name:"About_us", id:"About", url:"#"}
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
  background-color: #ffffff;
}


</style>
