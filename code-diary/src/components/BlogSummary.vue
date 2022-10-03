<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="#000000de"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Read More?
        </v-btn>
      </template>
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title></v-toolbar-title>
          <v-spacer></v-spacer>
          <h1>{{title}}</h1>
        </v-toolbar>
        <v-divider></v-divider>
        <v-img :src="require(`../assets/${img}`)"></v-img>
        <h2>start</h2>
        <p>loren epsum n shiz </p>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    name: 'BlogPost',
    props: ['post'],
    data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
        main: this.post.main ? this.post.main : "",
        title: this.post.title ? this.post.title : "",
        posted: this.post.date ? this.post.date : "",
        summary: this.post.summary ? this.post.summary : "",
        img: this.post.img ? this.post.img : "",
        tags: this.post.tags ? this.post.tags : []
      }
    },
  }
</script>

<style>
  :root {
  --tag-color-one: #58c2a9;
  }
  .tag {
  font-size: 10px;
  padding: 4px 8px;
  border-radius: 20px;
  }
  
  .approved {
    background-color: var(--tag-color-one);
    color: white;
  }

  .summary{
  border-radius: 7px;
  background: #f5f5f5!important;
  box-shadow: inset 7px 7px 14px #bbbcbc, 
            inset -7px -7px 14px #ffffff!important;
}

.summary  img{
  border-radius: 7px;
  filter: drop-shadow(-7px 7px 14px #bbbcbc)!important;
}

</style>