<template>
  <header class="b-header lh-1 py-3" style="background: white: important !important;">
    <nav class=" navbar navbar-expand-lg navbar-light  " style="background-color: white: important !important;">
      <div class="container" style="background: white: important !important;" >
        <a class="logo-1 navbar-brand" href="#">
          <span><img style="max-height: 75px;" src="../assets/logo.svg" alt="&lt;/&gt;"></span>  coding_corps
        </a>
      </div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul  v-for='page in pages' :key='page.id' class="navbar-nav mr-auto">
              <li class=" nav-item"><a href=""></a>
                <a class="nav-link" :href="page.url">{{page.name}}</a>
              </li>
        </ul>
      </div>
    </nav>
</header>
</template>

<script>
export default {
  name: 'DiaryHeader',
  props: ['pages']
}
</script>

<style scoped>
.neomorph {
  border-radius: 5px;
background: #f5f5f5;
box-shadow: inset 6px 6px 12px #e4e4e4,
            inset -6px -6px 12px #ffffff;
}
</style>


<style>
  .logo-1 h3 {
    color: #e74c3c;
    font-family: 'Oswald', sans-serif;
    font-weight: 400;
    font-size: 30px;
    line-height:1.5;
display: inline;
padding: 0!important;
margin: 0!important;
  }



.logo-1 p {
    font-size: 14px;
    letter-spacing: 8px;
    text-transform: uppercase;
    padding-left: 10px;
    color: #34495e;
    font-weight: 200;
}
  </style>