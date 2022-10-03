<template>
  <header class="b-header lh-1 py-3" style="background: white: important !important;">
    <v-toolbar>
      <!-- Adjust the height to your needs, mine is 40 -->
      <img class="mr-3" :src="require('../assets/logo.svg')" height="40"/>
      <v-toolbar-title>
        coding_corps
      </v-toolbar-title>
      <v-spacer>
        
      </v-spacer>
      <v-toolbar-items  v-for='page in pages' :key='page.id' >
        <v-btn :href="page.url" text>{{page.name}}</v-btn>
      </v-toolbar-items>
    </v-toolbar>
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