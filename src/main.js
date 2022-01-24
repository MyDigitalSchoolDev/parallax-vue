import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import routes from "./routes";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);

//Les routes
const router = new VueRouter({
  mode: 'abstract',
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
