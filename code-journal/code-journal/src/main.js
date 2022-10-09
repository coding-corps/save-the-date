import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import vuetify from "./plugins/vuetify";
Vue.config.productionTip = false;

import Particles from "vue2-particles";
Vue.use(Particles);

import VueShowdown from "vue-showdown";
import BlogShowDown from "./components/BlogShowDown.vue";
Vue.component("blog-showdown", BlogShowDown);

// the second parameter of Vue.use() is optional
Vue.use(VueShowdown, {
  // set default flavor of showdown
  flavor: "github",
  // set default options of showdown (will override the flavor options)
  options: {
    emoji: false,
  },
});

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
