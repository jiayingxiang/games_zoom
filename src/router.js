import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from './views/index.vue'
import About from './views/about.vue'
import Games from './views/games.vue'
import News from './views/news.vue'
import Contact from './views/contact.vue'
import Single from './views/single.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'indexpage',
      component: IndexPage
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/games',
      name: 'games',
      component: Games
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
    ,
    {
      path: '/single',
      name: 'single',
      component: Single
    }
  ]
})
