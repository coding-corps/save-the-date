<template>
  <div class="container">
    <VueShowdown
      flavor="github"
      class="text-justify"
      :markdown="
        doc ? require(`../assets/entrys/${doc}`).default : '# Not found'
      "
    ></VueShowdown>
  </div>
</template>
<script>
export default {
  name: "BlogShowDown",
  props: ["doc"],
  data: function () {
    return {
      fileToRender: null,
      fileContent: null,
      rawContent: null,
      htmlContent: null,
    };
  },
};
</script>

<style>
pre {
  background-color: rgb(54, 54, 54);
  padding: 10px;
  color: white;
}
</style>
