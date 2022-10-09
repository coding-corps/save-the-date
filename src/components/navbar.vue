<template>
  <div>
    <div class="menu-icon">
      <span class="menu-icon__line menu-icon__line-left"></span>
      <span class="menu-icon__line"></span>
      <span class="menu-icon__line menu-icon__line-right"></span>
    </div>
    <img
      alt="code diary"
      class="shrink mt-1 hidden-sm-and-down"
      contain
      min-width="100"
      src="../assets/logo2.svg"
    />
    <div class="nav">
      <div class="nav__content">
        <ul class="nav__list">
          <li class="nav__list-item">Home</li>
          <li class="nav__list-item">About</li>
          <li class="nav__list-item">Projects</li>
          <li class="nav__list-item">Contact</li>
        </ul>
      </div>
    </div>

    <div class="site-content">
      <h1 class="site-content__headline">Another menu concept</h1>
    </div>
    <div class="d-flex align-center">
      <router-link to="/">Home</router-link> |
      <router-link to="/entries">Entries</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
