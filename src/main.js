import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import head from './components/header/header';
import dev from './components/dev/dev';
import menu from './components/menu/menu';
import tall from './components/tall/tall';

Vue.use(VueRouter);
Vue.use(VueResource);


let app = Vue.extend(App);

let router = new VueRouter({
  linkActiveClass:'active' //改变v-link点击后默认v-link-active的类名
});

router.map({
  '/dev':{
    component:dev
  },
  '/menu':{
    component:menu
  },
  '/tall':{
    component:tall
  }
});

router.start(app,'#app');

router.go('/dev');
