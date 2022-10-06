<template>
  <v-row justify="space-around">
    <v-dialog :id="id" v-model="dialog" transition="dialog-bottom-transition" max-width="60%">
      <template v-slot:activator="{ on, attrs }">
        <!-- read more btn -->
        <v-btn color="#000000de" dark v-bind="attrs" v-on="on">
          Read More?
        </v-btn>
      </template>
<blogModal></blogModal>

      <!-- modal -->

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
    </v-dialog>
  </v-row>
</template>

<script>
  import blogModal from './blogModal.vue'

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

.summary {
  border-radius: 7px;
  background: #f5f5f5 !important;
  box-shadow: inset 7px 7px 14px #bbbcbc,
    inset -7px -7px 14px #ffffff !important;
}

.summary img {
  border-radius: 7px;
  filter: drop-shadow(-7px 7px 14px #bbbcbc) !important;
}
</style>