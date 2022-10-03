<template>
    <div id="app"><VueShowdown :markdown="fileContent"></VueShowdown></div>
  </template>
  
  <script>
  import VueShowdown from "vue-showdown";
  
  export default {
    name: "BlogContent",
    components: VueShowdown,
    data: function() {
      return {
        fileContent: null,
        fileToRender:
          "https://gist.githubusercontent.com/rt2zz/e0a1d6ab2682d2c47746950b84c0b6ee/raw/83b8b4814c3417111b9b9bef86a552608506603e/markdown-sample.md",
        rawContent: null
      };
    },
    created: function() {
      //  const fileToRender = `./assets/documentation/general/welcome.md`;
      //const rawContent = ""; // Read the file content using fileToRender
      // this.fileContent = "### marked(rawContent) should get executed";
      this.getContent();
    },
    methods: {
      getContent() {
        this.fileContent = "rendering ";
        // var self;
        this.$http.get(this.fileToRender).then(
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