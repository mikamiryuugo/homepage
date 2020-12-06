import Vue from 'vue'
import Router from 'vue-router'
import smoothScroll from 'vue-smoothscroll'
import Home from '@/pages/HomePage'
import About from '@/pages/AboutPage'
import Skill from '@/pages/SkillPage'
import Contact from '@/pages/ContactPage'

Vue.use(Router)
Vue.use(smoothScroll)

export default new Router({
  // mode: 'history', //GitHubPagesで画面が出ないためコメントアウトする
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/skill',
      name: 'Skill',
      component: Skill
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
