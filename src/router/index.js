import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/HomePage'
import About from '@/pages/AboutPage'
import Work from '@/pages/WorkPage'
import Skill from '@/pages/SkillPage'
import Contact from '@/pages/ContactPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    // path: '/',
    // name: 'HelloWorld',
    // component: HelloWorld
    // },
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
      path: '/work',
      name: 'Work',
      component: Work
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
