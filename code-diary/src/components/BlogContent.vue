<template>
    <div id="post">
      <VueShowdown :markdown="this.fileContent ? this.fileContent:'# Not found'"></VueShowdown>
</div>
  </template>
  
  <script>
import { templateElement } from '@babel/types';

  



  export default {
    name: "BlogContent",
    props: ['doc'],
    data: function() {
      return {
        fileToRender: null,
        fileContent: null,
        rawContent: null,
      };
    },
    created: function() {
      var Index = require(`../assets/entrys/test.md`);
      templateElement.getElementById("post").innerHTML = "<h1> fuck</h1>"

      console.log(Index)
      this.fileContent = Index
    },
    methods: {}  
  };
  </script>