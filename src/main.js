// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router' //vue路由
import VueResource from 'vue-resource'
//import Vuex from 'vuex'

import App from './App'
import Home from './components/Home'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import store from './store'

import 'swiper/dist/css/swiper.min.css'
import '../static/css/style.css'

Vue.use(VueRouter)
Vue.use(VueResource)
//Vue.use(Vuex)


 //定义路由
const routes = [{
  path : '/',
  component : Home
},{
  path : '/projects',
  component : Projects
},{
  path : '/contacts',
  component : Contacts
}];


const router = new VueRouter({
  routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
