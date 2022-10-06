
<template>
    <v-card class="overflow-hidden">
        <v-app-bar absolute color=" darken-2" dark scroll-target="#scrolling-techniques">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-app-bar-title>{{title}}</v-app-bar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>

            <v-btn icon dark @click="dialog = false">X
            </v-btn>
        </v-app-bar>
        <v-sheet id="scrolling-techniques" class="overflow-y-auto" max-height="600">

            <v-container style="padding-top: 150px!important; height: 1000px;">
                <v-spacer></v-spacer>
                <v-img size="50%" :src="require(`../assets/${img}`)"></v-img>
                <blog-content :doc="doc"></blog-content>
            </v-container>
        </v-sheet>
    </v-card>
</template>

<script>
import BlogContent from './BlogContent.vue'
export default {
    name: "BlogContent",
    props: ['doc'],
    return {dialog: false,
            notifications: false,
            sound: true,
            widgets: false,
            doc: this.post.doc ? this.post.doc : "",
            id: this.post.id ? this.post.id : "",
            main: this.post.main ? this.post.main : "",
            title: this.post.title ? this.post.title : "",
            posted: this.post.date ? this.post.date : "",
            summary: this.post.summary ? this.post.summary : "",
            img: this.post.img ? this.post.img : "",
            tags: this.post.tags ? this.post.tags : []
        }
   };
</script>

<style>

</style>