<template>
  <header class="blog-header lh-1 py-3">
    <div class="row flex-nowrap justify-content-between align-items-center">
      <div class="col-4 pt-1">
        <a class="link-secondary" href="#">Subscribe</a>
      </div>
      <div class="col-4 text-center">
        <a class="blog-header-logo text-dark" href="#">coding_corps</a>
      </div>
      <!-- <div class="col-4 d-flex justify-content-end align-items-center">
        <a class="link-secondary" href="#" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"/><path d="M21 21l-5.2-5.2"/></svg>
        </a>
        <a class="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
      </div> -->
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light ">
      <div class="container">
        <a class="navbar-brand" href="#">
          &lt;/&gt;
        </a>
      </div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul  v-for='page in pages' :key='page.id' class="navbar-nav mr-auto">
              <li class="nav-item"><a href=""></a>
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
  border-radius: 50px;
background: linear-gradient(145deg, #cacaca, #f0f0f0);
box-shadow:  35px 35px 70px #bcbcbc,
             -35px -35px 70px #ffffff;
}
</style>
