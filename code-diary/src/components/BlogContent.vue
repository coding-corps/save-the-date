<template>
    <div><VueShowdown :markdown="fileContent ? fileContent:'# Not found'"></VueShowdown></div>
  </template>
  
  <script>  

  export default {

    name: "BlogContent",
    props: ['doc'],
    data: function() {
      return {
        fileToRender: null,
        fileContent: null,
        rawContent: null
      };
    },
    created: function() {
      this.getContent();
    },
    methods: {
      getContent() {
        this.fileContent = "rendering";
        // var self;
        this.$http.get(require(`../assets/entrys/test.md`)).then(
          response => {
            // get body data
  
            this.fileContent = response.body;
            console.log(response)

          },
          response => {
            // error callback
            console.log(response)
            this.fileContent = "An error ocurred";
          }
        );
      }
    }
  };
  </script>