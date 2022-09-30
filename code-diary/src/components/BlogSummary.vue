<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light ">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24">
    </a>
  </div>
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul  v-for='page in pages' :key='page.id' class="navbar-nav mr-auto">
          <li class="nav-item"><a href=""></a>
            <a class="nav-link" :href="page.url">{{page.name}}</a>
          </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
  name: 'DiaryHeader',
  props: ['pages']
}
</script>

<style scoped>
  .neomorph {
  border-radius: 50px;
background: linear-gradient(145deg, #cacaca, #f0f0f0);
box-shadow:  35px 35px 70px #bcbcbc,
             -35px -35px 70px #ffffff;
}
</style>
